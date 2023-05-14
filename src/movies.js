// Imported the image files from the src folder to easliy insert them
import IronManImage from './ironManCoverArt.png'
import AvengersImage from './avengersCoverArt.png'
import EndGameImage from './endGameCoverArt.png'

// Created a separate component to hold the movies array so it can easily
// be accesses by multiple components
const movies = [
    {
        id: 0,
        movieName: 'Iron Man',
        image: <img src={IronManImage} alt='iron man movie cover'/>,
        synopsis: 'Iron Man wins',
        rating: 3
    },
    {
        id: 1,
        movieName: 'The Avengers',
        image: <img src={AvengersImage}  alt='avengers movie cover'/>,
        synopsis: 'The Avengers save the world',
        rating: 4
    },
    {
        id: 2,
        movieName: 'Avengers, End Game',
        image: <img src={EndGameImage}  alt='end game movie cover'/>,
        synopsis: 'The Avengers assemble',
        rating: 5
    }
];
 
export default movies;
