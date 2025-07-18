import React, {useState} from 'react'
import { FiTrash2 } from 'react-icons/fi';
import workout from '/armlogo1.png';
function Workouts(){
   const handleClick = () => {
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
        + Add Workout
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