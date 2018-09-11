import React from 'react';

export const ListContent = (props) => {
   return <div dangerouslySetInnerHTML={{ __html: props.detail }}></div>
};