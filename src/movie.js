import ReviewList from './reviewList'
import movies from './movies.js';

export default function Movie() {   
// The movie container that maps each movie from the movies array and displays them
// Inserted the ReviewList component into each instance of Movie and passed the 'movie' prop
    return(
        movies.map((movie) => (              
            <div key={movie.id} className='container-fluid movieContainer'>
                <div key={movie.id} className='container-fluid movieContainer'>
                    <div className="row">
                        <div className="col">                                                                                                        
                            <div  className="movie-card border-top border-light border-2">
                                <h4 className='pt-3'>{movie.movieName}</h4>                         
                                <div className='img p-2'>{movie.image}</div>
                                <div className='pt-2'>Synopsis: {movie.synopsis}</div>
                                <div>Rating: {movie.rating}</div>                         
                                <div className='pb-2'>Reviews: <ReviewList movie={movie} /></div>                                
                            </div>                                                                                                                                                                                              
                        </div>
                    </div>              
                </div>
            </div>            
        ))
    )       
}
