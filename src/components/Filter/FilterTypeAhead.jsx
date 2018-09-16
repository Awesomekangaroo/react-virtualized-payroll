import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Modal } from '../modal/Modal';
import { ModalPersonDetail } from '../modal/ModalPersonDetail';

export class FilterTypeAhead extends Component {
   constructor() {
      super();
      this.state = {
         selection: undefined
      }
      this.displayInfo = this.displayInfo.bind(this);
   };

   displayInfo(item) {
      this.setState({
         selection: item
      });
   }

   render() {
      return(
         <ul className="filter__typeahead">
            { this.props.detail.map((item) => 
               <li key={item.id} className="filter__item" onClick={(e) => this.displayInfo(item)}>
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
            { this.state.selection ?
               <Modal>
                  <ModalPersonDetail 
                     info={this.state.selection} 
                     close={this.props.toggle}
                  />
               </Modal> : null
            }
         </ul>
      )
   }
};