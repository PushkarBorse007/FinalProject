// components/OfferZone.js
import React from 'react';
import { Link } from 'react-router-dom';
import "../assets/css/style.css"

const OfferZone = () => {
  return (
    <div>
      <section className="section-products">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-md-8 col-lg-6">
              <div className="header">
                <h3>Featured Services</h3>
                <h2>Popular Services</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-4 col-xl-3">
              <div id="product-1" className="single-product">
                <div className="part-1">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fas fa-shopping-cart"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fas fa-heart"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fas fa-plus"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fas fa-expand"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="part-2">
                  <Link to="/service1">
                    <h3 className="product-title">Billing Management</h3>
                  </Link>
                  <h4 className="Description">Billing management involves overseeing the entire process of invoicing and payment within a business.</h4>
                  <a href="/service1" className="btn btn-primary">Learn More</a>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4 col-xl-3">
              <div id="product-2" className="single-product">
                <div className="part-1">
                  <span className="discount"></span>
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fas fa-shopping-cart"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fas fa-heart"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fas fa-plus"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fas fa-expand"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="part-2">
                  <Link to="/service/1">
                    <h3 className="product-title">Employee Management</h3>
                  </Link>
                  <h4 className="product-price">At our restaurant, we're committed to nurturing a vibrant and cohesive team, recognizing that our employees are the heart of our success.</h4>
                  <a href="/service2" className="btn btn-primary">Learn More</a>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4 col-xl-3">
              <div id="product-3" className="single-product">
                <div className="part-1">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fas fa-shopping-cart"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fas fa-heart"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fas fa-plus"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fas fa-expand"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="part-2">
                  <Link to="/service/1">
                    <h3 className="product-title">Food Recycle Service</h3>
                  </Link>
                  <h4 className="product-old-price">Our food recycle service is a pioneering initiative designed to tackle food waste while championing environmental sustainability within the culinary landscape. </h4>
                  <a href="/service3" className="btn btn-primary">Learn More</a>
                
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4 col-xl-3">
              <div id="product-4" className="single-product">
                <div className="part-1">
                  <span className="new">new</span>
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fas fa-shopping-cart"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fas fa-heart"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fas fa-plus"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fas fa-expand"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="part-2">
                  <Link to="/service/1">
                  <h3 className="product-title">Catering Service</h3>
                  </Link>
                  <h4 className="product-price">Our catering services are designed to transform your events into extraordinary experiences, where every detail is meticulously curated to exceed your expectations. </h4>
                  <a href="/service4" className="btn btn-primary">Learn More</a>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4 col-xl-3">
              <div id="product-5" className="single-product">
                <div className="part-1">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fas fa-shopping-cart"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fas fa-heart"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fas fa-plus"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fas fa-expand"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="part-2">
                  <Link to="/service/1">
                    <h3 className="product-title">Event Mangement</h3>
                  </Link>
                  <h4 className="product-old-price">Our event management services are dedicated to turning your vision into reality, meticulously orchestrating every detail to create memorable experiences. </h4>
                  <a href="/service5" className="btn btn-primary">Learn More</a>
                 
                </div>
              </div>
            </div>

            <div class="col-md-6 col-lg-4 col-xl-3">
              <div id="product-6" className="single-product">
                <div className="part-1">
                  <span className="discount">5% off</span>
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fas fa-shopping-cart"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fas fa-heart"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fas fa-plus"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fas fa-expand"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="part-2">
                  <Link to="/service/1">
                    <h3 className="product-title">Customer Experience Enhancement</h3>
                  </Link>
                  <h4 className="product-price">Our customer experience enhancement services are tailored to revolutionize the way your business connects with and delights its customers.</h4>
                  <a href="/service6" className="btn btn-primary">Learn More</a>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4 col-xl-3">
              <div id="product-7" className="single-product">
                <div className="part-1">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fas fa-shopping-cart"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fas fa-heart"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fas fa-plus"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fas fa-expand"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="part-2">
                  <Link to="/service/1">
                    <h3 className="product-title">Strategic Consulting Services</h3>
                  </Link>
                  <h4 className="product-old-price">Our strategic consulting services are designed to empower businesses to navigate complex challenges, capitalize on opportunities, and achieve sustainable growth. </h4>
                  <a href="/service7" className="btn btn-primary">Learn More</a>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4 col-xl-3">
              <div id="product-8" className="single-product">
                <div className="part-1">
                  <span className="new">new</span>
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fas fa-shopping-cart"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fas fa-heart"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fas fa-plus"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fas fa-expand"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="part-2">
                  <Link to="/service/1">
                    <h3 className="product-title">Legal and Regulatory Compilance Services</h3>
                  </Link>
                  <h4 className="product-price">Our legal and regulatory compliance services are dedicated to guiding businesses through the intricate landscape of laws,ensuring adherence and mitigating potential risks. </h4>
                  <a href="/service8" className="btn btn-primary">Learn More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default OfferZone