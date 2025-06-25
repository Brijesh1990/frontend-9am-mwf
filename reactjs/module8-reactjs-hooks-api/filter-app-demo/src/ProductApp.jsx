import React from 'react';
import Data from './Data';
import 'animate.css';
export default function ProductApp() {
  return (
    <>
      <div className="w-100 mx-auto p-5 mt-5">
        <h2>
          Products List Hurry Up for <span className="anim">new Products</span>
        </h2>
        <hr className="w-25" />
        <div className="row">
          <div className="col-md-3">
            <ul className="sidebar-links">
              <li>
                <a href="">
                  <h2 className="bg-dark text-white p-2">Categories</h2>
                </a>
              </li>
              <li>
                <a href="">Home Furnitures</a>
              </li>
              <li>
                <a href="">Electronics</a>
              </li>
              <li>
                <a href="">Mens shirts</a>
              </li>
              <li>
                <a href="">Womens T-shirts</a>
              </li>
              <li>
                <a href="">Kids shoes</a>
              </li>
              <li>
                <a href="">Kids watch</a>
              </li>
            </ul>
          </div>

          <div className="col-md-9">
            <div className="row">
              {/* applied map function for displayed all products  products
              {Data &&
                Data.map((items) => {
                  return (
                    <>
                      <div className="col-md-3 m-3 shadow">
                        <p align="center">
                          <img
                            src={items.photo}
                            alt="products"
                            className="img-fluid w-100"
                            style={{ width: '95 %', height: '180px' }}
                          />
                        </p>

                        <p className="text-left">
                          <b className="fs-4">{items.pname}</b>
                        </p>

                        <p className="text-left">
                          <b className="fs-5">Rs.</b>
                          {items.offerprice} <del>{items.price}</del>
                        </p>

                        <p className="text-left">
                          <b>Quantity :</b>
                          {items.qty}
                        </p>

                        <p className="text-left">
                          <b>Descriptions :</b>
                          {items.descriptions}
                        </p>

                        <p>
                          <button
                            type="button"
                            className="btn btn-sm btn-dark text-white"
                          >
                            AddToCart
                          </button>
                        </p>
                      </div>
                    </>
                  );
                })} */}

              {/* applied map function for displayed all products with filters on products
               */}

              {Data.filter((items) => items.offerprice <= 80000).map(
                (items) => {
                  return (
                    <>
                      <div className="col-md-3 m-3 shadow">
                        <p align="center">
                          <img
                            src={items.photo}
                            alt="products"
                            className="img-fluid w-100"
                            style={{ width: '95 %', height: '180px' }}
                          />
                        </p>

                        <p className="text-left">
                          <b className="fs-4">{items.pname}</b>
                        </p>

                        <p className="text-left">
                          <b className="fs-5">Rs.</b>
                          {items.offerprice} <del>{items.price}</del>
                        </p>

                        <p className="text-left">
                          <b>Quantity :</b>
                          {items.qty}
                        </p>

                        <p className="text-left">
                          <b>Descriptions :</b>
                          {items.descriptions}
                        </p>

                        <p>
                          <button
                            type="button"
                            className="btn btn-sm btn-dark text-white"
                          >
                            AddToCart
                          </button>
                        </p>
                      </div>
                    </>
                  );
                }
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
