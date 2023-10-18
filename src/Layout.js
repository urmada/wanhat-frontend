import * as React from 'react';
import {
  Outlet,
  RouterProvider,
  createBrowserRouter,
  createMemoryRouter}from 'react-router-dom';
import {useStyletron} from 'baseui';
import {Button,SIZE,SHAPE} from 'baseui/button';
import {Layer} from 'baseui/layer';
import {ChevronDown, Delete, Overflow, Upload} from 'baseui/icon';
import {
  AppNavBar,
  setItemActive,
  NavItem,
} from 'baseui/app-nav-bar';

import Home from './Home';
import Seating from './Seating';
import Navbar from './Navbar';
import Events from './Events';
import About from './About';

function ReactRouter({children}){
  const routes = [
    {
      path:'/Home',
      element: <Home/>
    },
    {
      path:'/Seating',
      element:<Seating/>
    },
    {
      path:'/Events',
      element: <Events/>
    },
    {
      path:'/About',
      element: <About/>
    },
  ]

  const router = createBrowserRouter([
    {
      path:'/',
      element: <LayoutElements> {children} </LayoutElements>,
      children: routes,
    }
  ])

  return <React.StrictMode>
    <RouterProvider router={router}>
    </RouterProvider>
  </React.StrictMode>

}

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
