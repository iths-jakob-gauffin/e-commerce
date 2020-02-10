import React from 'react';

import './collection-item.styles.scss';

//Detta här nedan kallas för en "functional component"
//eftersom det är en const

const CollectionItem = ({ id, price, imageUrl, name }) => (
	<div key={id} className="collection-item">
		<div
			className="image"
			style={{ backgroundImage: `url(${imageUrl})` }}
		/>
		<div className="collection-footer">
			<span className="name">{name}</span>
			<span className="price">{price}</span>
		</div>
	</div>
);

export default CollectionItem;
