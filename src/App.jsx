
import axios from 'axios';
import { useEffect, useState } from 'react'
import './App.css'
import DataEntry from './components/DataEntry'
import Tests from './components/Tests'

function App() {

  const [testList, setTestList] = useState([]);

  useEffect(() => {
    getTests();
  }, [])

  const getTests = () => {
    axios.get('http://localhost:8000/api/visitors')
      .then(res => setTestList(res.data));
  }

  return (
    <div className="App">
      <DataEntry
      getTests={getTests}
      />
      <Tests
      testList={testList}
      /> 
    </div>
  )
}

export default App
