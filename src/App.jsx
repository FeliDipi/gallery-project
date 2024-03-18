import './App.css';

import { data } from "./data/mock.json";

import Gallery from './components/Gallery';

function App() {
  
  return (
    <div id='app' className='center'>
      <Gallery className={"custom-gallery"}>
        {
          data.map((value,idx)=>(<div key={idx} className='gallery-item center'>{value.title}</div>))
        }
      </Gallery>
    </div>
  )
}

export default App
