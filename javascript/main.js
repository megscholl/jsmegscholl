"use strict";

let reso = require('./reso'),
    designDevPage = require('./design-dev');


let revealMain = document.getElementById("main--container");
let showMainHTML;

function showMainPage() {
console.log("showMainPage function");
    showMainHTML = `    <header>
    <nav> 
        <ul>
            <li style="line-height: 35px;"><a href="personal.html" class="links">personal</a>&nbsp;&nbsp;&#124;&nbsp;&nbsp;  
                <a href="professional.html" class="links">experience</a>&nbsp;&nbsp;&#124;&nbsp;&nbsp;
                <a id="design--dev">design &amp; development</a>&nbsp;&nbsp;&#124;&nbsp;&nbsp;
                <a href="blog.html">blog</a>&nbsp;&nbsp;&#124;&nbsp;&nbsp;
                <a href="contact.html" class="links">contact</a></li>
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
                    <br><span> html css react</span></h1>
    
            </main>
            <br>
            <hr width="40%">
            <br>
        </div>`;


        revealMain.innerHTML = showMainHTML;
}


showMainPage();
