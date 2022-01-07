

import {shallow} from 'enzyme'
import CounterApp from '../CounterApp';


describe('prueba en CounterApp', () => {

    let wrapper = shallow(<CounterApp />);;
    beforeEach(() => {
        
        wrapper = shallow(<CounterApp />);
    })

    test('Debe de mostrar <CounterApp /> correctamente', () => {
        
        expect(wrapper).toMatchSnapshot();
    })


        
    test('Debe de mostrar <CounterApp /> el valor por defecto correctamente', () => {
        const wrapper = shallow(<CounterApp />);
        const count = 10;
        const ValorDefault = Number(wrapper.find('h2').text());
        expect(count).toBe(ValorDefault);


    })
    

    test('Debe de incrementar con el boton de +1 ', () => {
       wrapper.find('button').at(0).simulate('click');
       const ValorDefault = wrapper.find('h2').text().trim();
       expect(ValorDefault).toBe('11');
    })

    test('Debe de incrementar con el boton de -1 ', () => {

        wrapper.find('button').at(2).simulate('click');
        const ValorDefault = wrapper.find('h2').text().trim();
        expect(ValorDefault).toBe('9');
     })
    
     test('debe de colocar el valor por defecto con el boton reset', () => {
        const wrapper = shallow(<CounterApp value={105}/>);
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');
        const ValorDefault = wrapper.find('h2').text().trim();
        expect(ValorDefault).toBe('105');
     })
     

    

    
})
