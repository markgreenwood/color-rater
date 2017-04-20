import React, { Component } from 'react';
import uuidV4 from 'uuid/v4';
import AddColorForm from './AddColorForm';
import ColorList from './ColorList';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: [],
    };
    this.addColor = this.addColor.bind(this);
    this.rateColor = this.rateColor.bind(this);
    this.removeColor = this.removeColor.bind(this);
  }

  addColor(title, color) {
    const colors = [
      ...this.state.colors,
      {
        id: uuidV4(),
        title,
        color,
        rating: 0,
      }
    ];
    console.log(colors);
    this.setState({colors});
  }

  rateColor(id, rating) {
    const colors = this.state.colors.map(color => 
      (color.id !== id) ? 
        color : { ...color, rating }
    );
    this.setState({colors});
  }

  removeColor(id) {
    const colors = this.state.colors.filter(
      color => color.id !== id
    );
    this.setState({colors});
  }

  render() {
    const { addColor, rateColor, removeColor } = this;
    const { colors } = this.state;
    return (
      <div className="app">
        <AddColorForm onNewColor={addColor}/>
        <ColorList colors={colors}
          onRate={rateColor}
          onRemove={removeColor} />
      </div>
    );
  }
}

export default App;