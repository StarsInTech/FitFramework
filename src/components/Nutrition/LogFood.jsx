// This was copied over from App.jsx from initial install
import "../styles/App.scss";
import Button from "./Button";
import Search from "./Search";
import FoodItem from "./FoodItem";

const handleClick = () => console.log("Clicked");

function App() {
  return (
    <div className="container">
      <h1>Log Food</h1>
      <Search />
      <Button
        onClick={handleClick}
        text="Create a Food"
        className="fullw-btn"
      />
      <h2>Created Foods</h2>
      <FoodItem
        foodName="Apple"
        calorieValue={52}
        fatValue={3}
        carbValue={96}
        proteinValue={1}
        foodMeasurement="Apple"
        foodImgPath="src/assets/apple.webp"
      />
    </div>
  );
}

export default App;