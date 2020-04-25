import { animals } from "../data/animaldatafordummy";

//an animal model!!
class animal{
    constructor(id, orgID, name, status, lastUpdated, species, breed, sex, size) {
        this.id = id;
        this.orgID = orgID;
        this.name = name;
        this.status = status;
        this.lastUpdated = lastUpdated;
        this.species = species;
        this.breed = breed;
        this.sex = sex;
        this.size = size;
    }
};

export default animal;