import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { configure, shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

configure({adapter: new Adapter() })

let location = window.location;

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


describe('<App /> Shallow rendering', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(<App data={data}/>);
    expect(toJson(wrapper)).toMatchSnapshot();
    wrapper.unmount;
  })
})

describe('<App /> mount rendering', () => {
  it('matches snapshot', () => {
    const wrapper = mount(<App data={data}/>);
    expect(toJson(wrapper)).toMatchSnapshot();
    wrapper.unmount;
  })

  it('Check 3 SelectBox are rendered', () => {
    const wrapper = mount(<App data={data}/>);
    const selectList = wrapper.find('.SelectBox')
    expect(selectList.length).toBe(3)
    wrapper.unmount;
  })

  it('Check SelectFilter renders only once', () => {
    const wrapper = mount(<App data={data}/>);
    const selectList = wrapper.find('.SelectFilter')
    expect(selectList.length).toBe(1)
    wrapper.unmount;
  })

  it('Check SelectGroup renders only once', () => {
    const wrapper = mount(<App data={data}/>);
    const selectList = wrapper.find('.SelectGroup')
    expect(selectList.length).toBe(1)
    wrapper.unmount;
  })

  it('Check SelectedUnits renders only once', () => {
    const wrapper = mount(<App data={data}/>);
    const selectList = wrapper.find('.SelectedUnits')
    expect(selectList.length).toBe(1)
    wrapper.unmount;
  })

  it('Check SelectGroup list renders on SelectFilter item click', () => {
    const wrapper = mount(<App data={data}/>);
    const ActiveUnitsDiv = wrapper.find('#ActiveUnits')
    expect(ActiveUnitsDiv.length).toBe(1)
    const SelectGroupDiv = wrapper.find('.SelectGroup')
    expect(SelectGroupDiv.length).toBe(1)
    ActiveUnitsDiv.simulate('click')
    const SelectGroupListChildren = wrapper.find('.SelectGroup').children()
    expect(SelectGroupListChildren.length).toBe(data.SelectGroup.ActiveUnits.length)


    for (var i =0 ;i < SelectGroupListChildren.length; i++) {
   
        expect(SelectGroupListChildren.at(i).text()).toBe(data.SelectGroup.ActiveUnits[i])

    }

    wrapper.unmount;
  })


  it('Check SelectGroup list renders on SelectGroup item click', () => {
    const wrapper = mount(<App data={data}/>);
    const ActiveUnitsDiv = wrapper.find('#ActiveUnits')
    ActiveUnitsDiv.simulate('click')
    const SelectGroupListChildren = wrapper.find('.SelectGroup').children()
    expect(SelectGroupListChildren.length).toBe(data.SelectGroup.ActiveUnits.length)


    for (var i =0 ;i < SelectGroupListChildren.length; i++) {
   
        expect(SelectGroupListChildren.at(i).text()).toBe(data.SelectGroup.ActiveUnits[i])

    }

    const SelectGroupDiv = wrapper.find('.SelectGroup')
    expect(SelectGroupDiv.length).toBe(1)

    const ActiveUnitsDivGroup = SelectGroupDiv.find('#ActiveUnits')
    expect(ActiveUnitsDivGroup.length).toBe(1)
    ActiveUnitsDivGroup.simulate('click')

    const SelectedUnitsListChildren = wrapper.find('.SelectedUnits').children()
    expect(SelectedUnitsListChildren.length).toBe(data.SelectedUnits.ActiveUnits.length)

    for (var i =0 ;i < SelectedUnitsListChildren.length; i++) {
   
      expect(SelectedUnitsListChildren.at(i).text()).toBe(data.SelectedUnits.ActiveUnits[i])

  }

    wrapper.unmount;
  })

  it('Check SelectGroup list renders on SelectGroup item click', () => {
    const wrapper = mount(<App data={data}/>);
    const ActiveUnitsDiv = wrapper.find('#ActiveUnits')
    ActiveUnitsDiv.simulate('click')
    const SelectGroupListChildren = wrapper.find('.SelectGroup').children()
    expect(SelectGroupListChildren.length).toBe(data.SelectGroup.ActiveUnits.length)


    for (var i =0 ;i < SelectGroupListChildren.length; i++) {
   
        expect(SelectGroupListChildren.at(i).text()).toBe(data.SelectGroup.ActiveUnits[i])

    }

    const SelectGroupDiv = wrapper.find('.SelectGroup')
    expect(SelectGroupDiv.length).toBe(1)

    const ActiveUnitsDivGroup = SelectGroupDiv.find('#ActiveUnits')
    expect(ActiveUnitsDivGroup.length).toBe(1)
    ActiveUnitsDivGroup.simulate('click')

    const SelectedUnitsListChildren = wrapper.find('.SelectedUnits').children()
    expect(SelectedUnitsListChildren.length).toBe(data.SelectedUnits.ActiveUnits.length)

    for (var i =0 ;i < SelectedUnitsListChildren.length; i++) {
   
      expect(SelectedUnitsListChildren.at(i).text()).toBe(data.SelectedUnits.ActiveUnits[i])

  }
  
    wrapper.unmount;
  })

  it('Match snapshot on Active units selections', () => {
    const wrapper = mount(<App data={data}/>);
    wrapper.setState({SelectFilter:"ActiveUnits",SelectGroup:"ActiveUnits"})
    expect(toJson(wrapper)).toMatchSnapshot()
    wrapper.unmount;
  })

  it('Match snapshot on SelectedUnit Selection', () => {
    const wrapper = mount(<App data={data}/>);
    wrapper.setState({SelectFilter:"ActiveUnits",SelectGroup:"ActiveUnits",SelectedUnits:"0100-Restaurant,Stevenage"})
    expect(location.pathname).toBe('/app/units/0100')

    wrapper.unmount;
  })

})