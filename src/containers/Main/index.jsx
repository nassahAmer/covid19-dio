import React, { memo, useState, useCallback, useEffect } from 'react'
import Api from '../../api'
import Board from './components/Board'
import Panel from './components/Panel'
import { ContainerStyled } from './style'

function Main() {

    const [data, setData] = useState({}) // cria um estado vazio chamado 'data' que pode ser manipulado por 'setData'
    const [country, setCountry] = useState('brazil')
    const updateAt = new Date().toLocaleString()

    // 'useCallback' memoriza valores para não ficar chamando a função getCovidData toda hora
    const getCovidData = useCallback((country) => {
        Api.getCountry(country)
            .then(data => setData(data))
    }, [])

    useEffect(() => {
        getCovidData(country)
    }, [getCovidData, country])

    const handleChange = ({ target }) => {
        const country = target.value
        setCountry(country)
    }

    return (
        <ContainerStyled>
            <div className='mb-2'>
                <Panel 
                    data={data}
                    updateAt={updateAt}
                    onChange={handleChange}
                    country={country}
                    getCovidData={getCovidData}
                />
            </div>

            <Board data={data} />
        </ContainerStyled>
    )
}

export default memo(Main)