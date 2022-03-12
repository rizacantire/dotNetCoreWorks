import axios from "axios"
export default  class DataService{
    async getDate(){
        return await axios.get("https://localhost:5001/api/Commentators")
    }
}