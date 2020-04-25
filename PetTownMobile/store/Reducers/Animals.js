import { animals } from '../../data/animaldatafordummy';

const initialState = {
    allAnimals: animals,
    favoriteAnimals: animals.filter(fav => fav.favorite == true)
};

export default (state = initialState, action) => {
    return state;
}