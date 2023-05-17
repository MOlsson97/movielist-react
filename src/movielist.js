import React, { useState, useRef} from 'react';
import Movie from "./Movie";

export default function MovieList () {
    
    const [movies, setMovies] = useState([{
        id: 1, 
        title: "",
        rating: 0
    }]);

    const inputRef = useRef();
    const [counter, setCounter] = useState(1);
    const ratingRef = useRef();
    
    function addItem(event) {
        event.preventDefault();
        const title = inputRef.current.value;
        const selectedRating = parseInt(ratingRef.current.value);
        setCounter((prevCounter) => prevCounter +1);
        
        if(title === "" || selectedRating === 0) {
            alert("Fyll i både titel och betyg tack!");
            return;
        }

        const newMovie = {
            id: counter + 1,
            title: title,
            rating: selectedRating,
        };

        setMovies((prevMovies) => [...prevMovies, newMovie]);
        ratingRef.current.value = 0;
        inputRef.current.value = '';
    }

    function deleteItem(id){
        setMovies(movies.filter((item) => item.id !== id));
    }

    function addRating(id, rating) {
        setMovies((prevMovies) => prevMovies.map((movie) => 
            movie.id === id ? { ...movie, rating: rating } : movie)
            );
    }

    function sortListAlphabetically() {
        const sortedMovies = [...movies].sort((a, b) => a.title.localeCompare(b.title));
        setMovies(sortedMovies);
    }

    function sortMoviesByRating() {
        const sortedMovies = [...movies].sort((a, b) => b.rating - a.rating);
        setMovies(sortedMovies);
    }

    return (
        <div>

        <form id="add-movie-form">
            <fieldset>
                <label htmlFor="title-field">Titel:</label>
                <input type="text" id="title-field" className="form-control" ref={inputRef} />

                <label htmlFor="rating-field">Betyg:</label>

                <select type="text" id="rating-field" className="form-control" ref={ratingRef}>
                    <option value="0">Välj betyg här...</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>

                <input type="submit" className="btn btn-success mt-3" value="Spara film" onClick={addItem}/>

            </fieldset>
        </form>

        <hr />

        <h2>Filmer</h2>

            <ul className="list-group"> 
                {movies.map(movie => <Movie key={movie.id} item={movie} deleteItem={deleteItem} addRating={addRating}/>)}
            </ul>
            <br />
                <button type="button" className="btn btn-primary" style={{ marginRight: "10px" }} onClick={sortListAlphabetically}>
                    Alfabetisk ordning</button>
                <button type="button" className="btn btn-primary" onClick={sortMoviesByRating}>
                    Betygsordning</button>
             
        </div>
    ) 
        
    
}
