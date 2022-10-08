import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../../Components/Navbar';
import NavbarLogin from '../../Components/Navbar/navbarLogin';
import { useSelector } from 'react-redux';
import hero from '../../Assets/image/product.svg'
import './styles.css'
import { Link } from 'react-router-dom';

const Home = () => {
  const { isLogin } = useSelector((state) => state.auth)
  console.log(isLogin)

  return (
    <>
      <Helmet>
        <meta name="theme-color" content="#5f2eea" />
        <meta name="description" content="Author: Novia,
        Name Web : Tickitz, Category: Booking Ticket Bioskop"/>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.3/font/bootstrap-icons.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&family=Mulish:wght@400;600;700&family=Open+Sans&display=swap"
          rel="stylesheet" />
        <title>Home</title>
      </Helmet>
      {isLogin ? <NavbarLogin /> : <Navbar />}
      <main>
        <div className="wrapper-homepage container d-flex">
          <div className="homepage-left">
            <p className="homepage-left-text">
              Welcome to my web
            </p>
            <Link to='/product'>
              <button className="homepage-left-button">Our Products</button>
            </Link>
          </div>
          <div className="homepage-right">
            <img src={hero} alt='hero' className="homepage-right-hero" />
          </div>
        </div>
      </main>
    </>
  )
}
export default Home