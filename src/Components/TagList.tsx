import React, { Component } from 'react';


export interface IProps {
    ItemList: string[];
}

const TagList = (props: IProps) => {

    

    return (
        <div>
            test
            {props.ItemList}
            {props.ItemList.map(function(item,i) {
               return <h1 key={i}>{item}</h1>
            })}
        </div>
    )
}

export default TagList;
