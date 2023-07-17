import axios from "axios";

export default class UserService{
    
    getUsers(){
        return axios.get("http://localhost:8080/api/user/getall")
    }
    async getByUserName(userName){
        return await axios.get("http://localhost:8080/api/user/getByUserName/"+userName)
    }
 
    addUser(values){
        return axios.post("http://localhost:8080/api/user/add",values)
    }
    
}