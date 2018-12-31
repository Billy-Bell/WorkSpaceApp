import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { configure, shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

configure({adapter: new Adapter() })

const data = {
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
  }
}

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App data={data}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('<App />', () => {
  if('app shuold contain h2', () => {
    const wrapper = shallow(<App data={data}/>)
    expect(wrapper.find('h2').length).toBe(1);
  })
})