export const recipesSuccess = {
    recipes:[
        {
            id: 1,
            title: 'Bacon and Eggs',
            desc: 'A tasty bacon and eggs recipe',
            ingredients: [
                '3 ounces of Bacon',
                '1 egg'
            ],
            servingSize: 4,
            prepTime: 60000,
            cookTime: 120000,
            tags: [
                'breakfast',
                'eggs',
                'fast',
                'easy'
            ],
            steps: [
                'Fry the bacon in a pan on medium high heat until crispy. Put aside on a plate. Leave the rendered fat in the pan.',
                'Use the same pan to fry the eggs. Place it over medium heat and crack your eggs into the bacon grease (you can also crack them into a measuring cup and carefully pour into the pan to avoid splattering of hot grease).',
                'Cook the eggs any way you like them. For sunny side up - leave the eggs to fry on one side and cover the pan with a lid to make sure they get cooked on top. For eggs cooked over easy - flip the eggs over after a few minutes and cook for another minute. Cut the cherry tomatoes in half and fry them at the same time.',
            ]
        },
        {
            id: 2,
            title: 'Spaghetti',
            desc: 'An italian staple',
            image: 'https://picsum.photos/1000',
            ingredients: [
                '1 package of pasta',
                '1 package of sauce'
            ],
            servingSize: 4,
            prepTime: 60000,
            cookTime: 120000,
            tags: [
                'dinner',
                'fast',
                'easy'
            ],
            steps: [
                'Fill a pot with water, and add salt',
                'Bring water to a boil',
                'Place pasta in pot and cook for 5 minutes',
                'Drain pasta and serve'
            ]
        }
    ]
};

export const createSuccess = {
    id: 1234
};