import * as LightsService from "./lights.service";
import { Light } from "./light.interface";

describe('Buscamos un elemento ', () => {
    it('que no está',async () => {
        expect.assertions(1);
        return expect(LightsService.find(0))
            .rejects
            .toEqual({
                status: 404,
                message: "No record found"
            });
    });


    it('que exite',async () => {
        expect.assertions(1);
        return expect(LightsService.find(1))
            .resolves.toEqual({
                id: 1,
                name: "Salon 1",
                state: {
                    value: 0
                }
            });
    });
});

describe('Quiero localizar todos los elementos', () => {

    it('accediendo a los datos',async () => {
        expect.assertions(1);
        return expect(LightsService.findAll())
            .resolves.toEqual([
                {
                  id: 1,
                  name: "Salon 1",
                  state: {
                      value: 0
                  }
                },
                {
                    id: 2,
                    name: "Salon 2",
                    state: {
                        value: 50
                    }
                },
                {
                    id: 3,
                    name: "Cocina 1",
                    state: {
                        value: 100
                    }
                },
            ]);
    });
});

describe('Voy a modificar un elemento', () => {
    it('que no existe', async () => {
        const elementoNoExiste = {
            id: 0,
            name: "Cocina 1",
            state: {
                value: 100
            }
        };
        expect.assertions(1);
        return expect(LightsService.update(elementoNoExiste))
            .rejects.toEqual({
                status: 404,
                message: "No record found"
            });
    });
    it('que existe', async () => {
        const elementoQueExiste = {
            id: 2,
            name: "Baño 1",
            state: {
                value: 75
            }
        };
        expect.assertions(1);
        return expect(LightsService.update(elementoQueExiste))
            .resolves.toEqual({
                id: 2,
                name: "Baño 1",
                state: {
                    value: 75
                }
            });
    });
})