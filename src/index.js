import ReactDOM from 'react-dom'
import App from './App'
import './index.css'

ReactDOM.render(<App/>, document.querySelector('#root'))

document.addEventListener('invalid', (function(){
    return function(e) {
      e.preventDefault();
    };
})(), true);