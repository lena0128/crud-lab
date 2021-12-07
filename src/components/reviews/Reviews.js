import Review from './Review';
import React from 'react';

class Reviews extends React.Component {

  renderReviews = () => {
    let reviews = this.props.reviews.filter(review => review.restaurantId === this.props.restaurantId)
    return reviews.map(review => <Review review={review} key={review.id} deleteReview={this.props.deleteReview} />)
  }
  render() {
    return (
      <div>
        <ul>
          {this.renderReviews()}
        </ul>
      </div>
    );
  }

};

export default Reviews;