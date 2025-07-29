import React from "react";

const data = [
  { food: "Meat", meal: "Breakfast", time: "08:00 AM", carbs: "20 gm", img:'/meat.png' },
  { food: "Burger", meal: "Lunch", time: "01:00 AM", carbs: "30 gm", img:'/burger.png' },
  { food: "Burrito", meal: "Dinner", time: "11:00 PM", carbs: "10 gm", img:'/buritto.png'},
  { food: "Ice Cream", meal: "Lunch", time: "01:00 AM", carbs: "90 gm", img:'/ice cream.png' },
  { food: "Pizza Slice", meal: "Brunch", time: "11:00 AM", carbs: "50 gm" ,img:'/pizza.png'},
  { food: "Cookies", meal: "Break Fast", time: "08:00 AM", carbs: "30 gm", img:'/cookies.png' },
  { food: "Fries", meal: "Lunch", time: "01:00 AM", carbs: "90 gm",img: '/fries.png' },
  { food: "Egg & Bacon", meal: "Dinner", time: "10:00 PM", carbs: "70 gm",img: '/egg.png' },
  { food: "Cupcake", meal: "Break Fast", time: "08:00 AM", carbs: "40 gm",img:'/cupcake.png' },
  { food: "Taco", meal: "Lunch", time: "01:00 AM", carbs: "80 gm",img: '/taco.png'},
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
              <td>
              <div className="food-wrapper">
    <div className="food-img">
      <img src={item.img} alt={item.food} />
    </div>
    <span>{item.food}</span>
  </div>
  </td>
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