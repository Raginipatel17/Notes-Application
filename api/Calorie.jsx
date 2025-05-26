import React, { useEffect, useState } from 'react'

export default function Calorie({ food }) {
  const eatableItems = [
    "Apple", "Banana", "Mango", "Grapes", "Strawberry", "Chips", "Biscuits",
    "Popcorn", "Samosa", "Chocolate", "Pizza", "Burger", "Biryani", "Pasta",
    "Paneer Butter Masala", "Ice Cream", "Gulab Jamun", "Cake", "Ladoo", "Kheer",
    "Water", "Tea", "Coffee", "Juice", "Milkshake", "rice"
  ];

  const [calorie, setCalorie] = useState(null);

  const object = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': 'FqkSwnvQ47ANr2OQaL+V/g==WayBdjFAkjvIZgD5'
    }
  };

  const getCalories = async (item) => {
    const response = await fetch(`https://api.calorieninjas.com/v1/nutrition?query=${item}`, object);
    const result = await response.json();
    return result;
  };

  const lower = food.toLowerCase();
  const item = eatableItems.find((p) => lower.includes(p.toLowerCase()));

  useEffect(() => {
    if (item) {
      async function fetchCalories() {
        const data = await getCalories(item);
        if (data.items.length > 0) {
          setCalorie(data.items[0].calories);
        } else {
          setCalorie("Not Found");
        }
      }
      fetchCalories();
    } else {
      setCalorie("Unknown food");
    }
  }, [item]);

  return (
    <div>
      {calorie === null ? "Loading..." : `Calories in ${item}: ${calorie}`}
    </div>
  );
}
