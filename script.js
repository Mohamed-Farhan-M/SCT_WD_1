const navbar = document.getElementById("navbar");
const links = document.querySelectorAll("nav ul li a");
const sections = document.querySelectorAll(".section");

window.addEventListener("scroll", ()=>{
  navbar.classList.toggle("scrolled", window.scrollY > 20);

  sections.forEach(sec=>{
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if(top >= offset && top < offset + height){
      links.forEach(a=>a.classList.remove("active"));
      document.querySelector(`nav a[href="#${id}"]`).classList.add("active");
    }
  });
});
