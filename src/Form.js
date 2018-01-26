import React, { Component } from 'react';
import './Form.css';


class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: '',
      width: '',
      height: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.submitHandle = this.submitHandle.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  submitHandle(e) {
    e.preventDefault();
    this.addFocus();

    this.setState({
      color: this.state.color,
      height: this.state.height,
      width: this.state.width
    })
  }

  addFocus() {
    this.form.focus();
  }

  render() {
    return (
      <div className="form-group row justify-content-center">
        <label htmlFor="example-text-input" classNa="col-2 col-form-label">Text</label>
        <form onSubmit={this.submitHandle} >
        <div class="col-10">
          <input className='for-control' value={this.state.color} placeholder='Color' name='color' onChange={this.handleChange} ref={el => this.form = el}/>
        </div>
        <div class="col-10">
          <input className='for-control' value={this.state.height} placeholder='Height' name='height' onChange={this.handleChange} />
        </div>
        <div class="col-10">
          <input className='for-control' value={this.state.width} placeholder='Width' name='width' onChange={this.handleChange} />
        </div>
          <button className='btn btn-primary' type='submit'> Submit</button>
        </form>

        <div style={{
          backgroundColor: `${this.state.color}`, 
          width: `${this.state.width}em`, 
          height: `${this.state.height}em`
          }}></div>
      </div>
    );
  }
}

export default Form;
