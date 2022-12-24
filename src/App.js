import React, {useState} from 'react';
import './App.css';

function App() {
  const[value, setValue] = useState('')
  const[queueList, setQueueList] = useState([])

  const addToQueue = () =>{
    setQueueList([...queueList, value])
    setValue('')
  }

  const removeFromQueue = () =>{
    const newQueueList = [...queueList];
    newQueueList.shift();
    setQueueList(newQueueList)
  }
  return (
    <div className="App">
    <h1 style={{ color: 'blue', margin: '20px' }}>Queue List</h1>
    <div className="Results" style={{
                display: 'flex',
                justifyContent:'center',
                alignContent:'center',
                flexDirection: 'row',
                width: '400px',
                height: '60px',
                fontSize: '20px',
                marginLeft: '400px',
                borderTop: '2px solid green',
                borderBottom: '2px solid green'
            }}>
                {queueList.map((item) => {
                    return <div style={{
                        width: '30px',
                        height: '30px',
                        background: '#a3fc9d',
                        borderRadius: '5px',
                        margin: '10px',
                        textAlign: 'center'
                    }}
                        key={item}>{item}</div>;
                })}
            </div>
            <input
        type="number"
        value={value}
        placeholder="type here..."
        onChange={e => setValue(e.target.value)}
      />
            <button style={{
                margin: '20px',
                background: '#f69dfc',
                width: '200px',
                borderRadius: '5px'
            }}
                onClick={addToQueue}>enqueue</button>
            <button style={{
                margin: '20px',
                background: '#f69dfc',
                width: '200px',
                borderRadius: '5px'
            }}
                onClick={removeFromQueue}>
                dequeue
            </button>
            <p style={{
                color: '#e84917',
                fontSize: '20px',
                margin: '20px'
            }}>Front Element : {queueList[0]}</p>
  
            <p style={{
                color: '#175ce8',
                fontSize: '20px',
                margin: '20px'
            }}>Length of Queue : {queueList.length}</p>
     
    </div>
  );
}

export default App;
