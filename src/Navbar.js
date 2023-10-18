import * as React from 'react';
import {
  Link,
  StyledLink,
  useNavigate}from 'react-router-dom';
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

function Navbar({children}) {
  
  const [css] = useStyletron();

  const navigate = useNavigate();

  const [mainItems, setMainItems] = React.useState([
    {
      icon: Upload,
      label: 'Home',
      path: '/Home'
    },
    {
      icon: ChevronDown,
      label: 'Seating',
      path: '/Seating'
    },
    {
      icon: Upload,
      label: 'Events',
      path: '/Events'
    },
    {
      icon: Upload,
      label: 'About Us',
      path: '/About'
    },
  ]);

  const userItems = [
    {icon: Overflow, label: 'Account item1'},
  ];
  function handleMainItemSelect(item) {
    console.log(item.path)
    // navigate(item.path)
    setMainItems((prev) => setItemActive(prev, item));
  }
  
  function onClick(){
    console.log ('clicked')
  }

  return (
      <div>
            <AppNavBar
               overrides={{
                Root: {
                  style: ({ $theme }) => ({
                    backgroundColor: 'rgb(10,121,50)'
                  })
                },
                AppName: {
                  style: ({ $theme }) => ({
                    color:'white'
                  })
                }
              }}
              title="Ressun Lukion Wanhat"
              mainItems={mainItems}
              userItems={userItems}
              mapItemToNode={(item) => (
                  <Link to={item.path}
                  className={css({
                    color:'white',
                    textDecoration: 'none'
                  })}
                  >{item.label}</Link>
              )}
              onMainItemSelect={(item) => {
                handleMainItemSelect(item)
              }}
              onUserItemSelect={(item) => console.log('user', item)}
              username="Settings"
              usernameSubtitle="5.0"
              userImgUrl=""
            />
      </div>
  );
}

export default Navbar;
