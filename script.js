const searchBox = document.querySelector('.searchBox');
const searchBtn = document.querySelector('.searchBtn');
const recipeContainer = document.querySelector('.recipe-container');


const fetchRecipes = async (query) =>{
    const data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
    const response = await data.json();

    response.meals.forEach(meal => {
       const recipeDiv=document.createElement('div');
       recipeDiv.classList.add('recipe');
       recipeDiv.innerHTML= `<img src="${meal.strMealThumb}">`
       recipeContainer.appendChild(recipeDiv);
    });
    // console.log(response.meals[0]);
}
searchBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    const searchInput = searchBox.value.trim();
    fetchRecipes(searchInput);
    // console.log("Button Clicked");
    
}); 


