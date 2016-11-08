import React from'react';
import { connect } from 'react-redux';
import AddReview from './AddReview';
import { createReview } from '../../redux/product'

const initialState = { comment: '', rating: 0, errors: {} };

function AddReviewDecorator (AddReview) {
  return class StatefulAddReview extends React.Component {
    constructor(props) {
      super(props) 
      this.state = initialState;
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(field, value,) {
      let newState = {};
      newState[field] = value;
      if (this.state.errors[field]) {
        let newErrs = this.state.errors;
        delete newErrs[field]
        newState.errors = newErrs;
      }
      this.setState(newState);
    }

    handleSubmit (evt) {
      evt.preventDefault();
      const errs = this.validate();
      this.setState({ errors: errs })
      if (!Object.keys(errs).length) {
        const data = Object.assign({ productId: this.props.productId }, this.state);
        this.props.submitReview(data, (err) => {
          let newState = err ?
            { errors: { submit: 'Error submitting your review, please try again later' } } :
            initialState;
          this.setState(newState);
        });
      }
      else
        console.error(errs);
    }

    validate() {
      let errs = {};
      if (!this.state.comment) errs.comment = 'This field is required';
      if (!this.state.rating) errs.rating = 'A star rating is required';
      return errs;
    }

    render() {
      return (
        <AddReview
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          { ...this.state }
        />
      )
    }
  }
}

const mapDispatchToProps = dispatch => ({
  // Add a new review: Expects productId, rating (1-5), and comment
  submitReview: (data, cb) => dispatch(createReview(data, cb))
});

export default connect(null, mapDispatchToProps)(AddReviewDecorator(AddReview));
