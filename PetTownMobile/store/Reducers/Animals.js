import { animals } from '../../data/animaldatafordummy';
import {FETCH_ANIMALS} from '../Actions/animals';

const initialState = {
    allAnimals: animals,
    favoriteAnimals: animals.filter(fav => fav.favorite == true)
};

export default (state = initialState, action) => {
    switch(action.type){
        case FETCH_ANIMALS:
            return {
                allAnimals: action.allAnimals
            };
    }
    return state;
}