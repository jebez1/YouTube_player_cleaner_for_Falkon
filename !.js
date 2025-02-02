// ==UserScript==
// @include https://www.youtube.com/watch?v=*
// ==/UserScript==
document.getElementsByClassName("ytp-gradient-top")[0].remove()
document.getElementsByClassName("ytp-chrome-top")[0].remove()
document.getElementsByClassName("ytp-gradient-bottom")[0].remove()
a=document.getElementsByTagName("video")[0]
a.addEventListener("pause",()=>document.getElementsByClassName("ytp-bezel-text-hide")[0].remove(),{once:true})
b=document.body.style
c=document.getElementsByClassName("ytp-chrome-bottom")[0]
d=c.style
let $
a.onmousemove=()=>{b.cursor=d.visibility=""
clearTimeout($)
$=setTimeout(()=>{b.cursor="none"
d.visibility="hidden"},500)}
a.onmouseleave=()=>setTimeout(()=>b.cursor="",500)
c.onmouseenter=()=>setTimeout(()=>d.visibility="",500)
