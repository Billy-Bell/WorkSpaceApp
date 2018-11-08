import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import TagList from './Components/TagList';
import logo from './logo.svg';
import './App.css';



class App extends React.Component {

  render() {
    return (
      <div className='vh-100 bg-light' >
        <tag-top-navbar name="Access" />
        <div > My Div </div>
        <TagList ItemList={['Unit Group Selection','Area Manager','Exec Chefs','Escalation Desk','General Manager','Project Manager -Pubs']} />
        <tag-list parimary-field='item' />
        <div className='w-50'>
          <tag-card version='2'>
            <tag-stats
              accent='grey-1'
              heading='Outstanding Orders'
              sub-heading='11:15 AM'
              label-field='label'
              value-field='value'>
            </tag-stats>
          </tag-card>
        </div>
      </div>
    );
  }
}

export default App;
