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
    ui / ux design</h1>
    
    <header>
        <nav> 
            <ul>
                <li style="line-height: 35px;"><a href="../sub-files/personal.html" class="links">personal</a>&nbsp;&nbsp;&#124;&nbsp;&nbsp;  
                    <a href="../sub-files/professional.html" class="links">experience</a>&nbsp;&nbsp;&#124;&nbsp;&nbsp;
                    <span id="design--dev" class="disabled">design &amp; development</span>&nbsp;&nbsp;&#124;&nbsp;&nbsp;
                    <a href="../sub-files/blog.html">blog</a>&nbsp;&nbsp;&#124;&nbsp;&nbsp;
                    <a href="../sub-files/contact.html" class="links">contact</a></li>
            </ul>
        </nav>

        <hr width="40%">
    </header>
    
    <div class="container">



        <main>
        <div class="introContainer">
                 
                            
                     <img src="./../images/ux_vs_ui.png" alt="ux vs ui diagram" title="ux vs ui diagram" width="100%">
                    <div class="flex-item">
                            
                <h2>Practiced Development</h2>
                        <img src="../images/languages/bootstrap.png" width="8%" alt="Bootstrap logo" title="Bootstrap logo"/>
                        <img src="../images/languages/css3.png" width="7%" alt="CSS3 logo" title="CSS3 logo"/>
                        <img src="../images/languages/html5.png" width="10%" alt="HTML5 logo" title="HTML5 logo"/>
                        <img src="../images/languages/javascript.png" width="8%" alt="JAVASCRIPT LOGO" title="JAVASCRIPT LOGO"/>
                        <img src="../images/languages/jquery_logo.png" width="8%" alt="JQUERY LOGO" title="JQUERY LOGO"/>
                        <img src="../images/languages/materialize.png" width="11%" alt="MATERIALIZE LOGO" title="MATERIALIZE LOGO"/>
                        <img src="../images/languages/react.png" width="8%" alt="REACT LOGO" title="REACT LOGO"/>

                    </div>  

                    <br>
                    <h2>2018 Mid-way Capstone: Reso</h2>

  
                    </div>

            </main>


            <br>
            <hr width="50%">`;



            revealDesignDevPage.innerHTML = showDesignDevHTML;
            
}

module.exports={showDesignDevPage};