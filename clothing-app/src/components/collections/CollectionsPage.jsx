import React from "react";
import CollectionPreview from "../../components/collection-preview/CollectionPreview";
import COLLECTIONS_DATA from "./collections.data";

class CollectionsPage extends React.Component {
  constructor() {
    super();
    this.state = {
      collections: COLLECTIONS_DATA
    }
  }

  render() {
    const {collections} = this.state;

    return (
      <>
        {
          collections.map(({id, ...collection}) => (
            <CollectionPreview key={id} {...collection} />
          ))
        }
      </>
    )
  }
}

export default CollectionsPage;
