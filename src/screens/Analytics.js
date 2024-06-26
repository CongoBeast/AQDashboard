import React, { useContext , useEffect, useState } from "react";
import { Container, Row, Col, Card, Dropdown } from "react-bootstrap";
import Sidebar from "../components/SideBar";
import ChartCard from "../components/chartCard.js";
import sensorData from "../dummyData/SensorData.js";
import { useDataType } from "../contextProviders/dataTypeContext.js";
import { useSensorData } from "../contextProviders/sensorDataContext.js";
import { useNavigate } from "react-router-dom";
import { TempContext } from "../contextProviders/TempContext.js";

const AnalyticsScreen = () => {
  const {
    data,
    selectedSensor,
    selectedPeriod,
    setSelectedSensor,
    setSelectedPeriod,
    fetchData,
  } = useSensorData();

  const { nodeData } = useContext(TempContext);

  const dates = nodeData
  .filter((data) => data.sensor_id === selectedSensor) // Filter data by sensor id
  .map((data) => data.timestamp);


  const navigate = useNavigate();
  useEffect(() => {
    fetchData();
  }, [selectedSensor, selectedPeriod]);

  const { selectedType, handleTypeSelect } = useDataType();

  if(selectedType === "Pm1p0"){
    var title = "Pm 1.0 (μg/m³)";
  }
  else if(selectedType === "Pm2p5"){
    var title = "Pm 2.5 (μg/m³)";
  }
  else if(selectedType === "Pm4p0"){
    var title = "Pm 4.0 (μg/m³)";
  }
  else if(selectedType === "Pm10p0"){
    var title = "Pm 10.0 (μg/m³)";
  }
  else if(selectedType === "Temperature"){
    var title = "Temperature (°C)";
  }
  else if(selectedType === "Humidity"){
    var title = "Humidity (%)";
  }
  else if(selectedType === "Voc"){
    var title = "Voc (Ppb)";
  }
  else if(selectedType === "Nox"){
    var title = "Nox (Ppb)";
  }

  function getTitle(selectedType) {
    var title;
    if (selectedType === "Pm1p0") {
      title = "Pm 1.0 (μg/m³)";
    } else if (selectedType === "Pm2p5") {
      title = "Pm 2.5 (μg/m³)";
    } else if (selectedType === "Pm4p0") {
      title = "Pm 4.0 (μg/m³)";
    } else if (selectedType === "Pm10p0") {
      title = "Pm 10.0 (μg/m³)";
    } else if (selectedType === "Temperature") {
      title = "Temperature (°C)";
    } else if (selectedType === "Humidity") {
      title = "Humidity (%)";
    } else if (selectedType === "Voc") {
      title = "Voc (Ppb)";
    } else if (selectedType === "Nox") {
      title = "Nox (Ppb)";
    }
    return title;
  }
  

  

  const filteredData = nodeData
  .filter((item) => item.sensor_id === selectedSensor)
  .map((data) => {
    // Check the value of selectedType and return the corresponding data property
    if (selectedType === "Humidity") {
      return data.humidity;
    } 
    else if (selectedType === "Temperature") {
      return data.temperature;
    } 
    else if (selectedType === "Nox") {
      return data.nox;
    } 
    else if (selectedType === "Voc") {
      return data.voc;
    }
    else if (selectedType === "Pm1p0") {
      return data.pm1p0;
    } 
    else if (selectedType === "Pm2p5") {
      return data.pm2p5;
    } 
    else if (selectedType === "Pm4p0") {
      return data.pm4p0;
    } 
    else if (selectedType === "Pm10p0") {
      return data.pm10p0;
    } 
    
    // Default case if selectedType doesn't match any condition
    return null; // or return some default value
  });

  const chartInfo = {
    labels: dates,
    datasets: [
      {
        label: getTitle(selectedType),
        data: filteredData,
        fill: true,
        backgroundColor: function (context) {
          var ctx = context.chart.ctx;
          var gradient = ctx.createLinearGradient(0, 0, 0, 200);
          gradient.addColorStop(0, "rgba(88, 130, 239, 1)");
          gradient.addColorStop(0.25, "rgba(88, 130, 239, 0.75)");
          gradient.addColorStop(0.5, "rgba(88, 130, 239, 0.5)");
          gradient.addColorStop(0.75, "rgba(88, 130, 239, 0.25)");
          gradient.addColorStop(1, "rgba(88, 130, 239, 0.0)");
          return gradient;
        },
        borderColor: "#8fbaff",
        tension: 0.4,
        borderWidth: 2,
        fill: true,
        pointBackgroundColor: "#FFFFFF",
        // pointRadius: 3,
        pointBorderColor: "#8fbaff",
        pointBorderWidth: 2,
      },
    ],
  };

  // const selectedData = data[selectedType];
  const selectedData = chartInfo;


  // console.log(data)

  useEffect(() => {
    const timer = setTimeout(() => {
      handleCardClick();
    }, 2000); // Call handleCardClick after 2 seconds (2000 milliseconds)

    // Cleanup function to clear the timer when the component unmounts
    return () => clearTimeout(timer);
  }, [selectedSensor, selectedPeriod]); // Empty dependency array ensures the effect runs only once, on mount

  const handleCardClick = () => {
    // After setting the selectedType, navigate to the analytics page
    navigate("/analytics");
  };
  const chartOptions = {
    responsive: true,
    scales: {
      x: {
        grid: {
          display: true, // Display x-axis grid lines
        },
        display: false,
      },
      y: {
        grid: {
          display: true, // Display y-axis grid lines
        },
        display: false,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
    elements: {
      point: {
        radius: 1,
      },
    },
    maintainAspectRatio: false,
  };

  const getStationNameBySensorId = (sensorId) => {
    // Loop through each sensor data object
    for (const sensor of sensorData) {
      // Check if the current sensor's ID matches the provided sensorId
      if (sensor["Sensor ID"] === sensorId) {
        // If there's a match, return the station name
        return sensor["Station Name"];
      }
    }
  }

  const handlePeriodSelect = (period) => {
    setSelectedPeriod(period);
  };

  const handleSensorSelect = (sensorId) => {
    setSelectedSensor(sensorId);
    // onSelectSensor(sensorId);
  };
  return (
    <div
      className="d-flex flex-row"
      style={{
        minHeight: "100vh",
        maxHeight: "100vh",
        background: "#f2f2f2",
        overflowY: "hidden",
      }}>
      <Sidebar />
      <Container
        fluid
        className="p-4 "
        style={{
          minHeight: "98vh",
          maxHeight: "100vh",
          overflowY: "scroll",
          padding: "2rem",
        }}>
        <div className="d-flex flex-row justify-content-between">
          <Dropdown onSelect={(eventKey) => handleSensorSelect(eventKey)}>
            <Dropdown.Toggle
              id="dropdown-basic"
              style={{
                background: "#2068F3",
                border: "none",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
              }}>
              {  getStationNameBySensorId(selectedSensor)   || "Select Sensor" }
            </Dropdown.Toggle>

            <Dropdown.Menu style={{ maxHeight: "80vh", overflowY: "scroll" }}>
              {sensorData.map((sensor, index) => (
                <Dropdown.Item key={index} eventKey={sensor["Sensor ID"]}>
                  {sensor["Station Name"]}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown onSelect={(eventKey) => handlePeriodSelect(eventKey)}>
            <Dropdown.Toggle
              id="dropdown-basic"
              style={{
                background: "#2068F3",
                border: "none",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
              }}>
              {selectedPeriod}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item eventKey="Today">Today</Dropdown.Item>
              <Dropdown.Item eventKey="LastDay">Last Day</Dropdown.Item>
              <Dropdown.Item eventKey="7Days">7 Days</Dropdown.Item>
              <Dropdown.Item eventKey="30Days">30 Days</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <Row className="mt-4">
          <Col>
            <Card
              className="mt-1 "
              style={{
                border: "none",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
                minHeight: "60vh",
              }}>
              <h6
                style={{
                  color: "#666",
                  fontWeight: "bold",
                  fontSize: "10px",
                  fontFamily: "Helvetica Neue",
                  textAlign: "left",
                  padding: "1rem",
                }}>
                <div className="d-flex flex-row justify-content-between">
                  <Dropdown onSelect={(eventKey) => handleTypeSelect(eventKey)}>
                    <Dropdown.Toggle
                      id="dropdown-basic"
                      style={{
                        background: "#FFF",
                        borderColor: "#666",
                        color: "#666",
                        fontWeight: "bold",
                        fontSize: "10px",
                        fontFamily: "Helvetica Neue",
                      }}>
                      {getTitle(selectedType)}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      {Object.keys(data).map((type) => (
                        <Dropdown.Item key={type} eventKey={type}>
                          {type}
                        </Dropdown.Item>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </h6>

              {data ? (
                <ChartCard
                  data={selectedData}
                  options={chartOptions}
                  // title={selectedType}
                  title = {title}
                />
              ) : null}
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AnalyticsScreen;
