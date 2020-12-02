const modal = document.getElementById("myModal");
const imageElements = document.getElementsByClassName("tile__image");
for(let i=0; i<imageElements.length; i++) {
    let currentImage = imageElements[i];

    const modalImg = document.getElementById("img01");
    const captionText = document.getElementById("caption");

    currentImage.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
}

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];
if (span) {
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }
}

function goToGallery(path){
    location.href = path;
}

// 
(function(){
    // all your code here
    var foo = function() {};
    window.onload = foo;
    // ...
})();