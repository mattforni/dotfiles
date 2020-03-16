"" Sets up VIM
colorscheme darkblue
set background=dark
set backspace=2
" Use two spaces instead of tabs by default
set tabstop=2 shiftwidth=2 expandtab autoindent
" Better command-line completion
set wildmenu
" Show partial commands in the last line of the screen
set showcmd
" Highlight during searches
set hlsearch
" Show cursor position at bottom of page
set ruler
" Set confirmation prompt if buffers are unsaved
set confirm
" Use visual bell instead of beeping
set visualbell
" Set the command window height
set cmdheight=2
" Display line numbers
set number
" Set highlighting on search
set hlsearch

"" Sets up netrw
let g:netrw_banner = 0
let g:netrw_liststyle = 3
let g:netrw_browse_split = 2
let g:netrw_altv = 1
let g:netrw_winsize = 20

augroup setup_netrw
  autocmd!
  autocmd VimEnter * :Vexplore
  autocmd filetype netrw call NetrwMapping()
augroup END

function! NetrwMapping()
  noremap <buffer> o <CR>
endfunction

"" Sets up highlighting groups
highlight whitespace ctermbg=red guibg=red
match whitespace /\s\+$/
" Automatically highlight extra whitespace
autocmd ColorScheme * highlight whitespace ctermbg=red guibg=red

