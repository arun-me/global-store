# global-store
A Simplified Global store for React

## Installation
```sh
npm install global-state
```
## Usage
In the **index.js** file of the react app
```sh
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Provider} from 'global-state';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider>
    <App />
  </Provider>
);
```
In You can use it in your **Component** 
```sh
import { useGStore } from 'global-state'; 

function App() {
  const [state, setState] = useGStore(0,"UniqueGlobalStateName");
  
 const increment1=()=>{
    const tempState=state+1
    setState(tempState)
  }
  return (
    <>
     <button onClick={increment}>increment</button>
     <div >{state}</div>
    </>
  );
}

export default App;
```
## Limitation
1. You can use setState of useGStore  to update the state only like this
    ```sh
      const tempState=state+1
        setState(tempState)
    ```
    You can't use like below
    ```sh
        setState((state)=>state+1)
    ```
    
2. You have to pass a unique name to each state as a second argument in useGStore
    ```sh
     const [userName, setUserName] = useGStore("initial Value","userName");
      const [age, setAge] = useGStore(20,"age");
     ```
## License

MIT