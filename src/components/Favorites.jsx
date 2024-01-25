import React from "react";
import { useSelector } from "react-redux";
import Favorite from "./Favorite";


export default function Favorites(){
    const favorites = useSelector((store)=>store.favorites.favorites);
    
    return (
      <>
        {favorites.length !== 0 && (
          <div className="w-full">
            {favorites?.map((item, index) => {
              return (
                <Favorite key={index} item={item}/>
              );
            })}
          </div>
        )}
        {favorites.length === 0 && (
          <div className="w-full p-20 text-[1.5em] bg-white text-center">
            You Didn't Add Any Favorite Cat Fact
          </div>
        )}
      </>
    );
}