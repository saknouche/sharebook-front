import React from 'react';
import { useParams } from 'react-router-dom';

const AddBook = () => {
    const {bookId} = useParams()
    return (
        <div>
            {bookId ? (
                <div>Update book</div>
            ) : (
                <div>New book</div>

            )}
        </div>
    )
};

export default AddBook;