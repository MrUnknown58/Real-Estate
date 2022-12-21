import React, { Component } from "react";
import {BsSearch} from "react-icons/bs";
import FeaturedProperty from "../Components/FeaturedProperty";
import PropertyList from "../Components/PropertyList";
import Property from "../Components/Property";
import { Link } from "react-router-dom";
import styles from "../styles/styles.module.css";
export default class LandingPage extends Component {
  render() {
    return (
      <>
        <section className={styles.hero}>
        <div className="container pl-0 md:pl-16 pt-10">
        <form className="md:pr-5 flex items-center justify-between bg-white border border-r-5 mt-[50px] md:p-[0 20px] rounded-xl">
          <div className="md:p-[15px] p-[12px] block m-0">
            <span>City/Street</span>
            <input className="border border-gray-200 border-r-[5px] mt-[5px] p-[10px] w-[100%]" type="text" placeholder="Location" fdprocessedid="g3tttd" />
          </div>
          <div className="p-[15px] block m-0">
            <span>Property Type</span>
            <input
            className="border border-gray-200 border-r-[5px] mt-[5px] p-[10px] w-[100%]"
              type="text"
              placeholder="Property Type"
              fdprocessedid="dxrvog"
            />
          </div>
          <div className="p-[15px] block m-0">
            <span>Price Range</span>
            <input
            className="border border-gray-200 border-r-[5px] mt-[5px] p-[10px] w-[100%]"
              type="text"
              placeholder="Price Range"
              fdprocessedid="dwad5l"
            />
          </div>
          {/* <div className="p-[15px] block m-0">
            <h4>Advance Filter</h4>
          </div> */}
          <Link to={"/a"}>
          <button className="bg-green-600 rounded text-white cursor-pointer font-bold md:p-5 sm:pt-3 sm:pl-1 sm:pr-1 sm:pb-3 p-1" fdprocessedid="ywsho">
            <BsSearch className="w-7"/>
          </button>
          </Link>
        </form>
        <div className="text-white text-[60px] uppercase text-center font-bold flex flex-col">
          Search Your New Home
          <span className="normal-case text-xl">
          Find new & featured property located in your local city.
          </span>
        </div>
        </div>
        </section>
    <FeaturedProperty/>
    <PropertyList/>
    <Property/>
      </>
    )
  }
}
