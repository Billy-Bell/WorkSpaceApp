import React, { Component } from 'react';
import { NONAME } from 'dns';

export interface IProps {
    ItemList: string[];
    Title: string;
    UpdateState: (stateName: string, value: string) => void;
    offset?: number;
    Selection?: string,
    Selected?: string;
    displayText?: boolean;
    
}

const TagList = (props: IProps) => {

    var section: string = props.Title;
    section = section.replace(' ','');

    function HandleUpdate(Section: string, Value:any ) {
        var val = Value.target.innerHTML;
        props.UpdateState(Section, val )
    };

    if (props.displayText) {
        props.Selection ? props.Title + ' > ' + props.Selection : props.Title
    } else {
        props.Selection ? props.Title + ' > ' + props.Selection.length + ' selected' : props.Title
    }

    console.log('props Selection ' + props.Selection)

    var show = true;

    if (props.Selection) {
        if (props.Selection.length > 0) {
            var show = true; 
            console.log(props.Selection);
        } else {
            var show = false; 
        }
    }
    return (
        <div className={'col-5 pt-5 ' + (!show? 'd-none ' : '') + (props.offset? 'offset-' + props.offset : '' )} onClick={(e) => {HandleUpdate(section,e)}}>
            <tag-text
            type='h2'
            text={props.Selection ? props.Title + ' > ' + props.Selection : props.Title}
            accent='title'>
            </tag-text>
            <div className='SelectBox'>
            {props.ItemList.map(function(item,i) {
                var name = 'Option_' + item;
                name = name.replace(' ','');
                var selected = false;
                //console.log(item)
                //console.log(props.Selected)
                if (props.Selected === item) {
                    selected = true;
                } 

               return (
                <div key={i} id={name} className={'align-right SelectItem ' + (selected ? 'SelectedItem' : '')} style={{minHeight:'40px', maxHeight:'50px', padding: '0', cursor: 'pointer',  }} >
                    {item}
                            
                </div>
                )
            })}
            </div>
        </div>
    )
}

export default TagList;
