import React from 'react';
import { useParams } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import ExerciseForm from '../components/forms/ExerciseForm';

function Update() {
  const { id } = useParams();
  // Send car and handler to form
  return (
    <>
      <Typography variant="h2" component="h1">
        Update {id}
      </Typography>
      <ExerciseForm />
    </>
  );
}

export default Update;
