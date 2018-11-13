import React, { Component } from 'react';
import { NONAME } from 'dns';

export interface IProps {
    ItemList: string[];
    Title: string;
    UpdateState: (stateName: string, value: string) => void;
    offset?: number;
    Selection?:string;
    
}

const TagList = (props: IProps) => {

    var section: string = props.Title;
    section = section.replace(' ','');

    function HandleUpdate(Section: string, Value:any ) {
        console.log('Hello from HandleUpdate');
        console.log(Section);
        console.log(Value);
        var val = Value.target.innerHTML;
        console.log(val);

        props.UpdateState(Section, val )
    };

    return (
        <div className='col-5 ' onClick={(e) => {HandleUpdate(section,e)}}>
            <tag-text
            type='h2'
            text={props.Selection ? props.Title + ' > ' + props.Selection : props.Title}
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
