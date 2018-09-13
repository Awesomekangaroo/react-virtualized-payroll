import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export class FilterTypeAhead extends Component {
   render() {
      return(
         <ul className="filter__typeahead">
            { this.props.detail.map((item) => 
                  <li key={item.id} className="filter__item">
                     <div className="filter__type-section">
                        <span>{`${item.first_name} ${item.last_name}`}</span>
                        <FontAwesomeIcon icon="user" />
                     </div>
                     <div className="filter__type-section">
                        <span>{`${item.company}`}</span>
                        <FontAwesomeIcon icon="building" />
                     </div>
                  </li>
               )}
         </ul>
      )
   }
};