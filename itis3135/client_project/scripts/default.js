window.onload = () => {

// gets current name
const activePage = window.location.pathname;
// loops through each element with data-switcher(nav links) and gets all links associated 
const navLinks = document.querySelectorAll('[data-switcher]').forEach(link => {
    // if link includes the name of our active page, it adds the is-active class
    if (link.href.includes(`${activePage}`)) {
        link.classList.add('is-active');
    }
})
}
