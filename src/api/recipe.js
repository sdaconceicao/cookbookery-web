import axios from "axios";
import {arrayUtils} from "sad-shared-components";

export function create(data){
    return axios.post('/recipes', data);
}

export function remove(id){
    return axios.delete(`/recipes/${id}`);
}

export function get(id){
    return axios.get(`/recipes/${id}`)
        .then(response=>{
            response.data.ingredients = arrayUtils.addIdsToArrayElements(response.data.ingredients);
            response.data.steps = arrayUtils.addIdsToArrayElements(response.data.steps);
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