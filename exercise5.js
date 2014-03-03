// TODO(optional) when have time, add delete or change "current" and "next" pointers if reader changes her mind

var Book = function(title, genre, author, read, readDate) {
    this.title = title;
    this.genre = genre;
    this.author = author;
// Read (true or false)
    this.read = read || false;
// Readdate, can be blank, otherwise needs to be a JS Date() object; can only apply date if marked "read"
    if (this.read === true) {
        this.readDate = readDate || new Date();
    }
    else {
        this.readDate = null;
    };
};

var book1 = new Book('Harry Potter','children','JK Rowling',true,new Date("2013/03/13"));
var book2 = new Book('Twilight','fantasy','Stephanie Meyer',true);
var book3 = new Book('Life of Pi','fiction','Yann Martel');
var book4 = new Book('Javascript','computers','O\'Reilly');
var book5 = new Book('Influence','self-development','Some Psych');

var bookShelf = [book1, book2, book3, book4, book5];

var bookExtra = new Book('Classical Music','music','Wolfgang Mozart');


var BookList = function(bookList) {
    this.bookShelf = bookList || [];

    var readCounter = 0
    for (var i = 0; i < bookShelf.length; i++) {
            if (bookShelf[i].read) {
                readCounter += 1;
            } 
        } this.booksRead = readCounter;

    var unreadCounter = 0
    for (var i = 0; i < bookShelf.length; i++) {
            if (bookShelf[i].read === false) {
                unreadCounter += 1;
            } 
        } this.booksUnread = unreadCounter;

    // Marks book as "current" property 
    this.markCurrent = function(booktitle){
    // Checks to make sure no other book in list already marked as current
        for (var i = 0; i < bookShelf.length; i++) {
            if (bookShelf[i].current) {
                return ("Already marked " + bookShelf[i].title + " as next in queue");
            } 
        }

    // Checks to make sure title exists
        var titleExists = false;
        for (var i = 0; i < bookShelf.length; i++) {
            if (bookShelf[i].title === booktitle) {
                titleExists = true;
            } 
        }
        if (titleExists === false) {
            return ("That title does not exist in the booklist!");
        }
    // Checks to make sure title not already read, marked as current, or next in queue
    // If passes all tests, will add property as marked as "currently reading"
        for (var i = 0; i < bookShelf.length; i++) {
            if (bookShelf[i].title === booktitle){
                if (bookShelf[i].read) {
                    return ("Already marked this book as read.");
                } else if (bookShelf[i].current) {
                    return ("Already marked this book as current.");
                } else if (bookShelf[i].next) {
                    return ("Already marked this book as next in queue");
                } else {
                    bookShelf[i].current = true;
                    return (bookShelf[i].title + " successfully marked as currently reading!");
                } 
            }
        }
    };


    // Marks book as "next" property 
    this.markNext = function(booktitle){
    // Checks to make sure no other book in list already marked as next
        for (var i = 0; i < bookShelf.length; i++) {
            if (bookShelf[i].next) {
                return ("Already marked " + bookShelf[i].title + " as next in queue");
            } 
        }
    // Checks to make sure title exists
        var titleExists = false;
        for (var i = 0; i < bookShelf.length; i++) {
            if (bookShelf[i].title === booktitle) {
                titleExists = true;
            } 
        }
        if (titleExists === false) {
            return ("That title does not exist in the booklist!");
        }
    // Checks to make sure title not already read, marked as current, or next in queue
    // If passes all tests, will add property as marked as "next" in queue
        for (var i = 0; i < bookShelf.length; i++) {
            if (bookShelf[i].title === booktitle){
                if (bookShelf[i].read) {
                    return ("Already marked this book as read.");
                } else if (bookShelf[i].current) {
                    return ("Already marked this book as current.");
                } else if (bookShelf[i].next) {
                    return ("Already marked this book as next in queue");
                } else {
                    bookShelf[i].next = true;
                    return (bookShelf[i].title + " successfully marked as next in queue!");
                } 
            }
        }
    };


    // returns book marked with "current" property (or if none, sends error message)
    this.currentBook = function(){
        for (var i = 0; i < bookShelf.length; i++) {
            if (bookShelf[i].current){
                return bookShelf[i];
            }
        }
        return ("No book marked as current. Please use markCurrent() function.");
    };


    // returns book marked with "next" property (if none, sends error message)
    this.nextBook = function(){
        for (var i = 0; i < bookShelf.length; i++) {
            if (bookShelf[i].next){
                return bookShelf[i];
            }
        }
        return ("No book marked as next in queue. Please use markNext() function.");
    };


    // returns last book read based on latest date
    this.lastBook = function(){
        var tmp = bookShelf[0].readDate;
        var num = 0;
        for (var i = 1; i < bookShelf.length; i++) {
            if (bookShelf[i].readDate > tmp){
                tmp = bookShelf[i].readDate;
                num = i;
            }
        }
        return bookShelf[num];
    };


    // adds book to list
    this.addBook = function(newBook){
        bookShelf.push(newBook);
    };


    // marks current book as read
    this.markCurrentDone = function(){
    // marks current book as read, adds current date, removes "current" property
        for (var i = 0; i < bookShelf.length; i++) {
            if (bookShelf[i].current){
                bookShelf[i].read = true;
                bookShelf[i].readDate = Date();
                delete bookShelf[i].current;
            }
        }
    // change next book in queue to current
        for (var i = 0; i < bookShelf.length; i++) {
            if (bookShelf[i].next){
                bookShelf[i].current = true;
                delete bookShelf[i].next;
            }
        }
    // mark random book not read yet to be next in queue
        var unreadList = [];
        for (var i = 0; i < bookShelf.length; i++) {
            if (bookShelf[i].read === false) {
                unreadList.push(bookShelf[i]);
            }
        }
        var random = Math.floor(Math.random() * unreadList.length)
        for (var i = 0; i < bookShelf.length; i ++) {
            if (unreadList[random].title === bookShelf[i].title) {
                bookShelf[i].next = true;
                return ("Randomly marked " + bookShelf[i] + " as next in queue.")
            }
        }
    };
};


var booklist = new BookList(bookShelf);

console.log(booklist.booksRead);
console.log(booklist.booksUnread);
// console.log(booklist.booksUnread);

// Test markNext and markCurrent functions
// console.log(booklist.bookShelf);
// console.log(booklist.markNext('Harry Potter'));
// console.log(booklist.markNext('Life of Pi'));
// console.log(booklist.markCurrent('Life of Pi'));
// console.log(booklist.markNext('Javascript'));

// Test call current, next, last book functions
// console.log(booklist.currentBook());
// console.log(booklist.nextBook());
// console.log(booklist.lastBook());

// Test append booklist function
// booklist.addBook(bookExtra);
// console.log(booklist.bookShelf);

// Test finishCurrent book function
// console.log(booklist.markCurrent('Life of Pi'));
// console.log(booklist.markNext('Javascript'));
// console.log(booklist.bookShelf);

// booklist.markCurrentDone();
// console.log(booklist.bookShelf);
// console.log(booklist.currentBook());
// console.log(booklist.lastBook());
// console.log(booklist.nextBook());
