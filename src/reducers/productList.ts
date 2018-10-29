import * as types from "../constant/ActionType";

var initialState = [
    {
        id: 1,
        name: "Iphone 7 Plus",
        image: "https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72",
        description: "Made in America",
        price: 500,
        inventory: 10,
        rating: 4
    },
    {
        id: 2,
        name: "Iphone 8 Plus",
        image: "https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72",
        description: "Made in Japan",
        price: 600,
        inventory: 20,
        rating: 3
    },
    {
        id: 3,
        name: "Iphone 9 Plus",
        image: "https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72",
        description: "Made in Viet Nam",
        price: 700,
        inventory: 30,
        rating: 2
    },

]

var productList = (state = initialState, action: any) => {
    switch (action.type) {
        default: return [...state]
    }
}

export default productList;