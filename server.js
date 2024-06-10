//sk_test_51PQCZsGULjT8RaaRIxydO45Hu2HYtlnLNsGm1d7lITucNjZE8uKV7FtDh4y9fvRZDLkTBMk9oqCoEJPh35reuyTk00AJZmMKXb
// Coffee: price_1PQCgkGULjT8RaaR5HTgFu0A
// Sunglasses: price_1PQCjKGULjT8RaaR3XO4fcki
// Camera: price_1PQCkoGULjT8RaaR2RW80AoC
const express = require('express');
var cors = require('cors');
const stripe = require('stripe')('sk_test_51PQCZsGULjT8RaaRIxydO45Hu2HYtlnLNsGm1d7lITucNjZE8uKV7FtDh4y9fvRZDLkTBMk9oqCoEJPh35reuyTk00AJZmMKXb');

const app = express();
app.use(cors());
app.use(express.static("public"));
app.use(express.json());
app.post("/checkout", async (req, res) => {
    
    const items = req.body.items;
    let lineItems= [];
    items.forEach((item)=> {
        lineItems.push(
            {
                price: item.id,
                quantity: item.quantity
            }
        )
    });

    const session = await stripe.checkout.sessions.create({
        line_items: lineItems,
        mode: 'payment',
        success_url: "http://localhost:5173/success",
        cancel_url: "http://localhost:5173/cancel"
    });

    res.send(JSON.stringify({
        url: session.url
    }));
});

app.listen(4000, () => console.log("Listening on port 4000"))