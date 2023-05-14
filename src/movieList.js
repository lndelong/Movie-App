import Movie from './movie.js';


export default function MovieList() {
// Here I create the container to house each Movie component
    return(
        <div className="container">
            <div className="row">
                <div className="col">
                <h2 className='m-4'>Movie List</h2>
                <Movie/>
                </div>
            </div>
        </div>
    )      
}