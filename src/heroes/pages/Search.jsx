import { HeroCard } from '../components';
import { useForm } from '../../hooks';
import {getHeroByName} from '../helpers';

import { useNavigate, useLocation } from 'react-router-dom';
import querySring from 'query-string';

export const Search = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { q='' } = querySring.parse(location.search);
  const heroes = getHeroByName(q);

  const { searchText, onInputChange } = useForm({
    searchText: q
  });

  const onSearchSubmit = (event) => {
    event.preventDefault();
    if (searchText.trim().length <= 1) return;
    navigate(`?q=${searchText}`)
  }


  return (
    <>
      <h1>Search</h1>
      <hr />
      <div className="row">

        <div className="col-5">
          <h4>Hero Searching Tool</h4>
          <hr />
          <form onSubmit={onSearchSubmit}>

            <input
              type='text'
              placeholder="Search a hero"
              className="form-control"
              name="searchText"
              autoComplete='off'
              value={searchText}
              onChange={onInputChange} />

            <button className="btn btn-outline-primary mt-1">
              Search
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4> Results </h4>
          <hr />
          <div className="alert alert-primary">
            Search a Hero
          </div>
          <div className="alert alert-danger">
            There's no results for <b>{q}</b>
          </div>
          {
            heroes.map(hero => (
              <HeroCard key={hero.id} {...hero}/>))
          }
        </div>
      </div>
    </>
  )
}