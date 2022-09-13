window.onload = () => {
    fetch('components/nav.html')
        .then(data => {
            return data.text()
        })
        .then(data => {
            document.getElementById("navbar").innerHTML = data;
        })

    fetch('components/sidebar.html')
        .then(data => {
            return data.text()
        })
        .then(data => {
            document.getElementById("leftSidebar").innerHTML = data;
        })

    fetch('components/footer.html')
        .then(data => {
            return data.text()
        })
        .then(data => {
            document.getElementById("footer").innerHTML = data;
        })
}

document.getElementById("validation_link_html").setAttribute("href", "https://validator.w3.org/check?uri=" + location.href);
document.getElementById("validation_link_css").setAttribute("href", "https://jigsaw.w3.org/css-validator/validator?uri=" + location.href);