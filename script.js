const myLibrary = [];


function Book (title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
     this.id = crypto.randomUUID(); 
}



function addBooksToLibrary (title, author, pages, read){

    const newBooks = new Book(title, author, pages, read);

     myLibrary.push(newBooks);
}


function displayBooks(){
for (let i = 0; i < myLibrary.length; i++) {

const libraryBook = myLibrary[i];
const bookContent = document.createElement("div");
bookContent.classList.add("card"); 

const titleElement = document.createElement("p");
titleElement.classList.add("book-title");  
titleElement.textContent = libraryBook.title;
bookContent.appendChild(titleElement);


const authorElement = document.createElement("p");
authorElement.classList.add("book-author");  
authorElement.textContent = libraryBook.author;
bookContent.appendChild(authorElement);

const pagesElement = document.createElement("p");
pagesElement.classList.add("book-pages");  
pagesElement.textContent = libraryBook.pages;
bookContent.appendChild(pagesElement);

const readElement = document.createElement("p");
readElement.classList.add("book-read");  
readElement.textContent = libraryBook.read;
bookContent.appendChild(readElement);


const container = document.querySelector(".card-container");
container.appendChild(bookContent);


}
}



addBooksToLibrary("Harry Potter and the Sorcerer's Stone", "J.K. Rowling", 309, true);
addBooksToLibrary("The Lord of the Rings", "J.R.R. Tolkien", 1178, false);
addBooksToLibrary("To Kill a Mockingbird", "Harper Lee", 281, true);
addBooksToLibrary("1984", "George Orwell", 328, false);
displayBooks();