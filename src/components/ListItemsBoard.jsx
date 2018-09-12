import React, { Component } from 'react';
import { List, AutoSizer } from 'react-virtualized';
import { Modal } from './modal/Modal';

const rowHeight = 120;

class ListItemsBoard extends Component {
   constructor() {
      super();
      this.state = {
         list: false,
         isModalOpen: false,
         currentModalInfo: undefined
      }
      this.renderList = this.renderList.bind(this);
      this.closeModal = this.closeModal.bind(this);
   };

   componentDidMount() {
      fetch('http://localhost:3000/staff')
      .then(res => res.json())
      .then(
         (res) => {
            this.setState({ list: res })
         },
         (err) => console.log(err)
      )
   }

   closeModal() {
      this.setState({ isModalOpen: false });
   }

   handleModal(item) {
      console.log(item);
      this.setState(prevState => ({
         isModalOpen: !prevState.isModalOpen,
         currentModalInfo: item
      }));
   }

   renderList({ index, key, style }) {
      const item = this.state.list;
      return(
         <article key={key} style={style} className="list__item" onClick={(e) => this.handleModal(item[index])}>
            <div className="list__item-body">
               <header>
                  <h2 className="list__item--title">{item[index].first_name} {item[index].last_name}</h2>
                  <span>{item[index].email}</span>
               </header>
               <div className="list__item-meta">
                  <span className="list__item-job">{item[index].job_title}</span>
                  <span className="list__item-hours">{item[index].company}</span>
               </div>
            </div>
            <aside className="list__item--profile">
               <img src={item[index].profile_image} alt={`Image of ${item[index].first_name}`}/>
            </aside>
         </article>
      );
   }

   render() {
      return(
         <main className="index__wrapper">
            { this.state.isModalOpen ? <Modal info={this.state.currentModalInfo} close={this.closeModal} /> : ''}
            { this.state.list ?
               <AutoSizer>
               {
                  ({ width, height }) => {
                  return <List
                     width={width}
                     height={height}
                     rowHeight={rowHeight}
                     rowRenderer={this.renderList}
                     rowCount={10} />
                  }
               }
               </AutoSizer> : ''
            }
         </main>
      )
   }
};

export default ListItemsBoard;