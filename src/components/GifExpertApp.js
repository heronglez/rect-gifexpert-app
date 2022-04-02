import React, { useState } from 'react'
import { AddCategory } from './AddCategory'
import { GifGrid } from './GifGrid'

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Euphoria'])

    return (
        <>
            <h2>GiftExpertApp</h2>
            <AddCategory setCategories={ setCategories } />
            <hr/>

            <ol>
                { 
                    categories.map(category => 
                        <GifGrid key={category} category={ category } />
                    )
                }
            </ol>
        </>
    )
}