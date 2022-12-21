import React from "react";
import {BiLocationPlus} from "react-icons/bi"
import { Link } from "react-router-dom";
export default function CardItems(props) {
  return (
    <>
    <Link to={`/propertydesc/${props.element.id}`}>
  <div className="mx-10 my-10">
  <div className="flex w-72 rounded-lg h-full bg-gray-100 p-8 flex-col">
      <div className="box shadow">
        <div className="img h-40">
          <img className='h-36' src={props.element.url} alt=""/>

        </div>
        <div className="h-56">
        <div className="text">
          <div className="category flex">
            <span style={{"background": "rgba(255, 152, 0, 0.1)", "color": "rgb(255, 152, 0)"}}>
              {props.element.category}
            </span>
            <i className="fa fa-heart"></i>
          </div>
          <h4>{props.element.name}</h4>
          <p className="flex">
            <BiLocationPlus className="m-0 mr-2"/> {props.element.location}
          </p>
        </div>
        <div className="button flex flex-col space-x-7">
          <div>
            <button className="btn2" fdprocessedid="qz56lc">
              {props.element.price}
            </button>{" "}
          </div>
          {props.element.type}
        </div>
        <div>
          {props.element.shortdesc}
        </div>
        </div>
        <div className="mb-[7%]">
          <button className="inline-flex items-center bg-green-600 border-0 py-1 px-3 text-white focus:outline-none hover:bg-green-300 rounded text-base mt-4 md:mt-0">
            See More
          </button>
        </div>
      </div>
      </div>
      </div>
      </Link>
    </>
  );
}
