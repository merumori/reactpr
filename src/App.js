import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './Card';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/products/1');
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <Card title={data.title} description={data.description} />
      <Card title={data.title} description={data.description} />
      <Card title={data.title} description={data.description} />
      
    </div>
  );
}

export default App;