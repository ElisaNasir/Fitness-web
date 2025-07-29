import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

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
      prev,
      [name]: value,
    }));
  };

  const handleWorkoutChange = (e) => {
    const { name, value } = e.target;
    setWorkoutData((prev) => ({
      prev,
      [name]: value,
    }));
  };

  const handleVideoUpload = (e) => {
    const file = e.target.files[0];
    setExerciseData((prev) => ({
      prev,
      video: file,
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setWorkoutData((prev) => ({
      prev,
      image: file,
    }));
  };

  const handleSave = () => {
    console.log('Exercise Data:', exerciseData);
    console.log('Workout Data:', workoutData);
    navigate('/workouts');
  };
  const [showEquipmentDialog, setShowEquipmentDialog] = useState(false);
  const [equipment, setEquipment] = useState({
    name: '',
    weight: '',
    unit: '',
    image: null,
  });
  return (
    <div className="add-workout-page">
      <h3 className="page-heading">Add new Exercise</h3>

      <div className="section-container">
        <h2 className="section-title">Exercise Information</h2>

        <div className="exercise-row">

          <div className="exercise-left">
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


          <div className="exercise-right">
            <label>Upload Video</label>
            <div className="upload-circle" onClick={() => document.getElementById("videoUpload").click()}>
              <img
                src="/img3.png"
                alt="Upload Video"
                className="upload-icon"
              />
            </div>
            <input
              id="videoUpload"
              type="file"
              accept="video/*"
              onChange={handleVideoUpload}
              className="file-hidden"
            />
            {exerciseData.video && (
              <div className="video-preview">{exerciseData.video.name}</div>
            )}
          </div>
        </div>

        <div className="action-buttons">
          <Link to="/workouts" className="cancel-btn">
            Back
          </Link>
          <button className="save-btn" onClick={handleSave}>
            Save
          </button>
        </div>
      </div>

      <div className="section-container">
        <h2 className="section-title">Workout Information</h2>

        <div className="exercise-row">
          <div className="exercise-left">
            <div className="form-group small-input">
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

            <div className="form-group small-input">
              <label>Workout Description</label>
              <textarea
                name="workoutDescription"
                value={workoutData.workoutDescription}
                onChange={handleWorkoutChange}
                placeholder="Description"
                className="form-textarea"
              />
            </div>
          </div>

          <div className="exercise-right">
            <label>Upload Image</label>
            <div
              className="upload-circle"
              onClick={() => document.getElementById("imageUpload").click()}
            >
              <img src="/img3.png" alt="Upload" className="upload-icon" />
            </div>
            <input
              id="imageUpload"
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="file-hidden"
            />
            {workoutData.image && (
              <div className="video-preview">{workoutData.image.name}</div>
            )}
          </div>
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
        <div className="form-row">
          <div className="form-group">
            <label>Equipment Used</label>
            <button className="add-equipment-btn" onClick={() => setShowEquipmentDialog(true)}>+ Add equipment</button>
          </div>
        </div>

        <div className="action-buttons">
          <Link to="/workouts" className="cancel-btn">
            Back
          </Link>
          <button className="save-btn" onClick={handleSave}>
            Save
          </button>
        </div>
      </div>
      {showEquipmentDialog && (
        <div className="equipment-dialog-overlay">
          <div className="equipment-dialog">
            <h2 className="dialog-heading">Add Equipment</h2>

            <label className="dialog-label">Name</label>
            <input
              type="text"
              placeholder="abc"
              className="dialog-input"
              value={equipment.name}
              onChange={(e) => setEquipment({ ...equipment, name: e.target.value })}
            />

            <label className="dialog-label">Weight</label>
            <input
              type="text"
              placeholder="abc"
              className="dialog-input"
              value={equipment.weight}
              onChange={(e) => setEquipment({ ...equipment, weight: e.target.value })}
            />

            <label className="dialog-label">Weight Unit</label>
            <input
              type="text"
              placeholder="abc"
              className="dialog-input"
              value={equipment.unit}
              onChange={(e) => setEquipment({ ...equipment, unit: e.target.value })}
            />

            <label className="dialog-label">Image</label>
            <input
              type="file"
              className="dialog-input"
              onChange={(e) => setEquipment({ ...equipment, image: e.target.files[0] })}
            />

            <div className="dialog-buttons">
              <button className="save-btn2">Add Equipment</button>
              <button className="cancel-btn2" onClick={() => setShowEquipmentDialog(false)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default AddWorkout;
