import axios from "axios";
import {arrayUtils} from "sad-shared-components";

export function getRecipe(id){
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
