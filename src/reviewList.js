import { useState } from 'react';
import { Rating } from '@mui/material';

// Used movie prop to sort reviews by their movieid
export default function ReviewList({ movie }) {

// The reviews array and its current state with review objects that can be added to
  const [reviews, setReviews] = useState([
    {
        id: 0,
        movieid: 0,
        name: 'movielover123',
        rating: 5,
        text: 'Iron man is by far the best Avenger. Without him who would fund the whole operation?'
    },
    {
        id: 1,
        movieid: 1,
        name: 'John Doe',
        rating: 4,
        text: 'The Avengers and Marvel Comics in general are by far the best super hero universe'
    },
    {
        id: 2,
        movieid: 2,
        name: 'num1avengersfan',
        rating: 5,
        text: 'Best. Movie. Ever.'
    },
    {
      id: 3,
      movieid: 0,
      name: 'John Doe',
      rating: 5,
      text: 'One of the classics!'
    },
    {
        id: 4,
        movieid: 1,
        name: 'movielover123',
        rating: 4,
        text: 'The Avengers and Marvel Comics in general are by far the best super hero universe'
    },
    {
        id: 5,
        movieid: 2,
        name: 'John Doe',
        rating: 5,
        text: 'It made me feel all the feels'
    },
    {
      id: 6,
      movieid: 0,
      name: 'John Doe',
      rating: 4,
      text: 'The Avengers and Marvel Comics in general are by far the best super hero universe'
  }
  ]);
// The state variables for each of the input fields below
  const [nameValue, setNameValue] = useState('');
  const [reviewValue, setReviewValue] = useState('');
  const [newValue, setValue] = useState(0);

// The variable that adds the input to a new object
  const newReview =
  {
    id: reviews.length, 
    movieid: movie.id, 
    name: nameValue,  
    rating: newValue, 
    text: reviewValue
    }
// Submit function that takes the input values from 'newReview' and adds them to the array
  const submitForm = (event) => {
    event.preventDefault()    
    setReviews([newReview, ...reviews])
    setValue()
    setNameValue('')
    setReviewValue('')
  }

// The filter method adds the review for each movie to filteredReviews, only if it mathes the
// current movieid
const filteredReviews = reviews.filter((review) => review.movieid === movie.id);
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col">
          <div className='container reviewContainer text-center overflow-auto border'>           
            {filteredReviews.map((review) => (
                <div key={review.id} className='reviewCard'>      
                    <div className='row'>
                        <div className='col'>                                                                            
                            <div className='review-card border-bottom border-light border-1'>
                                <div>{review.name}</div>
                                <div>Rating: ( {review.rating} ) | Text: {review.text}</div>                           
                            </div>
                        </div>                                                                                   
                    </div>
                </div>                                            
            ))}
          </div>           
            <div>
{/* The rating component imported from React               */}
              <div className='starRating container pt-3'>
                <Rating
                  name="no-value"
                  onChange={(event, newValue) => {
                    setValue(newValue)
                  }}               
                />           
              </div> 
{/* The form where the user inputs the name and review vaues               */}
              <form className='pb-2' onSubmit={submitForm}>
                <div className="form-group">
                  <label htmlFor="name">Name:</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="name" 
                    value={nameValue} 
                    onChange={(event) => setNameValue(event.target.value)} 
                  />
                </div>
                <div className="form-group pb-3">
                  <label htmlFor="text">New Review:</label>
                  <textarea 
                    className="form-control" 
                    id="text" 
                    rows="3" 
                    value={reviewValue} 
                    onChange={(event) => setReviewValue(event.target.value)} 
                  />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>                
            </div>                           
        </div>
      </div>
    </div>
  );
};
