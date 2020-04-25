//reducer file for the organization list
import { organizations } from '../../data/orgdatafordummy';

const initialState = {
    allorgs: organizations,
    favoriteOrgs: organizations.filter(fav => fav.favorite == true)
};

export default (state = initialState, action) => {
    return state;
}