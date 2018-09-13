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
         this.props.list.forEach(element => {
            if (element.first_name === this.state.queryValue) {
               filteredItems.push(element);
               console.log('This element matches: ', element);
            }
            this.setState({ queryResult: filteredItems });
         });
         // console.log('All items: ', filteredItems);
      }
   }

   render() {
      return(
         <div className="filter__search-wrapper">
            <form className="filter__search-form" onSubmit={(e) => e.preventDefault()}>
               <label htmlFor="search_list" hidden>Search list items</label>
               <input 
                  type="search" 
                  name="search_list" autoComplete="off" placeholder="Find in view" title="Search for items in view"
                  onChange={this.handleQueryUpdate} />
            </form>
            { this.state.queryResult.length > 0 ? 
               <FilterTypeAhead detail={this.state.queryResult} /> : undefined }
         </div>
      )
   }
};