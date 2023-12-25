function fetchPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(posts => {
        const table = document.createElement('table');
        const thead = document.createElement('thead');
        const tbody = document.createElement('tbody');
  
        // Создаем заголовок таблицы
        const headerRow = document.createElement('tr');
        const arrHeaders = ['ID', 'Title', 'Body'];
        arrHeaders.forEach(headerText => {
          const th = document.createElement('th');
          th.textContent = headerText;
          th.classList.add('title')
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
          titleBox.textContent = post.title;
          titleBox.classList.add('box');

          const bodyBox = document.createElement('td');
          bodyBox.textContent = post.body;
          bodyBox.classList.add('box');
  
          row.appendChild(idBox);
          row.appendChild(titleBox);
          row.appendChild(bodyBox);
          tbody.appendChild(row);
        });
        table.appendChild(tbody);
  
        // Выводим таблицу на страницу
        document.body.appendChild(table);
      })
      .catch(error => {
        console.error('Ошибка при получении данных:', error);
      });
  }
  
  // Вызываем функцию для получения и отображения данных
  fetchPosts();
  