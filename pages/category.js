import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const axios = require('axios')

export default function Category() {
  
  const [beerCategory, setCategoryList] = useState([])


  const getCategories = (e)=> {
    e.preventDefault()

    axios.get("http://localhost:3000/category")
    .then(res => {
      console.log(res.data);
      setCategoryList(res.data);
    })
    .catch(err => console.log(err))
  }


  return (
    <div className="">
      <Head>
        <title>Category</title>
        <meta name="description" content="For test API" />
      </Head>

      <h1>Category</h1>
      <Link href="/">
          <a>Home</a>
      </Link>
      <br/>
      <br/>
      <br/>
      <button onClick={getCategories}>Beers</button><br></br>
      {
        beerCategory.length >= 1 ? beerCategory.map((beer, index) =>{
          return (
            <>
            <div key={index}>
                <h3>
                    {beer.name}
                </h3>
                <h4>
                    {beer.product.name}
                </h4>
                <p>
                    {beer.product.product_description}
                </p>
                <Image src={beer.picture} alt="me" width="64" height="64" />

            </div>
            </>
          )
        })
        : ' Pas de donnée'
      }

    </div>

  )
}
