import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
function AddWorkout() {
  const navigate = useNavigate();

  const [exerciseData, setExerciseData] = useState({
    exerciseName: '',
    exerciseDescription: '',
    workout: '',
    video: null,
  });

  const [workoutData, setWorkoutData] = useState({
    workoutName: '',
    workoutDescription: '',
    category: '',
    calories: '',
    duration: '',
    level: '',
    equipment: '',
    image: null,
  });

  const handleExerciseChange = (e) => {
    const { name, value } = e.target;
    setExerciseData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleWorkoutChange = (e) => {
    const { name, value } = e.target;
    setWorkoutData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleVideoUpload = (e) => {
    const file = e.target.files[0];
    setExerciseData((prev) => ({
      ...prev,
      video: file,
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setWorkoutData((prev) => ({
      ...prev,
      image: file,
    }));
  };

  const handleSave = () => {
    console.log('Exercise Data:', exerciseData);
    console.log('Workout Data:', workoutData);
    navigate('/workouts'); // Redirect after saving
  };

  return (
    <div className="add-workout-page">
      <h3 className="page-heading">Add new Exercise</h3>
      
      {/* First Container - Exercise Information */}
      <div className="section-container">
        <div className="form-content">
          <h2 className="section-title">Exercise Information</h2>

          <div className="form-group">
            <label>Exercise Name</label>
            <input
              type="text"
              name="exerciseName"
              value={exerciseData.exerciseName}
              onChange={handleExerciseChange}
              placeholder="Arms Exercise"
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label>Exercise Description</label>
            <textarea
              name="exerciseDescription"
              value={exerciseData.exerciseDescription}
              onChange={handleExerciseChange}
              placeholder="Description"
              className="form-textarea"
            />
          </div>

          <div className="form-group">
            <label>Select a Workout</label>
            <input
              type="text"
              name="workout"
              value={exerciseData.workout}
              onChange={handleExerciseChange}
              placeholder="Select Workout"
              className="form-input"
            />
          </div>

        </div>

        <div className="upload-area">
          <div className="upload-section">
            <label>Upload Video</label>
            <input
              type="file"
              accept="video/*"
              onChange={handleVideoUpload}
              className="file-input"
              id="video-upload"
            />
            <label htmlFor="video-upload" className="upload-placeholder">
              <img 
                src="/video-placeholder.png" 
                alt="Video placeholder" 
                onError={(e) => {
                  e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxyZWN0IHg9IjIwIiB5PSIzMCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjQwIiByeD0iNCIgZmlsbD0iIzlCOUI5OCIvPgo8Y2lyY2xlIGN4PSIzNSIgY3k9IjQyIiByPSI1IiBmaWxsPSIjRjNGNEY2Ii8+Cjxwb2x5Z29uIHBvaW50cz0iMjUsNjUgMzUsNTUgNDUsNjAgNjAsNTAgNzUsNjUgNzUsNzAgMjUsNzAiIGZpbGw9IiNGM0Y0RjYiLz4KPC9zdmc+';
                }}
              />
            </label>
          </div>
        </div>

        <div className="action-buttons">
          <Link to="/workouts" className="cancel-btn">Back</Link>
          <button className="save-btn" onClick={handleSave}>Save</button>
        </div>
      </div>

      {/* === Workout Information Section === */}
      <div className="section-container">
        <div className="form-content">
          <h2 className="section-title">Workout Information</h2>

          <div className="form-group">
            <label>Workout Name</label>
            <input
              type="text"
              name="workoutName"
              value={workoutData.workoutName}
              onChange={handleWorkoutChange}
              placeholder="Arms Exercise"
              className="form-input"
            />
          </div>

        <div className="form-group">
          <label>Workout Description</label>
          <textarea
            name="workoutDescription"
            value={workoutData.workoutDescription}
            onChange={handleWorkoutChange}
            placeholder="Description"
            className="form-textarea"
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Category</label>
            <input
              type="text"
              name="category"
              value={workoutData.category}
              onChange={handleWorkoutChange}
              placeholder="Category"
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label>Calories Burned</label>
            <input
              type="text"
              name="calories"
              value={workoutData.calories}
              onChange={handleWorkoutChange}
              placeholder="340 Kcal"
              className="form-input"
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Duration</label>
            <input
              type="text"
              name="duration"
              value={workoutData.duration}
              onChange={handleWorkoutChange}
              placeholder="30 mins"
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label>Level</label>
            <input
              type="text"
              name="level"
              value={workoutData.level}
              onChange={handleWorkoutChange}
              placeholder="Beginner"
              className="form-input"
            />
          </div>
        </div>

        <div className="form-group">
          <label>Equipment Used</label>
          <input
            type="text"
            name="equipment"
            value={workoutData.equipment}
            onChange={handleWorkoutChange}
            placeholder="Equipment"
            className="form-input"
          />
          <button className="add-equipment-btn">+ Add equipment</button>
        </div>

        </div>

        <div className="upload-area">
          <div className="upload-section">
            <label>Upload Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="file-input"
              id="image-upload"
            />
            <label htmlFor="image-upload" className="upload-placeholder">
              <img 
                src="/image-placeholder.png" 
                alt="Image placeholder" 
                onError={(e) => {
                  e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi0vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxyZWN0IHg9IjIwIiB5PSIzMCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjQwIiByeD0iNCIgZmlsbD0iIzlCOUI5OCIvPgo8Y2lyY2xlIGN4PSIzNSIgY3k9IjQyIiByPSI1IiBmaWxsPSIjRjNGNEY2Ii8+Cjxwb2x5Z29uIHBvaW50cz0iMjUsNjUgMzUsNTUgNDUsNjAgNjAsNTAgNzUsNjUgNzUsNzAgMjUsNzAiIGZpbGw9IiNGM0Y0RjYiLz4KPC9zdmc+';
                }}
              />
            </label>
          </div>
        </div>

        <div className="action-buttons">
          <Link to="/workouts" className="cancel-btn">Back</Link>
          <button className="save-btn" onClick={handleSave}>Save</button>
        </div>
      </div>
    </div>
  );
}

export default AddWorkout;