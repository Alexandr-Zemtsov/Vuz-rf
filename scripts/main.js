var i=document.querySelector(".header__burger-menu"),a=document.querySelector(".header-nav"),l=()=>{i.addEventListener("click",()=>{i.classList.toggle("header__burger-menu--open"),a.classList.toggle("header-nav--open")})};var s=document.querySelector(".up-button");window.addEventListener("scroll",()=>{window.scrollY>150?s.classList.add("up-button--shown"):s.classList.remove("up-button--shown")});s.addEventListener("click",()=>{window.scrollTo(0,0)});var p=document.querySelector("body");document.querySelectorAll(".filter-group").forEach(o=>{let t=o.querySelector(".filter-group__input--select"),c=o.querySelector(".filter-group__dropdown-hidden"),r=o.querySelector(".filter-group__list-dropdown"),u=o.querySelectorAll(".select-list__item");t.onclick=function(){r.classList.toggle("filter-group__list-dropdown--open"),this.classList.toggle("filter-group__input--active")},u.forEach(e=>{let n=e.textContent;e.addEventListener("click",d=>{d.stopPropagation(),t.textContent=n,c.value=n,r.classList.remove("filter-group__list-dropdown--open"),t.classList.remove("filter-group__input--active")})}),p.addEventListener("click",e=>{e.target!==t&&(r.classList.remove("filter-group__list-dropdown--open"),t.classList.remove("filter-group__input--active"))}),document.addEventListener("keydown",e=>{(e.key==="Tab"||e.key==="Escape")&&(r.classList.remove("filter-group__list-dropdown--open"),t.classList.remove("filter-group__input--active"))})});l();
