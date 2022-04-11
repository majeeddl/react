import { useSelector } from "react-redux";
import "./App.css";
import { allRecipeSelector } from "./store/selectors";

const App = () => {
  const allRecipes = useSelector(allRecipeSelector);

  return (
    <div className="App">
      <div className="className">Use Selector Hook from react redux :</div>
      <div>
        {allRecipes.map((item) => (
          <div key={item.id}>{item.name}</div>
        ))}

        
      </div>
    </div>
  );
};




export default App;


