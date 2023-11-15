const data = [
  {
    name: "Grilled Salmon with Lemon-Dill Sauce",
    description: "Juicy grilled salmon topped with a zesty lemon-dill sauce.",
    imageURL: "https://dummyimage.com/150x150/fff/000",
    ingredients: [
      { quantity: "4", ingredient: "salmon fillets" },
      { quantity: "1/4 cup", ingredient: "fresh lemon juice" },
      { quantity: "2 tbsp", ingredient: "olive oil" },
      { quantity: "1 tbsp", ingredient: "fresh dill, chopped" },
      { quantity: "1 clove", ingredient: "garlic, minced" },
      { quantity: "to taste", ingredient: "salt and pepper" },
    ],
  },
  {
    name: "Vegetarian Quinoa Salad",
    description:
      "A healthy and colorful salad with quinoa, fresh vegetables, and a tangy vinaigrette.",
    imageURL: "https://dummyimage.com/150x150/fff/000",
    ingredients: [
      { quantity: "1 cup", ingredient: "quinoa, cooked" },
      { quantity: "1 cup", ingredient: "cherry tomatoes, halved" },
      { quantity: "1/2 cup", ingredient: "cucumber, diced" },
      { quantity: "1/4 cup", ingredient: "red onion, finely chopped" },
      { quantity: "1/4 cup", ingredient: "feta cheese, crumbled" },
      { quantity: "2 tbsp", ingredient: "fresh parsley, chopped" },
      { quantity: "2 tbsp", ingredient: "olive oil" },
      { quantity: "1 tbsp", ingredient: "balsamic vinegar" },
      { quantity: "to taste", ingredient: "salt and pepper" },
    ],
  },
  {
    name: "Beef Tacos with Avocado Salsa",
    description: "Savory beef tacos topped with a refreshing avocado salsa.",
    imageURL: "https://dummyimage.com/150x150/fff/000",
    ingredients: [
      { quantity: "1 lb", ingredient: "ground beef" },
      { quantity: "1 packet", ingredient: "taco seasoning" },
      { quantity: "8", ingredient: "taco shells" },
      { quantity: "1 cup", ingredient: "shredded lettuce" },
      { quantity: "1 cup", ingredient: "tomatoes, diced" },
      { quantity: "1", ingredient: "avocado, sliced" },
      { quantity: "1/2 cup", ingredient: "red onion, finely chopped" },
      { quantity: "1/4 cup", ingredient: "fresh cilantro, chopped" },
      { quantity: "1/2 cup", ingredient: "sour cream" },
      { quantity: "to taste", ingredient: "salt and pepper" },
    ],
  },
  {
    name: "Pesto Pasta with Cherry Tomatoes",
    description:
      "Delicious pasta tossed in a vibrant pesto sauce and topped with sweet cherry tomatoes.",
    imageURL: "https://dummyimage.com/150x150/fff/000",
    ingredients: [
      { quantity: "12 oz", ingredient: "penne pasta, cooked" },
      { quantity: "1 cup", ingredient: "fresh basil leaves" },
      { quantity: "1/2 cup", ingredient: "pine nuts, toasted" },
      { quantity: "1/2 cup", ingredient: "parmesan cheese, grated" },
      { quantity: "2 cloves", ingredient: "garlic" },
      { quantity: "1/2 cup", ingredient: "extra virgin olive oil" },
      { quantity: "1 pint", ingredient: "cherry tomatoes, halved" },
      { quantity: "to taste", ingredient: "salt and pepper" },
    ],
  },
  {
    name: "Chicken and Vegetable Skewers",
    description:
      "Grilled chicken and colorful vegetables skewers marinated in a savory herb sauce.",
    imageURL: "https://dummyimage.com/150x150/fff/000",
    ingredients: [
      { quantity: "1 lb", ingredient: "chicken breast, cut into cubes" },
      { quantity: "1", ingredient: "red bell pepper, cut into chunks" },
      {
        quantity: "1",
        ingredient: "yellow bell pepper, cut into chunks",
      },
      { quantity: "1", ingredient: "zucchini, sliced" },
      { quantity: "1/4 cup", ingredient: "olive oil" },
      { quantity: "2 tbsp", ingredient: "balsamic vinegar" },
      { quantity: "1 tsp", ingredient: "dried oregano" },
      { quantity: "1 tsp", ingredient: "garlic powder" },
      { quantity: "to taste", ingredient: "salt and pepper" },
    ],
  },
  {
    name: "Shrimp and Asparagus Stir Fry",
    description:
      "Quick and flavorful stir-fried shrimp with tender asparagus spears.",
    imageURL: "https://dummyimage.com/150x150/fff/000",
    ingredients: [
      { quantity: "1 lb", ingredient: "shrimp, peeled and deveined" },
      {
        quantity: "1 lb",
        ingredient: "asparagus, trimmed and cut into 2-inch pieces",
      },
      { quantity: "3 cloves", ingredient: "garlic, minced" },
      { quantity: "2 tbsp", ingredient: "soy sauce" },
      { quantity: "1 tbsp", ingredient: "hoisin sauce" },
      { quantity: "1 tbsp", ingredient: "sesame oil" },
      { quantity: "1 tsp", ingredient: "fresh ginger, grated" },
      { quantity: "2 tbsp", ingredient: "vegetable oil" },
      { quantity: "to taste", ingredient: "salt and pepper" },
    ],
  },
  {
    name: "Caprese Salad",
    description:
      "A classic Italian salad with fresh tomatoes, mozzarella, and basil.",
    imageURL: "https://dummyimage.com/150x150/fff/000",
    ingredients: [
      { quantity: "4", ingredient: "ripe tomatoes, sliced" },
      { quantity: "8 oz", ingredient: "fresh mozzarella, sliced" },
      { quantity: "1/2 cup", ingredient: "fresh basil leaves" },
      { quantity: "1/4 cup", ingredient: "balsamic glaze" },
      { quantity: "2 tbsp", ingredient: "extra virgin olive oil" },
      { quantity: "to taste", ingredient: "salt and pepper" },
    ],
  },
  {
    name: "Vegetarian Chili",
    description:
      "Hearty and flavorful chili loaded with beans, vegetables, and spices.",
    imageURL: "https://dummyimage.com/150x150/fff/000",
    ingredients: [
      {
        quantity: "2 cans",
        ingredient: "kidney beans, drained and rinsed",
      },
      {
        quantity: "1 can",
        ingredient: "black beans, drained and rinsed",
      },
      { quantity: "1", ingredient: "onion, chopped" },
      { quantity: "1", ingredient: "bell pepper, chopped" },
      { quantity: "2 cloves", ingredient: "garlic, minced" },
      { quantity: "1 can", ingredient: "diced tomatoes" },
      { quantity: "1 cup", ingredient: "corn kernels" },
      { quantity: "2 tbsp", ingredient: "chili powder" },
      { quantity: "1 tsp", ingredient: "cumin" },
      { quantity: "1 tsp", ingredient: "smoked paprika" },
      { quantity: "to taste", ingredient: "salt and pepper" },
    ],
  },
  {
    name: "Mushroom Risotto",
    description:
      "Creamy and comforting risotto with sautéed mushrooms and Parmesan cheese.",
    imageURL: "https://dummyimage.com/150x150/fff/000",
    ingredients: [
      { quantity: "1 cup", ingredient: "Arborio rice" },
      { quantity: "1/2 lb", ingredient: "mushrooms, sliced" },
      { quantity: "1", ingredient: "onion, finely chopped" },
      { quantity: "2 cloves", ingredient: "garlic, minced" },
      { quantity: "1/2 cup", ingredient: "dry white wine" },
      { quantity: "4 cups", ingredient: "vegetable broth, heated" },
      { quantity: "1/2 cup", ingredient: "Parmesan cheese, grated" },
      { quantity: "2 tbsp", ingredient: "butter" },
      { quantity: "2 tbsp", ingredient: "olive oil" },
      { quantity: "to taste", ingredient: "salt and pepper" },
    ],
  },
  {
    name: "Chocolate Chip Cookies",
    description:
      "Classic homemade chocolate chip cookies that are chewy on the inside and crispy on the outside.",
    imageURL: "https://dummyimage.com/150x150/fff/000",
    ingredients: [
      { quantity: "2 1/4 cups", ingredient: "all-purpose flour" },
      { quantity: "1 tsp", ingredient: "baking soda" },
      { quantity: "1/2 tsp", ingredient: "salt" },
      { quantity: "1 cup", ingredient: "unsalted butter, softened" },
      { quantity: "3/4 cup", ingredient: "granulated sugar" },
      { quantity: "3/4 cup", ingredient: "packed brown sugar" },
      { quantity: "1 tsp", ingredient: "vanilla extract" },
      { quantity: "2", ingredient: "large eggs" },
      { quantity: "2 cups", ingredient: "semisweet chocolate chips" },
    ],
  },
];

export default data;
