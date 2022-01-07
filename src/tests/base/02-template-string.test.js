import '@testing-library/jest-dom';
import { getSaludo } from "../../base-pruebas/02-template-string"

describe('Pruebas en 02-template-string', () => {

        test('getSaludo debe retornar hola daniel ', () => {
                const nombre = 'Daniel'
                const saludo = getSaludo(nombre);
                expect(saludo).toBe('Hola ' + nombre)
        })
        
        // getSaludo debe retornar Hola sebas  si no hay argumento nombre en el metodo
        test('getSaludo debe retornar hola sebas ', () => {
            const saludo = getSaludo();
            expect(saludo).toBe('Hola ' + 'sebas')
    })
})