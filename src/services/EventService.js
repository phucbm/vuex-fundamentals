import axios from "axios";

const apiClient = axios.create({
    baseURL: "http://localhost:3000/", // get this URL from the terminal when run serve
    withCredentials: false,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
});

export default {
    getEvents(){
        return apiClient.get("/events");
    },
    getEvent(id){
        return apiClient.get("/events" + id);
    },
    postEvent(event){
        return apiClient.post('/events', event);
    }
};
