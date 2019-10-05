import React from 'react';
import './App.css';
import './todo-list';
import Axios from 'axios';
import { async } from 'q';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core/styles';
import logo from './logo.svg';
import './App.css';
import ContainedButtons from './components/button';
import TextField from './components/menu';
import ListBar from './listBar';
import { OutlinedInput } from '@material-ui/core';
import OutlinedTextFields from './components/menu';

export default function App() {
  return (

    <Router>
       <header className="TodoList-Header">
         <p>
           To-do List
           </p>
       </header>
      <br/>
      <body>
        <ContainedButtons/>
      <br/>
        {/* <TextField/> */}
      </body>
      <br/>
      <div class="row">
			<div class="helpText col-12">
				<p id="first">Agregue el primer quehacer a la barra crear su lista de deberes.</p>
				<p id="second">Haga click en la tarea para poder marcar como completado.</p>
				<p id="third">Haga click en la 'X' para eliminar la tarea de la lista.</p>
			</div>
		</div>

    <div class="row">
			<div class="col-12">
				<input id="userInput" type="text" placeholder="New item..." maxlength="27"></input>
				<button id="enter"><i class="fas fa-pencil-alt"></i></button>
			</div>
		</div>
    
    <div class="row">
			<div class="listItems col-12">
				<ul class="col-12 offset-0 col-sm-8 offset-sm-2">
				</ul>
			</div>
		</div>

	<script type="text/javascript" src="script_method3.js"></script>
    </Router>
  );
}









// export default Button;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// function 

// const axios = require('axios')
// const swapi = async () => {
//   try {
//     return axios.get('http://www.swapi.co')
//   } catch (error) {
//     console.error(error)
//   }
// }

// const characters = async () => {
//   const characters = swapi()
//   .then(response => {
//     if (response.data.message) {
//     console.log(`Got ${Object.entries(characters.data.message).length}
//     characters`)
//   }
// })
// .catch(error => {
//   console.log(error)
// })
// }
// characters()


