const menuButton = document.querySelector("#menuButton");
const menuList = document.querySelector("#menuList");

menuButton.addEventListener("click", function() {
    menuList.classList.toggle("hide");
});

function handleResize() {
    if (window.innerWidth > 1000) {
        menuList.classList.remove("hide");

    } else {
        menuList.classList.add("hide");
    }
}

handleResize();
window.addEventListener("resize", handleResize);

function viewerTemplate(pic, alt) {
    return `<div class="viewer">
        <button class="close-viewer">X</button>
        <img src="${pic}" alt="${alt}">
        </div>`;
    
}


function viewHandler(event) {
    const clickedElement = event.target;

    if (clickedElement.tagName.toLowerCase() === "img") {
        const src = clickedElement.getAttribute("src");
        const baseSrc = src.split("-")[0];
        const fullSrc = `${baseSrc}-full.jpeg`;

        document.body.insertAdjacentHTML("afterbegin", viewerTemplate(fullSrc, clickedElement.alt));
        document.querySelector(".close-viewer").addEventListener("click", closeViewer);
    }
}
function closeViewer() {
    const viewer = document.querySelector(".viewer");
    if (viewer) {
        viewer.remove();
    }
}
	
const gallery = document.querySelector(".gallery");
gallery.addEventListener("click", viewHandler);
