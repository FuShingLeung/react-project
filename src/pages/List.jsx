import React, { useContext, useEffect } from 'react';
// import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import FolderIcon from '@mui/icons-material/Folder';
import EditIcon from '@mui/icons-material/Edit';
import Typography from '@mui/material/Typography';
import { Delete } from '@mui/icons-material';

import { ExercisesContext } from '../components/contexts/exercise.context';

function ExercisesList() {
  const { exercises, fetchExercises } = useContext(ExercisesContext);

  useEffect(() => {
    fetchExercises();
  }, [fetchExercises]);
  return (
    <>
      <Typography variant="h1" component="h2">
        Exercises
      </Typography>

      <List>
        {exercises.map(({ name, muscleGroup, avatar_url, _id }, i) => (
          <ListItem key={i}>
            <ListItemAvatar>
              <Avatar alt="" src={avatar_url} />
            </ListItemAvatar>
            <ListItemText>
              {name} ({muscleGroup})
            </ListItemText>
            <IconButton
              aria-label="update"
              to={`/update/${_id}`}
              component={Link}
            >
              <EditIcon />
            </IconButton>
            <IconButton
              edge="end"
              aria-label="delete"
              onClick={() => console.log(`Delete ${_id}`)}
            >
              <DeleteIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default ExercisesList;
