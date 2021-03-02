import React from 'react';
import SingleMovie from '../SingleMovie/SingleMovie';

const Movie = (props) => {
    const List = props.movieList;
    const ListName = props.name;
    return (
        <div className="mb-4">
            <fieldset className="border-dark py-2 px-1 border">
                <legend className="col-md-3 text-success col-8 text-center">{ListName}</legend>
                <div className="d-flex justify-content-center flex-wrap">
                    {
                        List.map(movie =>
                            <SingleMovie info={movie} addToCart={props.addToCart} key={movie.id}></SingleMovie>
                        )
                    }
                </div>
            </fieldset>
        </div>
    );
};

export default Movie;