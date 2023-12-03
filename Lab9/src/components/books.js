import BookItem from "./bookItem";

function Books(props){

    return props.myBooks.map(
        (book)=>{
            return <BookItem myBook={book} key={book._id} Reload={()=>{props.ReloadData()}}></BookItem> //Reload could be given any name, passed into books.js
            //props.ReloadData executed like a function 
        }
    );

}

export default Books;