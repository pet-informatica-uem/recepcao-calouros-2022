"use strict";var sections=document.getElementsByClassName("js-dia"),sections=Array.from(sections),navLi=document.getElementsByClassName("js-dias"),navLi=Array.from(navLi);window.onscroll=function(){var a="";sections.forEach(function(s){var t=s.offsetTop+800;scrollY>=t&&(a=s.getAttribute("id"))}),navLi.forEach(function(s){s.classList.remove("active"),s.classList.contains(a)&&s.classList.add("active")})};