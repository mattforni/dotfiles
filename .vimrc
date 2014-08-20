"" ~/.vimrc: used to configure vim

"" General vim settings
" Use four spaces instead of tabs by default
set tabstop=4 shiftwidth=4 expandtab autoindent
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

"" Sets up highlighting groups
highlight whitespace ctermbg=red guibg=red
match whitespace /\s\+$/
" Automatically highlight extra whitespace
autocmd ColorScheme * highlight whitespace ctermbg=red guibg=red

"" NERDTree settings
" Automatically open NERDTree
autocmd VimEnter * NERDTree
" Move cursor the non-NERDTree pane
autocmd VimEnter * wincmd p
" Make NERDTree show hidden files
let NERDTreeShowHidden=1
" Close vim when NERDTree is the last buffer
function! s:CloseIfOnlyNerdTreeLeft()
  if exists("t:NERDTreeBufName")
    if bufwinnr(t:NERDTreeBufName) != -1
      if winnr("$") == 1
        q
      endif
    endif
  endif
endfunction
autocmd WinEnter * call s:CloseIfOnlyNerdTreeLeft()

"" File specific settings
" Use two spaces for ruby files
autocmd Filetype ruby setlocal tabstop=2 shiftwidth=2 expandtab

