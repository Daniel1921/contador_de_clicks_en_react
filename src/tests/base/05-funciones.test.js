import '@testing-library/jest-dom'
import { getUser, getUsuarioActivo } from "../../base-pruebas/05-funciones"

describe('Pruebas en 05-funciones', () => {
    
        test('Debe retornar un objeto ', () => {
            const userTest = {
                uid: 'ABC123',
                username: 'El_Papi1502'
            }

            const user = getUser();

            expect(user).toEqual(userTest)

        })

        //  getUsuarioActivo debe retornar un objeto
        
        test('Debe retornar un objeto utilizando un atributo ', () => {
            const userActivoTest = {
                uid: 'ABC567',
                username: 'daniel mafla'
            }

            const userActivo = getUsuarioActivo('daniel mafla');

            expect(userActivo).toEqual(userActivoTest)

        })

})
