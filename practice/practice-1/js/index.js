const fileInput = document.getElementById('file-input');
const imagePreview = document.getElementById('image-preview');
const resetImage = document.getElementById('image-reset');
let originalImageSrc = '';

fileInput.addEventListener('change', function() {
  const file = fileInput.files[0];
  const reader = new FileReader();

  reader.onload = function(e) {
    imagePreview.src = e.target.result;
    originalImageSrc = e.target.result; // Сохранить оригинальный источник изображения
    resetImage.style.display = 'inline'; // Показать кнопку сброса после выбора изображения
  };

  reader.readAsDataURL(file);
});

imagePreview.addEventListener('click', function() {
  fileInput.click();
});

resetImage.addEventListener('click', function() {
  fileInput.value = ''; // Сбросить значение input
  imagePreview.src = './img/logo-image.png'; // Очистить источник изображения 
  resetImage.style.display = 'none'; // Скрыть кнопку сброса
});

//telephone mask

// Получаем поле ввода телефона
var telInput = document.getElementById('tel');

// Устанавливаем маску для поля ввода телефона
telInput.addEventListener('input', function() {
  var telValue = telInput.value;
  
  // Удаляем все символы, кроме цифр
  telValue = telValue.replace(/\D/g, '');
  
  // Добавляем пробелы и дефисы в нужные позиции
  if (telValue.length > 0) {
    telValue = '+7 ' + telValue.slice(0, 3) + ' ' + telValue.slice(3, 6) + '-' + telValue.slice(6, 8) + '-' + telValue.slice(8, 10);
  }
  
  // Устанавливаем отформатированное значение обратно в поле ввода
  telInput.value = telValue;
});