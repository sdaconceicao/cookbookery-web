export const recipesSuccess = {
    recipes:[
        {
            id: 2,
            title: 'Spaghetti',
            desc: 'An italian staple',
            image: 'https://picsum.photos/1000',
            ingredients: [
                {id: 1, desc: '1 package of pasta'},
                {id: 2, desc: '1 package of sauce'}
            ],
            servingSize: 4,
            prepTime: 60,
            cookTime: 120,
            tags: [
                'dinner',
                'fast',
                'easy'
            ],
            steps: [
                {id: 1, desc: 'Fill a pot with water, and add salt'},
                {id: 2, desc: 'Bring water to a boil'},
                {id: 3, desc: 'Place pasta in pot and cook for 5 minutes'},
                {id: 4, desc: 'Drain pasta and serve'}
            ]
        },
        {
            id: 1,
            title: 'Bacon and Eggs',
            desc: 'A tasty bacon and eggs recipe',
            ingredients: [
                {id: 1, desc: '3 ounces bacon'},
                {id: 2, desc: '1 egg'}
            ],
            servingSize: 4,
            prepTime: 60,
            cookTime: 120,
            tags: [
                'breakfast',
                'eggs',
                'fast',
                'easy'
            ],
            steps: [
                {id: 1, desc: 'Fry the bacon in a pan on medium high heat until crispy. Put aside on a plate. Leave the rendered fat in the pan.'},
                {id: 2, desc: 'Use the same pan to fry the eggs. Place it over medium heat and crack your eggs into the bacon grease (you can also crack them into a measuring cup and carefully pour into the pan to avoid splattering of hot grease).'},
                {id: 3, desc: 'Cook the eggs any way you like them. For sunny side up - leave the eggs to fry on one side and cover the pan with a lid to make sure they get cooked on top. For eggs cooked over easy - flip the eggs over after a few minutes and cook for another minute. Cut the cherry tomatoes in half and fry them at the same time.'}
            ]
        }
    ]
};

export const createSuccess = {
    id: 1234
};