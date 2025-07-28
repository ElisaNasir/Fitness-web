import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddWorkout() {
  const navigate = useNavigate();
  const [workoutData, setWorkoutData] = useState({
    title: '',
    description: '',
    duration: '',
    difficulty: '',
    image: null
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setWorkoutData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setWorkoutData(prev => ({
      ...prev,
      image: file
    }));
  };

  const handleSave = () => {
    // Add your save logic here
    console.log('Workout data:', workoutData);
    // Navigate back to workouts page
    navigate('/workouts');
  };

  const handleCancel = () => {
    navigate('/workouts');
  };

  return (
    <div className="add-workout-page">
      {/* First Container - Workout Details */}
      <div className="workout-details-container">
        <h2 className="container-title">Workout Details</h2>
        
        <div className="form-group">
          <label>Workout Title</label>
          <input
            type="text"
            name="title"
            value={workoutData.title}
            onChange={handleInputChange}
            placeholder="Enter workout title"
            className="workout-input"
          />
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea
            name="description"
            value={workoutData.description}
            onChange={handleInputChange}
            placeholder="Describe the workout"
            className="workout-textarea"
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Duration (minutes)</label>
            <input
              type="number"
              name="duration"
              value={workoutData.duration}
              onChange={handleInputChange}
              placeholder="30"
              className="workout-input"
            />
          </div>

          <div className="form-group">
            <label>Difficulty Level</label>
            <select
              name="difficulty"
              value={workoutData.difficulty}
              onChange={handleInputChange}
              className="workout-select"
            >
              <option value="">Select difficulty</option>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
          </div>
        </div>
      </div>

      {/* Second Container - Image Upload */}
      <div className="workout-image-container">
        <h2 className="container-title">Workout Image</h2>
        
        <div className="image-upload-section">
          <div className="image-preview">
            {workoutData.image ? (
              <img 
                src={URL.createObjectURL(workoutData.image)} 
                alt="Preview" 
                className="preview-image"
              />
            ) : (
              <div className="image-placeholder">
                <span>No image selected</span>
              </div>
            )}
          </div>

          <div className="upload-controls">
            <input
              type="file"
              id="image-upload"
              accept="image/*"
              onChange={handleImageChange}
              className="file-input"
            />
            <label htmlFor="image-upload" className="upload-btn">
              Choose Image
            </label>
          </div>
        </div>

        <div className="action-buttons">
          <button onClick={handleCancel} className="cancel-btn">
            Cancel
          </button>
          <button onClick={handleSave} className="save-btn">
            Save Workout
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddWorkout;