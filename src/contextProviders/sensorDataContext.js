import React, { createContext, useContext, useState, useEffect } from "react";
import { sendData } from "../components/getRealData";
import { useNavigate } from "react-router-dom";

// Step 1: Create a context
const SensorDataContext = createContext();

// Step 2: Create the context provider component
const SensorDataProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [selectedSensor, setSelectedSensor] = useState("350457790740896");
  const [selectedPeriod, setSelectedPeriod] = useState("Today");
  const navigate = useNavigate();
  const fetchData = async () => {
    try {
      const { dates, Pm1p0, Pm2p5, Pm4p0, Pm10p0, Temperature, Humidity, Voc , Nox } =
        selectedSensor !== null
          ? await sendData(selectedSensor, selectedPeriod)
          : await sendData("350457790740979", selectedPeriod);

      setData({
        dates,
        Pm1p0,
        Pm2p5,
        Pm4p0,
        Pm10p0,
        Temperature,
        Humidity,
        Voc,
        Nox
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [selectedSensor, selectedPeriod]);

  // Step 3: Provide the state and functions through the context
  const contextValue = {
    data,
    selectedSensor,
    selectedPeriod,
    setSelectedSensor,
    setSelectedPeriod,
    fetchData,
  };

  return (
    <SensorDataContext.Provider value={contextValue}>
      {children}
    </SensorDataContext.Provider>
  );
};

// Create a custom hook to use the context
const useSensorData = () => {
  const context = useContext(SensorDataContext);
  if (!context) {
    throw new Error("useSensorData must be used within a SensorDataProvider");
  }
  return context;
};

export { SensorDataProvider, useSensorData };
