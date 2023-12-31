function fetchPosts() {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => {
      const wrapper = document.querySelector('.wrapper'); // Получаем элемент с классом "wrapper"

      const table = document.createElement('table');
      const thead = document.createElement('thead');
      const tbody = document.createElement('tbody');

      // Создаем заголовок таблицы
      const headerRow = document.createElement('tr');
      const arrHeaders = ['ID', 'Title', 'Body'];
      arrHeaders.forEach(headerText => {
        const th = document.createElement('th');
        th.textContent = headerText;
        th.classList.add('title');
        headerRow.appendChild(th);
      });

      thead.appendChild(headerRow);
      table.appendChild(thead);

      // Создаем строки таблицы с данными
      posts.forEach(post => {
        const row = document.createElement('tr');
        const idBox = document.createElement('td');
        idBox.classList.add('box');
        idBox.textContent = post.id;

        const titleBox = document.createElement('td');
        titleBox.classList.add('box');
        titleBox.textContent = post.title;

        const bodyBox = document.createElement('td');
        bodyBox.classList.add('box');
        bodyBox.textContent = post.body;

        row.appendChild(idBox);
        row.appendChild(titleBox);
        row.appendChild(bodyBox);
        tbody.appendChild(row);
      });
      table.appendChild(tbody);

      // Выводим таблицу внутри элемента с классом "wrapper"
      wrapper.appendChild(table);

      // Получаем все строки таблицы
      const rows = Array.from(table.querySelectorAll('tbody tr'));

      // Функция для сортировки таблицы по указанному столбцу
      const sortTable = (columnIndex, ascending) => {
        rows.sort((rowA, rowB) => {
          const boxA = rowA.cells[columnIndex].textContent.trim();
          const boxB = rowB.cells[columnIndex].textContent.trim();

          // Дополнительная проверка для столбца с ID
          if (columnIndex === 0) {
            return ascending ? boxA - boxB : boxB - boxA;
          }

          if (boxA < boxB) {
            return ascending ? -1 : 1;
          }
          if (boxA > boxB) {
            return ascending ? 1 : -1;
          }
          return 0;
        });

        // Удаляем все строки из таблицы
        rows.forEach(row => {
          tbody.removeChild(row);
        });

        // Добавляем отсортированные строки обратно в таблицу
        rows.forEach(row => {
          tbody.appendChild(row);
        });
      };

      // Обработчики событий для клика на заголовки столбцов
      table.querySelectorAll('th').forEach((header, index) => {
        header.addEventListener('click', () => {
          const isAscending = header.classList.contains('ascending');
          table.querySelectorAll('th').forEach(header => {
            header.classList.remove('ascending', 'descending');
          });
          if (isAscending) {
            header.classList.add('descending');
            sortTable(index, false);
          } else {
            header.classList.add('ascending');
            sortTable(index, true);
          }
        });
      });

      // Создаем поисковую строку
      const searchInput = document.createElement('input');
      const minLength = 3;
      const maxLength = 20;
      searchInput.setAttribute('minlength', minLength);
      searchInput.setAttribute('maxlength', maxLength);
      searchInput.type = 'search';
      searchInput.classList.add('input');
      searchInput.placeholder = 'Введите текст для поиска';

      wrapper.insertBefore(searchInput, table);

      // Обработчик события ввода в поисковую строку
      searchInput.addEventListener('input', () => {
        const searchText = searchInput.value.trim().toLowerCase();

        // Проверяем, что введено не менее 3 символов
        if (searchText.length >= minLength) {
          rows.forEach(row => {
            const cells = Array.from(row.querySelectorAll('td'));
            const rowText = cells.map(cell => cell.textContent.trim().toLowerCase());
            if (rowText.some(text => text.includes(searchText))) {
              row.style.display = '';
            } else {
              row.style.display = 'none';
            }
          });
        } else {
          // Если введено менее 3 символов, показываем все строки таблицы
          rows.forEach(row => {
            row.style.display = '';
          });
        }
      });
    })
    .catch(error => {
      console.error('Ошибка при получении данных:', error);
    });
}
// Вызываем функцию для получения и отображения данных
fetchPosts();