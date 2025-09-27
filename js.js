const myLibrary = [];

function Book(title, author, pages, read) {
    this.title=title
    this.author=author
    this.pages=pages
    this.read=read
    this.uuid=crypto.randomUUID()
}

function addBookToLibrary(book) {
   const myBook=new Book(book.title, book.author,book.pages, book.read)
   myLibrary.push(myBook)
}

const book1={
    title:"The Trial",
    author:"Franz Kafka",
    pages:272,
    read:false
}

const book2 = {
    title: "The Stranger",
    author: "Albert Camus",
    pages: 184,
    read: false
};

const book3 = {
    title: "The Plague",
    author: "Albert Camus",
    pages: 308,
    read: false
};

const book4 = {
    title: "Letter from an Unknown Woman",
    author: "Stefan Zweig",
    pages: 72,
    read: false
};

let defaultBooks=[book1,book2,book3,book4]

for(let i=0;i<4;i++){
    addBookToLibrary(defaultBooks[i])
    console.log(myLibrary[i])
}

function createBookCard(){
    let newBook=document.createElement("div")
    newBook.classList.add("book")
    let booksContainer=document.querySelector(".books-container")
    booksContainer.appendChild(newBook)
}

function dispalyBooks(myLibrary){
    for(let book in myLibrary){
        createBookCard()
    }
}

dispalyBooks(myLibrary)
