import logo from './logo.svg';
import './App.css';
import { Button,SHAPE,SIZE } from 'baseui/button';
import {useStyletron} from 'baseui';
import Layout from './Layout';


function App() {
  const [css] = useStyletron();

  return (
    <div className="App">
      <Layout>
        
      </Layout>
        
    </div>
  );
}

export default App;
