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
    Selection?: string | boolean;
    Selected?: string;
    displayText?: boolean;
    section: StateName;
}

const SelectList = (props: IProps) => {


    var section = props.section;

    {//console.log(props.section)
    }
    
    function HandleUpdate(Section: StateName, Value :string ) {
        console.log('Section: ' + section + ' Value: ' + Value);
        props.UpdateState(Section, Value )
    };

    if (props.displayText) {
        props.Selection ? props.Title + ' > ' + props.Selection : props.Title
    } else if (typeof props.Selection === 'string') {
        props.Selection ? props.Title + ' > ' + props.Selection.length + ' selected' : props.Title
    }

     if (props.Selection) {
        if (props.Selection || props.Selection.length > 0 )  {
            var show = true; 

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

  
    function selected(item:string) {
        console.log(item);
        while (item.indexOf(' ')>-1) {
            item=item.replace(' ','');
        }
        if (props.Selected === item) {
            return true;
        } 
        return false;
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
               return (
                
                <div key={i} id={name} onClick={(e) => {HandleUpdate(section,item)}} className={'align-right SelectItem p-2 '  + (!show? ' d-none ' : '') 
                + (selected(item) ? 'SelectedItem' : '')} style={{minHeight:'40px', maxHeight:'50px', padding: '0', cursor: 'pointer',  }} >
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
