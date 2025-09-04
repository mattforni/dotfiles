# Snapshot file
# Unset all aliases to avoid conflicts with functions
unalias -a 2>/dev/null || true
# Functions
docker-attach () {
	if [[ -z $1 ]]
	then
		echo "Must provide an ID of a containter to attach"
		return
	fi
	ID="$1" 
	echo "Attaching to container '$ID'"
	docker exec -it $ID /bin/bash
}
docker-kill () {
	if [[ -z $1 ]]
	then
		echo "Must provide a name of the process(es) to kill"
		return
	fi
	NAME="$1" 
	echo "Killing processes that contain '$NAME'"
	docker ps | grep $NAME | awk {'print $1'} | xargs docker kill
}
file_exists_at_url () {
	(
		if [[ -n "${1:-}" ]]
		then
			unset curl
			file_exists_at_url_command "$1" --insecure || {
				\typeset __ret=$?
				case ${__ret} in
					(60) file_exists_at_url_command "$1" || return $?
						return 0 ;;
					(*) return ${__ret} ;;
				esac
			}
		else
			rvm_warn "Warning: URL was not passed to file_exists_at_url"
			return 1
		fi
	)
}
file_exists_at_url_command () {
	__rvm_curl --silent --insecure --location --list-only --max-time ${rvm_max_time_flag:-5} --head "$@" 2>&1 | __rvm_grep -E 'HTTP/[0-9\.]+ 200' > /dev/null 2>&1 || {
		\typeset __ret=$?
		case ${__ret} in
			(28) rvm_warn "RVM was not able to check existence of remote files with timeout of ${rvm_max_time_flag:-3} seconds
you can increase the timeout by setting it in ~/.rvmrc => rvm_max_time_flag=10" ;;
		esac
		return ${__ret}
	}
}
findg () {
	local OPTIND
	BY_PATH=0 
	while getopts "p" OPTION
	do
		case "$OPTION" in
			(p) BY_PATH=1  ;;
			(?) return ;;
		esac
	done
	shift $((OPTIND-1))
	if [[ -z $1 ]]
	then
		echo "Must provide a pattern of file in which to search"
		return
	fi
	if [[ -z $2 ]]
	then
		echo "Must provide a pattern for which to grep"
		return
	fi
	FIND_BY="-name" 
	if [ $BY_PATH -eq 1 ]
	then
		FIND_BY="-path" 
	fi
	find -L . $FIND_BY "$1" | xargs grep -rn "$2"
}
gem () {
	\typeset result
	(
		\typeset rvmrc
		rvm_rvmrc_files=("/etc/rvmrc" "$HOME/.rvmrc") 
		if [[ -n "${rvm_prefix:-}" ]] && ! [[ "$HOME/.rvmrc" -ef "${rvm_prefix}/.rvmrc" ]]
		then
			rvm_rvmrc_files+=("${rvm_prefix}/.rvmrc") 
		fi
		for rvmrc in "${rvm_rvmrc_files[@]}"
		do
			[[ -s "${rvmrc}" ]] && source "${rvmrc}" || true
		done
		unset rvm_rvmrc_files
		command gem "$@"
	) || result=$? 
	hash -r
	return ${result:-0}
}
gem_install () {
	\typeset gem_name gem_version version_check
	gem_version="" 
	__rvm_parse_gems_args "$@"
	if [[ -z "${gem_version}" ]]
	then
		__rvm_db "gem_${gem_name}_version" "gem_version"
	fi
	if (( ${rvm_force_flag:-0} == 0 )) && is_gem_installed
	then
		rvm_log "gem ${gem_name} ${gem_version:-} is already installed"
		return 0
	else
		gem_install_force || return $?
	fi
	true
}
gem_install_force () {
	\typeset __available_gem
	\typeset -a install_params
	install_params=() 
	__available_gem="$( __rvm_ls -v1 "${rvm_path}/gem-cache"/${gem_name}-${version_check}.gem 2>/dev/null | tail -n 1 )" 
	if [[ -n "${__available_gem}" ]]
	then
		install_params+=(--local) 
	elif [[ -n "${gem_version}" ]]
	then
		install_params+=(-v "${gem_version}") 
	fi
	if __rvm_version_compare "$(\command \gem --version)" -ge 2.2
	then
		install_params+=(--no-document) 
	else
		install_params+=(--no-ri --no-rdoc) 
	fi
	for __gem_option in ${rvm_gem_options}
	do
		case "${__gem_option}" in
			(--no-ri|--no-rdoc|--no-document)  ;;
			(*) install_params+=("${__gem_option}")  ;;
		esac
	done
	__rvm_log_command "gem.install.${gem_name}${gem_version:+-}${gem_version:-}" "installing gem ${__available_gem:-${gem_name}} ${install_params[*]}" \command \gem install "${__available_gem:-${gem_name}}" "${install_params[@]}" || return $?
}
gem_wrappers_pristine () {
	if [ "$(printf '%s\n' "3.2.0" "$(gem -v)" | sort -V | head -n1)" == "3.2.0" ]
	then
		gem pristine gem-wrappers --only-plugins > /dev/null
	fi
}
gemset_create () {
	\typeset gem_home gemset gemsets prefix
	[[ -n "$rvm_ruby_string" ]] || __rvm_select
	if [[ $HOME == *${rvm_gemset_separator:-"@"}* ]] && [[ $rvm_ruby_gem_home == $HOME* ]]
	then
		prefix=$( echo "$rvm_ruby_gem_home" | __rvm_sed -e "s/(^${HOME//\//\\/}.*)${rvm_gemset_separator:-"@"}.*/\1/" ) 
	else
		prefix="${rvm_ruby_gem_home%%${rvm_gemset_separator:-"@"}*}" 
	fi
	for gemset in "$@"
	do
		if [[ -z "$rvm_ruby_string" || "$rvm_ruby_string" == "system" ]]
		then
			rvm_error "Can not create gemset when using system ruby.  Try 'rvm use <some ruby>' first."
			return 1
		elif [[ "$gemset" == *"${rvm_gemset_separator:-"@"}"* ]]
		then
			rvm_error "Can not create gemset '$gemset', it contains a \"${rvm_gemset_separator:-"@"}\"."
			return 2
		elif [[ "$gemset" == *"${rvm_gemset_separator:-"@"}" ]]
		then
			rvm_error "Can not create gemset '$gemset', Missing name. "
			return 3
		fi
		gem_home="${prefix}${gemset:+${rvm_gemset_separator:-"@"}}${gemset}" 
		__rvm_remove_broken_symlinks "$gem_home"
		[[ -d "$gem_home/bin" ]] || mkdir -p "$gem_home/bin"
		if [[ ! -d "$gem_home/bin" ]]
		then
			rvm_error "Can not create gemset '$gemset', permissions problem? "
			return 4
		fi
		: rvm_gems_cache_path:${rvm_gems_cache_path:=${rvm_gems_path:-"$rvm_path/gems"}/cache}
		if __rvm_using_gemset_globalcache
		then
			if [[ -d "$gem_home/cache" && ! -L "$gem_home/cache" ]]
			then
				\command \mv -n "$gem_home/cache"/*.gem "$rvm_gems_cache_path/" 2> /dev/null
			fi
			__rvm_rm_rf "$gem_home/cache"
			ln -fs "$rvm_gems_cache_path" "$gem_home/cache"
		else
			__rvm_remove_broken_symlinks "$gem_home/cache"
			mkdir -p "$gem_home/cache"
		fi
		rvm_log "$rvm_ruby_string - #gemset created $gem_home"
		if (( ${rvm_skip_gemsets_flag:-0} == 0 ))
		then
			__rvm_with "${rvm_ruby_string}${gemset:+@}${gemset}" gemset_initial ${gemset:-default}
		fi
	done
	if (( ${rvm_skip_gemsets_flag:-0} != 0 ))
	then
		rvm_log "Skipped importing default gemsets"
	fi
}
gemset_import () {
	\typeset __prefix rvm_file_name
	unset -f gem
	__rvm_select
	__prefix="$1" 
	if [[ -n "${2:-}" ]]
	then
		rvm_file_name="${2%.gems*}.gems" 
	else
		\typeset -a gem_file_names
		gem_file_names=("${rvm_gemset_name}.gems" "default.gems" "system.gems" ".gems") 
		__rvm_find_first_file rvm_file_name "${gem_file_names[@]}" || {
			rvm_error "No *.gems file found."
			return 1
		}
	fi
	[[ -d "$rvm_ruby_gem_home/specifications/" ]] || mkdir -p "$rvm_ruby_gem_home/specifications/"
	[[ -d "$rvm_gems_cache_path" ]] || mkdir -p "$rvm_gems_cache_path"
	\typeset -a lines
	lines=() 
	if [[ -s "$rvm_file_name" ]]
	then
		__rvm_read_lines lines "${rvm_file_name}"
		__rvm_lines_without_comments
	fi
	rvm_debug "lines from ${rvm_file_name}: ${lines[*]}"
	if [[ -n "${3:-}" ]]
	then
		__rvm_lines_without_gems
		__rvm_lines_with_gems "${3}"
		rvm_debug "recalculated lines($3): ${lines[*]}"
	fi
	if (( ${#lines[@]} ))
	then
		__rvm_log_command "gemsets.import${3:+.}${3:-}" "${__prefix} $rvm_file_name" gemset_import_list "${lines[@]}"
	else
		rvm_log "${__prefix}file $rvm_file_name evaluated to empty gem list"
	fi
}
gemset_import_list () {
	case "${rvm_ruby_string}" in
		(*jruby*) \command \gem install "$@" ;;
		(*) \typeset line
			for line
			do
				gem_install $line || rvm_error "there was an error installing gem $line"
			done ;;
	esac
}
gemset_initial () {
	\typeset gemsets gemset _iterator paths _jruby_opts
	_jruby_opts=$JRUBY_OPTS 
	export JRUBY_OPTS="${JRUBY_OPTS} --dev" 
	true ${rvm_gemsets_path:="$rvm_path/gemsets"}
	[[ -d "$rvm_gems_path/${rvm_ruby_string}/cache" ]] || mkdir -p "$rvm_gems_path/${rvm_ruby_string}/cache" 2> /dev/null
	__rvm_ensure_has_environment_files
	paths=($( __rvm_ruby_string_paths_under "$rvm_gemsets_path" | sort -r )) 
	for _iterator in "${paths[@]}"
	do
		if [[ -f "${_iterator}/$1.gems" ]]
		then
			gemset_import "$rvm_ruby_string - #importing gemset" "${_iterator}/$1.gems" "$1"
			break
		else
			rvm_debug "$rvm_ruby_string - #gemset definition does not exist ${_iterator}/$1.gems"
		fi
	done
	__rvm_log_command "gemset.wrappers.$1" "$rvm_ruby_string - #generating ${1} wrappers" run_gem_wrappers regenerate 2> /dev/null || true
	export JRUBY_OPTS=${_jruby_opts} 
}
gemset_pristine () {
	if (
			unset -f gem
			builtin command -v gem > /dev/null
		)
	then
		\typeset _gem _version _platforms
		\typeset -a _failed _pristine_command
		_failed=() 
		_pristine_command=(\command \gem pristine) 
		if __rvm_version_compare "$(\command \gem --version)" -ge 2.2.0
		then
			_pristine_command+=(--extensions) 
		fi
		rvm_log "Restoring gems to pristine condition..."
		while read _gem _version _platforms
		do
			printf "%b" "${_gem}-${_version} "
			"${_pristine_command[@]}" "${_gem}" --version "${_version}" > /dev/null || _failed+=("${_gem} --version ${_version}") 
		done <<< "$(
      GEM_PATH="$GEM_HOME" __rvm_list_gems \
        "${pristine_gems_filter:-"! gem.executables.empty? || ! gem.extensions.empty?"}"
    )"
		if (( ${#_failed[@]} > 0 ))
		then
			rvm_error "\n'${_pristine_command[*]} ${_failed[*]}' failed, you need to fix these gems manually."
			return 1
		else
			rvm_log "\nfinished."
		fi
	else
		rvm_error "'gem' command not found in PATH."
		return 1
	fi
}
gemset_reset_env () {
	(
		export rvm_internal_use_flag=1 
		export rvm_use_flag=0 
		__rvm_use "${1:-}"
		__rvm_ensure_has_environment_files && run_gem_wrappers regenerate || return $?
	)
}
grn () {
	if [[ -z $1 ]]
	then
		echo "Must provide a pattern to find"
		return
	fi
	grep -rn "$1" .
}
ignore () {
	if [[ -z $1 ]]
	then
		echo "Must provide a pattern to ignore"
		return
	fi
	echo "$1" >> .gitignore
}
is_a_function () {
	\typeset -f $1 > /dev/null 2>&1 || return $?
}
is_gem_installed () {
	\typeset gem_spec
	gem_spec="gem '$gem_name'" 
	if [[ -n "${gem_version}" ]]
	then
		gem_spec+=", '$gem_version'" 
		version_check="${gem_version#*=}" 
	else
		version_check="*([[:digit:]\.])" 
	fi
	__rvm_ls -ld "${rvm_ruby_gem_home:-$GEM_HOME}/gems"/${gem_name}-${version_check} > /dev/null 2>&1 || "${rvm_ruby_binary}" -rrubygems -e "$gem_spec" 2> /dev/null || return $?
}
is_parent_of () {
	\typeset name pid ppid pname
	name=$1 
	pid=$2 
	while [[ -n "$pid" && "$pid" != "0" ]]
	do
		case "`uname`" in
			(SunOS) read ppid pname <<< "$(\command \ps -p $pid -o ppid= -o comm=)" ;;
			(*) read ppid pname <<< "$(\command \ps -p $pid -o ppid= -o ucomm=)" ;;
		esac
		if [[ -n "$ppid" && -n "$pname" ]]
		then
			if [[ "$pname" == "$name" ]]
			then
				echo $pid
				return 0
			else
				pid=$ppid 
			fi
		else
			break
		fi
	done
	return 1
}
known-hosts () {
	KNOWN_HOSTS=~/.ssh/known_hosts 
	if [ "$1" == "add" ]
	then
		if [[ -z $2 ]]
		then
			echo "Must provide a host or IP to add"
			return
		fi
		KEY=`ssh-keyscan -t rsa -H $2` 
		if [[ -z $KEY ]]
		then
			echo "'$2' is not a valid host or is unreachable"
			return
		fi
		FOUND=`ssh-keygen -H -F $2` 
		if [[ ! -z $FOUND ]]
		then
			echo "There is already an entry for '$2' in $KNOWN_HOSTS"
			return
		fi
		echo $KEY >> $KNOWN_HOSTS
		echo "Added an entry for '$2' in $KNOWN_HOSTS"
	elif [ "$1" == "find" ]
	then
		if [[ -z $2 ]]
		then
			echo "Must provide a host or IP to find"
			return
		fi
		FOUND=`ssh-keygen -H -F $2` 
		if [[ -z $FOUND ]]
		then
			echo "An entry for '$2' was not found in $KNOWN_HOSTS"
		else
			echo -e $FOUND
		fi
	elif [ "$1" == "remove" ]
	then
		if [[ -z $2 ]]
		then
			echo "Must provide a host or IP to remove"
			return
		fi
		FOUND=`ssh-keygen -H -F $2` 
		if [[ -z $FOUND ]]
		then
			echo "An entry for '$2' was not found in $KNOWN_HOSTS"
			return
		fi
		ssh-keygen -R $2
		echo "Removed '$2' from $KNOWN_HOSTS"
	elif [ "$1" == "show" ]
	then
		less $KNOWN_HOSTS
	else
		if [[ -z $1 ]]
		then
			echo "Must provide an action. Try 'add', 'find' or 'show'"
			return
		fi
		echo "'$1' is not a valid action. Try 'add', 'find' or 'show'"
		return
	fi
}
load_rvm_scripts () {
	\typeset -a scripts
	scripts=(selector logging support utility init cleanup env rvmrc install environment gemset checksum list) 
	source "${rvm_scripts_path}/initialize"
	for entry in ${scripts[@]}
	do
		[[ " ${rvm_base_except:-} " == *" $entry "* ]] || source "${rvm_scripts_path}/functions/$entry" || return $?
	done
	unset rvm_base_except
}
log () {
	local OPTIND
	PRINT=0 
	while getopts "p" OPTION
	do
		case "$OPTION" in
			(p) PRINT=1  ;;
			(?) return ;;
		esac
	done
	shift $((OPTIND-1))
	if [[ -z $1 ]]
	then
		echo "Must provide an executable to run"
		return
	fi
	SCRIPT_PATH=$(readlink -f $1) 
	if [[ -z $SCRIPT_PATH || ! -e $SCRIPT_PATH || ! -x $SCRIPT_PATH ]]
	then
		echo "Must provide a valid executable"
	else
		LOG_FILE="$(basename ${SCRIPT_PATH%.*}).log.$(date +%Y%m%dT%H%M%S)" 
		PRINT_STR=$([ "$PRINT" == 1 ] && echo "| tee" || echo ">") 
		eval "$SCRIPT_PATH 2>&1 $PRINT_STR $LOG_FILE"
		echo "'$SCRIPT_PATH' output logged to '$LOG_FILE'"
	fi
}
numf () {
	local OPTIND
	ALL=0 
	while getopts "a" OPTION
	do
		case $OPTION in
			(a) ALL=1  ;;
			(?) return ;;
		esac
	done
	shift $((OPTIND-1))
	LS_ARGS="." 
	SUBTRACT=0 
	if [[ ! -z $1 ]]
	then
		DIR_PATH=$(readlink -f $1) 
		if [[ ! -d $DIR_PATH ]]
		then
			echo "'$DIR_PATH' is not a valid directory."
			return
		fi
		LS_ARGS=$DIR_PATH 
	fi
	if [ $ALL -eq 1 ]
	then
		LS_ARGS="-a $LS_ARGS" 
		SUBTRACT=2 
	fi
	NUM_FILES=`ls $LS_ARGS | wc -l` 
	echo "Found $(($NUM_FILES - $SUBTRACT)) file(s)"
}
psag () {
	local OPTIND
	KILL=0 
	while getopts "k" OPTION
	do
		case "$OPTION" in
			(k) KILL=1  ;;
			(?) return ;;
		esac
	done
	shift $((OPTIND-1))
	if [[ -z $1 ]]
	then
		echo "Must provide something to grep for"
		return
	fi
	QUERY=$1 
	CMD="ps aux | grep -v grep | grep '$QUERY'" 
	if [ $KILL -eq 1 ]
	then
		CMD="$CMD | awk {'print \$2'} | sudo xargs kill -9" 
	fi
	eval "$CMD"
}
rubygems_detect_ruby_lib_gem_path () {
	\typeset ruby_path
	ruby_path="$( __rvm_which "${1:-ruby}" )"  || {
		rvm_error "Missing 'ruby' in 'rubygems_detect_ruby_lib_gem_path'."
		return 1
	}
	ruby_lib_gem_path="$(
    unset GEM_HOME GEM_PATH
    "$ruby_path" -rrubygems -e 'puts Gem.default_dir' 2>/dev/null
  )"  || ruby_lib_gem_path="" 
	[[ -n "$ruby_lib_gem_path" ]] || rubygems_detect_ruby_lib_gem_path_fallback || return $?
}
rubygems_detect_ruby_lib_gem_path_fallback () {
	rubygems_detect_ruby_lib_gem_path_from "rubylib" || rubygems_detect_ruby_lib_gem_path_from "lib" || return $?
	ruby_lib_gem_path+="/gems" 
	\typeset ruby_version
	ruby_version="$( __rvm_ruby_config_get ruby_version "$ruby_path")"  || ruby_version="" 
	if [[ -n "${ruby_version:-}" && -d "${ruby_lib_gem_path}/${ruby_version:-}" ]]
	then
		ruby_lib_gem_path+="$ruby_version" 
	elif [[ -d "${ruby_lib_gem_path}/shared" ]]
	then
		ruby_lib_gem_path+="shared" 
	else
		return 3
	fi
}
rubygems_detect_ruby_lib_gem_path_from () {
	ruby_lib_gem_path="$( __rvm_ruby_config_get ${1}prefix "$ruby_path" )"  || ruby_lib_gem_path="" 
	[[ -z "${ruby_lib_gem_path:-}" ]] || {
		ruby_lib_gem_path="$( __rvm_ruby_config_get ${1}dir  "$ruby_path" )"  || ruby_lib_gem_path="" 
		ruby_lib_gem_path="${ruby_lib_gem_path%/*}" 
	}
	[[ -n "${ruby_lib_gem_path:-}" ]] || return 1
	[[ -d "${ruby_lib_gem_path}/gems" ]] || return 2
}
run_gem_wrappers () {
	gem_install gem-wrappers > /dev/null && gem_wrappers_pristine && gem wrappers "$@" || return $?
}
rvm () {
	\typeset result current_result
	rvm_ruby_args=() 
	__rvm_teardown_if_broken
	__rvm_cli_posix_check || return $?
	__rvm_cli_load_rvmrc || return $?
	__rvm_cli_version_check "$@" || return $?
	__rvm_initialize
	__rvm_path_match_gem_home_check
	__rvm_setup
	__rvm_cli_autoupdate "$@" || return $?
	next_token="$1" 
	(( $# == 0 )) || shift
	__rvm_parse_args "$@"
	result=$? 
	: rvm_ruby_args:${#rvm_ruby_args[@]}:${rvm_ruby_args[*]}:
	(( ${rvm_trace_flag:-0} == 0 )) || set -o xtrace
	(( result )) || case "${rvm_action:=help}" in
		(use) if rvm_is_a_shell_function
			then
				__rvm_use && __rvm_use_ruby_warnings
			fi ;;
		(switch) if rvm_is_a_shell_function
			then
				__rvm_switch "${rvm_ruby_args[@]}"
			fi ;;
		(inspect | strings | version | remote_version) __rvm_${rvm_action} ;;
		(ls | list) "$rvm_scripts_path/list" "${rvm_ruby_args[@]}" ;;
		(debug) rvm_is_not_a_shell_function="${rvm_is_not_a_shell_function}" "$rvm_scripts_path/info" '' debug ;;
		(info) rvm_is_not_a_shell_function="${rvm_is_not_a_shell_function}" "$rvm_scripts_path/${rvm_action}" "${rvm_ruby_args[@]}" ;;
		(reset) source "$rvm_scripts_path/functions/${rvm_action}"
			__rvm_${rvm_action} ;;
		(update) printf "%b" "ERROR: rvm update has been removed. Try 'rvm get head' or see the 'rvm get' and rvm 'rubygems' CLI API instead\n" ;;
		(implode | seppuku) source "$rvm_scripts_path/functions/implode"
			__rvm_implode ;;
		(get) next_token="${1:-}" 
			(( $# == 0 )) || shift
			[[ "$next_token" == "${rvm_action}" ]] && shift
			__rvm_cli_rvm_get "${rvm_ruby_args[@]}" ;;
		(current) __rvm_env_string ;;
		(help | rtfm | env | list | monitor | notes | pkg | requirements) next_token="${1:-}" 
			(( $# == 0 )) || shift
			if (( $# )) && [[ "$next_token" == "${rvm_action}" ]]
			then
				shift
			fi
			"$rvm_scripts_path/${rvm_action}" "${rvm_ruby_args[@]}" ;;
		(cleanup | tools | snapshot | disk-usage | repair | alias | docs | rubygems | migrate | cron | group | wrapper) "$rvm_scripts_path/${rvm_action}" "${rvm_ruby_args[@]}" ;;
		(upgrade) __rvm_fix_selected_ruby __rvm_run_wrapper "$rvm_action" "$rvm_action" "${rvm_ruby_args[@]}" ;;
		(autolibs | osx-ssl-certs | fix-permissions) __rvm_run_wrapper "$rvm_action" "$rvm_action" "${rvm_ruby_args[@]}" ;;
		(do) old_rvm_ruby_string=${rvm_ruby_string:-} 
			unset rvm_ruby_string
			export rvm_ruby_strings rvm_in_flag
			result=0 
			if rvm_is_a_shell_function no_warning
			then
				"$rvm_scripts_path/set" "$rvm_action" "${rvm_ruby_args[@]}" || result=$? 
			else
				exec "$rvm_scripts_path/set" "$rvm_action" "${rvm_ruby_args[@]}" || result=$? 
			fi
			[[ -n "$old_rvm_ruby_string" ]] && rvm_ruby_string=$old_rvm_ruby_string 
			unset old_rvm_ruby_string ;;
		(rvmrc) __rvm_rvmrc_tools "${rvm_ruby_args[@]}" ;;
		(config-get) \typeset __ruby __var
			__ruby=$( __rvm_which ruby ) 
			for __var in "${rvm_ruby_args[@]}"
			do
				__rvm_ruby_config_get "${__var}" "${__ruby}"
			done ;;
		(gemset_use) if rvm_is_a_shell_function
			then
				__rvm_gemset_use
			fi ;;
		(gemset) export rvm_ruby_strings
			"$rvm_scripts_path/gemsets" "${rvm_ruby_args[@]}"
			result=$? 
			rvm_ruby_strings="" 
			if rvm_is_a_shell_function no_warning
			then
				if [[ ${rvm_delete_flag:-0} -eq 1 ]]
				then
					if [[ "${GEM_HOME:-""}" == "${GEM_HOME%%${rvm_gemset_separator:-@}*}${rvm_gemset_separator:-@}${rvm_gemset_name}" ]]
					then
						rvm_delete_flag=0 
						__rvm_use "@default"
					fi
					unset gem_prefix
				elif [[ "${rvm_ruby_args[*]}" == rename* ]] || [[ "${rvm_ruby_args[*]}" == move* ]]
				then
					\typeset _command _from _to
					read _command _from _to <<< "${rvm_ruby_args[*]}"
					if [[ "${GEM_HOME:-""}" == "${GEM_HOME%%${rvm_gemset_separator:-@}*}${rvm_gemset_separator:-@}${_from}" ]]
					then
						__rvm_use "@${_to}"
					fi
				fi
			fi ;;
		(reload) rvm_reload_flag=1  ;;
		(tests | specs) rvm_action="rake" 
			__rvm_do ;;
		(delete | remove) export rvm_path
			if [[ -n "${rvm_ruby_strings}" ]]
			then
				__rvm_run_wrapper manage "$rvm_action" "${rvm_ruby_strings//*-- }"
			else
				__rvm_run_wrapper manage "$rvm_action"
			fi
			__rvm_use default ;;
		(fetch | uninstall | reinstall) export rvm_path
			if [[ -n "${rvm_ruby_strings}" ]]
			then
				__rvm_run_wrapper manage "$rvm_action" "${rvm_ruby_strings//*-- }"
			else
				__rvm_run_wrapper manage "$rvm_action"
			fi ;;
		(try_install | install) export rvm_path
			__rvm_cli_install_ruby "${rvm_ruby_strings}" ;;
		(automount) if [[ -n "$rvm_ruby_string" ]]
			then
				rvm_ruby_args=("$rvm_ruby_string" "${rvm_ruby_args[@]}") 
			fi
			"${rvm_scripts_path}/mount" "$rvm_action" "${rvm_ruby_args[@]}" ;;
		(mount | prepare) if [[ -n "$rvm_ruby_string" ]]
			then
				rvm_ruby_args=("$rvm_ruby_string" "${rvm_ruby_args[@]}") 
			fi
			"${rvm_scripts_path}/$rvm_action" "$rvm_action" "${rvm_ruby_args[@]}" ;;
		(export) __rvm_export "$rvm_export_args" ;;
		(unexport) __rvm_unset_exports ;;
		(error) false ;;
		(which) __rvm_which "${rvm_ruby_args[@]}" ;;
		(*) rvm_error "unknown action '$rvm_action'"
			false ;;
	esac
	current_result=$? 
	(( result )) || result=${current_result} 
	(( result )) || case "$rvm_action" in
		(reinstall | try_install | install) if [[ -n "${rvm_ruby_string}" ]]
				rvm_is_a_shell_function no_warning
			then
				if [[ -e "${rvm_environments_path}/default" ]]
				then
					rvm_verbose_flag=0 __rvm_use
				else
					rvm_verbose_flag=0 rvm_default_flag=1 __rvm_use
				fi
			fi ;;
	esac
	current_result=$? 
	(( result )) || result=${current_result} 
	\typeset __local_rvm_trace_flag
	__local_rvm_trace_flag=${rvm_trace_flag:-0} 
	__rvm_cli_autoreload
	if (( __local_rvm_trace_flag > 0 ))
	then
		set +o verbose
		set +o xtrace
		[[ -n "${ZSH_VERSION:-""}" ]] || set +o errtrace
	fi
	return ${result:-0}
}
rvm_debug () {
	(( ${rvm_debug_flag:-0} )) || return 0
	if rvm_pretty_print stderr
	then
		__rvm_replace_colors "<debug>$*</debug>\n" >&6
	else
		printf "%b" "$*\n" >&6
	fi
}
rvm_debug_stream () {
	if (( ${rvm_debug_flag:-0} == 0 && ${rvm_trace_flag:-0} == 0 ))
	then
		cat - > /dev/null
	elif rvm_pretty_print stdout
	then
		\command \cat - | __rvm_awk '{print "'"${rvm_debug_clr:-}"'"$0"'"${rvm_reset_clr:-}"'"}' >&6
	else
		\command \cat - >&6
	fi
}
rvm_error () {
	if rvm_pretty_print stderr
	then
		__rvm_replace_colors "<error>$*</error>\n" >&6
	else
		printf "%b" "$*\n" >&6
	fi
}
rvm_error_help () {
	rvm_error "$1"
	shift
	rvm_help "$@"
}
rvm_fail () {
	rvm_error "$1"
	exit "${2:-1}"
}
rvm_help () {
	"${rvm_scripts_path}/help" "$@"
}
rvm_install_gpg_setup () {
	{
		rvm_gpg_command="$( \which gpg2 2>/dev/null )"  && [[ ${rvm_gpg_command} != "/cygdrive/"* ]]
	} || {
		rvm_gpg_command="$( \which gpg 2>/dev/null )"  && [[ ${rvm_gpg_command} != "/cygdrive/"* ]]
	} || rvm_gpg_command="" 
	rvm_debug "Detected GPG program: '$rvm_gpg_command'"
	[[ -n "$rvm_gpg_command" ]] || return $?
}
rvm_is_a_shell_function () {
	\typeset _message
	if (( ${rvm_is_not_a_shell_function:-0} )) && [[ "${1:-}" != "no_warning" ]]
	then
		if rvm_pretty_print stderr
		then
			rvm_log ""
		fi
		if rvm_pretty_print stderr
		then
			rvm_error "${rvm_notify_clr:-}RVM is not a function, selecting rubies with '${rvm_error_clr:-}rvm use ...${rvm_notify_clr:-}' will not work."
		else
			rvm_error "RVM is not a function, selecting rubies with 'rvm use ...' will not work."
		fi
		if [[ -n "${SUDO_USER:-}" ]]
		then
			rvm_warn '
Please avoid using "sudo" in front of "rvm".
RVM knows when to use "sudo" and will use it only when it is necessary.
'
		else
			rvm_warn '
You need to change your terminal emulator preferences to allow login shell.
Sometimes it is required to use `/bin/bash --login` as the command.
Please visit https://rvm.io/integration/gnome-terminal/ for an example.
'
		fi
	fi
	return ${rvm_is_not_a_shell_function:-0}
}
rvm_log () {
	[[ ${rvm_quiet_flag} == 1 ]] && return
	printf "%b" "$*\n"
}
rvm_notify () {
	if rvm_pretty_print stdout
	then
		__rvm_replace_colors "<notify>$*</notify>\n"
	else
		printf "%b" "$*\n"
	fi
}
rvm_out () {
	printf "$*\n"
}
rvm_pretty_print () {
	case "${rvm_pretty_print_flag:=auto}" in
		(0|no) return 1 ;;
		(1|auto) case "${TERM:-dumb}" in
				(dumb|unknown) return 1 ;;
			esac
			case "$1" in
				(stdout) [[ -t 1 ]] || return 1 ;;
				(stderr) [[ -t 2 ]] || return 1 ;;
				([0-9]) [[ -t $1 ]] || return 1 ;;
				(any) [[ -t 1 || -t 2 ]] || return 1 ;;
				(*) [[ -t 1 && -t 2 ]] || return 1 ;;
			esac
			return 0 ;;
		(2|force) return 0 ;;
	esac
}
rvm_printf_to_stderr () {
	printf "$@" >&6
}
rvm_verbose_log () {
	if (( ${rvm_verbose_flag:=0} == 1 ))
	then
		rvm_log "$@"
	fi
}
rvm_warn () {
	if rvm_pretty_print stderr
	then
		__rvm_replace_colors "<warn>$*</warn>\n" >&6
	else
		printf "%b" "$*\n" >&6
	fi
}
u () {
	N=1 
	if [[ ! -z $1 ]]
	then
		if [[ $1 =~ ^[0-9]+$ ]]
		then
			N=$1 
		else
			echo "u only takes numbers as arguments"
			return
		fi
	fi
	while [ $(( N -= 1 )) -ge 0 ]
	do
		cd ..
	done
}
verify_package_pgp () {
	if "${rvm_gpg_command}" --verify "$2" "$1"
	then
		rvm_notify "GPG verified '$1'"
	else
		\typeset _return=$?
		rvm_error "GPG signature verification failed for '$1' - '$3'! Try to install GPG v2 and then fetch the public key:

    ${SUDO_USER:+sudo }${rvm_gpg_command##*/} --keyserver hkp://keyserver.ubuntu.com --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3 7D2BAF1CF37B13E2069D6956105BD0E739499BDB

