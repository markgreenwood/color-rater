import React from 'react';
import PropTypes from 'prop-types';
import StarRating from './StarRating';
import './ColorList.scss';
import './Color.scss';

const ColorList = ({colors=[], onRate=f=>f, onRemove=f=>f}) => {
  return (
    <div className="color-list">
      {(colors.length === 0) ?
        <p>No Colors Listed (Add a Color)</p> :
        colors.map((color) => <Color key={color.id}
          { ...color }
          onRate={(rating) => onRate(color.id, rating)}
          onRemove={() => onRemove(color.id)} />)
      }
    </div>
  );
};

ColorList.propTypes = {
  colors: PropTypes.array,
  onRate: PropTypes.func,
  onRemove: PropTypes.func,
};

export default ColorList;

const Color = ({title, color, rating=0, onRemove=f=>f, onRate=f=>f}) => {
  return (
    <section className="color">
      <h1>{title}</h1>
      <button onClick={onRemove}>X</button>
      <div className="color" style={{backgroundColor: color}}>
      </div>
      <div>
        <StarRating starsSelected={rating} onRate={onRate}/>
      </div>
    </section>
  );
};

Color.propTypes = {
  title: PropTypes.string,
  color: PropTypes.string,
  rating: PropTypes.number,
  onRemove: PropTypes.func,
  onRate: PropTypes.func,
};
