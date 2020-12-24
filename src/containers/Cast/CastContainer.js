import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { detailsURL, options } from '../../assets/api/moviesAPI';
import Spinner from '../../components/Spinner';
import useFetch from '../../hooks/useFetch';
import ActorsList from '../../components/ActorsList/ActorsList';

const CastContainer = () => {
  const [actors, setActors] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();

  const { response, err, fetchLoading } = useFetch(
    `${detailsURL}/${movieId}/credits`,
    options
  );

  useEffect(() => {
    if (response) {
      setActors(response?.cast);
    }
    setLoading(fetchLoading);
    setError(err);
  }, [err, fetchLoading, response]);

  return (
    <>
      {error && <p>{`Oops, something went wrong. ${error.message}`}</p>}
      {actors && actors.length === 0 && <p>Actors unknown.</p>}
      {actors && <ActorsList actors={actors} />}
      {loading && <Spinner />}
    </>
  );
};

export default CastContainer;
