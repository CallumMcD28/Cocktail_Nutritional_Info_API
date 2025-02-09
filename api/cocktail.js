// Base URL for CocktailDB API search
const CocktailApiKey = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

document.getElementById('searchButton').addEventListener('click', searchCocktails)
// search by using the enter button
document.getElementById('search').addEventListener('keydown', (clicked) => {
    if (clicked.key === 'Enter') {
        searchCocktails();
    }
})


function searchCocktails() {
    // Functionality for search feature
    const query = document.getElementById('search').value.trim();
    if (!query) {
        alert('Please enter a cocktail name.');
        return;
    }

    fetch(`${CocktailApiKey}${query}`)
        // Fetch contents from the API response and format contents to display as HTML elements
        .then(response => response.json())
        .then(data => {
            const results = data.drinks || [];
            const resultsContainer = document.getElementById('results');
            resultsContainer.innerHTML = '';
            results.forEach(drink => {
                const card = document.createElement('div');
                card.classList.add('card', 'col-md-3', 'text-white', 'm-4', 'p-5', 'g-3');
                card.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";

                // Building card and card contents
                card.innerHTML = `
                <img src="${drink.strDrinkThumb}" class="card-img-top" alt="${drink.strDrink}" style="height: 200px; object-fit: cover;">
                <div class="card-body">
                        <h5 class="card-title">${drink.strDrink}</h5>
                    <a href="ingredients.html?cocktail=${drink.idDrink}" class="btn btn-primary btn-sm">More Info</a>
                </div>
            `;
                resultsContainer.appendChild(card);
            });
        })
        .catch(error => {
            // Custom error response
            console.error('Error:', error);
            alert('An error occurred while searching for the cocktail.');
        });
}