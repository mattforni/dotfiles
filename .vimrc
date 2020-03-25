"" General
filetype indent on  " Loads filetype-specific indent files
set cmdheight=2     " Height of the command menu
set confirm         " Show confirmation prompt for unsaved buffers
set cursorline      " Highlight the current line
set number          " Show line numbers
set showcmd         " Show command menu at bottom
set showmatch       " Highlight matching [{()}]
set wildmenu        " Display autocomplete for command menu

"" Colors
syntax enable       " Enable syntax highlighting
" Highlight trailing whitespace
highlight whitespace ctermbg=red guibg=red
match whitespace /\s\+$/
autocmd colorscheme * highlight whitespace ctermbg=red guibg=red

"" Searching
set incsearch       " Search as characters are entered
set hlsearch        " Highlight matches

"" Spaces & Tabs
set tabstop=2       " Number of visual spaces per <TAB>
set softtabstop=2   " Number of spaces in <TAB> when editing
set expandtab       " Use spaces for <TAB>

"" NERDTree
autocmd vimenter * NERDTree " Start NERDTree on load
autocmd vimenter * wincmd p " Select the previous buffer
let g:NERDTreeWinSize=20    " Sets width of NERDTree
" Close NERDTree if only buffer
autocmd bufenter * if (winnr("$") == 1 && exists("b:NERDTree") && b:NERDTree.isTabTree()) | q | endif

