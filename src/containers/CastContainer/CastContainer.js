import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { detailsURL, options } from '../../api/moviesAPI';
// import Cast from '../../components/Cast/Cast';
import Spinner from '../../components/Spinner';
import useFetch from '../../hooks/useFetch';
import ActorsList from '../../components/ActorsList/ActorsList';

const CastContainer = () => {
  const [actors, setActors] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();

  const { response, err, fetchLoading } = useFetch(
    `${detailsURL}/${movieId}/credits`,
    options
  );

  useEffect(() => {
    if (response) {
      console.log('response', response);
      setActors(response?.cast);
    }
    setLoading(fetchLoading);
    setError(err);
  }, [err, fetchLoading, response]);

  return (
    <>
      {error && <p>{`Oops, something went wrong. ${error.message}`}</p>}
      {actors && <ActorsList actors={actors} />}
      {loading && <Spinner />}
    </>
  );
};

export default CastContainer;