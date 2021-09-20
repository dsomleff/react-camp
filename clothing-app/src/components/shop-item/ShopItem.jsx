import './shop-item.styles.scss';

const ShopItem = ({ title, imageUrl, size }) => (
   <div className={`${size} shop-item`}>
      <div
        className='background-image'
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="content">
        <h1 className="title">
          {title.toUpperCase()}
        </h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
  </div>
);

export default ShopItem;
