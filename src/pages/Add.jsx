import React from 'react';
import Typography from '@mui/material/Typography';
import ExerciseForm from '../components/forms/ExerciseForm';

function Add() {
  return (
    <>
      <Typography variant="h2" component="h1">
        Add Exercise
      </Typography>
      <ExerciseForm />
    </>
  );
}

export default Add;
