import React from 'react';

const Book = ({ title, category }) => {
   return (
      <>
         <div>
            {title} appartient à la catégorie de {category}
         </div>
      </>
   );
};

export default Book;
