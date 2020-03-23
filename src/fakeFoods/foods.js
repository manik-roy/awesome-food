const foods = [
    {
        "id": 1,
        "name": "Bagel and Cream Cheese",
		"category": "Breakfast",
		"description": "Lorem Ipsum is simply dummy text",
        "image": "https://drive.google.com/open?id=1eW4Huc4M7CNr5B79UVjPR5Bay8htQpfd",
        "price": 6.99
    },
    {
        "id": 2,
        "name": "Breakfast Sandwich",
		"category": "Breakfast",
		"description": "Lorem Ipsum is simply dummy text",
        "image": "https://drive.google.com/open?id=1BcsGLKsKluaF_0hQg8SgOv7-UYjkZRwd",
        "price": 9.99
    },
    {
        "id": 3,
        "name": "Baked Chicken",
		"category": "Breakfast",
		"description": "Lorem Ipsum is simply dummy text",
        "image": "https://drive.google.com/open?id=1pC-YYHN69_4p8iUQJxG9KCieRgM2Svzv",
        "price": 10.99
    },
    {
        "id": 4,
        "name": "Eggs Benedict",
		"category": "Breakfast",
		"description": "Lorem Ipsum is simply dummy text",
        "image": "https://drive.google.com/open?id=1F7PQszVXdURd9HjU98XKN3QK-GGvi76K",
        "price": 8.99
    },
    {
        "id": 5,
        "name": "Toast Croissant Fried Egg",
		"category": "Breakfast",
		"description": "Lorem Ipsum is simply dummy text",
        "image": "https://drive.google.com/open?id=1-d_zey0P5PdDn0TGk9ZAWNuKrfWEOV9a",
        "price": 19.99
    },
    {
        "id": 6,
        "name": "Full Breakfast Fried Egg Toast Brunch",
		"category": "Breakfast",
		"description": "Lorem Ipsum is simply dummy text",
        "image": "https://drive.google.com/open?id=1zp32bfnK1R2HGYghDtDBQNpV8oc4hMzZ",
        "price": 3.99
    },
    {
        "id": 7,
        "name": "Healthy Meal Plan",
		"category": "Lunch",
		"description": "Lorem Ipsum is simply dummy text",
        "image": "https://drive.google.com/open?id=1xXWF1x-7IAbb6RAmXNjOqpXzB0kjQy-I",
        "price": 23.99
    },
    {
        "id": 8,
        "name": "Fried Chicken Bento",
        "category": "Lunch",
		"description": "Lorem Ipsum is simply dummy text",
        "image": "https://drive.google.com/open?id=1PEK0U19RJbKzTJ66Pv3XQbHio4h4VKom",
        "price": 9.99
    },
    {
        "id": 9,
        "name": "Tarragon Rubbed Salmon",
        "category": "Lunch",
		"description": "Lorem Ipsum is simply dummy text",
        "image": "https://drive.google.com/open?id=1vYGTO4i-DQq328ljSDgnKx68piCMYh71",
        "price": 6.99
    },
    {
        "id": 10,
        "name": "Indian Lunch",
        "category": "Lunch",
		"description": "Lorem Ipsum is simply dummy text",
        "image": "https://drive.google.com/open?id=1KodmUjB17rXOQUvZTwHA9X7Gc5_GszE9",
        "price": 8.99
    },
    {
        "id": 11,
        "name": "Beef Steak",
        "category": "Lunch",
		"description": "Lorem Ipsum is simply dummy text",
        "image": "https://drive.google.com/open?id=1zTnmy18LEGU8Y8V7yn5NhXkN1H4P3YOF",
        "price": 15.99

    },
    {
        "id": 12,
        "name": "Honey Soy Glazed Salmon With Peppers",
        "category": "Lunch",
		"description": "Lorem Ipsum is simply dummy text",
        "image": "https://drive.google.com/open?id=19fs7hQ-IfCSKe-4wzLHuny7xzQUplB5O",
        "price": 7.99
    },
    {
        "id": 13,
        "name": "Salmon with Grapefruit and Lentil Salad",
        "category": "Dinner",
		"description": "Lorem Ipsum is simply dummy text",
        "image": "https://drive.google.com/open?id=1Ym5Nv5masARh6XYyFeTVRoq9pJeuwoSY",
        "price": 9.99
    },
    {
        "id": 14,
        "name": "Lemony Salmon Piccard",
        "category": "Dinner",
		"description": "Lorem Ipsum is simply dummy text",
        "image": "https://drive.google.com/open?id=10fLHOwZdZIwPzJMuWHRaP-zIT53uzrUM",
        "price": 10.99
    },
    {
        "id": 15,
        "name": "Pork Tenderloin with Quinoa Pilaf",
        "category": "Dinner",
		"description": "Lorem Ipsum is simply dummy text",
        "image": "https://drive.google.com/open?id=1ENmVngHrH_VBxjM9ygs1WuqIE8gxCbzT",
        "price": 12.99
    },
	{
        "id": 16,
        "name": "French Fries with Cheese",
        "category": "Dinner",
		"description": "Lorem Ipsum is simply dummy text",
        "image": "https://drive.google.com/open?id=1gqWKcw3eSYZx-wZvX0nUxysSESAKhtdv",
        "price": 8.99
    },
	{
        "id": 17,
        "name": "Garlic Butter Baked Salmon",
        "category": "Dinner",
		"description": "Lorem Ipsum is simply dummy text",
        "image": "https://drive.google.com/open?id=1QgT_3tqRpkIazF1lyu92De7dl339j5Y3",
        "price": 6.99
    },
	{
        "id": 18,
        "name": "Baked Chicken",
        "category": "Dinner",
		"description": "Lorem Ipsum is simply dummy text",
        "image": "https://drive.google.com/open?id=1FzFPyolyAGf66HnVNHxkRqxhkEIso0ga",
        "price": 9.99
    }
]

function shuffleFoods(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}


const fakeFoods = shuffleFoods(foods);

export default fakeFoods;