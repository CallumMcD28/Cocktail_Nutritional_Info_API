#Description
This project was completed as a coursework piece for a web development module as part of my MSc in Computer Science at Dundee University. The web application uses two APIs: NutritionIX and CocktailDB. The function of the application is to calculate the nutritional values of various cocktails. The application takes a user input (search for either a cocktail name, or cocktail ingredient), and returns a list of cocktails. This function uses the cocktaildb API to return search results. When the user selects a cocktail to view, ingredients in the cocktail are displayed alongside the nutritional information for each ingredient. These can then be summed to find the nutritional information for the cocktail.


[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=17279457&assignment_repo_type=AssignmentRepo)



https://github.com/user-attachments/assets/e7e6874e-fbc4-46a6-8d71-02b43a7f92f2


# Calculation for nutritional values from NutrionIX into CocktailDB amounts:

(Ounce amount from CocktailDB ingredient) x 28.35 = Amount for Recipe in Grams (ARG)

Conversion Factor (CF) = ARG / (NutrionIX Serving Weight in Grams)

## Repeated on every nutrition value used:
(Any NutritionIX Nutrition Value for Specific Ingredient) x CF = Final Nutrition Value for Ounces Amount Initially Displayed in Recipe.


## Nutritional Factors used
Weight,
Calories,
Fat,
Sodium,
Carbohydrate,
Sugars,
Protein,
