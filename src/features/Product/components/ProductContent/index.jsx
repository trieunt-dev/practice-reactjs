import React, { PureComponent } from 'react';
import './style.scss';

export default class ProductContent extends PureComponent {
    render() {
        let {
            title,
            brand,
            variations,
            selectedVariant,
            handleSelected,
        } = this.props.product;

        let renderPrice = () => {
            let { price, discount } = selectedVariant;
            if (discount) {
                return (
                    <>
                        <div className="final-price">
                            {price * (1 - discount)}₫
                        </div>
                        <div className="origin-price">{price}₫</div>
                        <div className="sale-price">{discount * 100}%</div>
                    </>
                );
            }
            return <div className="final-price">{price}₫</div>;
        };

        let handleSelectedVariant = (variant) => {
            handleSelected(variant);
        };

        return (
            <div className="product-content">
                <h3 className="title">
                    <a
                        href="https://www.lazada.vn/products/ao-thun-nam-the-thao-hang-vnxk-vai-day-min-vai-dom-i265780948-s382816279.html"
                        target="_blank"
                        rel="noreferrer"
                    >
                        {title && title}
                    </a>
                </h3>
                <p className="brand">
                    Thương hiệu: {brand ? brand : 'No brand'}
                </p>
                <p className="quantity">
                    Còn lại: {selectedVariant.quantity} Sản phẩm
                </p>
                <div className="wrapper-price">{renderPrice()}</div>
                <div className="wrapper-color">
                    <div className="text">Màu sắc</div>
                    <div className="list-color">
                        <p className="color-text">Màu Đen</p>
                        <ul>
                            {variations.map((variant) => {
                                return (
                                    <li
                                        key={variant.id}
                                        className={
                                            selectedVariant.id === variant.id
                                                ? 'active'
                                                : ''
                                        }
                                        onClick={() =>
                                            handleSelectedVariant(variant)
                                        }
                                    >
                                        <img
                                            src={variant.productImg}
                                            alt={variant.color}
                                        />
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
                <button className="add-to-cart">Add to cart</button>
            </div>
        );
    }
}
