const modal = document.getElementById("myModal");
const imageElements = document.getElementsByClassName("tile__image");
for(let i=0; i<imageElements.length; i++) {
    let currentImage = imageElements[i];

    const modalImg = document.getElementById("img01");
    const captionText = document.getElementById("caption");

    currentImage.onclick = function(){
        application.log('Modal click: ' + this.src);
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

function goToGallery(path) {
    location.href = path;
}

function previous()
{
    const pagination = document.getElementsByClassName("pagination")[0];
    let index = pagination.getAttribute('data-index');
    const min = pagination.getAttribute('data-min');
    const links = document.getElementsByTagName("a");

    for(var i=0, maxLinks=links.length; i<maxLinks; i++) {
        if (links[i].innerHTML == index) {
            if (index > min) {
                index--;
                application.log('Navigatin to: ' + links[i-1].href);
                location.href = links[i-1].href;   
            }
        }
    }
}

function next ()
{
    const pagination = document.getElementsByClassName("pagination")[0];
    let index = pagination.getAttribute('data-index');
    const max = pagination.getAttribute('data-max');
    const links = document.getElementsByTagName("a");

    for(var i=0, maxLinks=links.length; i<maxLinks; i++) {
        if (links[i].innerHTML == index) {
            if (index < max) {
                index++;
                application.log('Navigatin to: ' + links[i+1].href);
                location.href = links[i+1].href;
            }
        }
    }
}