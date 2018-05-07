"use strict";

let $ = require('../lib/node_modules/jquery');

console.log("ENTRIES JS");


// // // // // NEED TO MAKE BLOG ENTRIES INTO CARDS \\ \\ \\ \\ \\
// // // CREATE A DIV CONTAINER WHICH INCLUDES H1 AND BLOG ENTRY WITH PADDING \\ \\ \\

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


const blog001 = Object.create(blogPosts);
const blog002 = Object.create(blogPosts);
const blog003 = Object.create(blogPosts);
const blog004 = Object.create(blogPosts);
const blog005 = Object.create(blogPosts);
const blog006 = Object.create(blogPosts);
const blog007 = Object.create(blogPosts);
const blog008 = Object.create(blogPosts);
const blog009 = Object.create(blogPosts);
const blog010 = Object.create(blogPosts);


// BLOG ENTRY 001 FROM JAN 5, 2018
// SUMMARY: Coming home from London I received an email from NSS, excited and a little doomed

blog001.title = "";
blog001.blogEntry = "<p>I received my acceptance email when I turned my phone\'s airplane mode off from my trip back from London, England. I\'m not sure if that was the exact moment I received it, or if it\'d been sent a week prior and my roaming allowances never allowed it to actually come through. Even so, I was ecstatic. The gent next to me on the long plane home was saying something to me along the lines of \"thanks for keeping me company during the ride\" or \"it was nice to have met you, safe travels.\" I know it was generous and heart-warming, but I was giddy with excitement scrolling through my Google Pixel's screen displaying the email from Nashville Software School.</p> I was excited, and also a little frustrated. I\'d been warned about \"pre-work\", and I kept it in the back of my mind. But the email said we would start January 2nd. The day I received my acceptance was December 15th. I felt slightly doomed. I\'d figured for weeks that I must not have gotten in, so I picked up numerous shifts at my job, Christmas was coming up, and I had another trip to Florida with the family... Those aren't exactly the best conditions for staring at my computer watching and learning, crunching down on any type of work at all, especially coding... But, I did it anyways. I said Merry Christmas to the patrons that handed over generous and not-so-generous holiday tips, I giggled with my 10 month old nephew on Christmas morning, I flew to Naples to see family I hadn't seen in a long time, and... I worked on my pre-work. It was a lot of activities to do with not a lot of time to do so.<br> Nevertheless, the first day of school came around and as I walked into the classroom I felt a sudden awe, hope and gratitude. I was there, I was here, I was surrounded by others with the same vision, and I was lucky. I felt so astonishingly lucky to be there, and I made it by a hair. And to top that all off, I'd recognized half of my pre-work due to the two classes I'd taken that fall at my local community college. These classes were honestly just for kicks, to gain vocabulary in the field, and to get me started if I were to get into the program. That was a pretty awesome play by me. I'm pretty smart, and I'll only get smarter from here.";


// BLOG ENTRY 002
// SUMMARY: 

blog002.title = `wef`;
blog002.blogEntry = "<p>One thing I want to mention first and foremost... My classmates are so incredibly smart and talented, and so supportive too. Have you ever been involved with a classroom full of people who are as excited to be there as you are, they\'re smart, talented, funny, and supportive in a way that they would literally stop what they were doing just to help you find something that\'s literally right in front of your face? Me neither. It's liberating and inspiring in a way you wouldn't believe. They're all different in the knowledge they bring, but they all have something that someone else doesn't have. </p><p>User Interface User Experience Front-End Development. This program is all about developing a product that is easy for any user to use. If a webpage takes more than 30 seconds to load, statistics show that most users leave the site entirely and try a different site, regardless of whether it's their internet connection or the website's having a hard time loading due to the amount of stuff they have embedded in it. The user's experience is crucial to any company, because every company has a website or mobile application. If they don't, then they should, because we're in an era of technology and ain't nobody got time for a business that the user can't find their information in the palm of their hands. </p> <hr width='20%' color='#8B008B'><p>  So far we've been learning about <strong>terminal</strong>. If you read that and you instantly had flashbacks filled with anxiety and stress, you know exactly what I'm talking about. Terminal. Oh, terminal, you're a hard-ass bitch and you seem to repel the lot of us, but you know... once I got to know you, you're actually really helpful and super cool. I'm excited I'm on your good side. But, there are others who still hate you due to your resting bitch-face, but they'll learn... soon enough. </p><p> We've also been learning Design, the history and principles, and what design can do for a website. We formed groups of four, and I just have to say...my group is great. We're all different, and we all have different talents. Jesie has some serious control over his Adobe XD knowledge, Sam is a critical thinker and can bring different ideas and strategies to the table, and Taylor is so organized and thorough in her work and can get into focus so easily, it amazes me. I'll write about our project in the next post.</p> <p>I also want to mention this... It's been two weeks since we started, and I still feel so lucky to be where I am.</p>";


// BLOG ENTRY 003
// SUMMARY : Incorporating JS into the websites, feeling behind, stress

