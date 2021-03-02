import React, { useState } from 'react';
import fakeData from '../../Data/fakeData.json';
import Cart from '../Cart/Cart';
import Movie from '../Movies/Movie';

const Shop = () => {
    const List1 = fakeData.slice(0,10);
    const List2 = fakeData.slice(10,20);
    const List3 = fakeData.slice(20);
    const [total,setTotal] = useState(0);
    const [items,setItems] = useState([]);
    const addToCart = (aNewMovie) => {
        let newTotal = total+aNewMovie.price;
        setTotal(newTotal);
        let newCart = [...items,aNewMovie];
        setItems(newCart);
    }
    return (
        <div className="row px-md-2 px-1">
            <div className="col-md-9 border-right">
                <Movie addToCart={addToCart} movieList={List1} key='1' name="Most Popular"></Movie>
                <Movie addToCart={addToCart} movieList={List2} key='2' name="IMDb Top 10"></Movie>
                <Movie addToCart={addToCart} movieList={List3} key='3' name="Golden Classic"></Movie>
            </div>
            <div className="col-md-3 text-center">
                <Cart list={items}></Cart>
            </div>
        </div>
    );
};

export default Shop;