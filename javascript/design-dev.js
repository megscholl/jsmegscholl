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
                <li style="line-height: 35px;"><a href="personal.html" class="links">personal</a>&nbsp;&nbsp;&#124;&nbsp;&nbsp;  
                    <a href="professional.html" class="links">experience</a>&nbsp;&nbsp;&#124;&nbsp;&nbsp;
                    <span id="design--dev" class="disabled">design &amp; development</span>&nbsp;&nbsp;&#124;&nbsp;&nbsp;
                    <a href="blog.html">blog</a>&nbsp;&nbsp;&#124;&nbsp;&nbsp;
                    <a href="contact.html" class="links">contact</a></li>
            </ul>
        </nav>

        <hr width="40%">
    </header>
    
    <div class="container">



        <main>
                <h3>Planning Processes</h3>
                <ul width="50%">
                    <li>Affinity clustering, journey maps, site maps and prototyping are all essentials to great user experience research. It's important to gather this information through surveying potential users.</li>
                </ul>

                <div class="introContainer">
                    
                    <div class="flex-item">
                        
                        <img src="../images/affinity.png" width="42%" alt="" title="">
                        <img src="../images/prototype2.png" width="18.3%" alt="" title=""><br>
                        <img src="../images/journeymap.jpg" width="30%" alt="" title="">
                        <img src="../images/sitemap.jpg" width="30%" alt="" title="">

                    </div>                    
            
                </div>        

            </main>


            <br>
            <hr width="50%">`;



            revealDesignDevPage.innerHTML = showDesignDevHTML;
            
}

module.exports={showDesignDevPage};