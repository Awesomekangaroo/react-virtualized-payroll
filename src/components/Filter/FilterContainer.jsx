import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FilterSearch from './FilterSearch';
import SortContainer from '../Sort/SortContainer';

export class FilterContainer extends Component {
   constructor(props) {
      super(props);
      this.state = {
         isSearchOpen: false,
         isSortOpen: false,
         list: undefined
      }
      this.toggleSearch = this.toggleSearch.bind(this);
      this.toggleSort = this.toggleSort.bind(this);
   };

   toggleSearch() {
      this.setState(prevState => ({
         isSearchOpen: !prevState.isSearchOpen
      }));
   }

   toggleSort(event) {
      this.setState(prevState => ({
         isSortOpen: !prevState.isSortOpen
      }))
   }

   componentWillUpdate(nextState) {
      if (this.state.list !== nextState.list) {
         this.setState({
            list: nextState.list
         });
      }
   }
   
   render() {
      return(
         <section className="filter-config__container">
            <aside className="filter__section">
               <button className="filter__config--btn" onClick={this.toggleSort}>
                  <FontAwesomeIcon icon="sort" />
                  <span className="filter__icon--text">Sort</span>
               </button>
               <button className="filter__config--btn" onClick={this.toggleSearch}>
                  <FontAwesomeIcon icon="search" />
                  <span className="filter__icon--text">Search</span>
               </button>
            </aside>

            { this.state.isSearchOpen &&
               <FilterSearch list={this.state.list} toggle={this.toggleSearch} />}

            { this.state.isSortOpen &&
               <SortContainer toggle={this.toggleSort} /> }
         </section>
      )
   }
};