import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const axios = require('axios')

export default function Home() {
  
  const [beerList, setBeerList] = useState([])

  const getBeers = (e)=> {
    e.preventDefault()

    axios.get("http://localhost:3000/user-product")
    .then(res => {
      console.log(res.data);
      setBeerList(res.data);
    })
    .catch(err => console.log(err))
  }


  return (
    <div className="">
      <Head>
        <title>Punk</title>
        <meta name="description" content="For test API" />
      </Head>

      <h1>Products</h1>
      <Link href="/category">
          <a>Category</a>
      </Link>
      <br/>
      <br/>
      <br/>
      <button onClick={getBeers}>Beers</button><br></br>
      {
        beerList.length >= 1 ? beerList.map((beer, index) =>{
          return (
            <>
            <div key={index}>
              <h3>{index}</h3>
              <p>
                {beer.sub_name}
              </p>
              <h5>
                {beer.price}
              </h5>
              <p>
                {beer.description}
              </p>
              <h3>
                {beer.seller.firstname}
              </h3>

            </div>
            </>
          )
        })
        : ' Pas de donnée'
      }

    </div>

  )
}
