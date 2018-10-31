import * as types from "../constant/ActionType";

var data = JSON.parse(localStorage.getItem("CART"));
// var initialState: any = data ? data : [];
var initialState = [{
    product: {
        id: 1,
        name: "Iphone 7 Plus",
        image: "https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72",
        description: "Made in America",
        price: 500,
        inventory: 10,
        rating: 4
    },
    quantity: 5
},
{
    product: {
        id: 2,
        name: "Iphone 8 Plus",
        image: "data:image/webp;base64,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",
        description: "Made in Japan",
        price: 600,
        inventory: 20,
        rating: 3
    },
    quantity: 2
}
];

var cart = (state = initialState, action: any) => {
    switch (action.type) {
        case types.ADD_TO_CART:
            // console.log(action);

            return [...state]
        default: return [...state]
    }
}

export default cart;