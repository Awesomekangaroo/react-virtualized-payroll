import React, { Component } from 'react';
import { ListTitle } from './ListTitle';
import { ListContent } from './ListContent';

export default class ListItem extends Component {
   render() {
      return(
         <article className="list__item">
            <ListTitle detail='David Title' />
            <ListContent detail='This is the body of msg' />
         </article>
      )
   }
};