or if it fails:

    command curl -sSL https://rvm.io/mpapis.asc | ${SUDO_USER:+sudo }${rvm_gpg_command##*/} --import -
    command curl -sSL https://rvm.io/pkuczynski.asc | ${SUDO_USER:+sudo }${rvm_gpg_command##*/} --import -

In case of further problems with validation please refer to https://rvm.io/rvm/security
"
		return ${_return}
	fi
}
# Shell Options
setopt extendedglob
setopt extendedhistory
setopt nohashdirs
setopt histexpiredupsfirst
setopt histfindnodups
setopt histignorealldups
setopt histignoredups
setopt histignorespace
setopt histreduceblanks
setopt histsavenodups
setopt histverify
setopt incappendhistory
setopt kshglob
setopt login
setopt sharehistory
# Aliases
alias -- bell='echo -ne '\''\007'\'
alias -- cb='cargo build'
alias -- cr='cargo run'
alias -- ct='cargo test -- --nocapture'
alias -- docker-clean='docker rm $(docker ps -a -q -f status=exited)'
alias -- docker-clean-all='docker-stop; docker-clean; docker-clean-images'
alias -- docker-clean-images='docker rmi $(docker images -a -q)'
alias -- docker-stop='docker stop $(docker ps -a -q)'
alias -- ed-aliases='vim ~/.aliases'
alias -- ed-functions='vim ~/.functions'
alias -- ed-vsc-settings='vim ~/.vscode/settings.json'
alias -- ed-zsh='vim ~/.zshrc'
alias -- la='ls -a'
alias -- ll='ls -l'
alias -- lla='ls -la'
alias -- rc='type rails >/dev/null 2>&1 && LLM_ENABLED=false rails console'
alias -- rest-now='sudo shutdown -r now'
alias -- rf='type foreman >/dev/null 2>&1 && bundle exec foreman start'
alias -- rk='bundle exec sidekiq -c 2'
alias -- rs='type rails >/dev/null 2>&1 && LLM_ENABLED=false rails server'
alias -- run-help=man
alias -- rvm-restart='rvm_reload_flag=1 source '\''/Users/forni/.rvm/scripts/rvm'\'
alias -- scr='screen -S'
alias -- sendit='cp -R ~/.aliases   ~/.bashrc   ~/.bash_profile   ~/.functions   ~/.gitconfig   ~/.profile   ~/.screenrc   ~/.vim   ~/.vimrc   ~/.vscode   ~/.zsh   ~/.zshrc   ~/bin   ~/install.sh   ~/Development/dotfiles'
alias -- skill='screen -ls | grep Detached | cut -d. -f1 | awk '\''{print }'\'' | xargs kill'
alias -- sls='screen -ls'
alias -- sra='screen -d -RR'
alias -- src-zsh='source ~/.zshrc'
alias -- sw='screen -wipe'
alias -- todo='grep -Irn --exclude="*\.git*" "TODO" .'
alias -- upgrade='sudo apt-get update && sudo apt-get upgrade -y && sudo apt-get autoremove'
alias -- which-command=whence
# Check for rg availability
if ! command -v rg >/dev/null 2>&1; then
  alias rg='/opt/homebrew/lib/node_modules/\@anthropic-ai/claude-code/vendor/ripgrep/arm64-darwin/rg'
fi
export PATH=/Users/forni/.rvm/gems/ruby-3.3.3/bin\:/Users/forni/.rvm/gems/ruby-3.3.3\@global/bin\:/Users/forni/.rvm/rubies/ruby-3.3.3/bin\:/opt/homebrew/bin\:/opt/homebrew/sbin\:/usr/local/bin\:/System/Cryptexes/App/usr/bin\:/usr/bin\:/bin\:/usr/sbin\:/sbin\:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/local/bin\:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/bin\:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/appleinternal/bin\:/usr/local/go/bin\:/Users/forni/.rvm/gems/ruby-3.3.3/bin\:/Users/forni/.rvm/gems/ruby-3.3.3\@global/bin\:/Users/forni/.rvm/rubies/ruby-3.3.3/bin\:/Users/forni/bin\:/Users/forni/.rvm/bin
