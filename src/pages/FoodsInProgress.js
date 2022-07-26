import React, { useState, useEffect, useContext } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import MyContext from '../context/MyContext';
import { ApiFoodById } from '../services/ApiMeals';
import shareIcon from '../images/shareIcon.svg';

export default function FoodsInProgress() {
  const history = useHistory();
  const { id } = useParams();
  const { btnLike,
    copySuccess,
    setCopySuccess,
    setButtonChecked } = useContext(MyContext);
  const [foodDetail, setFoodDetail] = useState([]);
  const [paragraphy, setParagraphy] = useState([]);

  useEffect(() => {
    async function getId() {
      const result = await ApiFoodById(id);
      const ingredientsName = Object.entries(result[0])
        .filter((item) => item[0].includes('strIngredient'))
        .filter((item) => item[1] !== '' && item[1] !== ' ' && item[1] !== null)
        .map((item) => item[1]);
      // const MeasureName = Object.entries(result[0])
      //   .filter((item) => item[0].includes('strMeasure'))
      //   .filter((item) => item[1] !== '' && item[1] !== ' ' && item[1] !== null)
      //   .map((item) => item[1]);
      // console.log('medidas', MeasureName);
      // console.log('ingredientes', ingredientsName);
      setParagraphy(ingredientsName);
      // const obj = { meals: { [id]: paragraphy } };
      // setFoodsProgress([...FoodsProgress, obj]);
      // localStorage.setItem('inProgressRecipes', JSON
      //   .stringify(FoodsProgress));
      console.log((localStorage.getItem('inProgressRecipes')));
      if ((localStorage.getItem('inProgressRecipes')).includes(id)) {
        setButtonChecked(true);
      }
      setFoodDetail(result);
    }

    getId();
  }, [id, paragraphy, setButtonChecked]);
  function copyingLink() {
    const doThis = async () => {
      await navigator.clipboard.writeText(`http://localhost:3000/foods/${id}`);
      setCopySuccess(true);
      return copySuccess;
    };
    doThis();
  }
  return (
    <div>
      {foodDetail.map((item) => (
        <div
          className="card"
          key={ item.idMeal }
        >
          <h4 data-testid="recipe-title">
            {item.strMeal}
          </h4>
          <img
            src={ item.strMealThumb }
            alt="ImageCard"
            width="200px"
            height="200px"
            data-testid="recipe-photo"
          />
          <button
            type="button"
            data-testid="share-btn"
            onClick={ () => copyingLink() }
          >
            <img
              alt="favorite"
              src={ shareIcon }
            />
          </button>
          { btnLike() }
          { copySuccess && <span>Link copied!</span>}
          <p data-testid="recipe-category">{ item.strCategory }</p>
          <p data-testid="instructions">
            { item.strInstructions }
          </p>
          {paragraphy.map((ingrid, index) => (
            <div
              key={ ingrid }
              data-testid={ `${index}-ingredient-step` }
            >
              {`${item[`strIngredient${index + 1}`]}
              : ${item[`strMeasure${index + 1}`]}` }
              <input
                type="checkbox"
                value={ `${item[`strIngredient${index + 1}`]}
              : ${item[`strMeasure${index + 1}`]}` }
              />
            </div>

          )) }
        </div>
      ))}
      <button
        type="button"
        data-testid="finish-recipe-btn"
        onClick={ () => history.push('/done-recipes') }
      >
        Finish Recipe
      </button>
    </div>
  );
}
// Os ingredientes devem possuir o atributo data-testid=${index}-ingredient-step, a verificação será feita pelo length do atributo. esta parte ainda tem que ver...
