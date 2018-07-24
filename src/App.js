import React, { Component } from 'react';
import './App.css';
import Collapsible from 'react-collapsible';
import Slider from "react-slick";
import Select from "react-select";

const options = [
    { value: 'panda', label: 'Panda' },
    { value: 'cat', label: 'Cat' },
    { value: 'dog', label: 'Dog' },
    { value: 'raccoon', label: 'Raccoon' },
    { value: 'ferret', label: 'Ferret' }
];

class App extends Component {
    state = {
        selectedOption: null,
    };
    handleChange = (selectedOption) => {
        this.setState({ selectedOption });
        console.log(`You selected:`, selectedOption);
    };
  render() {
      const { selectedOption } = this.state;
    return (
          <div className="App">
        <header className="App-header">
          <h1 className="App-title">My first stuff on react</h1>
        </header>
          <Collapsible trigger="Slider">
              <Slider>
              <div>
                  <img src="https://data.whicdn.com/images/51590922/original.jpg" alt=""/>
              </div>
              <div>
                  <img src="https://data.whicdn.com/images/28076791/original.jpg" alt=""/>
              </div>
              <div>
                  <img src="http://images4.fanpop.com/image/photos/14700000/KWMS-Episode-1-Misaki-Is-A-Maid-takumi-usui-x-misaki-ayuzawa-14735086-500-281.jpg" alt=""/>
              </div>
              <div>
                  <img src="https://vignette.wikia.nocookie.net/kaichouwamaidsama/images/6/62/Usui_and_Misaki_photograph.jpg/revision/latest?cb=20121110125720" alt=""/>
              </div>
              <div>
                  <img src="https://lurei.files.wordpress.com/2010/09/kaichou-wa-maid-sama-ep-26-3.jpg" alt=""/>
              </div>
              <div>
                  <img src="http://53rg10.files.wordpress.com/2010/04/maid-sama_02-01.jpg" alt=""/>
              </div>
          </Slider>
      </Collapsible>
      <Collapsible trigger="Make your choice">
          <Select
              defaultValue={options[0]}
              value={selectedOption}
              onChange={this.handleChange}
              options={options}
          />
      </Collapsible>
      <Collapsible trigger="There is the third block">
          <p>This is the collapsible content. It can be any element or React component you like.</p>
      </Collapsible>
              <Select
                  defaultValue={options[0]}
                  value={selectedOption}
                  onChange={this.handleChange}
                  options={options}
              />
      </div>

    );
  }
}



export default App;
