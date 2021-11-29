import React from 'react';
import SmallCard from './SmallCard';
import { useEffect , useState } from 'react'

/*  Cada set de datos es un objeto literal */

/* <!-- Movies in DB --> */





function ContentRowProducts(){
    const [products , setProducts] = useState([])
    const [data , setData] = useState([])

    useEffect(() => {

        fetch('http://localhost:3001/api/products')
            .then(result => result.json())
            .then(data => 

                setProducts(data.data.products)) 
    }, [])

    useEffect(() => {
        fetch('http://localhost:3001/api/products')
        .then(result => result.json())
        .then(data => 

            setData(data.data)) 

    }, [])

    let totalNike = 0 ; 
    products.forEach(product => {
        if (product.brand === 'Nike') {
            totalNike = totalNike + 1 ; 
        }
    }) ; 
    let totalAdidas = 0 ; 
    products.forEach(product => {
        if (product.brand === 'Adidas') {
            totalAdidas = totalAdidas + 1 ; 
        }
    }) ; 
    let productsInDb = {
        title: 'Products in Data Base',
        color: 'primary', 
        cuantity: data.totalProducts,
        icon: 'fa-clipboard-list'
    }
    
    /* <!-- Total awards --> */
    
    let totalesNike = {
        title:' Total Nike', 
        color:'success', 
        cuantity: totalNike ,
        icon:'fa-thumbs-up'
    }
    /* <!-- Actors quantity --> */
    
    let totalesAdidas = {
        title:'Total Adidas' ,
        color:'warning',
        cuantity: totalAdidas,
        icon:'fa-font'
    }
    
    let cartProps = [productsInDb, totalesNike, totalesAdidas];
    return (
        <div className="row">
            
            {cartProps.map( (movie, i) => {

                return <SmallCard {...movie } key={i}   />
            
            })}

        </div>
    )
}

export default ContentRowProducts;