import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import TagList from './Components/TagList';
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
  

  public UpdateState(stateName: string, value: string) {
      this.setState({[stateName]: value.replace('&amp;','&')})
  }
    
  


  render() {
    return (
      <div className='vh-100 bg-light' >
        <tag-top-navbar name="Access" />
        <div className='container ' >
          <div className='row'>
            <TagList 
              UpdateState={this.UpdateState} 
              displayText={true} 
              Title='Select Filter' 
              Selected={this.state.SelectFilter} 
              ItemList={['Unit Group Selection','Area Manager','Exec Chefs','Escalation Desk','General Manager','Project Manager -Pubs']} 
            />
            <TagList 
              UpdateState={this.UpdateState} 
              offset={1} 
              Title={'Select Group'} 
              Selected={this.state.SelectGroup} 
              Selection={this.state.SelectFilter} 
              ItemList={['Active Units','Prelauched Units','Leisure','Active & Deactivated Units FYTD','Active & Deactived Units','Example 1','Example 2', 'Example 3']} 
            />
            <TagList 
              UpdateState={this.UpdateState} 
              offset={6} 
              Title='Selected Units' 
              Selected={this.state.SelectedUnits} 
              Selection={['0100 - Restaurant, Stevenage','1020 - Resturant, Leicester Square','1030 - Restaurant, Inverness','1060 - Restaurant, Charing Cross','1090 -  Resturant, London','Example 1','Example 2','Example 3'].length + ' unit'} 
              ItemList={['0100 - Restaurant, Stevenage','1020 - Resturant, Leicester Square','1030 - Restaurant, Inverness','1060 - Restaurant, Charing Cross','1090 -  Resturant, London','Example 1','Example 2','Example 3']} 
            />
          </div>
        </div>

      </div>
    );
  }
}

export default App;
