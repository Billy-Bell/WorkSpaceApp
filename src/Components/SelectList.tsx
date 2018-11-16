import React, { Component } from 'react';
import { FontAwesomeIcon, Props } from '@fortawesome/react-fontawesome'
import { faCoffee, faCaretRight } from '@fortawesome/free-solid-svg-icons'
import { NONAME } from 'dns';
import { StateName } from '../App';

export interface IProps {
    ItemList: string[];
    Title: string;
    UpdateState: (stateName: StateName, value: string) => void;
    offset?: number;
    Selection?: string,
    Selected?: string;
    displayText?: boolean;
    section: StateName;
}

const SelectList = (props: IProps) => {


    var section = props.section;
    
    function HandleUpdate(Section: StateName, Value :string ) {
        props.UpdateState(Section, Value )
    };

    if (props.displayText) {
        props.Selection ? props.Title + ' > ' + props.Selection : props.Title
    } else {
        props.Selection ? props.Title + ' > ' + props.Selection.length + ' selected' : props.Title
    }

    console.log('props Selection ' + props.Selection)

    let show = false;

     if (props.Selection) {
        if (props.Selection.length > 0) {
            let show = true; 
            console.log(props.Selection);
        } else {
            let show = false; 
        }
    }

    function SelectedText() {
        if (props.Title === 'Selected Units') {
            return props.Title + ' > ' + props.ItemList.length + ' units';
        } else {
            if (props.Selection && props.Selection !== ' ') { 
                return props.Title + ' > ' + props.Selection;
            } else { 
                return props.Title ;
            }
        }
    }

    return (
        <div className={'col-5 pt-5 ' + (props.offset? 'offset-' + props.offset : '' )} >
            <tag-text
            type='h2'
            text={SelectedText()}
            accent='title'>
            </tag-text>
            <div className={'SelectBox mt-1 '}>
            {props.ItemList.map(function(item,i) {
                var name = 'Option_' + item;
                name = name.replace(' ','');
                var selected = false;
                if (props.Selected === item) {
                    selected = true;
                } 
               return (
                
                <div key={i} id={name} onClick={(e) => {HandleUpdate(section,item)}} className={'align-right SelectItem p-2 '  + (!show? ' d-none ' : '') + (selected ? 'SelectedItem' : '')} style={{minHeight:'40px', maxHeight:'50px', padding: '0', cursor: 'pointer',  }} >
                    {item}
                    <span className={'float-right pr-2 '} >
                        <FontAwesomeIcon icon={faCaretRight} />
                    </span>
                </div>
                )
            })}
            </div>
        </div>
    )
}

export default SelectList;
