import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App, { Data } from './App';
import * as serviceWorker from './serviceWorker';
import { defineCustomElements } from "@tag/tag-components";

  
const data: Data = {
    SelectFilter: {
      SelectFilter: ['Active Units','Prelauched Units','Leisure','Active & Deactivated Units FYTD','Active & Deactived Units','Example 1','Example 2', 'Example 3'],
    },
    
    SelectGroup: { 
      ActiveUnits : ['Active Units','Prelauched Units','Leisure','Active & Deactivated Units FYTD','Active & Deactived Units','Example 1','Example 2', 'Example 3'],
      PrelauchedUnits : ['PrelauchedUnits1','PrelauchedUnits2','PrelauchedUnits3','PrelauchedUnits4','PrelauchedUnits5','PrelauchedUnits6','PrelauchedUnits7', 'PrelauchedUnits8'],
      Leisure : ['Leisure1','Leisure2','Leisure3','Leisure4','Leisure5','Leisure6','Leisure7', 'Leisure8'],
      ActiveDeactivatedUnitsFYTD : ['Active&DeactivatedUnitsFYTD1','Active&DeactivatedUnitsFYTD2','Active&DeactivatedUnitsFYTD3','Active&DeactivatedUnitsFYTD4','Active&DeactivatedUnitsFYTD5','Active&DeactivatedUnitsFYTD6','Active&DeactivatedUnitsFYTD7', 'Active&DeactivatedUnitsFYTD8'],
    },
    
    SelectedUnits : {
      ActiveUnits: ['0100 - Restaurant, Stevenage','1020 - Resturant, Leicester Square','1030 - Restaurant, Inverness','1060 - Restaurant, Charing Cross','1090 -  Resturant, London','Example 1','Example 2','Example 3'],
      PrelauchedUnits : ['PrelauchedUnits1','PrelauchedUnits2','PrelauchedUnits3','PrelauchedUnits4','PrelauchedUnits5','PrelauchedUnits6','PrelauchedUnits7', 'PrelauchedUnits8'],
      Leisure : ['Leisure1','Leisure2','Leisure3','Leisure4','Leisure5','Leisure6','Leisure7', 'Leisure8'],
      ActiveDeactivatedUnitsFYTD : ['Active&DeactivatedUnitsFYTD1','Active&DeactivatedUnitsFYTD2','Active&DeactivatedUnitsFYTD3','Active&DeactivatedUnitsFYTD4','Active&DeactivatedUnitsFYTD5','Active&DeactivatedUnitsFYTD6','Active&DeactivatedUnitsFYTD7', 'Active&DeactivatedUnitsFYTD8'],
    },
  }

ReactDOM.render(<App data={data}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
defineCustomElements(window);
