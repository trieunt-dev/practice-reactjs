import React, { PureComponent } from 'react';
import './style.scss';

export default class ProductImage extends PureComponent {
    render() {
        let { productImg, color } = this.props.selectedVariant;
        return (
            <div className="product-image">
                <div className="image">
                    <img src={productImg} alt={color} />
                </div>
            </div>
        );
    }
}
