import ReactDOM from 'react-dom';
import App from './App';

let counter = 1
const refresh = () => {
    ReactDOM.render(
      <App counter={counter}/>,
    document.getElementById('root')
  );

}

// refresh()
// counter++
// refresh()
// counter++
// refresh()

setInterval(() => {
  refresh()
  counter++
}, 1000)
