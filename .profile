brew services start postgresql@14
brew services start redis

# rbenv: put shims on PATH so ruby/bundle resolve the .ruby-version (POSIX-safe).
[ -d "$HOME/.rbenv/shims" ] && export PATH="$HOME/.rbenv/shims:$PATH"

