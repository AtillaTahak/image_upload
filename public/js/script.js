const dragDrop = document.querySelector('#image');
const containerForm = document.querySelector('.container');
const progress = document.querySelector('.container-progress');
const progressBar = document.querySelector('.progress-bar');
const form = document.querySelector('#form');
const copyText = document.querySelector('#copy-text');
const copyBtn = document.querySelector('#copy-btn');


try {
    dragDrop.addEventListener('change', function (e) {
        containerForm.style.display = 'none';
        progress.style.display = 'flex';
        console.log(progress);
        setTimeout(() => {
            progressBar.style.width = '100%';
            progressBar.ariaValueNow = '100';
            progress.style.display = 'none';
        }, 1000);
        form.submit();
    }
    );
} catch (error) {
    copyBtn.addEventListener('click', function (e) {
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        document.execCommand('copy');
        alert('Copied the text: ' + copyText.value);
    }
    );
}
