import MockAdapter from 'axios-mock-adapter';
import * as recipesMock from 'Mocks/Recipes.mock';

export function apiConfig(client, mockEnabled = false) {

    if (mockEnabled){
        const mock = new MockAdapter(client, {delayResponse: 500});
        mock.onGet('/recipes').reply(200, recipesMock.recipesSuccess)
            .onPost('/recipes').reply(200, recipesMock.createSuccess)
            .onGet(/\/recipes\/[0-9]+/).reply(config=>{
            const pathId = parseInt(config.url.substr(config.url.lastIndexOf('/')+1, config.url.length), 10);
            return [200, recipesMock.recipesSuccess.recipes.filter(recipe=> recipe.id === pathId)[0]]
        })
            .onPut(/\/recipes\/[0-9]+/).reply(200, recipesMock.createSuccess)
            .onAny().passThrough();
        return mock;
    }

}