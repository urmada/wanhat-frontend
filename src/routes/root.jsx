import { Link, Outlet } from 'react-router-dom'
import { useStyletron, theme } from 'baseui';

import Navbar from '../Navbar';

export default function Root() {

	const [css] = useStyletron();
	return (
   		<div
	  	className={css({
            		width: '100hw',
			minWidth: '1000px',
			color:'black',
        	    	display: 'flex',
            		flexDirection: 'column',
	     	 })}>
		<div><Navbar/></div>
      		<div><Outlet/></div>
		</div>
	)
}
