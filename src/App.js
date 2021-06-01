 import {BrowserRouter as Router ,Route,Switch} from 'react-router-dom'
import './App.css';
import Navbar from './Components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import SingleCockTile from './pages/SingleCockTile';
import Error from './pages/Error';
 
function App() {
  return (
   <Router>
     <Navbar/>
     <Switch>
       <Route exact path='/'>
               <Home/>
       </Route>
       <Route exact path='/about'>
               <About/>
       </Route>
       <Route   path='/cocktile/:id'>
               <SingleCockTile/>
       </Route>
       <Route exact path='*'>
               <Error/>
       </Route>
     </Switch>
   </Router>
  );
}

export default App;
