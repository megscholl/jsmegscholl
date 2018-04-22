(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

let reso = require('./reso');


let revealMain = document.getElementById("main--container");
let showMainHTML;

function showMainPage() {
console.log("showMainPage function");
    showMainHTML = `
        <div class="container">

        <header>
            <br>
                <nav> 
                        <ul>
                            <li style="line-height: 35px;"><a href="sub-files/personal.html" class="links" id="personal--page">personal</a>&nbsp;&nbsp;&#124;&nbsp;&nbsp; 
                            <a href="sub-files/professional.html" class="links" id="prof--page">experience</a>&nbsp;&nbsp;&#124;&nbsp;&nbsp; 
                            <a href="sub-files/design.html" class="links" id="design--page">design &amp; development</a>&nbsp;&nbsp;&#124;&nbsp;&nbsp;
                            <a href="sub-files/blog.html" id="blog--page">blog</a>&nbsp;&nbsp;&#124;&nbsp;&nbsp;
                            <a href="sub-files/contact.html" class="links" id="contact--page">contact</a></li>
                        </ul>
                    </nav>
                    
        </header>
                <br>
                <hr width="40%">
                <br>

            <main>
                <h1 alt="Meg Scholl UI UX Design and Front End Development HTML CSS JavaScript">hi, my name is <br>
                    <img src="images/signature1.png" width="75%" style="padding-top: 1em;">
                    <br>
                    and i'm a
                    <br>
                    <span class="purple" style="font-size: 55px; letter-spacing: 1.3rem">ux developer</span>
                    <br><span> html css react</span></h1>
    
            </main>
            <br>
            <hr width="40%">
            <br>
        </div>

        <footer>
            <p>&copy; 2018 Cohort 24, Nashville Software School</p>
        <br>
            <a href="#"><img src="images/linkedin.png" alt="Visit Meg's LinkedIn profile" title="Meg's LinkedIn profile" width="20" height="20"></a> &nbsp;&nbsp;&#124;&nbsp;&nbsp;
            <a href="#"><img src="images/github.png" alt="Visit Meg's GitHub profile" title="Meg's GitHub profile" width="20" height="20"></a> &nbsp;&nbsp;&#124;&nbsp;&nbsp;
            <a href="#"><img src="images/behance.png" alt="Visit Meg's Behance profile" title="Meg's Behance profile" width="20" height="20"></a> &nbsp;&nbsp;&#124;&nbsp;&nbsp;
            <a href="#"><img src="images/pinterest.png" alt="Visit Meg's Pinterest Board" title="Meg's Pinterest Board" width="20" height="20"></a>
        </footer>`;


        revealMain.innerHTML = showMainHTML;
}


showMainPage();
},{"./reso":2}],2:[function(require,module,exports){
"use strict";

let showReso = document.getElementById("capstone-container");

function reso() {
    console.log("show reso inside the main page");
}

module.exports={reso};
},{}]},{},[1]);
