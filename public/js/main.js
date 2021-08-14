/**
 * Initialize modal logic.
 */
if (application.modal) {
    application.modal.init();
}

/**
 * Initialize gallery logic.
 */
if (application.gallery) {
    application.gallery.init();
}

// Selecting all the images.
const images = document.querySelectorAll("img");

// The API options: when 20% of the image is visible.
const imgOptions = {
    threshold: 0.2
};

// Calling the API constructor.
const imgObserver = new IntersectionObserver((entries, imgObserver) => {
    entries.forEach((entry) => {
        // If the image is not visible.
        if (!entry.isIntersecting) return;

        // If it's visible.
        const img = entry.target;
        img.src = img.src.replace("-small", "");
        imgObserver.unobserve(entry.target);


    });
}, imgOptions);

// Observing the images.
images.forEach((img) => {
    imgObserver.observe(img);
});
