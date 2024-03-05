import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Home.css'
const Home = () => {
  const [sensorData, setSensorData] = useState(null);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const navigate =useNavigate();
  useEffect(()=>{
    if(!localStorage.getItem('token')){
      navigate('/')
    }
  },[navigate])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:5000/sensor-data');
        setSensorData(prevData => response.data.result);

        console.log(sensorData)
        if (response.data.result.result === 'Level:1 - MODERATE ') {
          setShowAlert(true);
          setAlertMessage('SMS alert sent to number: 6302667331');          
        } 
        else if(response.data.result.result === 'Level:2 - IMMEDIATE ACTION REQUIRED') {
          setShowAlert(true);
          setAlertMessage('SMS alert sent with Location to number: 6302667331');
        }
        else {
          setShowAlert(false);
          setAlertMessage('');
        }
        // await axios.post('https://healthguard-backend.onrender.com/api/sensor-data', response.data.result);

      } catch (error) {
        console.error('Error fetching sensor data:', error);
      }
    };

    fetchData();
    const interval = setInterval(() => {
      fetchData();
    }, 20000);

    return () => clearInterval(interval);
  }, [sensorData]);


  return (
    <div className='home'>
    {/* <div className='image'> 
        <img width="100%" height="100%" className='homepage_image' src="" alt="homepage"/>
    </div> */}
    <div className='heading'>
        <h2>WELCOME TO HEALTHGUARD!!!</h2><br/> <br/>
    </div>
    <div className='home'>
      {showAlert && (
          <div className='alert'>
          <p className='alert-message'>{alertMessage}</p>
          </div>
        )}
        {sensorData && (
          <div className='Content'>
            <p className='data'>Temperature: {sensorData.t}</p>
            <p className='data'>Heartbeat: {sensorData.h}</p>
            <p className='data'>SPo2: {sensorData.s}</p>
            <p className='data'>Fall Detected: {sensorData.f}</p>
            <p className='data'>Severity Level: {sensorData.result}</p>
          </div>
        )}
    </div>
    </div>
  );
};

export default Home;
