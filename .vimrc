colorscheme darkblue
set background=dark
set backspace=2

"" Set up pathogen
execute pathogen#infect()
call pathogen#helptags()
syntax on
filetype plugin indent on

"" General vim settings
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

"" Set up rust source
let g:ycm_rust_src_path="/home//Developer/rust-master/src/"

"" Sets up highlighting groups
highlight whitespace ctermbg=red guibg=red
match whitespace /\s\+$/
" Automatically highlight extra whitespace
autocmd ColorScheme * highlight whitespace ctermbg=red guibg=red

"" Set up NERDTree
" Automatically open NERDTree
autocmd VimEnter * NERDTree
" Move cursor the non-NERDTree pane
autocmd VimEnter * wincmd p
" Make NERDTree show hidden files
let NERDTreeShowHidden=1
" Filter out *.swp files
let NERDTreeIgnore = ['\.swp$']
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

