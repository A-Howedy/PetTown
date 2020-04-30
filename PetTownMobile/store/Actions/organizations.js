//actions for the organizations reducers
//right now we just want to be able to fetch the list of organizations
export const FETCH_ORGS = "FETCH_ORGS";
import organization from "../../models/organizaions"

export const getOrgs = () => {
    //fetch the list of organizations from the django api
    return async(dispatch, getState) => {
        const resp = await fetch('http://ec2-3-87-101-51.compute-1.amazonaws.com:8000/api/organizations/',{
                method:'GET', headers:{
                    "Authorization": "Token 8f7a4a68e9154253a2f8ee5718ff741894556890",
                    "Content-Type": "application/json",
                },
            });

        if (!resp.ok){
            const err = await resp.json();
            console.log(err);
        }
        const apiR= await resp.json();
        const loadedOrgs = [];

        //store the organizations
        for (const keys in apiR){
            loadedOrgs.push(new organization(
                apiR[keys].id,
                apiR[keys].orgID,
                apiR[keys].name,
                apiR[keys].address,
                apiR[keys].city,
                apiR[keys].state,
                apiR[keys].zip,
                apiR[keys].country,
                apiR[keys].phone,
                apiR[keys].email,
                apiR[keys].orgurl,
                apiR[keys].created,
            ) );
        }
        dispatch(
            {
                type:FETCH_ORGS,
                allOrgs: loadedOrgs,
            }
        );
    };
}