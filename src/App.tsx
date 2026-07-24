import './App.css'
import {useState} from 'react'

function App() {

    // eslint-disable-next-line prefer-const
    let [counter, setCounter] = useState<number>(0);
  return (
    <>
        <div>
            <h2>{counter}</h2>
            <button onClick={()=>{
                console.log('+ ' + counter);
                setCounter(++counter);
            }}>
                increment
            </button>

            <button onClick={()=>{
                console.log('- ' + counter);
                setCounter(prevState => {
                    return prevState - 1;
                });
            }}>
                decrement
            </button>
        </div>
    </>
  )
}

export default App
