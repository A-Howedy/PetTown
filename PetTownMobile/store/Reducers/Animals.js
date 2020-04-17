import { Animals } from '../../data/data';

const initialState = {
    allAnimals: Animals,
    favoriteAnimals: Animals.filter(fav => fav.favorite == true)
};

export default (state = initialState, action) => {
    return state;
}