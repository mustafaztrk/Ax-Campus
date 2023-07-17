import axios from "axios";

export default class ActivitiService{
    
    getActivities(){
        return axios.get("http://localhost:8080/api/activities/getall")
    }
 
    addActivities(values){
        return axios.post("http://localhost:8080/api/activities/add",values)
    }
    async getByActivityName(activitiName){
        return await axios.get("http://localhost:8080/api/activities/getByActivitiName/"+activitiName)
    }
    
}