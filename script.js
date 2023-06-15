let myLibrary = [];

function Book(title, author, pages){
    this.title = title;
    this.author = author;
    this.pages = pages;
}

function addBookToLibrary(){
    const title = document.getElementById('title-input').value;
    const author = document.getElementById('author-input').value;
    const pages = document.getElementById('pages-input').value;

    const book = new Book(title, author, pages);
    myLibrary.push(book);

    displayBooks();
    resetForm();
}

function displayBooks(){
    const cardsContainer = document.querySelector(".library");
    cardsContainer.innerHTML = '';

    myLibrary.forEach((book, index) => {
        const card = document.createElement('div');
        card.classList.add('card');

        const title = document.createElement('span');
        title.setAttribute('id', 'title-text');
        title.textContent = `${book.title}`;

        const author = document.createElement('span');
        author.setAttribute('id', 'author-text');
        author.textContent = `Author: ${book.author}`;

        const pages = document.createElement('span');
        pages.setAttribute('id', 'pages-text');
        pages.textContent = `No. of Pages: ${book.pages}`;

        const removeBtn = document.createElement('button');
        removeBtn.setAttribute('id', 'remove-btn');
        removeBtn.textContent = "Remove";
        removeBtn.addEventListener("click", () => {
            removeBook(index);
        });

        const status = document.createElement('div');
        status.setAttribute('id', 'status');

        const statusLabel = document.createElement('label');
        statusLabel.setAttribute('for', `status-label-${index}`);
        statusLabel.textContent = "Unread"

        const statusBtn = document.createElement('input')
        statusBtn.type = "checkbox";
        statusBtn.setAttribute('id', `status-btn-${index}`);
        status.classList.add('check-box')
        statusBtn.addEventListener("change", () => {
            readStatus(statusBtn, statusLabel);
        });

        card.appendChild(title);
        card.appendChild(author);
        card.appendChild(pages);
        card.appendChild(status);
        card.appendChild(removeBtn);

        status.appendChild(statusBtn);
        status.appendChild(statusLabel);

        cardsContainer.appendChild(card);
    })
};

function resetForm(){
    document.getElementById('title-input').value = '';
    document.getElementById('author-input').value = '';
    document.getElementById('pages-input').value = '';
};

function removeBook(index){
    myLibrary.splice(index, 1);
    displayBooks();
};

function readStatus(a, b){
    if(a.checked){
        b.textContent = "Read";
    }
    else{
        b.textContent = "Unread";
    }
};

const newBookBtn = document.getElementById("new-book");
const form = document.querySelector("form");
const overlay = document.getElementById("overlay");

newBookBtn.addEventListener("click", () => {
    form.style.display = "flex";
    overlay.style.display = "block"; 
});

const addBookBtn = document.getElementById('add-btn');
addBookBtn.addEventListener("click", (event) => {
    event.preventDefault();
    addBookToLibrary();
    form.style.display = "none";
    overlay.style.display = "none"; 
});

const exitBtn = document.getElementById("exit-btn");
exitBtn.addEventListener("click", (event) => {
    event.preventDefault();
    form.style.display = "none";
    overlay.style.display = "none"; 
});


