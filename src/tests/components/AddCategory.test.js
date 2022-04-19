import '@testing-library/jest-dom'

import { shallow } from 'enzyme';
import { AddCategory } from "../../components/AddCategory";

describe('Pruebas en <AddCategory />', () => { 

    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={ setCategories } />);

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={ setCategories } />);
    })

    test('debe de mostrar correctamente ', () => { 

        expect( wrapper ).toMatchSnapshot();

     })

    test('debe de cambiar la caja de texto', () => {

        const input = wrapper.find('input')
        const value = 'Hola mundo'

        input.simulate('change', { target: { value }})

    })

    test('NO debe de postear la info onSubmit', () => {

        wrapper.find('form').simulate('submit', { preventDefault(){} })

        expect(setCategories).not.toHaveBeenCalled();

    })

    test('debe de llamar el setCategories y limpar la caja de texto', () => { 

        const value = 'doctor House'

        // 1. simular el inputChange
        wrapper.find('input').simulate('change', { target: { value } })
        
        // 2. simular submit
        wrapper.find('form').simulate('submit', { preventDefault(){} })

        // 3. setcategories se debe de haber llamado
        expect( setCategories ).toHaveBeenCalled();
        expect( setCategories ).toHaveBeenCalledTimes(1);
        expect( setCategories ).toHaveBeenCalledWith( expect.any(Function) );
        

        // 4. inputValue debe de estar vacio.
        expect( wrapper.find('input').prop('value') ).toBe('')

     })
 })