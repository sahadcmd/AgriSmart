let SessionLoad = 1
let s:so_save = &g:so | let s:siso_save = &g:siso | setg so=0 siso=0 | setl so=-1 siso=-1
let v:this_session=expand("<sfile>:p")
silent only
silent tabonly
cd ~/program/react/elements/akhil/src
if expand('%') == '' && !&modified && line('$') <= 1 && getline(1) == ''
  let s:wipebuf = bufnr('%')
endif
let s:shortmess_save = &shortmess
set shortmess=aoO
badd +64 api/api.ts
badd +9 pages/Home.tsx
badd +24 App.tsx
badd +2 eth.ts
badd +17 pages/Login.tsx
badd +20 pages/CreateItem.tsx
badd +24 pages/FarmerLogin.tsx
badd +73 pages/CustomerRegister.tsx
badd +23 pages/CustomerLogin.tsx
badd +87 pages/FarmerRegister.tsx
badd +13 pages/FarmerDashboard.tsx
badd +35 components/FarmerSidebar.tsx
badd +78 components/FarmerDashIndicator.tsx
badd +21 pages/FarmerDashboard2.tsx
badd +68 components/FarmerCreate.tsx
badd +217 index.css
badd +31 pages/FarmerDashboard3.tsx
badd +43 components/FarmerAvailableProducts.tsx
badd +107 pages/CustomerDashboard.tsx
badd +3 components/CustomerSidebar.tsx
badd +31 components/CustomerSearch.tsx
badd +32 store.ts
badd +3 components/hooks/useTimer.ts
badd +50 pages/SearchResults.tsx
badd +63 pages/Cart.tsx
badd +1 types.ts
badd +4 utility.ts
badd +45 components/EmptySidebar.tsx
badd +26 components/FarmerComponent.tsx
badd +6 pages/EmailVerified.tsx
argglobal
%argdel
edit pages/Cart.tsx
argglobal
balt components/FarmerCreate.tsx
let s:l = 63 - ((31 * winheight(0) + 22) / 45)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 63
normal! 037|
tabnext 1
if exists('s:wipebuf') && len(win_findbuf(s:wipebuf)) == 0 && getbufvar(s:wipebuf, '&buftype') isnot# 'terminal'
  silent exe 'bwipe ' . s:wipebuf
endif
unlet! s:wipebuf
set winheight=1 winwidth=20
let &shortmess = s:shortmess_save
let s:sx = expand("<sfile>:p:r")."x.vim"
if filereadable(s:sx)
  exe "source " . fnameescape(s:sx)
endif
let &g:so = s:so_save | let &g:siso = s:siso_save
set hlsearch
doautoall SessionLoadPost
unlet SessionLoad
" vim: set ft=vim :
