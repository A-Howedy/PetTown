//create some actions for the reducer!
export const FETCH_ANIMALS = "FETCH_ANIMALS";
import animal from "../../models/animals";
const loadedAnimals = [];

export const getAnimals = () => {
    //get some animals
    return async (dispatch, getState) => {
        //fetch is a react function
        const resp = await fetch('http://ec2-3-87-101-51.compute-1.amazonaws.com:8000/api/animals/',{
            method:'GET', headers:{
                "Authorization": "Token 8f7a4a68e9154253a2f8ee5718ff741894556890",
                "Content-Type": "application/json",
            },
        });
        if(!resp.ok){
            const error = await resp.json();
            console.log(error);
        }
        const apiResponse = await resp.json();
        //store these animals aa
        for (const keys in apiResponse){
            loadedAnimals.push(new animal(
                apiResponse[keys].id,
                apiResponse[keys].orgID,
                apiResponse[keys].name,
                apiResponse[keys].status,
                apiResponse[keys].lastUpdated,
                apiResponse[keys].species,
                apiResponse[keys].breed,
                apiResponse[keys].sex,
                apiResponse[keys].size,
            ));
        }

        //dispatch this bad boy to redux
        dispatch(
            {
                type:FETCH_ANIMALS,
                allAnimals: loadedAnimals,
            }
        );
    };
}