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

  public state = {
    SelectFilter: '',
  }

  public UpdateState(stateName: string, value: string) {
    this.setState({[stateName] : value});
  }


  render() {
    return (
      <div className='vh-100 bg-light' >
        <tag-top-navbar name="Access" />
        <div className='container pt-5' >
          <div className='row'>
            <TagList UpdateState={this.UpdateState} Title='Select Filter' ItemList={['Unit Group Selection','Area Manager','Exec Chefs','Escalation Desk','General Manager','Project Manager -Pubs']} />
            <TagList UpdateState={this.UpdateState} Title={'Select Group > '+ this.state.SelectFilter} ItemList={['Active Units','Prelauched Units','Leisure','Active & Deactivated Units FYTD','Active & Deactived Units','Example 1','Example 2', 'Example 3']} />
            <TagList UpdateState={this.UpdateState} offset={5} Title='Selected units > ' ItemList={['0100 - Restaurant, Stevenage','1020 - Resturant, Leicester Square','1030 - Restaurant, Inverness','1060 - Restaurant, Charing Cross','1090 -  Resturant, London','Example 1','Example 2','Example 3']} />
          </div>
        </div>

      </div>
    );
  }
}

export default App;
