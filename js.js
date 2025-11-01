const myLibrary = [];
const booksContainer=document.querySelector(".books-container")

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

const book5 = {
    title: "Letter from an Unknown Woman",
    author: "Stefan Zweig",
    pages: 72,
    read: false
};

const book6 = {
    title: "Letter from an Unknown Woman",
    author: "Stefan Zweig",
    pages: 72,
    read: false
};

const book7 = {
    title: "Letter from an Unknown Woman",
    author: "Stefan Zweig",
    pages: 72,
    read: false
};

const book9 = {
    title: "Letter from an Unknown Woman",
    author: "Stefan Zweig",
    pages: 72,
    read: false
};

const book10 = {
    title: "Letter from an Unknown Woman",
    author: "Stefan Zweig",
    pages: 72,
    read: false
};

let defaultBooks=[book1,book2,book3,book4,book5,book6,book7,book9,book10]

for(let i=0;i<9;i++){
    addBookToLibrary(defaultBooks[i])
    console.log(myLibrary[i])
}

function createBookCard(book){
    let newCard=document.createElement("div")
    let newBook=document.createElement("div")
    let newBookMeta=document.createElement("div")
    let newTitleContainer=document.createElement("div")
    let newTitle=document.createElement("div")
    let newAuthor=document.createElement("p")
    let newPages=document.createElement("div")
    let newPagesText = document.createElement("span")
    let newBookIcon=document.createElement("div")
    let newReadStat=document.createElement("div")

    newCard.classList.add("card")
    newBook.classList.add("book")
    newBookMeta.classList.add("book-meta")
    newTitleContainer.classList.add("title-container")
    newTitle.classList.add("title")
    newAuthor.classList.add("author")
    newPages.classList.add("pages")
    newBookIcon.classList.add("book-icon")
    newReadStat.classList.add("read-state")


    newCard.appendChild(newBook)
    newCard.appendChild(newBookMeta)
    newBook.appendChild(newTitleContainer)
    newBook.appendChild(newAuthor)
    newTitleContainer.appendChild(newTitle)
    newBookMeta.appendChild(newPages)
    newPages.appendChild(newBookIcon)
    newPages.appendChild(newPagesText)
    newBookMeta.appendChild(newReadStat)

    newTitle.textContent=book.title;
    newAuthor.textContent=book.author;
    newPagesText.innerHTML = `&ensp;${book.pages}`;
    console.log(newTitle, newTitle.textContent);
    console.log(newAuthor, newAuthor.textContent);

     
    booksContainer.appendChild(newCard)
}


function dispalyBooks(myLibrary){
    for(let book of myLibrary){
        createBookCard(book)
    }
    const readIcon=document.querySelectorAll(".read-state")
    const bookIcon=document.querySelectorAll(".book-icon")

    for(let icon of readIcon){
      icon.innerHTML= '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>prime</title><path d="M12,0A12,12,0,1,0,24,12,12,12,0,0,0,12,0ZM11.52,17L6,12.79l1.83-2.37L11.14,13l4.51-5.08,2.24,2Z"/></svg>'
    }
    for(let icon of bookIcon){
      icon.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 2L14 6.5V17.5L19 13V2M6.5 5C4.55 5 2.45 5.4 1 6.5V21.16C1 21.41 1.25 21.66 1.5 21.66C1.6 21.66 1.65 21.59 1.75 21.59C3.1 20.94 5.05 20.5 6.5 20.5C8.45 20.5 10.55 20.9 12 22C13.35 21.15 15.8 20.5 17.5 20.5C19.15 20.5 20.85 20.81 22.25 21.56C22.35 21.61 22.4 21.59 22.5 21.59C22.75 21.59 23 21.34 23 21.09V6.5C22.4 6.05 21.75 5.75 21 5.5V19C19.9 18.65 18.7 18.5 17.5 18.5C15.8 18.5 13.35 19.15 12 20V6.5C10.55 5.4 8.45 5 6.5 5Z" /></svg>'
    }
}



dispalyBooks(myLibrary)


