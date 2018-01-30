
const jobPosts = {
    jobTitle: function(jTitle) {
        return `<p>${jTitle}</p>`
    },
    workDescription: function(jEntry) {
        return `<p>${jEntry}</p>` 
    }
} 



function blogs(title, description) {
    this.title = jobPosts.jobTitle(title);
    this.description = jobPosts.workDescription(description);
}


const job001 = Object.create(jobPosts);
const job002 = Object.create(jobPosts);
const job003 = Object.create(jobPosts);
// const job004 = Object.create(jobPosts);
// const job005 = Object.create(jobPosts);
// const job006 = Object.create(jobPosts);




// BLOG ENTRY 001 FROM JAN 5, 2018
// SUMMARY: Coming home from London I received an email from NSS, excited and a little doomed

job001.title = "Friends & Volunteer Programs Assistant &#124; Tennessee State Parks <br>";
job001.description = "<div class=\"workFont\">play outside</div> <br> <br>";

job002.title = "Server &#124; BrickTop's Restaurant <br>";
job002.description = "<div class=\"workFont\">serve tables</div> <br> <br>";


job003.title = "Home Energy Savings AmeriCorps Memebr &#124; HandsOn Nashville <br>";
job003.description = "<div class=\"workFont\">revitaize homes for low-income families in the metro-nashville area</div> <br> <br>";


/* BLOG ENTRIES INTO THE DOM */

let jobEntry001 = job001.title + job001.description;
let jobEntry002 = job002.title + job002.description;
let jobEntry003 = job003.title + job003.description;


document.getElementById("workHistory001").innerHTML = jobEntry001;
document.getElementById("workHistory002").innerHTML = jobEntry002;
document.getElementById("workHistory003").innerHTML = jobEntry003;
