import '@testing-library/jest-dom'

import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Pruebas en <GifGrid />', () => { 

    
    const category = 'Hola Mundo';

    test('debe de mostrarse correctamente', () => { 

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });

        const wrapper = shallow(<GifGrid category={ category } />);

        expect( wrapper ).toMatchSnapshot();

    });

    test('debe de mostrar items cuando se cargan imagenes useFetchGifs', () => {

        const gifs = [{
            id: 'abc',
            url: 'https://localhost/xyz',
            title: 'cualquier cosa',
        }];

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: true
        });

        const wrapper = shallow(<GifGrid category={ category } />);

    })

 })