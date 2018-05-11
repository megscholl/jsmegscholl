"use strict";
let $ = require('../lib/node_modules/jquery');


let revealAboutMePage = document.getElementById("main--container");
let showAboutMeHTML;



$(document).on("click", "#about--me", function() {
    console.log("about me button clicked");
     showAboutMePage();
     });

function showAboutMePage() {

    console.log("showAboutMePage function coming through");
    showAboutMeHTML = `<header>
    <h1>
            <a href="../index.html"> <img src="../images/signature1.png" width="25%" style="padding-top: 1em;"></a><br>
    bstn>nshvl</h1>
<nav> 
    <ul>
         <li><span class="disabled">about me</span>&nbsp;&nbsp;&#124;&nbsp;&nbsp;
            <!-- <a href="professional.html" class="links">experience</a>&nbsp;&nbsp;&#124;&nbsp;&nbsp; -->
            <span id="design--dev" class="links">design &amp; development</span>
    </ul>
</nav>

<hr width="40%">
</header>
<div class="clearfix">
<main>
        <div class="introContainer">
                <div><img class="main-img" src="../images/mesnap.jpg" alt="Photo of Meg Scholl" title="Photo of Meg Scholl"></div>
    
            <div style="text-align: left">
                <p class="indent">
                    Meg was born and raised in a small town outside of Boston, Massachusetts, where she learned about computers from her Grandfather at a fairly young age . He used programming languages for most of his career as an Actuary and was fond of teaching, which allowed Meg and her siblings to learn about the internet, and even how to take a computer apart and put it back together. Meg has always been intrigued by technology, but didn't start coding until she was about 14 years old. 
                </p>
                <p class="indent">
                    At this age, Meg was comfortable with computers and internet was still relatively new, so she became very familiar with social media including LiveJournal and MySpace. Aesthetics and design have always been important to her, as is learning what makes her sites tick. Every day her site would look different because she enjoyed coding and making her site look a certain way that reflected her personality at that given time. 
                </p>
                    
                <p class="indent">
                    Since then, Meg earned her Bachelor of Science Degree from Westfield State University in Environmental Science, Regional Planning, and Geographic Information Systems (GIS). After graduating, she relocated to Nashville with her family, where she was presented with an abudance of opportunities including publishing, engineering, volunteer management and software development. She is currently enrolled in a full-time advanced UX UI Design Front-End Development program at Nashville Software School.
                </p>
            </div>   

            

    
        </div>        

    </main>


    <br>
    <hr width="50%">`;
    revealAboutMePage.innerHTML = showAboutMeHTML;
}


module.export = {showAboutMePage}