let sections = document.getElementsByClassName('js-dia');
sections = Array.from(sections);
let navLi = document.getElementsByClassName('js-dias');
navLi = Array.from(navLi);

window.onscroll = () => {
  let current = '';

  sections.forEach((section) => {
    const sectionTop = section.offsetTop + 800;

    if (scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLi.forEach((li) => {
    li.classList.remove('active');
    if (li.classList.contains(current)) {
      li.classList.add('active');
    }
  });
};
