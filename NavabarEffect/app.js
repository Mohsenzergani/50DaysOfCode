// get section
const sections = document.querySelectorAll("section");
// get trasn Class
const trans = document.querySelector(".trans");
// get Colors
const gradients = ["coral", "chartreuse", "chocolate", "cadetblue"];
const option = {
  threshold: 0.7,
};

let observer = new IntersectionObserver(newScroll, option);

function newScroll(entries) {
  entries.forEach((entry) => {
    const className = entry.target.className;
    const activeLink = document.querySelector(`[data-page="${className}"]`);
    const enlementIndex = entry.target.getAttribute("data-index");
    const coordinates = activeLink.getBoundingClientRect();
    const directions ={
        height:coordinates.height,
        width:coordinates.width,
        top:coordinates.top,
        left:coordinates.left
    }
  });
}

sections.forEach(function (section) {
  observer.observe(section);
});
