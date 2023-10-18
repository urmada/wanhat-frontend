import * as React from 'react';
import { Outlet } from 'react-router-dom';
import {useStyletron} from 'baseui';
import {Button,SIZE,SHAPE} from 'baseui/button';
import {Layer} from 'baseui/layer';
import {ChevronDown, Delete, Overflow, Upload} from 'baseui/icon';

import Navbar from './Navbar';

function Layout({children}) {
  
  const [css] = useStyletron();

  const [mainItems, setMainItems] = React.useState([
    {icon: Upload, label: 'Home'},
    {icon: ChevronDown, label: 'Seating'},
    {icon: Upload, label: 'Events'},
    {icon: Upload, label: 'About Us'}
  ]);

  const userItems = [
    {icon: Overflow, label: 'Account item1'},
  ];
  function handleMainItemSelect(item) {
    setMainItems((prev) => setItemActive(prev, item));
  }
  
  function onClick(){
    console.log ('clicked')
  }

  return (
    <div 
      className={css({
      backgroundColor: 'white',
      color:'black',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
    })}>
      <ReactRouter>
        {children}
      </ReactRouter>
    </div>
  );
}

function LayoutElements({children}){
  return(
    <div>
      <div><Navbar/></div> 
      <div><Outlet/></div>
    </div>
    
  )
}

export default Layout;
