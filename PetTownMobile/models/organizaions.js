import { animals } from "../data/animaldatafordummy";

//an animal model!!
class organization{
    constructor(id, orgID, name, address, city, state, zip, country, phone,
        email, orgurl, created) {
        this.id = id;
        this.orgID = orgID;
        this.name = name;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.country = country;
        this.phone = phone;
        this.email = email;
        this. orgurl = orgurl;
        this.created = created;
    }
};

export default animal;