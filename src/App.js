import React from "react";
import Info from "./components/info";
import Form from "./components/form";
import Weather from "./components/weather";
import WeatherBG from "./assets/weather-img.jpg";
import "./App.css";


const API_KEY = "63b5528e513b52e282c18c16b83178de";

class App extends React.Component {
  state = {
    city: undefined,
    temp: undefined,
    temp_max: undefined,
    temp_min: undefined,
    feels_like: undefined,
    error: undefined,
  };

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;

    if (city) {
      const api_url = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      const data = await api_url.json();
      console.log(data);

      this.setState({
        city: data.name,
        temp: data.main.temp,
        temp_max: data.main.temp_max,
        temp_min: data.main.temp_min,
        feels_like: data.main.feels_like,
        error: undefined,
      });
    } else {
      this.setState({
        city: undefined,
        temp: undefined,
        temp_max: undefined,
        temp_min: undefined,
        feels_like: undefined,
        error: "Введита название города",
      });
    }
  };

  render() {
    return (
      
        <div className="App" style={{ backgroundImage: `url(${WeatherBG})` }}>
          <div className="overlay">
            <div className="container">
              <div className="section section__inputs">
                <Info />
                <Form weatherMethod={this.getWeather} />
              </div>

              <div className="section section__temperature">
                <div className="temperature">
                  <Weather
                    city={this.state.city}
                    temp={this.state.temp}
                    temp_max={this.state.temp_max}
                    temp_min={this.state.temp_min}
                    feels_like={this.state.feels_like}
                    error={this.state.error}
                  />
                </div>
              </div>
              
            </div>
          </div>
      </div>

    );
  }
}

export default App;
