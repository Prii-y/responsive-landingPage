import React from 'react'
import phoneImg from './images/phone.svg'
import { Appcontext } from './App'
const Hero = () => {

  return <section className='hero'>
  <div className='hero-center'>
  <article className='hero-info'>
  <h1>Payments infrastructure for the internet</h1>
  <p>
  Millions of businesses of all sizes – 
  from startups to large enterprises – 
  use Stripe's software and APIs to accept payments, 
  send payouts, and manage their businesses online.
  </p>
  <button className='btn'>Start now</button>
  </article>
  <article className='hero-images'>
  <img className='phone-img' alt='phone' src={phoneImg}></img>
  </article>
  </div>
  
  </section>
}

export default Hero
