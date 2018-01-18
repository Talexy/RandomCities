import React, { Component } from 'react';
import $ from 'jquery';
import axios from 'axios';
import './App.css';

class App extends Component {


  constructor(props){
    super(props);

     this.state = {cityData:{}};

     this.loadCityData = this.loadCityData.bind(this);

     this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({cityData: {}});
  }

  loadCityData(){

    console.log("entered loadData");
    const randomCityID = "id"+1;
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


    if(this.state.cityData.funfacts){
        
      var funFactsItems = this.state.cityData.funfacts.map(function(fact){
        
            return <div key={fact.id} >

                        <li>{fact.item}</li>

                  </div>
            });
      }

    if(this.state.cityData.interestingfacts){
        
        var interestingFactsItems = this.state.cityData.interestingfacts.map(function(fact){

            return <div key={fact.id} >

                        <li>{fact.item}</li>

                </div>
            });
          }
    


    return (
      <div className="App">
          <div id="header">
            <h1>Random Cities</h1>
          </div>
          <br/>
            <button className="getRandomButton" onClick={this.loadCityData}>Get Random City</button>
          <br/>

          <div className="form-group">
            <label className="col-xs-3 control-label"></label>
            <div className="col-xs-5 selectContainer">
                <select className="select-city form-control" name="size" onChange={this.handleChange}>
                    <option value="worldwide">Worldwide</option>
                    <option value="africa">Africa</option>
                    <option value="antartica">Antartica</option>
                    <option value="asia">Asia</option>
                    <option value="australia">Australia</option>
                    <option value="europe">Europe</option>
                    <option value="northAmerica">North America</option>
                    <option value="southAmerica">South America</option>
                </select>
            </div>
          </div>

          <div >
            <table className="table" id="cardTable">
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
                    <td><img id="image" src={this.state.cityData.image}/></td>
                  </tr>

                  <tr>
                    <td>Population</td>
                    <td>{this.state.cityData.population}</td>
                  </tr>

                  <tr>
                    <td>Trip Advisor</td>
                    <td><a href={this.state.cityData.tripadvisor} target="_blank"><img id="tripadvisor" src="https://static.tacdn.com/img2/branding/rebrand/TA_brand_logo.png"/></a></td>
                  </tr>

                  <tr>
                    <td>Fun facts</td>
                    <td>
                        <ul>
                           { funFactsItems }
                        </ul>
                    </td>
                  </tr>

                  <tr>
                    <td>Interesting Facts</td>
                    <td>
                        <ul>
                           { interestingFactsItems }
                        </ul>
                    </td>
                  </tr>
{/*
                  <tr>
                    <td>Pronounciation</td>
                    <td>{this.state.cityData.pronounciation}</td>
                  </tr> */}

                  <tr>
                    <td>Fly there</td>
                    <td>{this.state.cityData.flythere}</td>
                  </tr>

                  <tr>
                    <td>Carousel top things</td>
                    <td>{this.state.cityData.thingstodo}</td>
                  </tr>

                  {/* // To add tags cultural istoric war love romantic etc */}

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
