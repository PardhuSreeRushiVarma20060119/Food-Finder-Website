import React, { useState, useEffect } from 'react';

function App() {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    // Fetch foods from the backend API
    fetch('/api/foods')
      .then((response) => response.json())
      .then((data) => setFoods(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>Food Finder App</h1>
      <ul>
        {foods.map((food) => (
          <li key={food._id}>
            <strong>{food.name}</strong> - {food.location}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
