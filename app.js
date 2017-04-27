const nav = document.querySelector('nav');
const navList = document.querySelector('.nav-list');
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav-list li a');
navLinks.forEach(link => {
  link.addEventListener('click', handleNavLinkClick);
  link.parentNode.addEventListener('mouseover', handleHover);
  link.parentNode.addEventListener('mouseout', handleMouseOut);
});
navToggle.addEventListener('mouseover', handleHover);
navToggle.addEventListener('mouseout', handleMouseOut);
navToggle.addEventListener('click', handleNavToggle);

let topOfNav = nav.offsetTop;

function handleMouseOut(e) {
  navLinks.forEach(link => {
    if (link.parentNode.classList.contains('hover')) link.parentNode.classList.remove('hover');
  });
  this.classList.remove('hover');
}

function handleHover(e) {
  navLinks.forEach(link => {
    if (link.parentNode.classList.contains('hover')) link.parentNode.classList.remove('hover');
  });
  this.classList.add('hover');
}

function handleNavLinkClick(e) {
  navLinks.forEach(link => {
    if (link.parentNode.classList.contains('active')) link.parentNode.classList.remove('active');
  });
  this.parentNode.classList.add('active');
  this.parentNode.classList.remove('hover');
}

function handleNavToggle(e) {
  this.classList.remove('hover');
  navList.classList.toggle('active');
}

function handleScroll(e) {
  if (window.scrollY >= topOfNav) {
    document.body.style.paddingTop = nav.offsetHeight + 'px';
    document.body.classList.add('fixed-nav');
  } else {
    document.body.classList.remove('fixed-nav');
    document.body.style.paddingTop = 0;
  }
}

function handleResize(e) {
  if (window.innerWidth >= 769 && navList.classList.contains('active')) {
    navList.classList.remove('active');
  }
}
window.addEventListener('scroll', handleScroll);
window.addEventListener('resize', handleResize);
