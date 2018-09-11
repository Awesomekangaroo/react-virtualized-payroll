import React, { Component, Fragment } from 'react';
import ListItemsBoard from './ListItemsBoard';
import ListItem from './Items/ListItem';

import './index.scss';

const IndexTitle = () => (
   <h1 className="index__header">Our Payroll Entries</h1>
);

export default class MainContainer extends Component {
   render() {
      return(
         <Fragment>
            <IndexTitle />
            <ListItemsBoard />
         </Fragment>
      )
   }
};