blog003.title = 
blog003.blogEntry = "<p>This week was interesting to say the least. We've been incorporating JS into our websites, and I feel a little behind. Not that I don't know what I'm doing... Well, I do but I don't if that makes sense... When we go over the work in class, I can follow and understand it when I read it, however when it comes to actually writing the code for exercise challenges, my brain suddenly goes 'boop-beep-boop-<strong>derp</strong>'. It's discouraging because I <em>know</em> I can do this.</p><p>Honestly, think it's stress-induced. I'm working part-time and not making enough mulah to pay bills <i>and</i> save, which <strong>has always and will always</strong> stress me tf out. My time-management is okay but it's been better; it was a rough start to the year at my pt and with starting this program. Both have their advantages and disadvantages: pt work takes time away from doing homework and keeping up with class, but it's how I'm able to pay bills; of course, school has the opposite effect. I just have to <strong><em>stay positive and not freak tf out</em></strong> ¯\\_(ツ)_/¯.</p><p>As for Javascript... I'm actually supposed to have these blog posts entered into the HTMl DOM <em>through</em> javascript...lolfmlyoloughfml<br></p><p style=\"text-align:center;\">To Be Continued...</p>";


// BLOG ENTRY 004
// SUMMARY: Design week, focus-oriented


blog004.title = "";
blog004.blogEntry = "<p>This week has been good, as in less stress-oriented and more focus-oriented. We, as a class, took the time this week to find out where we are currently in our curriculum, where we need to be, and also where we're going. We also focused on a lot of the design aspect of our program, which was much more laid-back. I mean this in a sense that, it allowed my brain (and from talking with others, a lot of other brains) to take in information a little easier. The Design aspect of our program helps us orient how our websites need, and should, look and act, so that the user's experience is comfortable and easy. For class, we're meant to read Steve Krug's \"Don't Make me Think, Revisited: A Common Sense Approach to Usability (Voices That Matter)\". This book was so enlightening to how we interact with websites and the internet, that even though I'd rented it for a class last fall, I'd bought it to read it again. The main premise of the book is 'don't make the user think'; websites should be easy to use and navigate. If you can think about a time where you were navigating a website and you were getting frustrated because you couldn't figure out where to find what you were looking for, or it was basically made like a maze, you've come across bad user experience. That's where we come in, my classmates and teacher, Susan. For someone who has never taught before, she does a very informative and engaging way of teaching what she knows about design and UX. Now, UI (user interface) is a little different, but I'll come back to that when I have more information on it. </p> <p>The last week or so, like I said, has been less stress-oriented, because now we know where we are and where we technically should be. I've learned that even with my full schedule and taking a couple days during the month to let my brain rest in order to retain the information I've bee learning at an intense rate, I'm farther ahead than much of the class. That's not a proud thing, but a relief. </p>";


// BLOG ENTRY 005
// SUMMARY: 

blog005.title = "";
blog005.blogEntry = "<p>This passed week has been a rollercoaster of coding-emotion. We had two projects, one was a short, 24-hour project, which lead me down an abyss of frustration and stress. The second one is way more complex with JS detail, implementing new programs such as Grunt, Sass, and Bootstrap. We've had three days so far to work on it, and it sounds like we also have the weekend to work on it. But, my team is actually finished. We completed our MVP and now we're working on the bonus challenges for the project. It feels so good to have completed a project, and have learned  new JS along the way and that I can actually write code :) </p> <p> My portion of the project was creating a clear all button and making it so that when clicked, an addEventListener will hear for the \"click\" which will then perform an event (function) that clears all the messages on the board. The clear all button must also disable once there are no messages on the board. That was easy, but then we realized that even when someone entered a new message, the button was still disabled. I then had to figure out how to re-enable the button once an event occurred that inputted a message from the navbar. Oh, it was a roller coaster but I feel <i>so good</i> about myself and my javascript skills now. And also, I am thankful for Google. I would not have been able to do much of anything without all the other coders in the world. Fudge yeah.</p>";


// BLOG ENTRY 006
// SUMMARY: Cool

blog006.title = "";
blog006.blogEntry = "<p>Cool. Cool cool cool cool cool.</p>";


// BLOG ENTRY 007
// SUMMARY: Cool

