interface Book{
    book_id: number;
    Book_name: string;
}

interface Author {
    Author_id: number;
    Author_name: string;
}

type BookandAuthor =Book & Author;
let bookauthor1: BookandAuthor={
    book_id:101,
    Book_name:"2states",
    Author_id:1,
    Author_name:"Chetan Bhagat"
}

console.log("Book id:"+bookauthor1.book_id);
console.log("Book name :"+bookauthor1.Book_name );
console.log("Author id :"+bookauthor1.Author_id);
console.log("Author name :"+bookauthor1.Author_name);
