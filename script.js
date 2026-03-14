//container of book contents
let myLibrary = [];


function Book (title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
     this.id = crypto.randomUUID(); 
}


//passing functions 
function addBooksToLibrary (title, author, pages, read){

    const newBooks = new Book(title, author, pages, read);

     myLibrary.push(newBooks);
}
//function to remove a book
 function removeFromLibrary(id){
           myLibrary = myLibrary.filter(book => book.id !== id);
           
           }

//function for read status
           function readStatus(id){
            const book = myLibrary.find(book => book.id === id);
            if(book){
                book.read = !book.read;
            }
           }

function displayBooks(){

    //prevent default books from showing when adding new books
       const container = document.querySelector(".card-container");
    container.innerHTML = "";  



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

readElement.textContent = libraryBook.read ? "Read" : "Unread";
bookContent.appendChild(readElement);

 const deleteBtn = document.createElement("button");
deleteBtn.textContent = "Delete";
deleteBtn.setAttribute("data-id", libraryBook.id);

    deleteBtn.addEventListener("click", function(event) {
         const bookId = event.target.getAttribute("data-id");
         removeFromLibrary(bookId);
         displayBooks();
        });

const toggleElement = document.createElement("button");
toggleElement.textContent = libraryBook.read ? "Read" : "Unread";
toggleElement.setAttribute("data-id", libraryBook.id);

if (libraryBook.read) {
    toggleElement.classList.add("btn-read");
} else {
    toggleElement.classList.add("btn-unread");
}

toggleElement.addEventListener("click", function(event){
    const bookId = event.target.getAttribute("data-id");
    readStatus(bookId);
    displayBooks();
})

    
    

const container = document.querySelector(".card-container");
container.appendChild(bookContent);
bookContent.appendChild(deleteBtn);
bookContent.appendChild(toggleElement);


}
}


const form = document.getElementById("book-form");
form.addEventListener("submit", function(event) {
    event.preventDefault();  
  
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const read = document.getElementById("read").checked; 
    
    // add book to library
    addBooksToLibrary(title, author, pages, read);
    
    // clear the form
    form.reset();
    
  displayBooks();
});

const closeBtn = document.getElementById("closeBtn");

closeBtn.addEventListener("click", function() {
    const form = document.getElementById("book-form");
    form.style.display = "none"; 
});

const addBtn = document.getElementById("addBtn");

addBtn.addEventListener("click", function() {
    const form = document.getElementById("book-form");

      if (form.style.display === "none") {
        form.style.display = "block";  


    }

    else {
        form.style.display = "none"; 
    }
});


addBooksToLibrary("Harry Potter and the Sorcerer's Stone", "J.K. Rowling", 309, true);
addBooksToLibrary("The Lord of the Rings", "J.R.R. Tolkien", 1178, false);
addBooksToLibrary("To Kill a Mockingbird", "Harper Lee", 281, true);
addBooksToLibrary("1984", "George Orwell", 328, false);
addBooksToLibrary("The Great Gatsby", "F. Scott Fitzgerald", 180, true); 
displayBooks();