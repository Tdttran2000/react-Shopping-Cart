// Coffee: price_1PQCgkGULjT8RaaR5HTgFu0A
// Sunglasses: price_1PQCjKGULjT8RaaR3XO4fcki
// Camera: price_1PQCkoGULjT8RaaR2RW80AoC

const productsArray = [
    {
        id: "price_1PQCgkGULjT8RaaR5HTgFu0A",
        title: "Coffee",
        price: 4.99
    },
    {
        id: "price_1PQCjKGULjT8RaaR3XO4fcki",
        title: "Sunglasses",
        price: 9.99
    },
    {
        id: "price_1PQCkoGULjT8RaaR2RW80AoC",
        title: "Camera",
        price: 39.99
    },
]

const getProductData = (id) => {
    let productData = productsArray.find(product => product.id === id)

    if (productData == undefined) {
        console.log("Product data does not exist for ID: " + id)
        return undefined
    }
    
    return productData
}

export { productsArray, getProductData }