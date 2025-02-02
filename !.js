// ==UserScript==
// @include https://www.youtube.com/watch?v=*
// ==/UserScript==
document.getElementsByClassName("ytp-gradient-top")[0].remove()
document.getElementsByClassName("ytp-chrome-top")[0].remove()
document.getElementsByClassName("ytp-gradient-bottom")[0].remove()
document.getElementsByTagName("video")[0].addEventListener("pause",()=>document.getElementsByClassName("ytp-bezel-text-hide")[0].remove(),{once:true})
a=document.getElementsByTagName("video")[0]
b=document.getElementsByClassName("ytp-chrome-bottom")[0]
c=document.body.style
let $
a.onmousemove=()=>{c.cursor=""
clearTimeout($)
$=setTimeout(()=>c.cursor="none",500)}
a.onmouseleave=()=>setTimeout(()=>c.cursor="",500)
b.onmouseenter=()=>b.style.opacity=1
b.onmouseleave=()=>b.style.opacity=0
