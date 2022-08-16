import {heroes} from '../data/heroes';

export const getHerosByPublisher = (publisher) => {
  const validPublisher = ['DC Comics', 'Marvel Comics']
  if(!validPublisher.includes(publisher)){throw new Error(`${publisher} does not exist`)}
  
  return heroes.filter(heroe => heroe.publisher === publisher );
}