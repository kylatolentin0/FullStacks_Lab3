import React, {Component, useState} from "react";
import RecipeChoices from './RecipeChoices';
import drinksJson from "./drinks.json"

const BaristaForm = () => {
    
    const [currentDrink, setCurrentDrink] = useState('');
    const [trueRecipe, setTrueRecipe] = useState({});

    const getNextDrink = () => {
        let randomDrinkIndex = Math.floor(Math.random() * drinksJson.drinks.length);
        setCurrentDrink(drinksJson.drinks[randomDrinkIndex].name);
        setTrueRecipe(drinksJson.drinks[randomDrinkIndex].ingredients);
    }   

    const [inputs, setInputs] = useState({
        'temperature': '',
        'milk': '',
        'syrup': '',
        'blended': ''
      });

      const ingredients = {
        'temperature' : ['hot', 'lukewarm', 'cold'],
        'syrup': ['mocha', 'vanilla', 'toffee', 'maple', 'caramel', 'other', 'none'],
        'milk': ['cow', 'oat', 'goat', 'almond', 'none'],
        'blended': ['yes', 'turbo', 'no']
      }
      const onNewDrink = () => {
        setInputs({
          'temperature': '',
          'milk': '',
          'syrup': '',
          'blended': '' });
          
        getNextDrink();

        setCheckedTemperature('');
        setCheckedSyrup('');
        setCheckedMilk('');
        setCheckedBlended('');

      };
      
      const onCheckAnswer = () => {
        if (trueRecipe.temp != inputs['temperature']){
        setCheckedTemperature('wrong');
        }
        else {
        setCheckedTemperature("correct");
        if (trueRecipe.milk != inputs['milk']){
            setCheckedTemperature('wrong');
          }
          else {
            setCheckedTemperature("correct");
          }

          if (trueRecipe.syrup != inputs['syrup']){
            setCheckedTemperature('wrong');
          }
          else {
            setCheckedTemperature("correct");
          }

          if (trueRecipe.blended != inputs['blended']){
            setCheckedTemperature('wrong');
          }
          else {
            setCheckedTemperature("correct");
          }

          if (!ingredients['temperature'].includes(inputs['temperature'])) {
            alert("For temperature, that isn't even an option!")
          }
        }
      };

    const [correct_temp, setCheckedTemperature] = useState('');
    const [correct_syrup, setCheckedSyrup] = useState('');
    const [correct_milk, setCheckedMilk] = useState('');
    const [correct_blended, setCheckedBlended] = useState('');

  return (
    <div>

    <h2>Hi, I'd like to order a:</h2>
      
      <div className="drink-container">
        <h2 className="mini-header">{currentDrink}</h2>
        <button
          type="new-drink-button"
          className="button newdrink"
          onClick={onNewDrink}
        >
          🔄
        </button>
      </div>
      
        <form className="container">

        <div className="mini-container">
            <h3>Temperature</h3>
            <div className="answer-space" id={correct_temp}>
                {inputs["temperature"]}
            </div>
            <RecipeChoices
                handleChange={(e) =>
                setInputs((prevState) => ({
                    ...prevState,
                    [e.target.name]: e.target.value,
                }))
                }
                label="temperature"
                choices={ingredients["temperature"]}
                currentVal={inputs["temperature"]}
            />
        </div>

       <div className="mini-container">
            <h3>Syrup</h3>
            <div className="answer-space" id={correct_syrup}>
                {inputs["syrup"]}
            </div>
            <RecipeChoices
                handleChange={(e) =>
                setInputs((prevState) => ({
                    ...prevState,
                    [e.target.name]: e.target.value,
                }))
                }
                label="syrup"
                choices={ingredients["syrup"]}
                currentVal={inputs["syrup"]}
            />
        </div>

        <div className="mini-container">
            <h3>Milk</h3>
            <div className="answer-space" id={correct_milk}>
                {inputs["milk"]}
            </div>
            <RecipeChoices
                handleChange={(e) =>
                setInputs((prevState) => ({
                    ...prevState,
                    [e.target.name]: e.target.value,
                }))
                }
                label="milk"
                choices={ingredients["milk"]}
                currentVal={inputs["milk"]}
            />
        </div>

        <div className="mini-container">
            <h3>Blended</h3>
            <div className="answer-space" id={correct_blended}>
            {inputs["blended"]} 
            </div>
            <RecipeChoices
            handleChange={(e) => setInputs((prevState) => ({
                ...prevState,
                [e.target.name]: e.target.value,
            }))}
            label="blended"
            choices={ingredients["blended"]}
            checked={inputs["blended"]}
            />
        </div>

        </form>

        <button type="submit" className="button submit" onClick={onCheckAnswer}>
        Check Answer
        </button>

        <button
        type="new-drink-button"
        className="button newdrink"
        onClick={onNewDrink}
        > 
        New Drink
        </button>
            </div>
  );
  
};

export default BaristaForm;