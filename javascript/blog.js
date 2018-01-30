

const blogPosts = {
    blogTitle: function(bTitle) {
        return `<p>${bTitle}</p>`
    },
    blogEntry: function(bEntry) {
        return `<p>${bEntry}</p>` 
    }
} 



function blogs(title, date, time, entry) {
    this.title = blogPosts.blogTitle(title);
    this.entry = blogPosts.blogEntry(entry);
}


const blog001 = Object.create(blogPosts)
const blog002 = Object.create(blogPosts)
const blog003 = Object.create(blogPosts)
// const blog004 = Object.create(blogPosts)
// const blog005 = Object.create(blogPosts)
// const blog006 = Object.create(blogPosts)





blog001.title = "<span class='blog-header'>blog post #001 <br> 1/05/2018 &#124\; 8:19pm</span>";
blog001.blogEntry = "<p>I received my acceptance email when I turned my phone\'s airplane mode off from my trip back from London, England. I\'m not sure if that was the exact moment I received it, or if it\'d been sent a week prior and my roaming allowances never allowed it to actually come through. Even so, I was ecstatic. The gent next to me on the long plane home was saying something to me along the lines of \"thanks for keeping me company during the ride\" or \"it was nice to have met you, safe travels.\" I know it was generous and heart-warming, but I was giddy with excitement scrolling through my Google Pixel's screen displaying the email from Nashville Software School.</p> I was excited, and also a little frustrated. I\'d been warned about \"pre-work\", and I kept it in the back of my mind. But the email said we would start January 2nd. The day I received my acceptance was December 15th. I felt slightly doomed. I\'d figured for weeks that I must not have gotten in, so I picked up numerous shifts at my job, Christmas was coming up, and I had another trip to Florida with the family... Those aren't exactly the best conditions for staring at my computer watching and learning, crunching down on any type of work at all, especially coding... But, I did it anyways. I said Merry Christmas to the patrons that handed over generous and not-so-generous holiday tips, I giggled with my 10 month old nephew on Christmas morning, I flew to Naples to see family I hadn't seen in a long time, and... I worked on my pre-work. It was a lot of activities to do with not a lot of time to do so.<br> Nevertheless, the first day of school came around and as I walked into the classroom I felt a sudden awe, hope and gratitude. I was there, I was here, I was surrounded by others with the same vision, and I was lucky. I felt so astonishingly lucky to be there, and I made it by a hair. And to top that all off, I'd recognized half of my pre-work due to the two classes I'd taken that fall at my local community college. These classes were honestly just for kicks, to gain vocabulary in the field, and to get me started if I were to get into the program. That was a pretty awesome play by me. I'm pretty smart, and I'll only get smarter from here.";



let blogEntry001 = blog001.title + blog001.blogEntry;


document.getElementById("entry-blogPost1").innerHTML = blogEntry001;

