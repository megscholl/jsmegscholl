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
                            
                <h3>Practiced Development</h3>
                        <img src="./../images/languages/bootstrap.png" width="8%" alt="" title=""/>
                        <img src="./../images/languages/css3.png" width="7%" alt="" title=""/>
                        <img src="./../images/languages/html5.png" width="10%" alt="" title=""/>
                        <img src="./../images/languages/javascript.png" width="8%" alt="" title=""/>
                        <img src="./../images/languages/jquery.png" width="8%" alt="" title=""/>
                        <img src="./../images/languages/materialize.png" width="10%" alt="" title=""/>
                        <img src="./../images/languages/react.png" width="8%" alt="" title=""/>

                    </div>  
                    <br>
                <h3>Planning Processes</h3>

                    <p class="block-quote">Affinity clustering, journey maps, site maps and prototyping are all essentials to great user experience research. It's important to gather this information through surveying potential users.</p>
                    
              
                <br>
                </div>  

            </main>


            <br>
            <hr width="50%">`;



            revealDesignDevPage.innerHTML = showDesignDevHTML;
            
}

module.exports={showDesignDevPage};