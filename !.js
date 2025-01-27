// ==UserScript==
// @include https://www.youtube.com/watch?v=*
// ==/UserScript==
document.getElementsByClassName("ytp-gradient-top")[0].remove()
document.getElementsByClassName("ytp-chrome-top")[0].remove()
document.getElementsByClassName("ytp-gradient-bottom")[0].remove()
document.getElementsByTagName("video")[0].addEventListener("pause",()=>document.getElementsByClassName("ytp-bezel-text-hide")[0].remove(),{once:true})
b=document.getElementsByTagName("video")[0]
c=document.getElementsByClassName("ytp-chrome-bottom")[0]
d=document.body.style
let a
b.onmousemove=()=>{d.cursor=""
clearTimeout(a)
a=setTimeout(()=>d.cursor="none",500)}
b.onmouseleave=()=>setTimeout(()=>d.cursor="",500)
c.onmouseenter=()=>c.style.opacity=1
c.onmouseleave=()=>c.style.opacity=0
