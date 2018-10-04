import React, { Component } from 'react';
import { FilterTypeAhead } from './FilterTypeAhead';

export class FilterSearch extends Component {
   constructor() {
      super();
      this.state = {
         queryValue: undefined,
         queryResult: []
      }
      this.getSearchFilter = this.getSearchFilter.bind(this);
      this.handleQueryUpdate = this.handleQueryUpdate.bind(this);
      this.closeSearch = this.closeSearch.bind(this);
   }

   componentDidMount() {
      this.searchInput.focus();
      document.addEventListener("keydown", this.closeSearch, false);
   }

   componentWillUnmount() {
      document.removeEventListener("keydown", this.closeSearch, false);
   }

   closeSearch(e) {
      e.keyCode === 27 ? this.props.toggle() : null;
   }

   handleQueryUpdate(e) {
      const value = e.target.value
      this.setState({queryValue: value, queryResult: []}, function() {
         this.getSearchFilter(value);
      });
   }
   
   getSearchFilter(value) {
      // Prevent too many results on initial key press.
      if(value.length > 1) {
         const filteredItems = [];
         const regex = new RegExp(value, 'i');
         this.props.list.forEach(element => {
            if (regex.test(element.first_name) === regex.test(this.state.queryValue)) {
               filteredItems.push(element);
            }
            this.setState({ queryResult: filteredItems });
         });
      }
   }

   render() {
      return(
         <div className="filter__search-wrapper">
            <form className="filter__search-form" onSubmit={(e) => e.preventDefault()}>
               <label htmlFor="search_list" hidden>Search list items</label>
               <input
                  ref={input => this.searchInput = input}
                  type="search" 
                  name="search_list" autoComplete="off" placeholder="Find in view" title="Search for items in view"
                  onChange={this.handleQueryUpdate} />
            </form>
            { this.state.queryResult.length > 0 ? 
               <FilterTypeAhead 
                  detail={this.state.queryResult} 
                  currentModalInfo={this.state.queryResult}
                  toggle={this.props.toggle}
               /> : null }
         </div>
      )
   }
};