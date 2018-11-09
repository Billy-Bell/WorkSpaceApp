import React, { Component } from 'react';

export interface IProps {
    ItemList: string[];
}

const TagList = (props: IProps) => {

    return (
        <div className='col-3 text-primary'>
            {props.ItemList.map(function(item,i) {
               return (

               <tag-card version='2'>
                    <tag-stats
                        accent='title'
                        sub-heading={item}
                        label-field=''
                        value-field=''>
                    </tag-stats>
                </tag-card>
                )
            })}
        </div>
    )
}

export default TagList;
