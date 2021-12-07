import React, { Component } from 'react';


class ReviewInput extends Component {

  state = {
    text: ''
  }

  handleOnChange = (event) => {
    this.setState({
      text: event.target.value
    });
  }

  handleOnSubmit = (event) => {
    event.preventDefault();
    const review = { text: this.state.text, restaurantId: this.props.restaurantId }
    this.props.addReview(review);
    this.setState({
      text: '',
    });
  }

  render() {
    return (
     <div>
        <form onSubmit={this.handleOnSubmit} >
          <label>Add Review</label>
          <input
            type="text"
            value={this.state.text}
            onChange={this.handleOnChange} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default ReviewInput;