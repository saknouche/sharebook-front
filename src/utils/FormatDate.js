import React from 'react';

const FormatDate = (dateStr) => {
   const newDate = new Date(dateStr);
   return newDate.toLocaleDateString('fr-FR');
};

export default FormatDate;
