import React, { Component } from 'react';
import './App.css';
import Collapsible from 'react-collapsible';
import Slider from "react-slick";


class App extends Component {
  render() {
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
      <Collapsible trigger="There is the second block">
          <p>This is the collapsible content. It can be any element or React component you like.</p>
      </Collapsible>
      <Collapsible trigger="There is the third block">
          <p>This is the collapsible content. It can be any element or React component you like.</p>
      </Collapsible>
      </div>
    );
  }
}


class SimpleSlider extends React.Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <Slider {...settings}>
                <div>
                    <h3>1</h3>
                </div>
                <div>
                    <h3>2</h3>
                </div>
                <div>
                    <h3>3</h3>
                </div>
                <div>
                    <h3>4</h3>
                </div>
                <div>
                    <h3>5</h3>
                </div>
                <div>
                    <h3>6</h3>
                </div>
            </Slider>
        );
    }
}

export default App;
