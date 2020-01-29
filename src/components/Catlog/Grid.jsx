//@flow
import * as React from "react";

//style
import "./Grid.scss";

const Grid = ({product}) => {
  return (
    <div className='column is-3 product-grid'>
      <div className='card pointer'>
        <header className='card-header'>
        <img src={product.image} alt="BigSpend" /></header>
        <div className='card-content'>
          <div className='content'>
            <div className='main-content'>
                <h3>{product.name} </h3>
                <h1>{product.author} </h1>
                <p>{product.description} </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Grid;
