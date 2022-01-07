import { getHeroeById, getHeroesByOwner } from "../../base-pruebas/08-imp-exp";
import heroes from "../../data/heroes";

describe('Pruebas en funciones de heroes', () => {
    test('Debe de retornar un heroe por id ', () => {
        const id = 1;
        const heroe = getHeroeById(id);
        
        const heroeData = heroes.find((h) => h.id === id);
        expect(heroe).toEqual(heroeData);
    })


    test('Debe de retornar un undefined si heroe no existe ', () => {
        const id = 6;
        const heroe = getHeroeById(id);
        expect(heroe).toEqual(undefined);
    })


    test('Debe de retornar un heroe por owner ', () => {
        const owner = 'DC';
        const heroe = getHeroesByOwner('DC');
       
        const heroeData = heroes.filter((h) => h.owner === owner);
        console.log(heroeData);
        expect(heroe).toEqual(heroeData);
    })

    test('Debe de retornar el tamaño del arreglo por owner Marvel ', () => {
        const owner = 'Marvel';
        const heroe = getHeroesByOwner(owner);     
        expect(heroe.length).toBe(2);
    })
    
})
