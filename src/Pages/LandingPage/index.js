import React from 'react';
import './styles.css';
import logoTF from '../../assets/logoTaskFlow.png';
import car1 from '../../assets/car1.jpg'
import about from '../../assets/about.png'
import dev1 from '../../assets/rev1.jpg'
import fundo from '../../assets/fundo.png'

function LandingPage() {
  return (
    <div className="App">
      <header>

        <a href="#" className="logo"><img src={logoTF} alt="" /></a>

        <div className="bx bx-menu" id="menu-icon"></div>
        <ul className="navbar">
          <li><a href="#home">Home</a></li>
          <li><a href="#ride">Ride</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#reviews">Reviews</a></li> 
          <li><a href="#reviews">About</a></li>
        </ul>
        <div className="header-btn">
          <a href="#signup" className="sign-up">Cadastrar</a>
          <a href="#signin" className="sign-in">Login</a>
        </div>
      </header>
      <section className="home" id="home">
        <div className="text">
          <h1><span>Deseja organizar</span><br />suas tarefas?</h1>
          <p>Com este app, você verá que se <br />organizar nunca foi tão simples</p>
        </div>
        <div>
          <img src={fundo} alt=""/>
        </div>  
      </section>
      <section className="ride" id="ride">
        <div className="heading">
          <span>How Its Work</span>
          <h1>Rent With 3 Easy Steps</h1>
        </div>
        <div className="ride-container">
          <div className="box">
            <i className='bx bx-map'></i>
            <h2>Choose A Location</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam et numquam qui ad a maxime.</p>
          </div>

          <div className="box">
            <i className='bx bxs-calendar-check'></i>
            <h2>Pick-Up Date</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam et numquam qui ad a maxime.</p>
          </div>

          <div className="box">
            <i className='bx bxs-calendar-star'></i>
            <h2>Book A Car</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam et numquam qui ad a maxime.</p>
          </div>
        </div>
      </section>
      <section className="services" id="services">
        <div className="heading">
          <span> Best Services</span>
          <h1>Explore Out Top Deals <br /> From Top Rates Dealers</h1>
        </div>
        <div className="services-container">
          {/* Aqui você pode mapear os itens do serviço */}
          <div className="box">
            <div className="box-img">
              <img src={car1} alt="" />
            </div>
            <p>2017</p>
            <h3>2018 Honda Civic</h3>
            <h2>$58500 | #358 <span>month</span></h2>
            <a href="*" className="btn">Rent Now</a>
          </div>
          {/* Repita para outros itens */}
        </div>
      </section>
      <div className="section about" id="about">
        <div className="heading">
          <span> About Us</span>
          <h1>Best Customer Experience</h1>
        </div>
        <div className="about-container">
          <div className="div about-img">
            <img src={about} alt="" />
          </div>
          <div className="about-text">
            <span>About Us</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga voluptate explicabo at vero provident? Doloribus!</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt illo officiis suscipit accusamus eum doloremque.</p>
            <a href="#" className="btn">Learn More</a>
          </div>
        </div>
      </div>
      <section className="reviews" id="reviews">
        <div className="heading">
          <span>Reviews</span>
          <h1>Whats Our Customer Say</h1>
        </div>
        <div className="reviews-container">
          {/* Aqui você pode mapear as avaliações */}
          <div className="box">
            <div className="rev-img">
              <img src={dev1} alt="" />
            </div>
            <h2>Someone Name</h2>
            <div className="stars">
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star-half"></i>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima, maiores sint eligendi voluptatibus tempore deleniti nesciunt fugiat expedita?</p>
          </div>
          {/* Repita para outras avaliações */}
        </div>
      </section>
      <section className="newsletter">
        <h2>Subscribe To Newsletter</h2>
        <div className="box">
          <input type="text" placeholder="Enter Your Email..." />
          <a href="#" className="btn">Subscribe</a>
        </div>
      </section>
      <div className="copyright">
        <p>&#169; Task Flow All Right Reserved</p>
        <div className="social">
          <a href="#"><i className="bx bxl-facebook"></i></a>
          <a href="#"><i className="bx bxl-twitter"></i></a>
          <a href="#"><i className="bx bxl-instagram"></i></a>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
