import { renderHook } from "@testing-library/react-hooks";
import { useFetchGifs } from "../../hooks/useFetchGifs"

describe('Pruebas en el hook useFetchGifs', () => { 

    test('debe de retornar el estado inicial', () => {


        const { result } = renderHook(() => useFetchGifs('euphoria'))
        const { data, loading } = result.current;

        expect( data ).toEqual([])
        expect( loading ).toBe(true)

    })

})