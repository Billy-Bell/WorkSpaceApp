import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import SelectList from './Components/SelectList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import logo from './logo.svg';
import './App.css';

export interface Data {

  readonly SelectFilter: {
    SelectFilter: string[]
    [key: string] : string[];
  }
  readonly SelectGroup: {
    ActiveUnits: string[],
    PrelauchedUnits : string[],
    Leisure: string[],
    ActiveDeactivatedUnitsFYTD :string[] 
    [key: string] : string[];
  }
  readonly SelectedUnits: {
    ActiveUnits: string[],
    PrelauchedUnits : string[],
    Leisure: string[],
    ActiveDeactivatedUnitsFYTD :string[]
    [key: string] : string[];
  }
}

export interface MyClassProps {
  readonly data: Data;
}

export enum StateName {
  SelectFilter = 'SelectFilter',
  SelectGroup = 'SelectGroup',
  SelectedUnits = 'SelectedUnits'
}

export interface MyClassState {
 SelectFilter : string;
 SelectGroup: string;
 SelectedUnits: string;
 [key : string] : string;
}

class App extends React.Component<MyClassProps, MyClassState> {

  constructor (props: MyClassProps) {
    super(props);
    this.UpdateState = this.UpdateState.bind(this);
  }

  public state = {
    SelectFilter: '',
    SelectGroup: '',
    SelectedUnits: '',
  }

  public UpdateState(stateName: StateName, value: string) {
      value = value.replace('&amp;','&')
      while (value.indexOf(' ') > -1) {
        value = value.replace(' ','');
      }
      if (this.state[stateName] === value ){
        this.setState({[stateName]: ''})
        if (stateName === 'SelectFilter') {
          this.setState({SelectGroup: '', SelectedUnits: ''})
        }
        if (stateName === 'SelectGroup') {
          this.setState({SelectedUnits: ''})
        }
      } else {
      this.setState({[stateName]: value})
      }

      
  }

  public dataCheck(val:'SelectFilter'|'SelectGroup'|'SelectedUnits',val2:'SelectFilter'|'SelectGroup'|'SelectedUnits') {
    if (this.state[val2] !== '' //check statevalue is not ''
    && (this.props.data[val]).hasOwnProperty(this.state[val2]) //check this.state[val2] is a key in this.data[val]
    && (this.props.data).hasOwnProperty(this.state[val2]) //check val is a key in this.data[val]
    ) {
      return this.props.data[val][val2]
    } else {
      return [''];
    }
  }

  render() {
    return (
      <div className='vh-100 bg-light' >
        <tag-top-navbar name="Access" />
        <div className='container ' >
          <div className='row'>
            <SelectList 
              UpdateState={this.UpdateState} 
              displayText={true} 
              Title='Select Filter' 
              section={StateName.SelectFilter}
              Selected={this.state.SelectFilter} 
              Selection={' '}
              ItemList={this.props.data.SelectFilter.SelectFilter} 
            />
            <SelectList 
              UpdateState={this.UpdateState} 
              offset={1} 
              Title={'Select Group'} 
              section={StateName.SelectGroup}
              Selected={this.state.SelectGroup} 
              Selection={this.state.SelectFilter} 
              ItemList={(this.props.data.SelectGroup[this.state.SelectFilter]? this.props.data.SelectGroup[this.state.SelectFilter]: [''])} 
            />
            <SelectList 
              UpdateState={this.UpdateState} 
              offset={6} 
              Title='Selected Units' 
              section={StateName.SelectedUnits}
              Selected={this.state.SelectedUnits} 
              Selection={this.state.SelectGroup} 
              ItemList={(this.props.data.SelectedUnits[this.state.SelectGroup]? this.props.data.SelectedUnits[this.state.SelectGroup]: [''])} 
            />
          </div>
        </div>

      </div>
    );
  }
}

export default App;
