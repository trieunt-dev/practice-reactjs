import React, { PureComponent } from 'react';

import ProductCart from './components/ProductCart';
import ProductContent from './components/ProductContent';
import ProductDescription from './components/ProductDescription';
import ProductImage from './components/ProductImage';
import data from '../../mocks/data';

export default class Product extends PureComponent {
    constructor(props) {
        super(props);
        this.state = data;
    }

    render() {
        let {
            title,
            brand,
            variations,
            selectedVariant,
            attrProduct,
            description,
        } = this.state;

        let handleSelected = (variant) => {
            this.setState({
                selectedVariant: variant,
            });
        };

        let injectedPropsProduct = {
            title,
            brand,
            variations,
            selectedVariant,
            handleSelected,
        };

        let injectedPropsDesc = {
            attrProduct,
            description,
        };

        return (
            <div className="container">
                <div id="app">
                    <ProductCart />
                    <div className="product">
                        <ProductImage selectedVariant={selectedVariant} />
                        <ProductContent product={injectedPropsProduct} />
                    </div>
                    <ProductDescription
                        descriptionProduct={injectedPropsDesc}
                    />
                </div>
            </div>
        );
    }
}
