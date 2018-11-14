import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faCaretRight } from '@fortawesome/free-solid-svg-icons'
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

const SelectList = (props: IProps) => {

    var section: string = props.Title;
    section = section.replace(' ','');

    function HandleUpdate(Section: string, Value:any ) {
        props.UpdateState(Section, Value )
    };

    if (props.displayText) {
        props.Selection ? props.Title + ' > ' + props.Selection : props.Title
    } else {
        props.Selection ? props.Title + ' > ' + props.Selection.length + ' selected' : props.Title
    }

    console.log('props Selection ' + props.Selection)

    var show = false;

     if (props.Selection) {
        if (props.Selection.length > 0) {
            var show = true; 
            console.log(props.Selection);
        } else {
            var show = false; 
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
        <div className={'col-5 pt-5 ' + (!show? 'd-none ' : '') 
        + (props.offset? 'offset-' + props.offset : '' )} >
            <tag-text
            type='h2'
            text={SelectedText()}
            accent='title'>
            </tag-text>
            <div className='SelectBox mt-1'>
            {props.ItemList.map(function(item,i) {
                var name = 'Option_' + item;
                name = name.replace(' ','');
                var selected = false;
                if (props.Selected === item) {
                    selected = true;
                } 
               return (
                
                <div key={i} id={name} onClick={(e) => {HandleUpdate(section,item)}} className={'align-right SelectItem p-2 ' + (selected ? 'SelectedItem' : '')} style={{minHeight:'40px', maxHeight:'50px', padding: '0', cursor: 'pointer',  }} >
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