blog007.title = "";
blog007.blogEntry = "<p>Today is likely the most stressful day I've come into since starting at NSS. School plus work, that's a piece of cake. I've been working 2-3 jobs, sometimes just for fun so that I stay busy, for years. In college, my junior and secior year I had school (basically a full-time job) plus an internship, plus a part-time job, plus keeping up with staying active and healthy, running all through Stanley Park, and somehow keeping somewhat of a social life. That stuff, that's easy. But today. Today was <em>stressful</em>.</p><p>Each year for the last 3 years I've lived in a different house, for one reason or another, until I found my current residence. It's a beautiful ranch-style home that I'm renting with a girl I worked with at State Parks, my Land Lord is my old boss's boyfriend, and they're honestly the nicest people I could ask for as who I give money to monthly, not to mention they gave us an incredible deal for rent... But today, he called and said 'I know we just talked about extending the lease and going month-to-month, but my parents are moving here from California and I need the house.' Of course. Of course of course of course, I could not argue and I'm actually really excited for him to have his family close again, but -- oh no, capstone's are literally right around the corner and I have to be out by the end of the month. I know my roommate is doing really well, she just got promoted, and her and her boyfriend are getting serious... What if I have to get my own place? I mean, that would be ideal, if I could get a good deal. But...capstone, I'm currently working on the most difficult group project at school yet, I have to find a new place within my budget, pack, move out, start and complete an entire capstone project, AND work at least 25 hours per week to pay my bills. I may or may not have a heart attack.</p><p>It's cool. I'm fine. LOL. Everything's fine.</p><img src='https://media.giphy.com/media/9J0w4hqUN6Yda/giphy.gif' alt='jerry fartattack parksand rec gif' title='parks and rec gif jerry fart attack'><br><h4 style='text-align: center; font-weight: bold'>UPDATE</h4><p>I put my trust in my community, and boy did they deliver. Two days after <em>the call</em> I received a message on Facebook about a small efficiency apartment just two neighborhoods over from where I currently live, I checked it out and I'm signing the lease on Saturday. How incredible is that! Nashville, you may be a pain in the butt to get around because <strong>everyone loves you</strong> and wants to be all up in your stuff, but you got some sweet people surrounding you. I'm lucky, and as always, so incredibly grateful.</p>";


// BLOG ENTRY 008
// SUMMARY: Cool

blog008.title = "";
blog008.blogEntry = "<p>Since my last blog entry, so much has happened. I signed my new lease and got a pretty nice little vacation... But most of all, my capstone is complete. I created a reservation system based on my experience working on the food &amp; beverage industry for almost half of my life. This experience was mainly as a greeter (or hostess, whichever you prefer), which put me in a spot of answering the very valid and mostly rhetorical question: 'What is the point of a reservation?' Well... Good question, to all of those tens of people who have asked me on a Friday or Saturday night, or God forbid Sunday brunch shift I worked. Guests of our restaurants would come in for their reservation at *set-time*, wait in line to tell me they have arrived for their reservation at *set-time* that was actually, 10-15 minutes ago, just to wait longer for their table to be ready because they didn't tell me they were here 10-15 minutes ago!!!</p><p>It's ridiculous, I know. I've seen it, learned it, understood it, numerous times... But there was never any resolution for it. So, I created Reso.</p><p>Reso is a program that allows users to create an account, create, edit, delete reservations to their favorite local restaurants, and even check-in to their reservation. Now, I already know Version 2 will have a ton more features, but the check-in is HUGE. Based on user-research, people who regularly make reservations, make reservations to garauntee a table at their set time. Of course, if their table isn't ready, that's an issue.</p><p>So, here I am. In about 2 hours I will present my capstone project to NSS and move on to the second half of my UX Design &amp; front-end development program. I'm stocked. Excited. Exhausted. And also, relieved. I survived first half, and I am so incredibly excited and happy for everyone in my cohort to go on to the next half. See you all soon!</p>";


// BLOG ENTRY 009
// SUMMARY: Cool

blog009.title = "";
blog009.blogEntry = "<p>AHHHHH</p>";


// BLOG ENTRY 010
// SUMMARY: Cool

blog010.title = "";
blog010.blogEntry = "<p>Cool. Cool cool cool cool cool.</p>";




/* BLOG ENTRIES INTO THE DOM */

let blogEntry001 = blog001.title + blog001.blogEntry;
let blogEntry002 = blog002.title + blog002.blogEntry;
let blogEntry003 = blog003.title + blog003.blogEntry;
let blogEntry004 = blog004.title + blog004.blogEntry;
let blogEntry005 = blog005.title + blog005.blogEntry;
let blogEntry006 = blog006.title + blog006.blogEntry;
let blogEntry007 = blog007.title + blog007.blogEntry;
let blogEntry008 = blog008.title + blog008.blogEntry;
let blogEntry009 = blog009.title + blog009.blogEntry;
let blogEntry010 = blog010.title + blog010.blogEntry;


document.getElementById("entry-blogPost1").innerHTML = blogEntry001;
document.getElementById("entry-blogPost2").innerHTML = blogEntry002;
document.getElementById("entry-blogPost3").innerHTML = blogEntry003;
document.getElementById("entry-blogPost4").innerHTML = blogEntry004;
document.getElementById("entry-blogPost5").innerHTML = blogEntry005;
document.getElementById("entry-blogPost6").innerHTML = blogEntry006;
document.getElementById("entry-blogPost7").innerHTML = blogEntry007;
document.getElementById("entry-blogPost8").innerHTML = blogEntry008;
document.getElementById("entry-blogPost9").innerHTML = blogEntry009;
document.getElementById("entry-blogPost10").innerHTML = blogEntry010;


module.exports = {}