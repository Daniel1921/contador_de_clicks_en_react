// import { render } from "@testing-library/react";
import PrimeraApp from "../PrimeraApp";
import {shallow} from 'enzyme'



describe('prueba en PrimeraApp', () => {
    // test('Debe de mostrar el mensaje "hola, soy daniel" ', () => {
    //     const saludo = "hola, soy daniel";
    //     const {getByText} = render(<PrimeraApp saludo="hola, soy daniel" />)
    //     expect(getByText(saludo)).toBeInTheDocument();
    // })

    test('Debe de mostrar <PrimeraApp></PrimeraApp> correctamente', () => {
        const saludo = 'hola, soy daniel'
        const wrapper = shallow(<PrimeraApp saludo={saludo} />);
        expect(wrapper).toMatchSnapshot();
    })

    test('Debe de mostrar el subtitulo enviado por props ', () => {
        const saludo = 'hola, soy daniel';
        const subtitulo = 'soy un subtitulo';
        const wrapper = shallow(<PrimeraApp 
            saludo={saludo}
            subtitulo={subtitulo} />);
        const textoParrafo = wrapper.find('p').text();
        expect(textoParrafo).toBe(subtitulo);
      
        
    })
    
    

    
})
