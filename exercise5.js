//TODO Go back to example.js for questions to be answered

var Book = function(title, genre, author, read, readDate) {
    this.title = title;
    this.genre = genre;
    this.author = author;
//TODO Read (true or false)
    this.read = read || false;
//TODO Read date, can be blank, otherwise needs to be a JS Date() object
    if (this.read === true) {
        this.readDate = readDate || Date();
    }
    else {
        this.readDate = null;
    }
};

var book1 = new Book('Harry Potter','children','JK Rowling',true,"Thurs Jan 31 2014 09:12:50");
var book2 = new Book('Twilight','fantasy','Stephanie Meyer');
var book3 = new Book('Life of Pie','fiction','Yann Martel');
var book4 = new Book('Javascript','computers','O\'Reilly');
var book5 = new Book('Influence','self-development','Some Psych');

var bookShelf = [book1, book2, book3, book4, book5];

var bookExtra = new Book('Classical Music','music','Wolfgang Mozart');


// console.log(bookShelf);
// console.log(book1);
// console.log(book2);
// console.log(book3);
// console.log(book4);
// console.log(book5);

var BookList = function(bookList) {

    this.bookShelf = bookList || [];
    // this.booksRead = booksRead;
    // this.booksNotRead = booksNotRead;

    // returns next book to read, assumes currently reading 1st unread book in list so fxn returns 2nd unread book from list
    this.nextBook = function(){
        for (var i = 0; i < bookShelf.length; i++) {
            if (bookShelf[i].read === false){
                return bookShelf[i+1];
            }
        }
    };

    // returns current book being read, assumes currently reading 1st unread book in list
    this.currentBook = function(){
        for (var i = 0; i < bookShelf.length; i++) {
            if (bookShelf[i].read === false){
                return bookShelf[i];
            }
        }        
    };

    // returns last book read
    this.lastBook = function(){
        for (var i = 0; i < bookShelf.length; i++) {
            if (bookShelf[i].read === false){
                return bookShelf[i-1];
            }
        }        
    };

    // adds book to list
    this.addBook = function(newBook){
        bookShelf.push(newBook);
    };

    // marks current book as read and adds current date; algorithm auto-shifts current book to next in list, and last book read to this one
    this.finishCurrentBook = function(){
        for (var i = 0; i < bookShelf.length; i++) {
            if (bookShelf[i].read === false){
                bookShelf[i].read = true;
                bookShelf[i].readDate = Date();
// TODO It should also change the "next book" pointer to a random book that hasn't been read yet.                
                return;
            }
        }                
    };
};


var booklist = new BookList(bookShelf);

// console.log(booklist.bookShelf);
// console.log(booklist.currentBook());
// console.log(booklist.nextBook());
// console.log(booklist.lastBook());

// booklist.addBook(bookExtra);
// console.log(booklist.bookShelf);

booklist.finishCurrentBook();
console.log(booklist.bookShelf);
console.log(booklist.currentBook());
console.log(booklist.lastBook());

console.log(booklist.nextBook());
