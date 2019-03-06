//functions for active student name//
var tab = document.getElementById("student-names");
tab.addEventListener('click',function(e){
    e.preventDefault();
    var tabs = tab.childNodes;
    if(e.target.nodeName=='A')
        {
            for(var i = 0 ; i < tabs.length ; i++)
        {
            tabs[i].className = "activeoff";
        }
            e.target.parentElement.className="activeon"
            document.getElementById("college-pic").style.display="none";
            document.getElementById("containermain").style.display="block";
        }
})
//mobile studentlist navbar//
var bar = document.getElementById("bars-mobile");
bar.addEventListener('click',function(){
    var liststudents= document.getElementById("mobile-list-names");
    liststudents.classList.toggle("onlist");
})
//work experience open//
var work = document.getElementById("work");
work.addEventListener('click',function(){
    var workexp=document.getElementById("work-experience");
    workexp.style.display="block";
})
//work experience close//
var closeexp = document.getElementById("workclose");
closeexp.addEventListener('click',function(){
    var workexp=document.getElementById("work-experience");
    workexp.style.display="none";
})
// function for active mobile-profile//
var mobileprofile=document.getElementById("mobile-list-names");
mobileprofile.addEventListener('click',function(e){
    e.preventDefault();
    var mobilechild=mobileprofile.childNodes;
    if(e.target.nodeName=="LI")
        {
            for(var i=0;i<mobilechild.length;i++){
        mobilechild[i].className="offf";
    }
    e.target.className="active";
    var showmain = document.getElementById("mobile-profile");
    var collimg = document.getElementById("college-mobile-pic");
    var liststudents= document.getElementById("mobile-list-names");
    liststudents.classList.toggle("onlist");
    showmain.style.display="block";
    collimg.style.display="none";
        }
})
// function for mobile-user work experience//
var mobilework = document.getElementById("work-mobile");
mobilework.addEventListener('click',function(){
    var datamobile = document.getElementById("mobile-work-experience");
    datamobile.classList.toggle("workon");
})
//Dynamic Website All fetching Arrays//
var imgdp = ["","dp.jpg"];
var names = ["Raghav Bansal","Aman Kumar Jaiswal"];
var emails = [];
var rollnos = [];
var yearssem = [];
var presentorg = [];
var contactdetails = [];
var github = [];
var linkedin = [];
var workexperiencedata = [
    ["ssjs","ksks"],["Raghav Bansal"]
];
// adding names in student list from database//
for(var i=0;i<names.length;i++)
{
    var li = document.createElement("li");
    var p = document.createElement("p");
    var a = document.createElement("a");
    li.setAttribute("index",i);
    a.setAttribute("href","#");
    a.setAttribute("index",i);
    var front = document.getElementById("mobile-list-names");
    var deskfront = document.getElementById("student-names");
    li.innerHTML= names[i];
    a.innerHTML= names[i];
    front.append(li);
    p.append(a);
    deskfront.append(p);
}
//desktop-user profile//
tab.addEventListener('click',function(e){
    if(e.target.nodeName=='A')
        {
            var desktopdp = document.getElementById("dpdesktop");
    var desktopmob = document.getElementById("namedesktop");
    var emaildesktop = document.getElementById("emaildesktop");
    var rolldesktop = document.getElementById("rollnodesktop");
    var yearsem= document.getElementById("yearsemdesktop");
    var presentorgan= document.getElementById("presentorgandesktop");
    var contactdesktop= document.getElementById("contactdesktop"); 
    var githubdesktop = document.getElementById("github");
    var linkedindesktop = document.getElementById("linkedin");
    var ul = document.getElementById("workexpdesktop");
    desktopdp.src=imgdp[e.target.getAttribute("index")];
    namedesktop.innerHTML=e.target.innerHTML;
    emaildesktop.innerHTML=emails[e.target.getAttribute("index")];
    rolldesktop.innerHTML=rollnos[e.target.getAttribute("index")];
    yearsem.innerHTML=yearssem[e.target.getAttribute("index")];
    presentorgan.innerHTML=presentorg[e.target.getAttribute("index")];
    contactdesktop.innerHTML=contactdetails[e.target.getAttribute("index")];
            if(ul.childElementCount!=0)
               {
                   while(ul.firstChild)
                       {
                           ul.removeChild(ul.firstChild);
                       }
               }
            for(var i=0;i<workexperiencedata[e.target.getAttribute("index")].length;i++)
                {
                    var li = document.createElement("li");
                    li.innerHTML=workexperiencedata[e.target.getAttribute("index")][i];
                    ul.append(li);
                }
    githubdesktop.href=github[e.target.getAttribute("index")];
    linkedindesktop.href=linkedin[e.target.getAttribute("index")];
        }
})
// mobile-user profile//
mobileprofile.addEventListener('click',function(e){
    if(e.target.nodeName=='LI')
        {
    var mobdp = document.getElementById("dpmob");
    var namemob = document.getElementById("namemobile");
    var emailmob = document.getElementById("emailmobile");
    var rollmob = document.getElementById("rollnomobile");
    var yearsem= document.getElementById("yearsemmobile");
    var presentorgan= document.getElementById("presentorganmobile");
    var contactmob= document.getElementById("contactmobile"); 
    var githubmob = document.getElementById("githubmob");
    var linkedinmob = document.getElementById("linkedinmob");
    var active = document.getElementsByClassName("workon");
    var ul = document.getElementById("workexpmob");
    mobdp.src=imgdp[e.target.getAttribute("index")];
    namemob.innerHTML=e.target.innerHTML;
    emailmob.innerHTML=emails[e.target.getAttribute("index")];
    rollmob.innerHTML=rollnos[e.target.getAttribute("index")];
    yearsem.innerHTML=yearssem[e.target.getAttribute("index")];
    presentorgan.innerHTML=presentorg[e.target.getAttribute("index")];
    contactmob.innerHTML=contactdetails[e.target.getAttribute("index")];
           if(ul.childElementCount!=0)
               {
                   while(ul.firstChild)
                       {
                           ul.removeChild(ul.firstChild);
                       }
               }
            for(var i=0;i<workexperiencedata[e.target.getAttribute("index")].length;i++)
                {
                    var li = document.createElement("li");
                    li.innerHTML=workexperiencedata[e.target.getAttribute("index")][i];
                    ul.append(li);
                }
    githubmob.href=github[e.target.getAttribute("index")];
    linkedinmob.href=linkedin[e.target.getAttribute("index")];
        }
})

