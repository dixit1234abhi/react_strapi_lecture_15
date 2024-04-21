import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { route } from './Routes/Routes';
// import { Route } from 'react-router-dom';

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        
        {/* array.map(function(currentValue, index, arr), thisValue) */}
        {route.map((currentValue,index,arr)=>{
          return <Route key={index} path={currentValue.path} element={currentValue.element}  ></Route>
        } )}
        
      </Routes>
    
    </BrowserRouter>

    
    

  );
}

export default App;
