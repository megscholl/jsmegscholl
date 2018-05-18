"use strict";
let $ = require('../lib/node_modules/jquery');


let revealDesignDevPage = document.getElementById("main--container");
let showDesignDevHTML;



$(document).on("click", "#design--dev", function() {
    console.log("design dev button clicked");
     showDesignDevPage();
     });


function showDesignDevPage() {
console.log("showDesignDevPage function");
    showDesignDevHTML = `    <h1>
    <a href="../index.html"> <img src="../images/signature1.png" width="25%" style="padding-top: 1em;"></a><br>
    ux design &amp;<br> front-end development</h1>
    
    <header>
        <nav> 
            <ul>
                <li style="line-height: 35px;"><a id="about--me" class="links">about me</a>&nbsp;&nbsp;&#124;&nbsp;&nbsp;
                    <span id="design--dev" class="disabled">design &amp; development</span>
            </ul>
        </nav>

        <hr width="40%">
    </header>
    
    <div class="container">

        <main>

        <div class="programs">
                 
                            
        <img src="./../images/ux_vs_ui.png" alt="ux vs ui diagram" title="ux vs ui diagram" width="60%">
  
        </div>


            <div class="projects-container">
            <h2 class="left-header">Projects</h2>
                <img src="../images/image_of_reso.png" width="400px" alt="RESO" title="RESO" style="float: left"/>
                <div class="project-desc" style="margin-left: 10em"><p>Reso is a reservation application that I developed for my mid-term capstone project. This product allows a user to use in with Google Authentication through Firebase, create, edit, and delete reservations to their preferred restaurant. Reso is unique in that the main feature is for the user to be able to check-in to their reservation. To learn about the UX research conducted for this project, please click <a href="https://docs.google.com/presentation/d/1gcjwK-m7v9mE-_HfLS7s5eadAqZCvxJckkhoJKZ3P4E/edit?usp=sharing" target="_blank" alt="Google document with UX research for Reso" title="Google document containing UX research for Reso" class="links">here</a>. To learn more about the development of Reso, click <a href="https://github.com/megscholl/capstone" class="project-links"  target="_blank" alt="RESO" title="RESO" class="links">here</a>.</p></div>
            
                        <div class="flex-item" style="text-align: right">  
                        <h4>Technologies I used in this project</h4>
                            <img src="../images/languages/html5.png" width="3%" alt="HTML5 logo" title="HTML5 logo"/>
                            <img src="../images/languages/bootstrap.png" width="3%" alt="Bootstrap logo" title="Bootstrap logo"/>
                            <img src="../images/languages/css3.png" width="2%" alt="CSS3 logo" title="CSS3 logo"/>
                            <img src="../images/languages/javascript.png" width="3%" alt="JAVASCRIPT LOGO" title="JAVASCRIPT LOGO">
                            <img src="../images/languages/jquery_logo.png" width="3%" alt="JQUERY LOGO" title="JQUERY LOGO"/>
                            <img src="../images/languages/materialize.png" width="3%" alt="MATERIALIZE LOGO" title="MATERIALIZE LOGO"/>
                        </div>
                </div>
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />

            <div class="projects-container">
                <img src="../images/tend_screen.png" width="400px" alt="Tend Income Tracker; Image credit to HopscotchArt" title="Tend Income Tracker; Image credit to HopscotchArt" style="float: right"/>
                <div class="project-desc"><p width="6em">Tend is a personal project. I've been unable to find a budget or income tracker that appeals to me aesthetically and functionally, so I decided to make my own. This single-page application is still in development, however I have main and stretch goals in place. You may read more about Tend <a href="https://github.com/megscholl/budget-tracker" class="project-links"  target="_blank" alt="Tend Budget Tracker" title="Tend Budget Tracker">here</a>.</p></div>
            
                <div class="projects-container">
                <div  style="text-align: left">  
                <h4 class="left-header">Technologies I used in this project</h4>
                    <img src="../images/languages/html5.png" width="4%" alt="HTML5 logo" title="HTML5 logo"/>
                    <img src="../images/languages/bootstrap.png" width="4%" alt="Bootstrap logo" title="Bootstrap logo"/>
                    <img src="../images/languages/css3.png" width="3%" alt="CSS3 logo" title="CSS3 logo"/>
                    <img src="../images/languages/javascript.png" width="4%" alt="JAVASCRIPT LOGO" title="JAVASCRIPT LOGO">
                    <img src="../images/languages/jquery_logo.png" width="4%" alt="JQUERY LOGO" title="JQUERY LOGO"/>
                    
                    <h4>coming soon for this project
                    <img src="../images/languages/react.png" width="4%" alt="REACT LOGO" title="REACT LOGO"/></h4>
                </div>
            </div>
            
                </div>


            <br /><br />
            <br /><br />
            <br /><br />
            <br /><br />
            <br /><br />

        </main>


            <br>
            <hr width="50%">
        
            `;



            revealDesignDevPage.innerHTML = showDesignDevHTML;
            
}

module.exports={showDesignDevPage};