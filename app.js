let newBook = document.querySelector(".newBook");
let content = document.querySelector(".content");


function book(title,author,pages,status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;

}

const dune = {
    title: 'Dune',
    author: 'Frank Herbert',
    pages: '850',
    status:'reading'
}

const theGirlOnTheTrain = {
    title: 'Girl on the train',
    author: 'Paula Hawkins',
    pages: '400',
    status:'Completed'
}

const myLibrary = [dune,theGirlOnTheTrain];


function addToLibrary() {

}

/* 

 */
function displayBooks() {
    myLibrary.map(loop) 
    
    function loop(item) {
    const books = document.createElement("div");
    books.classList.add('books');
    content.appendChild(books);

    const bookTitle = document.createElement("div");
    bookTitle.classList.add('title')
    books.appendChild(bookTitle);
    bookTitle.textContent = item.title;

    const bookAuthor = document.createElement("div");
    bookAuthor.classList.add('author')
    books.appendChild(bookAuthor)
    bookAuthor.textContent = item.author;

    const bookPages = document.createElement("div");
    bookPages.classList.add('pages')
    books.appendChild(bookPages)
    bookPages.textContent = item.pages;

    const bookStatus = document.createElement("div");
    bookStatus.classList.add('status')
    books.appendChild(bookStatus)
    bookStatus.textContent = item.status;
    
    
    
    };
    

    
}
displayBooks(myLibrary);


