let bookCollection = [];

const addBook = () => {
  const titleInput = document.getElementById('title-input');
  const authorInput = document.getElementById('author-input');

  const title = titleInput.value;
  const author = authorInput.value;

  const newBook = { title, author };

  bookCollection.push(newBook);

  titleInput.value = '';
  authorInput.value = '';
};

const removeBook = (title) => {  bookCollection = bookCollection.filter((book) => book.title !== title);};