const express = require("express");
const hbs = require("hbs");
const app = express();


app.set("views", __dirname + "/views"); //tells our Express app where to look for our views
app.set("view engine", "hbs"); //sets HBS as the template engine

hbs.registerPartials(__dirname + "/views/partials"); //tell HBS which directory we use for partials

app.use(express.static('public')); // Make everything inside of public/ available



// Home Page
app.get("/", (req, res, next) => {
    res.render("homepage");
});


// Contact Page
app.get("/contact", (req, res, next) => {
    res.render("contact");
})


app.get("/pizzas/margarita", (req, res, next) => {

    const dataMargarita = {
        title: 'Pizza Margarita',
        price: 12,
        recommendedDrink: 'beer',
        imageFile: 'pizza-margarita.jpg',
        ingredients: [
            {
                ingredientName: "mozzarella",
                calories: 400
            },
            {
                ingredientName: "tomato sauce",
                calories: 200
            },
            {
                ingredientName: "basilicum",
                calories: 30
            },
          ],
    };

    res.render("product", dataMargarita)
})


app.get("/pizzas/veggie", (req, res, next) => {
    const dataVeggie = {
        title: 'Veggie Pizza',
        price: 15,
        recommendedDrink: 'power smoothie',
        imageFile: 'pizza-veggie.jpg',
        ingredients: [
            {
                ingredientName: "cherry tomatoes",
                calories: 80
            },
            {
                ingredientName: "basilicum",
                calories: 30
            },
            {
                ingredientName: "olives",
                calories: 300
            },
          ],
    };
    res.render("product", dataVeggie);
})


app.get("/pizzas/seafood", (req, res, next) => {
    const dataSeafood = {
        title: 'Seafood Pizza',
        recommendedDrink: 'white wine',
        imageFile: 'pizza-seafood.jpg',
    };
      
    res.render("product", dataSeafood);
})



app.listen(3000, () => console.log('My first app listening on port 3000! '));