import axios from "axios";

export function create(data){
    return axios.post('/recipes', data);
}

export function remove(id){
    return axios.delete(`/recipes/${id}`);
}

export function get(id){
    return axios.get(`/recipes/${id}`)
        .then(response=>{
            return response.data;
        }).catch(error=>{
            console.error("ERROR in retrieving recipe", error);
            return error;
        })
}

export function getList(filters){
    return axios.get('/recipes', filters);
}

export function save(data){
    return axios.put(`/recipes/${data.id}`, data);
}