import React from 'react';
import './SingleMovie.css'

const SingleMovie = (props) => {
    const movie=props.info;
    return (
        <div className="single-movie text-center">
            <div className="title">
                <img src={movie.thumbnail} className="img-fluid mx-auto rounded" alt=""/>
                <p className="text-warning">{movie.name}</p>
            </div>
            <small><span className="text-info">{movie.type}</span></small>
            <div className="text-left row">
                <small className="col-12">By: <span className="font-weight-bold">{movie.author}</span></small>
                <small className="col-12">Company: <span className="font-weight-bold">{movie.publisher}</span></small>
                <small className="col-12">Country: <span className="font-weight-bold">{movie.location}</span></small>
            </div>
            <br/>
            <button className="btn btn-outline-danger" onClick={()=> props.addToCart(movie)}>Buy for <span className="font-weight-bold h6">{movie.price}</span></button>
            <br/>
            <br/>
        </div>
    );
};

export default SingleMovie;