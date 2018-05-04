
// const jobPosts = {
//     jobTitle: function(jTitle) {
//         return `<p>${jTitle}</p>`
//     },
//     workDescription: function(jEntry) {
//         return `<p>${jEntry}</p>` 
//     }
// } 



// function blogs(title, description) {
//     this.title = jobPosts.jobTitle(title);
//     this.description = jobPosts.workDescription(description);
// }


// const job001 = Object.create(jobPosts);
// const job002 = Object.create(jobPosts);
// const job003 = Object.create(jobPosts);
// const jobNSS = Object.create(jobPosts);
// const seeMore = Object.create(jobPosts);
// // const job004 = Object.create(jobPosts);
// // const job005 = Object.create(jobPosts);
// // const job006 = Object.create(jobPosts);




// // BLOG ENTRY 001 FROM JAN 5, 2018
// // SUMMARY: Coming home from London I received an email from NSS, excited and a little doomed

// job001.title = "<h4>Friends & Volunteer Programs Assistant &#124; <span class='prof-link'>Tennessee State Parks</span></h4>";
// job001.description = "<ul class='space'><div class='workFont'><li>Provided direct support to the Volunteer and Community Services Program Coordinator, assisting in the development of special projects related to state parks friends groups and volunteer issues throughout the state of Tennessee.</li></ul> <br>";

// job002.title = "<h4>Server &#124; <span class='prof-link'>BrickTop's Restaurant</span> </h4>";
// job002.description = "<div class='workFont'></div>";


// job003.title = "<h4>Home Energy Savings AmeriCorps Member &#124; <span class='prof-link'>HandsOn Nashville</span> </h4>";
// job003.description = "<ul class='space'><div class='workFont'><li>Revitaized homes for low-income families in the metro-nashville area, increasing their annual savings to spend on more important things like food and medicine.</div></li></ul> <br> <br>";

// jobNSS.title = "<h4>Apprentice UX UI Designer and Front End Developer &#124; <span class='prof-link'>Nashville Software School</span></h4>";
// jobNSS.description = "<ul class='space'><div class='workFont'><li>Immersive full-time software development bootcamp focusing on front-end development and UI/UX fundamentals.</div></li></ul><br> "

// seeMore.linked = "<a class='prof-link' href='https://www.linkedin.com/in/meghan-scholl-113a6132/' target='_blank'>Read more about my past experience on my LinkedIn page!</a>";


// /* BLOG ENTRIES INTO THE DOM */

// let jobEntry001 = job001.title + job001.description;
// let jobEntry002 = job002.title + job002.description;
// let jobEntry003 = job003.title + job003.description;
// let jobEntryNSS = jobNSS.title + jobNSS.description;
// let read = seeMore.linked;


// document.getElementById("workHistory001").innerHTML = jobEntry001;
// document.getElementById("workHistory002").innerHTML = jobEntry002;
// document.getElementById("workHistory003").innerHTML = jobEntry003;
// document.getElementById("workHistoryNSS").innerHTML = jobEntryNSS;
// document.getElementById("readMore").innerHTML = read;
