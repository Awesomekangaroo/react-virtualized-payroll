import React from 'react';

/*
   Sort by:
   First name, email, company, state (address)
*/


const SortContainer = (props) => (
   <div className="sort__container">
      <ul className="sort__list">
         <li>First name</li>
         <li>Email</li>
         <li>Company</li>
         <li>State (address)</li>
      </ul>
   </div>
);

export default SortContainer;