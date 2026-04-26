// Do your work here...

// Inisiasi key local storage book
const books = [];
const STORAGE_KEY = 'BOOKS_KEY';
const RENDER_EVENT = 'render-book';
const SAVED_EVENT = 'saved-book';

// Inisiasi button dan elemen html
const addBookButton = document.getElementById('bookFormSubmit');
const buttonFinish = document.getElementById('btn-finish');
const buttonDelete = document.getElementById('btn-delete');

const bookTitle = document.getElementById('bookFormTitle');
const bookAuthor = document.getElementById('bookFormAuthor');
const bookYear = document.getElementById('bookFormYear');
const bookIsComplete = document.getElementById('bookFormIsComplete');

function saveBooksData() {
    const parsed = JSON.stringify(books);
    localStorage.setItem(STORAGE_KEY, parsed);

    document.dispatchEvent(new Event(RENDER_EVENT));
}

// Get book items from local storage
function getBookItems() {
    return JSON.parse(localStorage.getItem(STORAGE_KEY));
}

// Delete book item by book id
function deleteBookItem(bookId) {
    console.log(books);
    const bookIndex = books.findIndex(book => book.id === bookId);

    if (bookIndex === -1) return;
    books.splice(bookIndex, 1);
    console.log(books);

    document.dispatchEvent(new Event(RENDER_EVENT));
    saveBooksData();
}

// Ganti ke sudah dibaca
function toFinishBook(bookId) {
    const bookIndex = books.findIndex(book => book.id === bookId);

    if (bookIndex === -1) return;

    books[bookIndex].isComplete = true;
    document.dispatchEvent(new Event(RENDER_EVENT));
    saveBooksData();
}

// Make book element
function createBook(bookItem) {
    // create element
    const bookDiv = document.createElement('div');
    bookDiv.classList.add('book');
    bookDiv.setAttribute('data-bookid', String(bookItem.id));
    bookDiv.setAttribute('data-testid', 'bookItem');

    const bookTitle = document.createElement('h3');
    bookTitle.setAttribute('data-testid', 'bookItemTitle')
    bookTitle.textContent = bookItem.title;

    const bookAuthor = document.createElement('p');
    bookAuthor.setAttribute('data-testid', 'bookItemAuthor');
    bookAuthor.textContent = "Penulis: " + bookItem.author;

    const bookYear = document.createElement('p');
    bookYear.setAttribute('data-testid', 'bookItemYear');
    bookYear.textContent = "Tahun: " + bookItem.year;

    // Button
    const buttonDiv = document.createElement('div');
    const buttonFinish = document.createElement('button');
    buttonFinish.id = 'btn-finish';
    if (bookItem.isComplete) {
        buttonFinish.setAttribute('data-testid', 'bookItemIsCompleteButton');
        buttonFinish.textContent = 'Belum selesai dibaca';
    
        buttonFinish.addEventListener('click', () => {
            console.log('akan ke belum selesai dibaca');
        });
    } else {
        buttonFinish.setAttribute('data-testid', 'bookItemIsCompleteButton');
        buttonFinish.textContent = 'Selesai dibaca';
    
        buttonFinish.addEventListener('click', () => {
            console.log('akan ke selesai dibaca');
        });
    }

    const buttonDelete = document.createElement('button');
    buttonDelete.id = 'btn-delete';
    buttonDelete.setAttribute('data-testid', 'bookItemDeleteButton');
    buttonDelete.textContent = 'Hapus Buku';

    buttonDelete.addEventListener('click', () => {
        deleteBookItem(bookItem.id);
        console.log(`Anda menghapus buku ${bookItem.title}, ${bookItem.author}, ${bookItem.year}, ${bookItem.isComplete}`);
    });

    const buttonEdit = document.createElement('button');
    buttonEdit.id = 'btn-edit';
    buttonEdit.setAttribute('data-testid', 'bookItemEditButton');
    buttonEdit.textContent = 'Edit Buku';

    buttonDiv.append(buttonFinish, buttonDelete, buttonEdit);

    bookDiv.append(bookTitle, bookAuthor, bookYear, buttonDiv);
    return bookDiv;
}

// Render Buku dari local storage
function renderBookList() {

    const bookItem = getBookItems();

    //cek apakah buku belum selesai dibaca


}


// Event listener for add book item
addBookButton.addEventListener('click', (event) => {
    event.preventDefault();

    const bookItem = {
        id: Date.now(),
        title: bookTitle.value,
        author: bookAuthor.value,
        year: Number(bookYear.value),
        isComplete: bookIsComplete.checked
    }

    // Save to storage
    books.push(bookItem);
    const parsed = JSON.stringify(books);
    localStorage.setItem(STORAGE_KEY, parsed);
    alert(`Anda menyimpan buku ${bookTitle.value}, ${bookAuthor.value}, ${bookYear.value}, ${bookIsComplete.checked}`);
    document.dispatchEvent(new Event(RENDER_EVENT));
});

// Listener dokumen
document.addEventListener(RENDER_EVENT, () => {
    const completeBookList = document.getElementById('completeBookList');
    completeBookList.innerHTML = '';

    const incompleteBookList = document.getElementById('incompleteBookList');
    incompleteBookList.innerHTML = '';

    for (const bookItem of books) {
        const bookElement = createBook(bookItem);
        if (!bookItem.isComplete) {
            incompleteBookList.append(bookElement);
        } else {
            completeBookList.append(bookElement);
        }
    };
});