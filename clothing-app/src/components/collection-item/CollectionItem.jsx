import Button from '../button/Button';
import './collection-item.styles.scss';

const CollectionItem = ({ id, name, price, imageUrl}) => (
  <div className="collection-item">
    <div
      className=" image"
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />

    <div className="collection-footer">
      <span className="name">{ name }</span>
      <span className="price">{ price }</span>
    </div>

    <Button inverted>TAKE IT</Button>
  </div>
);

export default CollectionItem;
