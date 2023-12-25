const fileInput = document.getElementById('file-input');
const imagePreview = document.getElementById('image-preview');

fileInput.addEventListener('change', function() {
  const file = fileInput.files[0];
  const reader = new FileReader();

  reader.onload = function(e) {
    imagePreview.src = e.target.result;
  };

  reader.readAsDataURL(file);
});

imagePreview.addEventListener('click', function() {
  fileInput.click();
});