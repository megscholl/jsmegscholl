"use strict";

let $ = require('../lib/node_modules/jquery');
// let blogs = require('./entries');



let revealBlogPage = document.getElementById("main--container");
let showBlogHTML;



$(document).on("click", "#blog--page", function() {
    console.log("blog page button clicked");
     showBlogPage();
     });

function showBlogPage() {

    console.log("showBlogPage function coming through");
    showBlogHTML = ` 
                    <header>
                        <h1><a href="../index.html"> <img src="../images/signature1.png" width="25%" style="padding-top: 1em;"></a><br>
                            <br>UIX blog</h1>

                        <nav> 
                            <ul>
                                <li>
                                    <a id="about--me" class="links">about me</a>&nbsp;&nbsp;&#124;&nbsp;&nbsp;  
                                    <!-- <a href="professional.html" class="links">experience</a>&nbsp;&nbsp;&#124;&nbsp;&nbsp; -->
                                    <span id="design--dev" class="links">design &amp; development</span>&nbsp;&nbsp;&#124;&nbsp;&nbsp;
                                    <span class="disabled">blog</span>
                                </li>
                            </ul>
                        </nav>

                    <hr width="40%">
                    </header>

                    <main>

                        <div class="blogContainer" id="main--container">
                            <article class="blog">
                                <section class="blog-1">
                                    <div class="blog-header"><h3>blog post #001<br>1/05/18 8:19pm</h3></div>

                                    <div id="entry-blogPost1"></div>

                                </section> 
                                <br>
                                <section class="blog-1">
                                    <div class="blog-header"><h3>blog post #002<br> 1/12/18 9:40pm</h3></div>

                                    <div id="entry-blogPost2"></div>


                                </section>
                                <br>
                                <section class="blog-1">
                                    <div class="blog-header"><h3>blog post #003<br> 1/25/18 11:40pm</h3></div>

                                    <div id="entry-blogPost3"></div>

                                </section>
                                <br>
                                <section class="blog-1">
                                    <div class="blog-header"><h3>blog post #004<br> 1/31/18 10:34pm</h3></div>

                                    <div id="entry-blogPost4"></div>

                                </section>
                                <br>
                                <section class="blog-1">
                                    <div class="blog-header"><h3>blog post #005<br> 2/09/18 1:07pm</h3></div>

                                    <div id="entry-blogPost5"></div>

                                </section>

                                <br>

                                <section class="blog-1">
                                    <div class="blog-header"><h3>blog post #006<br> 3/2/18 8:57pm</h3></div>
                                    <div id="entry-blogPost6"></div>
                                </section>

                                <br>

                                <section class="blog-1">
                                    <div class="blog-header"><h3>blog post #007<br> 3/09/18 10:57am</h3></div>
                                    <div id="entry-blogPost7"></div>
                                </section>

                                <br>

                                <section class="blog-1">
                                    <div class="blog-header"><h3>blog post #008<br> 4/3/18 7:18am</h3></div>
                                    <div id="entry-blogPost8"></div>
                                </section>

                                <br>

                                <section class="blog-1">
                                    <div class="blog-header"><h3>blog post #009<br> 4/3/18 5:22pm</h3></div>
                                    <div id="entry-blogPost9"></div>
                                </section>

                                <br>

                                <section class="blog-1">
                                    <div class="blog-header"><h3>blog post #010<br> 5/3/18 5:32pm</h3></div>
                                    <div id="entry-blogPost10"></div>
                                </section>

                            </article>        
                        </div>
                    </main>


                    <br>
                    <hr width="50%">`;

revealBlogPage.innerHTML = showBlogHTML;
}


module.export = {showBlogPage}
