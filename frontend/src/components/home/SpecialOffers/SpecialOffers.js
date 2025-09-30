import React, { useEffect, useState } from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import { SplOfferData } from "../../../constants";
import { useParams } from "react-router-dom";

const SpecialOffers = () => {
  const { category } = useParams();

  const [data, setData] = useState([]);
  useEffect(() => {
    setData(SplOfferData);
  }, [data]);
  
  console.warn(data)
  const catData = data.filter((item) => item.cat === category);
  const splData = data.filter((item) => item.cat === "imprimante");
  return (
    <div className="w-full pb-20">
      <Heading heading="Special Offers" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-3 gap-10">
        {catData.map((item) => (
          <Product
            key={item._id}
            _id={item._id}
            img={item.img}
            productName={data.productName}
            price={item.price}
            color={item.color}
            badge={true}
            des={item.des}
          />
        ))}
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-3 gap-10">
        {splData.map((item) => (
          <Product
            key={item._id}
            _id={item._id}
            img={item.img}
            productName={data.productName}
            price={item.price}
            color={item.color}
            badge={true}
            des={item.des}
          />
        ))}
      </div>
    </div>
  );
};

export default SpecialOffers;
