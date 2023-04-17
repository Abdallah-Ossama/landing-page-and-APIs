//set varibles
let navbarList = document.querySelector("#navbarList");
let creatList = document.getElementById("navbarList");
let sections = document.getElementsByTagName("section");
let activeClass = section1.className;
let count;
let navList = [];
let listSectionId = [];
let sectionArray = [];
let listArray = [];
//make navbar
function mainFunction(){
    //make array for sections id
    for(let section of sections){
        listSectionId.push(section.id);
    }
    //make list into ul 
    for (let i=0;sections.length>i;i++){
        count = i;
        navList.push(count);
        navbarList.innerHTML += `
            <li id="li${count}"><a href="#${listSectionId[count]}"> section ${navList[count]+1}</a></li>
        `
    } 
    //make array for storage sections id
    listSectionId.forEach(sectionNum => {
        let sectionId = document.getElementById(sectionNum);
        sectionArray.push(sectionId);
    })
    // scroll({
    //     behavior:"smooth"
    // })
}
mainFunction();

function makeChanges(){
//Make changes happen if scroll on position of section
for(let i = 0;sectionArray.length>i;i++){
    let position = sectionArray[i].getBoundingClientRect();
    let list = document.getElementById("li"+i);
    listArray.push(list);
    if(position.top<100 && position.bottom>100){
        sectionArray[i].classList.add(activeClass);
        listArray[i].style.cssText = "background-color:#0e1e8b";
    }else{
        sectionArray[i].classList.remove(activeClass);
        listArray[i].style.cssText = "none";
    }
}
}
//turn on "makeChanges()" function when user scrolls the page
addEventListener("scroll",function(){
    makeChanges();
})

/* we can use addEventListener() or window.onscroll */

// window.onscroll = function(){
//     makeChanges();
// }
