import React, { Component } from 'react';


export interface IProps {
    ItemList: string[];
}

const taglist = (props: IProps) => {

    

    return (
        <div>
            {props.ItemList.map((item,i) => {
                <tag-list 
                parimary-field={item}/>
            })}
        </div>
    )
}

export default taglist;
