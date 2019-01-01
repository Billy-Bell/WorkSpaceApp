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
    
    function HandleUpdate(Section: StateName, Value :string ) {
        props.UpdateState(Section, Value )
    };

    function SelectedText() {
        if (props.Title === 'Selected Units' && props.ItemList.length > 1) {
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
        while (item.indexOf(' ')>-1) {
            item=item.replace(' ','');
        }
        if (props.Selected === item) {
            return true;
        } 
        return false;
    }

    function ShowOption() {

        if (props.Selection) {
            if (props.Selection || props.Selection.length > 0 )  {
                return false; 
            }
        }
        return true;
    }

    function removeSpaces(title: string) {
        let className = title;
        while(className.indexOf(' ') > -1) {
            className = className.replace(' ','');
        }
        return className;
    }

    return (
        <div className={'col-5 pt-5 ' + (props.offset? 'offset-' + props.offset : '' )} >
            <tag-text
            type='h2'
            text={SelectedText()}
            accent='title'>
            </tag-text>
            <div className={'SelectBox mt-1 ' + removeSpaces(props.Title)}>
            {props.ItemList.map(function(item,i) {
               return (
                
                <div key={i} id={removeSpaces(item)} onClick={(e) => {HandleUpdate(section,item)}} className={'align-right SelectItem p-2 '  + (ShowOption()? ' d-none ' : '') 
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
