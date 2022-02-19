/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/ 
// global variables used at the begining of project
const navList=document.getElementById('navbar__list');

const sections =document.querySelectorAll("section");
const container=document.createDocumentFragment();

// end global vars

/**
 * End Global Variables
 * Start Helper Functionss
 * 
*/


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the navigation bar by creating new elements

function makeLists() {
  for (const section of sections) {// using For loop to create new elements "li"
    let sectionName = section.getAttribute("data-nav");

    let sectionLinks = section.getAttribute("id");

    const lists = document.createElement("li");// create li element to scroll into defined anchor

    lists.innerHTML = `<a href"${sectionLinks}" class="menu__link">${sectionName} </a>`;
    container.appendChild(lists); // container defined above  at a global variable as a fragment
    // using click event to scroll into viewport and make scrolling so smooth
    lists.addEventListener('click',e=>{
      e.preventDefault();
      section.scrollIntoView({behavior:'smooth'});// Scroll to anchor ID using scrollTO event

    })
  }
  navList.appendChild(container);// putting container as child to navList parent
  
  }
makeLists();// end the starter function


 //Add class 'active' to section when near top of viewport

/**
 * End Main Functions
 * Begin Events
 * 
*/


// Set sections as active

window.addEventListener('scroll', ()=>{
  sections.forEach(section =>{

   const scrollPosition=section.getBoundingClientRect().top;// using element.getBoundingClientREct() property to know the viewPort 
  

if(scrollPosition >= 0 && scrollPosition<500) { //add active class if it doesn't contain active class
  if(!section.classList.contains('your-active-class')){
 
section.classList.add('your-active-class')}

  } //remove it if active class is not in certain section
else{section.classList.remove('your-active-class') }




  })
  let links=document.querySelectorAll('a');
  
links.forEach(link=>
  link=
  {if (link.classList.contains('your-active-class')){
    link.style.backgroundColor='purple';
  }
})
})




 
  
  