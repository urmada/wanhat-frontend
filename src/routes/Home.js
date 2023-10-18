import * as React from 'react';
import {useStyletron} from 'baseui';
import {Button,SIZE,SHAPE} from 'baseui/button';

function Home(){

    const [css] = useStyletron();

    return(
        <div
            className={css({
		    minWidth: '800px',
		    width: '100%',
 	    color:'black',
            paddingTop: '1%',
            display: 'flex',
            flexDirection: 'column',
          })}
        >
            <div
                className={css({
                width: '100hw',
                height: '400px',
                border: 'solid 2px #333333',
                display: 'flex',
                flexDirection: 'row'
            })} 
            >
            <div
                className={css({
                width: '400px',
                height: '400px',
                backgroundImage: 'url("https://github.com/urmada/images/blob/8b2c68a2a02b1bd711537dd3ab2137e79881b1e2/Vanhojen_tanssit.jpg?raw=true")',
		backgroundPosition: 'center',
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat'
            })} 
            >
            </div>

            <div
                className={css({
                width: '400px',
                height: '400px',
                backgroundImage: 'url("https://github.com/urmada/images/blob/8b2c68a2a02b1bd711537dd3ab2137e79881b1e2/Vanhojen_tanssit.jpg?raw=true")',
                backgroundPosition: 'center',
		backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat'
            })} 
            >
            </div>

            </div>
            
            <div
                className={css({
                    display: 'flex',
                    flexDirection: 'row'
                })}
            >

            <div
                className={css({
                width: '400px',
                height: '400px',
                backgroundImage: 'url("https://github.com/urmada/images/blob/8b2c68a2a02b1bd711537dd3ab2137e79881b1e2/Vanhojen_tanssit.jpg?raw=true")',
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            })} 
            >
            </div>

            <div
                className={css({
                width: '400px',
                height: '400px',
                backgroundImage: 'url("https://github.com/urmada/images/blob/8b2c68a2a02b1bd711537dd3ab2137e79881b1e2/Vanhojen_tanssit.jpg?raw=true")',
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            })} 
            >
            </div>

            </div>

            Home
        </div>
    )
}

export default Home;
