import { useNavigate, useParams } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from '../components/Button';
import { Info } from '../components/Info';
import {
  selectCurrentCountry,
  selectDetails,
} from '../store/details/details-selectors';
import { useEffect } from 'react';
import {
  loadCountryByName,
  clearDetails,
} from '../store/details/details-actions';
export const Details = () => {
  const dispatch = useDispatch();
  const { name } = useParams();
  const navigate = useNavigate();
  const { currentCountry, error, status } = useSelector(selectDetails);
  useEffect(() => {
    dispatch(loadCountryByName(name));
    return () => {
      dispatch(clearDetails());
    };
  }, [name, dispatch]);
  return (
    <div>
      <Button onClick={() => navigate(-1)}>
        <IoArrowBack /> Back
      </Button>
      {status === 'loading' && <h2>Loading...</h2>}
      {error && <h2>{error}</h2>}
      {currentCountry && <Info navigate={navigate} {...currentCountry} />}
    </div>
  );
};
