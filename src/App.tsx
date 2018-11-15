import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import SelectList from './Components/SelectList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import logo from './logo.svg';
import './App.css';

export interface IState {
  SelectFilter :  string;


}

export interface IUpdateState {
  UpdateState: (stateName: string, value: string) => void;
}

class App extends React.Component {

  constructor (props: any) {
    super(props);

    this.UpdateState = this.UpdateState.bind(this);
  }

  public state = {
    SelectFilter: '',
    SelectGroup: '',
    SelectedUnits: '',
    
  }
  
  public data = {
    SelectFilter: ['Active Units','Prelauched Units','Leisure','Active & Deactivated Units FYTD','Active & Deactived Units','Example 1','Example 2', 'Example 3'],
    
    SelectGroup: { 
      Activeunits : ['Active Units','Prelauched Units','Leisure','Active & Deactivated Units FYTD','Active & Deactived Units','Example 1','Example 2', 'Example 3'],
      PrelauchedUnits : ['PrelauchedUnits1','PrelauchedUnits2','PrelauchedUnits3','PrelauchedUnits4','PrelauchedUnits5','PrelauchedUnits6','PrelauchedUnits7', 'PrelauchedUnits8'],
      Leisure : ['Leisure1','Leisure2','Leisure3','Leisure4','Leisure5','Leisure6','Leisure7', 'Leisure8'],
      ActiveDeactivatedUnitsFYTD : ['Active&DeactivatedUnitsFYTD1','Active&DeactivatedUnitsFYTD2','Active&DeactivatedUnitsFYTD3','Active&DeactivatedUnitsFYTD4','Active&DeactivatedUnitsFYTD5','Active&DeactivatedUnitsFYTD6','Active&DeactivatedUnitsFYTD7', 'Active&DeactivatedUnitsFYTD8'],
    },
    
    SelectedUnits : {
      Activeunits: ['0100 - Restaurant, Stevenage','1020 - Resturant, Leicester Square','1030 - Restaurant, Inverness','1060 - Restaurant, Charing Cross','1090 -  Resturant, London','Example 1','Example 2','Example 3'],
      PrelauchedUnits : ['PrelauchedUnits1','PrelauchedUnits2','PrelauchedUnits3','PrelauchedUnits4','PrelauchedUnits5','PrelauchedUnits6','PrelauchedUnits7', 'PrelauchedUnits8'],
      Leisure : ['Leisure1','Leisure2','Leisure3','Leisure4','Leisure5','Leisure6','Leisure7', 'Leisure8'],
      ActiveDeactivatedUnitsFYTD : ['Active&DeactivatedUnitsFYTD1','Active&DeactivatedUnitsFYTD2','Active&DeactivatedUnitsFYTD3','Active&DeactivatedUnitsFYTD4','Active&DeactivatedUnitsFYTD5','Active&DeactivatedUnitsFYTD6','Active&DeactivatedUnitsFYTD7', 'Active&DeactivatedUnitsFYTD8'],
    },
  }

  public UpdateState(stateName: string, value: string) {
      this.setState({[stateName]: value.replace('&amp;','&')})
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
              Selected={this.state.SelectFilter} 
              Selection={' '}
              ItemList={this.data.SelectFilter} 
            />
            <SelectList 
              UpdateState={this.UpdateState} 
              offset={1} 
              Title={'Select Group'} 
              Selected={this.state.SelectGroup} 
              Selection={this.state.SelectFilter} 
              ItemList={this.data.SelectGroup.Activeunits} 
            />
            <SelectList 
              UpdateState={this.UpdateState} 
              offset={6} 
              Title='Selected Units' 
              Selected={this.state.SelectedUnits} 
              Selection={this.state.SelectGroup} 
              ItemList={['0100 - Restaurant, Stevenage','1020 - Resturant, Leicester Square','1030 - Restaurant, Inverness','1060 - Restaurant, Charing Cross','1090 -  Resturant, London','Example 1','Example 2','Example 3']} 
            />
          </div>
        </div>

      </div>
    );
  }
}

export default App;
