import "./App.css";
import { useEffect, useState } from "react";
import { getDrinks } from "./API/drinkapi";
import CommonCard from "./component/cardComponent/CommonCard";

function App() {
  const [drinks, setDrinks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getNewDrink();
  }, []);
  const getNewDrink = () => {
    setIsLoading(true);
    getDrinks().then((r) => {
      console.log(r.data.drinks);
      setDrinks(r.data.drinks);
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    });
  };
  return (
    <div className="App">
      {drinks.map((drink) => (
        <CommonCard
          onFetchNew={() => {
            getNewDrink();
          }}
          drink={drink}
          setIsLoading={setIsLoading}
          isLoading={isLoading}
        />
      ))}
    </div>
  );
}

export default App;
