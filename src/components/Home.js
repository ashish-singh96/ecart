import React from 'react'
import { useState, useEffect } from 'react';
import ReadMoreReact from 'read-more-react';
import { Link } from 'react-router-dom';
const Home = (props) => {

  const [categories, setCategories] = useState([]);
  const [products, setProduct] = useState([]);

  const getCategories = () => {
    fetch('https://fakestoreapi.com/products/categories')
      .then(res => res.json())
      .then(json => setCategories(json));
  }

  const getAllProduct = () => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setProduct(json))
  }

  const getAllProductCategory = (item) => {
    fetch(`https://fakestoreapi.com/products/category/${item}`)
      .then(res => res.json())
      .then(json => setProduct(json))
  }

  useEffect(() => {
    getCategories();
    getAllProduct();
  }, []);
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div style={{ width: "100%" }}>
          <ul className="navbar-nav  d-flex justify-content-around">
            {
              categories.map((item) => {
                return (
                  <li className="nav-item">
                    <button onClick={() => getAllProductCategory(item)} type="button" >{item}</button>
                  </li>

                )


              })
            }
            <li className="nav-item">
              <button onClick={() => getAllProduct()} >All Product</button>
            </li>

          </ul>
        </div>
      </nav>

      <div className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-between">
        <ul className="showproduct navbar-nav ">
          {
            products.map((item) => {
              return (
                <li className="nav-item">
                  <div className="card" style={{ width: "20rem", height:"25rem", margin: "10px" }}>
                    <img className="card-img-top" src={item.image} alt="Card image cap" />
                    <div className="card-body">
                      <h3 className="card-price" >${item.price}</h3>
                      <h5 className="card-title">{item.title.split(' ').slice(0, 4).join(' ')}</h5>

                      <ReadMoreReact text={item.description}
                        min={50}
                        ideal={50}
                        max={100}
                        readMoreText={"read more"} />

                      {/* <a href="#" className="btn btn-primary">Add to Cart</a> */}
                      <div className='btnCard' style={{position:"absolute",bottom:"0"}} >
                        <button class="btn  btn-sm btn-warning" style={{marginBottom:"15px"}}>Add to Cart</button>
                        <button class="btn btn-sm btn-info" style={{marginBottom:"15px",marginLeft:"15px"}}>Buy Now</button>
                      </div>
                    </div>
                  </div>
                </li>
              )
            })
          }
        </ul>
      </div>
    </div>
  )
}

export default Home
