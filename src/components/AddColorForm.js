import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../stylesheets/AddColorForm.scss';

class AddColorForm extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }

  submit(e) {
    e.preventDefault();
    const { _title, _color } = this.refs;
    this.props.onNewColor(_title.value, _color.value);
    _title.value = '';
    _color.value = '#000000';
    _title.focus();
  }

  render() {
    return (
      <form onSubmit={(e) => this.submit(e)}>
        <input ref="_title" type="text" placeholder="color title..." required />
        <input ref="_color" type="color" required />
        <button>Add</button>
      </form>
    );
  }
}

AddColorForm.propTypes = {
  onNewColor: PropTypes.func,
};

AddColorForm.defaultProps = {
  onNewColor: f => f,
};

export default AddColorForm;
