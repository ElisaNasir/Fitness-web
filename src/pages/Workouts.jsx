import React, {useState} from 'react'
import { FiTrash2 } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import workout from '/armlogo1.png';
import plusicon from '/plus.png';

function Workouts(){
  const navigate = useNavigate();
  
   const handleClick = () => {
    navigate('/add-workout');
  };

  const [images, setImages] = useState(Array(8).fill(workout));
  const handleDelete = (indexToDelete) => {
    const updated = images.filter((_, i) => i !== indexToDelete);
    setImages(updated);
  };

    return(
      <div>
    <div className="top-right-button-container">
      <button className="top-right-button" onClick={handleClick}>
      <img src={plusicon} alt="Plus" className="Plus-icon" />
        Add Workout
      </button>
    </div>
     <div className="workout-grid">
      {images.map((img, index) => (
        <div key={index} className="workout-card">
          <button className="delete-icon" onClick={() => handleDelete(index)}>
            <FiTrash2 />
          </button>
          <img src={img} alt={`Workout ${index + 1}`} className="workout-image" />
        </div>
      ))}
    </div>
    </div>
    )
}
export default Workouts