import React from "react";

const data = [
  { food: "Meat", meal: "Breakfast", time: "08:00 AM", carbs: "20 gm" },
  { food: "Burger", meal: "Lunch", time: "01:00 AM", carbs: "30 gm" },
  { food: "Burrito", meal: "Dinner", time: "11:00 PM", carbs: "10 gm" },
  { food: "Ice Cream", meal: "Lunch", time: "01:00 AM", carbs: "90 gm" },
  { food: "Pizza Slice", meal: "Brunch", time: "11:00 AM", carbs: "50 gm" },
  { food: "Cookies", meal: "Break Fast", time: "08:00 AM", carbs: "30 gm" },
  { food: "Fries", meal: "Lunch", time: "01:00 AM", carbs: "90 gm" },
  { food: "Egg & Bacon", meal: "Dinner", time: "10:00 PM", carbs: "70 gm" },
  { food: "Cupcake", meal: "Break Fast", time: "08:00 AM", carbs: "40 gm" },
  { food: "Taco", meal: "Lunch", time: "01:00 AM", carbs: "80 gm" },
];

function DietPlans(){
return(
     <div className="diet-container">
      <table className="diet-table">
        <thead>
          <tr>
            <th>Food</th>
            <th>Meal</th>
            <th>Calories</th>
            <th>Priorities</th>
            <th>Carbs</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, idx) => (
            <tr key={idx}>
              <td>{item.food}</td>
              <td>{item.meal}</td>
              <td>Receiving</td>
              <td>{item.time}</td>
              <td>{item.carbs}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
)
}
export default DietPlans