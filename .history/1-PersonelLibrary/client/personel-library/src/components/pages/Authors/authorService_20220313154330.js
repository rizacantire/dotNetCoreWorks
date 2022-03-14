import axios from "axios";

export default class AuthorService{
    async getData(){
        return await axios.get("https://localhost:5001/api/Author")
    }
}