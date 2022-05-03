
export interface Recipe {
    id: string;
    title: string,
    time: string,
    category: string,
    imageName: string,
}

export const RECIPES: Recipe[] = [
    {
        id: '1',
        title: 'Big and Juicy Wagyu Beef Cheeseburger',
        time: '30 Minutes',
        category: 'Snack',
        imageName: 'wagyuBurger'
    },
    {
        id: '2',
        title: 'Fresh Lime Roasted Salmon with Ginger Sauce',
        time: '30 Minutes',
        category: 'fish',
        imageName: 'salmon'
    },
    {
        id: '3',
        title: 'Strawberry Oatmeal Pancake with Honey Syrup',
        time: '30 Minutes',
        category: 'Breakfast',
        imageName: 'oatmealPancakes'
    },
    {
        id: '4',
        title: 'Fresh and Healthy Mixed Mayonnaise Salad',
        time: '30 Minutes',
        category: 'Healthy',
        imageName: 'salad'
    },
    {
        id: '5',
        title: 'Chicken Meatballs with Cream Cheese',
        time: '30 Minutes',
        category: 'Snack',
        imageName: 'meatballs'
    },
    {
        id: '6',
        title: 'Fruity Pancake with Orange & Blueberry',
        time: '30 Minutes',
        category: 'Sweet',
        imageName: 'pancakes'
    },
    {
        id: '7',
        title: 'The Best Easy One Pot Chicken and Rice',
        time: '30 Minutes',
        category: 'Snack',
        imageName: 'chickenrice'
    },
    {
        id: '8',
        title: 'The Creamiest Creamy Chicken and Bacon Pasta',
        time: '30 Minutes',
        category: 'Noodles',
        imageName: 'pasta'
    },
]


export interface Category {
    id: string;
    title: string;
    backgroundColor: string;
    imageName: string;
}

export const CATEGORIES: Category[] = [
    {
        id: '1',
        title: 'Breakfast',
        backgroundColor: 'linear-gradient(180deg, rgba(108, 198, 63, 0) 0%, rgba(108, 198, 63, 0.1) 100%)',
        imageName: 'sushi'
    },
    {
        id: '2',
        title: 'Vegan',
        backgroundColor: 'linear-gradient(180deg, rgba(112, 130, 70, 0) 0%, rgba(112, 130, 70, 0.1) 100%);',
        imageName: 'lettuce'
    },
    {
        id: '3',
        title: 'Meat',
        backgroundColor: 'linear-gradient(180deg, rgba(204, 38, 27, 0) 0%, rgba(204, 38, 27, 0.1) 100%);',
        imageName: 'meat'
    },
    {
        id: '4',
        title: 'Dessert',
        backgroundColor: 'linear-gradient(180deg, rgba(240, 158, 0, 0) 0%, rgba(240, 158, 0, 0.1) 100%);',
        imageName: 'dessert'
    },
    {
        id: '5',
        title: 'Lunch',
        backgroundColor: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.05) 100%);',
        imageName: 'sandwich'
    },
    {
        id: '6',
        title: 'Chocolate',
        backgroundColor: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.05) 100%);',
        imageName: 'chocolate'
    },
]