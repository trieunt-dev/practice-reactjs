import React, { PureComponent } from 'react';
import './style.scss';

export default class ProductDescription extends PureComponent {
    render() {
        let { attrProduct, description } = this.props.descriptionProduct;
        return (
            <div className="description">
                <ul className="extra-info">
                    {attrProduct.map((attr, index) => {
                        if (attr.name) {
                            return (
                                <li key={index}>
                                    {attr.name}: {attr.value}
                                </li>
                            );
                        }
                        return <li key={index}>{attr.value}</li>;
                    })}
                </ul>
                <div dangerouslySetInnerHTML={{ __html: description }}></div>
            </div>
        );
    }
}
