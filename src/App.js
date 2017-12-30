import React, { Component } from 'react';
import $ from 'jquery';
import axios from 'axios';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {cityData:[]};
 	  this.loadCityData = this.loadCityData.bind(this);
  }

  loadCityData(){

    console.log("entered loadData");

    axios.get('http://localhost:3000/cityData.json')
      .then((response) => {
        this.setState({cityData: response.data}, function(){
          console.log(response.data);
          console.log("I tried");
          console.log(this.state.cityData);
        });
      })
      .catch((err) => {
        console.log("ERROR")
        console.log(err);
      });

  }


  render() {
    return (
      <div className="App">
          <div id="header">
            <h1>Random Cities</h1>
          </div>
          <br/>
            <button onClick={this.loadCityData}>Get Random City</button>
          <br/>
          <br/>
          <SelectRegion />
          <br/>
          <div >
            <table className="table card" id="cardTable">
                  <tbody>

                  <tr>
                    <td>Ciy</td>
                    <td>{this.state.cityData.name}</td>
                  </tr>

                  <tr>
                    <td>Country</td>
                    <td>{this.state.cityData.country}</td>
                </tr>

                  <tr>
                    <td>Continent</td>
                    <td>{this.state.cityData.continent}</td>
                </tr>

                  <tr>
                    <td>Image </td>
                    <td>{this.state.cityData.image}</td>
                  </tr>

                  <tr>
                    <td>Population</td>
                    <td>{this.state.cityData.population}</td>
                  </tr>

                  <tr>
                    <td>Trip Advisor</td>
                    <td>{this.state.cityData.tripadvisor}</td>
                  </tr>

                  <tr>
                    <td>Fun facts</td>
                    <td>{this.state.cityData.funfacts}</td>
                  </tr>

                  <tr>
                    <td>Interesting Facts</td>
                    <td>{this.state.cityData.interestingfacts}</td>
                  </tr>

                  <tr>
                    <td>Pronounciation</td>
                    <td>{this.state.cityData.pronounciation}</td>
                  </tr>

                  <tr>
                    <td>Fly there</td>
                    <td>{this.state.cityData.flythere}</td>
                  </tr>

                  <tr>
                    <td>Carousel top things</td>
                    <td>{this.state.cityData.thingstodo}</td>
                  </tr>

                </tbody>

          </table>

          <br/>

        </div>
          <br/>
      </div>
      );
    }
  }

export default App;


export class SelectRegion extends Component {

    render (){

        return(
            <div>

              <div className="dropdown">
                <button className="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown">Select Region
                <span className="caret"></span></button>

                <ul className="dropdown-menu">

                  <li> Worldwide region</li>
                  <li> Africa</li>
                  <li> Antartica</li>
                  <li> Asia</li>
                  <li> Australia</li>
                  <li> Europe</li>
                  <li> North America</li>
                  <li> South America</li>

                </ul>

              </div>
            </div>

        );
    }
}
