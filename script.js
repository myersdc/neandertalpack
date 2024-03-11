function toggleOptions(id) {
    var options = document.getElementById(id);
    if (options.style.display === "none") {
        options.style.display = "block";
    } else {
        options.style.display = "none";
    }
}

function toggleLinks(id) {
    var links = document.getElementById(id);
    if (links.style.display === "none") {
        links.style.display = "block";
    } else {
        links.style.display = "none";
    }
}

document.addEventListener('contextmenu', event => event.preventDefault());
    document.addEventListener('keydown', event => {
        if (event.ctrlKey || event.metaKey || event.key === 'c' || event.key === 'C') {
            event.preventDefault();
        }
    });
