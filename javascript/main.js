"use strict";

let reso = require('./reso'),
    designDevPage = require('./design-dev');


let revealMain = document.getElementById("main--container");
let showMainHTML;

function showMainPage() {
console.log("showMainPage function");
    showMainHTML = `
        <header>
            <nav> 
                <ul>
                    <li style="line-height: 35px;"><a href="sub-files/personal.html" id="personal--page" class="links">personal</a>&nbsp;&nbsp;&#124;&nbsp;&nbsp;  
                        <a href="sub-files/professional.html" id="experience--page" class="links">experience</a>&nbsp;&nbsp;&#124;&nbsp;&nbsp;
                        <a id="design--dev" class="links">design &amp; development</a>&nbsp;&nbsp;&#124;&nbsp;&nbsp;
                        <a href="sub-files/blog.html" id="blog--page" class="links">blog</a>&nbsp;&nbsp;&#124;&nbsp;&nbsp;
                        <a href="sub-files/contact.html" id="contact--page" class="links">contact</a></li>
                </ul>
            </nav>
        </header>

        <div class="container">

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
                    <br><span> html css js react</span></h1>
    
            </main>
            <br>
            <hr width="40%">
            <br>
        </div>`;


        revealMain.innerHTML = showMainHTML;
}


showMainPage();
