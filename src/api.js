import MockAdapter from 'axios-mock-adapter';
import * as recipesMock from 'Mocks/Recipes.mock';

export function apiConfig(client, mockEnabled = false) {

    if (mockEnabled){
        const mock = new MockAdapter(client, {delayResponse: 500});
        mock.onGet('/').reply(200, {data: recipesMock.recipesSuccess})
            .onAny().passThrough();
        return mock;
    }

}