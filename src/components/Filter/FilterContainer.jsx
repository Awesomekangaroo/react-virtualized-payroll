import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FilterSearch } from './FilterSearch';

export class FilterContainer extends Component {
   constructor(props) {
      super(props);
      this.state = {
         isSearchOpen: true,
         list: undefined
      }

      this.toggleSearch = this.toggleSearch.bind(this);
   };

   toggleSearch() {
      this.setState(prevState => ({
         isSearchOpen: !prevState.isSearchOpen
      }));
   }

   componentWillUpdate(nextState) {
      if (this.state.list !== nextState.list) {
         this.setState({
            list: nextState.list
         });
      }
   }
   
   render(){
      return(
         <section className="filter-config__container">
            <aside className="filter__section">
               <button className="filter__config--btn">
                  <FontAwesomeIcon icon="sort" />
                  <span className="filter__icon--text">Sort</span>
               </button>
               <button className="filter__config--btn" onClick={this.toggleSearch}>
                  <FontAwesomeIcon icon="search" />
                  <span className="filter__icon--text">Search</span>
               </button>
            </aside>
            { this.state.isSearchOpen ? <FilterSearch list={this.state.list} /> : undefined }
         </section>
      )
   }
};