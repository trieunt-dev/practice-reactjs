import { v4 as uuidv4 } from 'uuid';

let variations = [
    {
        id: uuidv4(),
        color: 'Màu đen',
        quantity: 4,
        productImg: './images/black.jpg',
        price: 20000,
        discount: 0.1,
    },
    {
        id: uuidv4(),
        color: 'Màu xanh',
        quantity: 6,
        productImg: './images/blue.jpg',
        price: 20000,
        discount: 0.15,
    },
    {
        id: uuidv4(),
        color: 'Màu đỏ',
        quantity: 4,
        productImg: './images/red.jpg',
        price: 26000,
        discount: 0,
    },
];

let attrProduct = [
    {
        name: 'Chất liệu',
        value: 'polyester và thun',
    },
    {
        name: '',
        value: 'Thoát mồ hôi tốt',
    },
    {
        name: '',
        value:
            'Áo thun cổ tròn thể thao Hiye chuyên được may từ chất liệu nilon thoáng mát',
    },
    {
        name: '',
        value:
            'Kết hợp thêm sợi thun tạo độ co giãn giúp người tiêu dùng thoải mái khi mặc',
    },
];

let description = `
    <h2>Chất liệu bền chặt&nbsp;</h2>
    <div>
        <p>
            Mô tả: Áo thun cổ tròn thể thao Hiye chuyên được may từ
            chất liệu nilon thoáng mát và thoát mồ hôi tốt, kết hợp
            thêm sợi thun tạo độ co giãn giúp người tiêu dùng thoải
            mái khi mặc
        </p>
    </div>
`;

let products = {
    title: 'Áo thun nam thể thao hàng VNXK vải dày mịn - Vải Đốm',
    brand: 'Addidas',
    variations,
    selectedVariant: variations[1],
    attrProduct,
    description,
};

export default products;
