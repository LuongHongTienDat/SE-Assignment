const dish =[
    {
        name:'Combo Sushi',
        image:'https://pngimg.com/uploads/sushi/sushi_PNG9202.png',
        category:'Sushi',
        dishDetails:'4 Combo Sushi for 2 people. Get closer to your love!',
        price: 29,
        countRating:5,
        rating:4,
        numReviews:0,
        reviews:[],
        dishDescription:'Including 4 kinds of sushi : Salmon Sushi, Cali Roll Sushi,Salmon Skin Roll Sushi, Salmon Roll Sushi.',
        countInStock:5,
        isBestSeller:true
    },
    {
        name:'Oshizushi',
        image:'https://vntopfood.com/wp-content/uploads/2022/02/Cach-lam-sushi-ca-hoi-1-min-1024x553.png',
        category:'Sushi',
        dishDetails:'Made from the freshest fish and other seafood with several unique shapes.',
        price: 29,
        countRating:5,
        rating:4,
        numReviews:0,
        reviews:[],
        dishDescription:'Made by layers named Neta and Shari, the Neta layer includes fish and seafood such as mackerel or salmon; with this unique shape, Oshizushi is often chosen to be enjoyed with Bento rice or given as a gift.',
        countInStock:5,
        isBestSeller:true
    },
    {
        name:'Tempura',
        image:'https://www.pikpng.com/pngl/b/398-3984487_click-to-enlarge-tempura-clipart.png',
        category:'Sushi',
        dishDetails:'Tempura is a fried dish consisting of seafood and vegetables, seasoned with tempura batter.',
        price: 19,
        countRating:5,
        rating:4,
        numReviews:0,
        reviews:[],
        dishDescription:'This is a signatured food which strongly contributed to the spread of Japanese food around the world. Beside Sushi, Tempura “awakens” all users’ senses by sophistication, harmony and richness in taste.',
        countInStock:5,
        isBestSeller:true
    },
    {
        name:'Chirashizushi',
        image:'https://www.kikkoman.com/en/foodforum/img/recipe-t-31-1-01.png',
        category:'Sushi',
        dishDetails:'With Neta, whose ingredients are popular seafood such as salmon, squid, and boiled shrimp.',
        price: 19,
        countRating:5,
        rating:4,
        numReviews:0,
        reviews:[],
        dishDescription:'Chirashizushi is a bowl of rice with a variety of ingredients, with the Neta which is made from popular seafood such as salmon, squid, boiled shrimp, and chopped fried eggs and cucumbers. Similar to Kaisendon (seafood rice); the difference between two dishes is that Chirashizushi uses Shari - Sushi rice mixed with vinegar, Kaisendon uses steamed white rice.',
        isBestSeller:true
    },
    {
        name:'Gukan Maki',
        image:'https://www.ayasushi.fr/wp-content/uploads/2016/09/oeufsdesaumon-mini-gunkan-300x300.png',
        category:'Sushi',
        dishDetails:'The common Neta for Gunkan Maki is usually sea urchin, squid, and salmon roe.',
        price: 29,
        countRating:5,
        rating:4,
        numReviews:0,
        reviews:[],
        dishDescription:'The dish is made by wrapping a wide strip of Nori around a handful of rice while leaving enough space at the top to fit the head with different Neta fillings.',
        countInStock:5,
        isBestSeller:true
    },
    {
        name:'Pumpkin soup',
        image:'https://bizweb.dktcdn.net/thumb/grande/100/431/174/products/005.png?v=1627544849563',
        category:'Soups',
        dishDetails:'The soup is soft, fragrant with pumpkin flavor, and greasy with milk flavor.',
        price: 19,
        countRating:5,
        rating:4,
        numReviews:0,
        reviews:[],
        dishDescription:'Delicious pumpkin soup, with a bit of milk and whipping cream will be a taste-change dish for these days. The pumpkin soup served with toast is the perfect and appetizing combination.',
        countInStock:5,
        isBestSeller:true
    },
    {
        name:'Crab soup',
        image:'https://salt.tikicdn.com/cache/w1200/ts/product/e4/3b/54/8c56ac7bfc2f45bba05efcde966d9250.png',
        category:'Soups',
        dishDetails:'The whole family gathers together, enjoying a cup of hot, tasty soup.',
        price: 29,
        countRating:5,
        rating:4,
        numReviews:0,
        reviews:[],
        dishDescription:'Crab soup with many eye-catching colors of crabs and accompanying beans and vegetables, especially crab soup is rich in nutrients and calcium, which is very good for health. This dish will be more perfect when eaten on cold days, and it also can be used as an appetizer in parties.',
        countInStock:5,
        isBestSeller:true
    },
    {
        name:'Mushroom soup',
        image:'https://product.hstatic.net/1000190406/product/mixed_mushroom_menu_411127a13a254129a684eca63563180f_large.png',
        category:'Soups',
        dishDetails:'Creamy mushroom soup has a rich flavor, mixed with the natural freshness of shiitake mushrooms.',
        price: 49,
        countRating:5,
        rating:4,
        numReviews:0,
        reviews:[],
        dishDescription:'Mushroom cream soup has a rich flavor, mixed with natural freshness, from shiitake mushrooms, fatty from fresh cream. When eating, you will feel the gentle aroma of musk and cilantro, creating an attractive and irresistible flavor. It would be the best when served with a slice of bread!',
        countInStock:5,
        isBestSeller:true
    },
    {
        name:'Camellia leaf with snow fungus and shredded chicken soup',
        image:'https://product.hstatic.net/1000206480/product/sup_la_cam_d831f3ab2d9d49d78eb350b252c1aa23_1024x1024.png',
        category:'Soups',
        dishDetails:'With the cool sweetness from boiled chicken broth, snow fungus are rich in nutrition.',
        price: 19,
        countRating:5,
        rating:4,
        numReviews:0,
        reviews:[],
        dishDescription:'Camellia leaf with snow fungus and shredded chicken soup is a unique combination of many ingredients. With the sweet and cool taste from boiled chicken broth, the nutritious fragrant snow fungus has a chewy texure that is quite pleasant to eat.',
        countInStock:5,
        isBestSeller:true
    },
    {
        name:'Coca-Cola',
        image:'https://popeyes.vn/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/c/o/coca.png',
        category:'Drinks',
        dishDetails:'CocaCola  original taste gives you a refreshing feeling.',
        price: 10,
        countRating:5,
        rating:4,
        numReviews:0,
        reviews:[],
        dishDescription:'CocaCola original taste.',
        countInStock:5,
        isBestSeller:true
    },
    {
        name:'Peach tea',
        image:'https://shopnguyenlieu.com/wp-content/uploads/2019/09/tradaothachdao-550x467.png',
        category:'Drinks',
        dishDetails:'King of beverages in the summer!!',
        price: 10,
        countRating:5,
        rating:4,
        numReviews:0,
        reviews:[],
        dishDescription:'When the temperature in Saigon approaches the 40- figure,the chilled peach tea suddenly becomes a lifesaver.',
        countInStock:5,
        isBestSeller:true
    },
    {
        name:'Vodka',
        image:'http://bizweb.dktcdn.net/thumb/grande/100/036/299/products/smirnoff-vodka-red-700ml.png?v=1643270887690',
        category:'Drinks',
        dishDetails:'The more wine from Russia you drink, the more fun the party is!!',
        price: 19,
        countRating:5,
        rating:4,
        numReviews:0,
        reviews:[],
        dishDescription:'Drinks to help you strengthen your fitness !!',
        countInStock:5,
        isBestSeller:true
    },
    {
        name:'Pepsi',
        image:'http://scontent.webpluscnd.net/photos-df/a-0/7714-1688041-1/pepsi.png?atk=e37811ba2046832cb285a8377910107c',
        category:'Drinks',
        dishDetails:'Pepsi original taste, cool and refreshing like Coca :>',
        price: 10,
        countRating:5,
        rating:4,
        numReviews:0,
        reviews:[],
        dishDescription:'If you are not an original Coca fan, you already have the original Pepsi.',
        countInStock:5,
        isBestSeller:true
    },
    {
        name:'Coconut cream',
        image:'https://kemmiennhietdoi.com/timthumb.php?src=upload/product/kem-dua1603442684_300x300.png&w=300&h=300&zc=2&q=85',
        category:'Dessert',
        dishDetails:'A Coconut filled with ice-cream inside to enjoy is out-of-this-world!!',
        price: 19,
        countRating:5,
        rating:4,
        numReviews:0,
        reviews:[],
        dishDescription:'Soft, greasy ice cream balls mixed with sweet chocolate sauce, adding a little bit of roasted peanuts and desiccated coconut are sure to make anyone who has tasted it die in joy.',
        countInStock:5,
        isBestSeller:true
    },
    {
        name:'Pudding',
        image:'https://www.nicepng.com/png/full/95-951391_caramel-pudding-cream-caramel-pudding-png.png',
        category:'Dessert',
        dishDetails:'oft and delicious, often used for dessert or milk tea topping.',
        price: 10,
        countRating:5,
        rating:4,
        numReviews:0,
        reviews:[],
        dishDescription:'Pudding is a kind of cold cake frozen by gelatin combined with a number of different flavors such as green tea, strawberry, and orange. Pudding with a soft, delicious taste is often used as a dessert or as milk tea topping.',
        countInStock:5,
        isBestSeller:true
    },
    {
        name:'Flan',
        image:'https://product.hstatic.net/200000388411/product/banhflan-1024_6393ed364fcb4b7587298dabb8b2d78a.png',
        category:'Dessert',
        dishDetails:'Desserts with delicious, sweet taste and rich in nutrition.',
        price: 19,
        countRating:5,
        rating:4,
        numReviews:0,
        reviews:[],
        dishDescription:'Serve cold by chilling in the refrigerator before serving. The cake is poured onto a plate so that the part with the brown sugar on the cake turns up.',
        countInStock:5,
        isBestSeller:true
    },
    {
        name:'Fried chicken',
        image:'https://fujimart.vn/image/cache/catalog/delica/dui%20ga%20chien-502x502.png',
        category:'Fast food',
        dishDetails:'Crispy fried chicken, delicious and succulent, is especially loved by most young people.',
        price: 49,
        countRating:5,
        rating:4,
        numReviews:0,
        reviews:[],
        dishDescription:'The golden fried chicken is very eye-catching, the crust is crispy and the chicken is soft and sweet inside. Fried chicken is not spicy, so it is suitable for all family members, especially kids.',
        countInStock:5,
        isBestSeller:true
    },
    {
        name:'Burger',
        image:'https://freepngimg.com/thumb/burger/22388-5-burger-food.png',
        category:'Fast food',
        dishDetails:'The delicious beef burger, bold burger flavor.',
        price: 29,
        countRating:5,
        rating:4,
        numReviews:0,
        reviews:[],
        dishDescription:'Super delicious beef burger, soft ball layer blends soft and sweet beef inside. Adding green vegetables should be suitable for all family members, especially children.',
        countInStock:5,
        isBestSeller:true
    },
    {
        name:'Pizza',
        image:'https://clipart-best.com/img/pizza/pizza-clip-art-48.png',
        category:'Fast food',
        dishDetails:'Many different ingredients created so many attractive colors.',
        price: 29,
        countRating:5,
        rating:4,
        numReviews:0,
        reviews:[],
        dishDescription:'Cheese seafood pizza is a grilled dish with a harmonious combination between the freshness of seafood and the fatty flavor of cheese to create an irresistible taste.',
        countInStock:5,
        isBestSeller:true
    },
    {
        name:'Potato chips',
        image:'https://mcdonalds.vn/uploads/2018/food/ga-ran/large_world_famous_fries.png',
        category:'Fast food',
        dishDetails:'French-fried potatoes !!',
        price: 19,
        countRating:5,
        rating:4,
        numReviews:0,
        reviews:[],
        dishDescription:'The potato chips are crispy outside, soft and delicious inside!!',
        countInStock:5,
        isBestSeller:true
    },
]

module.exports = dish;
