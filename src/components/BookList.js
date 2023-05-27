import BookShow from './BookShow';

function BookList({books, onDeletion,onEdit}) {

    const renderedBooks = books.map((book) => {
        return <BookShow onDeletion={onDeletion} key={books.id} book={book} onEdit={onEdit} />;
    });
  return <div className='book-list'>
    {renderedBooks}
  </div>;
}

export default BookList;
