import React, { Component } from 'react';
import { List } from 'react-virtualized';

const listHeight = 600;
const rowHeight = 50;
const rowWidth = 800;

class ListItemsBoard extends Component {
   constructor() {
      super();
      this.state = {
         list: false
      }
   };

   componentDidMount() {
      fetch('http://localhost:3000/staff')
      .then(res => res.json())
      .then(
         (res) => {
            console.log(res);
            this.setState({ list: res })
         },
         (err) => console.log(err)
      )
   }

   renderList({ index, key, style }) {
      return(
         <article key={key} style={style} className="list__item">
            <h2 className="list__item--title">This is the title</h2>
         </article>
      );
   }

   render() {
      return(
         <main className="index__wrapper">
            <List
               width={rowWidth}
               height={listHeight}
               rowHeight={rowHeight}
               rowRenderer={this.renderList}
               rowCount={100} />
         </main>
      )
   }
};

export default ListItemsBoard;