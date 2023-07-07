import React from "react";

const Weather = (props) => (
  <div>
    {props.city && (
      <div>
        <h4>Город: {props.city} </h4>
        <h5>Температура воздуха в градусах цельсия:</h5>
        <ul>
          <li>Текущая: {props.temp}°C </li>
          <li>Максимальная: {props.temp_max}°C</li>
          <li>Минимальная: {props.temp_min}°C</li>
          <li>Ощущается как: {props.feels_like}°C</li>
        </ul>
      </div>
    )}
    <p>{props.error}</p>
  </div>
);

export default Weather;
