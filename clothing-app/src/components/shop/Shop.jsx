import React from "react";
import ShopItem from "../shop-item/ShopItem";
import './shop.styles.scss';

class Shop extends React.Component {
  constructor() {
    super();
    this.state = {
      sections: [
        {
          title: 'hats',
          imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
          id: 1,
          linkUrl: 'hats'
        },
        {
          title: 'jackets',
          imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
          id: 2,
          linkUrl: 'jackets'
        },
        {
          title: 'sneakers',
          imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
          id: 3,
          linkUrl: 'sneakers'
        },
        {
          title: 'women',
          imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
          size: 'large',
          id: 4,
          linkUrl: 'women'
        },
        {
          title: 'men',
          imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
          size: 'large',
          id: 5,
          linkUrl: 'men'
        }
      ]
    };
  }

  render() {
    return (
    <div className="directory-menu">
      {
        this.state.sections.map(({ id, ...sections }) => (
          <ShopItem
            key={id}
            {...sections}
          />
        ))
      }
    </div>
    );
  }
}

export default Shop;