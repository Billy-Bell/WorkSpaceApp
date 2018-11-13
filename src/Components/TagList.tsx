import React, { Component } from 'react';
import { NONAME } from 'dns';

export interface IProps {
    ItemList: string[];
    Title: string;
    UpdateState: (stateName: string, value: string) => void;
    offset?: number;
    
}

const TagList = (props: IProps) => {

    var section: string = props.Title;
    section = section.replace(' ','');

    function HandleUpdate(Section: string, Value:EventTarget ) {
        console.log(Section);
        console.log(Value);
    };

    return (
        <div className='col-5 ' onClick={(e) => {HandleUpdate(section,e.target)}}>
            <tag-text
            type='h2'
            text={props.Title}
            accent='title'>
            </tag-text>
            {props.ItemList.map(function(item,i) {
                var name = 'Option_' + item;
                name = name.replace(' ','');
               return (
                <div key={i} id={name} className='align-right' style={{minHeight:'40px', maxHeight:'50px', padding: '0', cursor: 'pointer',  }} >
                    {item}
                            
                </div>
                )
            })}
        </div>
    )
}

export default TagList;
