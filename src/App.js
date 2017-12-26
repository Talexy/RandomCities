import React, { Component } from 'react';
import $ from 'jquery';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <h1>Random Cities</h1>
          <br/>
          <ButtonCity />
          <br/>
          <br/>
          <City />
          <br/>
      </div>
    );
  }
}

export default App;


export class ButtonCity extends Component {

    render(){

      return(
        <button>Get Random City</button>

      );

    }
}


export class City extends Component {

    constructor(props){
      super(props);
      this.state = {
        cityData:{}
      }
    }

    getCityData(){
      $.ajax({
        url:'http://localhost:3000/cityData.json',
        dataType:'json',
        cache: false,
        success: function(data){
          this.setState({cityData: data});
        }.bind(this),
        error: function(xhr, status, err){
          console.log(err);
          alert(err);
        }
      });
    }

    componentDidMount(){
      this.getCityData();
    }

    render(){
        return (
              <div>
                <table>

                    <tr><td>Ciy Name</td></tr>
                    <tr><td>{this.state.cityData.name}</td></tr>
                    <tr><td>Country</td></tr>
                    <tr><td>{this.state.cityData.country}</td></tr>
                    <tr><td>Ciy picture</td></tr>
                    <tr><td>Continent</td></tr>
                    <tr><td>Population</td></tr>
                    <tr><td>Trip Advisor</td></tr>
                    <tr><td>Fun facts</td></tr>
                    <tr><td>Interesting Facts</td></tr>
                    <tr><td>Pronounciation</td></tr>
                    <tr><td>Fly there</td></tr>
                    <tr><td>Carousel top things</td></tr>

                </table>

              </div>

        );

  }

}
