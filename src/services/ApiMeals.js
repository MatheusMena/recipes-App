export const ApiMealsIngredient = async (ingredient) => {
  const linkIngredient = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`;
  try {
    const response = await fetch(linkIngredient);
    const data = await response.json();
    return data.meals;
  } catch (error) {
    return error;
  }
};

export const ApiMealsFirstLetter = async (first) => {
  const linkFirstLetter = `https://www.themealdb.com/api/json/v1/1/search.php?f=${first}`;
  try {
    const response = await fetch(linkFirstLetter);
    const data = await response.json();
    return data.meals;
  } catch (error) {
    return error;
  }
};

export const ApiMealsName = async (names) => {
  const linkName = `https://www.themealdb.com/api/json/v1/1/search.php?s=${names}`;
  try {
    const response = await fetch(linkName);
    const data = await response.json();
    return data.meals;
  } catch (error) {
    return error;
  }
};

export const ApiCategoryFood = async () => {
  const url = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.meals;
  } catch (error) {
    return error;
  }
};