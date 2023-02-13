let bookCollection = [];

const addBook = () => {
  const titleInput = document.getElementById('title-input');
  const authorInput = document.getElementById('author-input');

  const title = titleInput.value;
  const author = authorInput.value;

  const newBook = { title, author };

  bookCollection.push(newBook);
  localStorage.setItem('bookCollection', JSON.stringify(bookCollection));

  titleInput.value = '';
  authorInput.value = '';
  displayBooks();
};

const removeBook = (title) => {
  bookCollection = bookCollection.filter((book) => book.title !== title);
  localStorage.setItem('bookCollection', JSON.stringify(bookCollection));

  displayBooks();
};

const displayBooks = () => {
  if (bookCollection.length === 0) {
    return;
  }
  const bookList = document.getElementById('book-list');
  bookList.innerHTML = '';

  bookCollection.forEach((book) => {
    const bookContainer = document.createElement('article');
    const bookTitle = document.createElement('p');
    const bookAuthor = document.createElement('p');
    const removeBtn = document.createElement('button');
    const hr = document.createElement('hr');

    bookList.appendChild(bookContainer);
    bookContainer.append(bookTitle, bookAuthor, removeBtn, hr);
    bookTitle.textContent = book.title;
    bookAuthor.textContent = book.author;
    removeBtn.innerText = 'Remove';

    removeBtn.addEventListener('click', () => removeBook(book.title));
  });
};

const addbutton = document.getElementById('addButton');
addbutton.addEventListener('click', addBook);

window.addEventListener('load', () => {
  const storedCollection = JSON.parse(localStorage.getItem('bookCollection'));
  if (storedCollection) {
    bookCollection.push(...storedCollection);
  }
  displayBooks();
});
