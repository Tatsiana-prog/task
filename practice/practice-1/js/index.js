const imageContainer = document.getElementById('image-container');
const fileInput = document.getElementById('file-input');

imageContainer.addEventListener('click', function() {
  fileInput.click();
});

fileInput.addEventListener('change', function() {
  const file = fileInput.files[0];
  const reader = new FileReader();

  reader.onload = function(e) {
    const image = document.getElementById('image');
    image.src = e.target.result;
  };

  reader.readAsDataURL(file);
});