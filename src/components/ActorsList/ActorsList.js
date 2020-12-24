import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import noPhoto from '../../assets/images/noPhoto.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 400,
    height: 450,
  },
}));

const ActorsList = ({ actors }) => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <GridList cellHeight={250} className={classes.gridList}>
          <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
            <ListSubheader component="div">Credits</ListSubheader>
          </GridListTile>
          {actors.map((actor, i) => (
            <GridListTile key={i}>
              <img
                src={
                  actor?.profile_path
                    ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                    : noPhoto
                }
                alt={actor?.name}
              />
              <GridListTileBar
                title={actor?.name}
                subtitle={
                  <span>Character: {actor?.character || 'unknown'}</span>
                }
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
    </>
  );
};

export default ActorsList;

ActorsList.propTypes = {
  actors: PropTypes.array.isRequired,
};
