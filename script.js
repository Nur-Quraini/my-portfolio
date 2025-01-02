// Function to show the image preview when an image is clicked
function showPreview(imageElement) {
    const previewContainer = document.getElementById('image-preview-container');
    const previewImage = document.getElementById('preview-image');
    
    // Set the source of the preview image to the clicked image's source
    previewImage.src = imageElement.src;
    
    // Show the preview container
    previewContainer.style.display = 'flex';
}

// Function to close the image preview when clicked outside the preview image
function closePreview(event) {
    if (event.target === document.getElementById('image-preview-container')) {
        document.getElementById('image-preview-container').style.display = 'none';
    }
}
