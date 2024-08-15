import React, {useEffect, useState} from 'react'
import DashboardLayout from '../components/Layout'
import { statesData } from '../libs/mapData'
import {
  MapContainer,
  TileLayer,
  Polygon,
  Popup,
  FeatureGroup,
  Circle,
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { initCircileData } from '../libs/initMapData';
import Data from '../libs/data';


const Map = () => {
  const [circleData, setCircleData] = useState(Object.values(initCircileData))
  const purpleOptions = { color: '#8884d8' }
  const center = [38.63463151377654, -90.29969605983609];
  const zoom = 5;

  useEffect(() => {
  Data.map((item) => {
    const state = item.State
    initCircileData[state].radius += parseInt((Number(item.Sales)/10).toFixed(2))
  }
  )
  setCircleData(Object.values(initCircileData))
}, [])



  console.log(circleData)
  return (
    <div>
      <DashboardLayout>
        <h1 className="text-4xl font-semibold m-2">Map</h1>
        <MapContainer
          center={center}
          zoom={zoom}
          style={{ width: '100vw', height: '100vh' }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {
              statesData.features.map((state, index) => {
                const coordinates = state.geometry.coordinates[0].map((item) => [item[1], item[0]]);
                return (<Polygon
                  key={index}
                  pathOptions={{
                    fillColor: '#FFFFFF',
                    fillRule: 'evenodd',
                    fillOpacity: 0.1,
                    weight: 2,
                    opacity: 1,
                  }}
                  positions={coordinates}
                />)
              })
          }
          <FeatureGroup pathOptions={purpleOptions}>
          
            {
              circleData.map((circle, index) => {
                return (
                  <div key={index}>
                    <Circle center={[circle.lat, circle.lng]} radius={circle.radius}>
                      <Popup>Sales is: ${circle.radius}</Popup>
                    </Circle>
                  </div>
                )
              })
            }
          </FeatureGroup>
        </MapContainer>
      </DashboardLayout>
    </div>
  )
}

export default Map