//TODO Go back to example.js for questions to be answered

var Book = function(title, genre, author, read, readDate) {
    this.title = title;
    this.genre = genre;
    this.author = author;
//TODO Read (true or false)
    this.read = read || false;
//TODO Read date, can be blank, otherwise needs to be a JS Date() object
    if (this.read === read) {
        this.readDate = readDate || Date();
    }
    else {
        this.readDate = null;}
};

var book1 = new Book('Harry Potter','children','JK Rowling','read');
var book2 = new Book('Twilight','fantasy','Stephanie Meyer');
var book3 = new Book('Life of Pie','fiction','Yann Martel');
var book4 = new Book('Javascript','computers','O\'Reilly');
var book5 = new Book('Influence','self-development','Some Psych');

var bookShelf = [book1, book2, book3, book4, book5];
console.log(bookShelf);

// console.log(book1);
// console.log(book2);
// console.log(book3);
// console.log(book4);
// console.log(book5);

var BookList = function(bookList) {
    this.bookShelf = bookList || [];
    // this.booksRead = booksRead;
    // this.booksNotRead = booksNotRead;
    this.nextBook = function(){
        for (var i = 0; i < bookShelf.length; i++) {
            var book = bookShelf[i];
            if (book.read !== 'read'){
                return book;
            }
        }
    };
};


// BookList(bookList);
// console.log(BookList.bookShelf);
var booklist = new BookList(bookShelf);
console.log(booklist.nextBook());

// bookList.nextBook(bookList.bookShelf);