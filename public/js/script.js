const dragDrop = document.querySelector('#image');
const dropZone = document.querySelector('#drop-zone');
const upload = document.querySelector('#upload');
const image = document.querySelector('#preview-image');
const containerForm = document.querySelector('.container');
const progressBar = document.querySelector('.container-progress');
const imagePreviewContainer = document.querySelector('.container-preview');



/* when drag drop image change view */
dragDrop.addEventListener('change', function(e) {
    console.log(e.target.files[0]);
    containerForm.style.display = 'none';
    progressBar.style.display = 'flex';
    imagePreviewContainer.style.display = 'flex';

    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = function(e) {
        image.src = e.target.result;
        imagePreview.src = e.target.result;
        imagePreviewContainer.src = e.target.result;
    }        
    imagePreview.src = URL.createObjectURL(e.target.files[0]);
}
);