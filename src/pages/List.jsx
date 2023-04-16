import React from 'react';
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

function ExercisesList() {
  const exercises = [
    {
      _id: 1,
      name: 'Incline Dumbbell Bench Press',
      muscleGroup: 'Chest',
      avatar_url:
        'https://static.strengthlevel.com/images/illustrations/incline-dumbbell-bench-press-1000x1000.jpg',
    },
    {
      _id: 2,
      name: 'Seated Dumbbell Shoulder Press',
      muscleGroup: 'Shoulder',
      avatar_url:
        'https://static.strengthlevel.com/images/illustrations/seated-dumbbell-shoulder-press-1000x1000.jpg',
    },
  ];
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
