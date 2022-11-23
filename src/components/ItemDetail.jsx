import React from 'react';

const ItemDetail = ({product}) => {
    return (
        <div>
            <section className="cardProduct datails">
        <div className="productItem">
          <h2 className="title">{product.title}</h2>
          <p className="category">{product.category}</p>
        </div>
        <div className="productItem">
          <h2 className="infoTitle">Descripción</h2>
          <p className="infoText">{product.description}</p>
        </div>
        <div className="productItem">
          <div className="colors_size">
            <div className="colors">
              <h2>Color</h2>

            </div>

          </div>
        </div>
        <div className="productItem">
          <div className="card_price">
            {/* <CantCart /> */}
            <div className="price-conten">
              <p>$</p>
              <p className="price">{`${product.price}`}</p>
            </div>
          </div>
        </div>
      </section>
        </div>
    );
}

export default ItemDetail;