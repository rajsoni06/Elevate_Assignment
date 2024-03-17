import './Product.css'

export const Product = ({title, price, image}) => {
    return (
      <div className="product-card">
        <h4 className="product-name">{title}</h4>
        <p className="product-price">
          Price: <span className="number-text">${price}</span>
        </p>
        <div className="product-image-div">
          <img
            src={image}
            alt="Product Image"
            className='product-image'
          />
        </div>
        <div className="buttons-section">
          <a href="/" className="buy-now-btn">
            Buy Now
          </a>
          <a href="/" className="see-more-btn">
            See More
          </a>
        </div>
      </div>
    );
}