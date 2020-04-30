//reducer file for the organization list
import {organizations} from '../../data/orgdatafordummy';
import {FETCH_ORGS} from "../Actions/organizations";

const initialState = {
    allOrgs: organizations,
    favoriteOrgs: organizations.filter(fav => fav.favorite == true)
};

export default (state = initialState, action) => {
    switch(action.type){
        case FETCH_ORGS:
            return{
                allOrgs: action.allOrgs,
            };
    }
    return state;
}