import React from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  bestSellerOne,
  bestSellerTwo,
  bestSellerThree,
  bestSellerFour,
} from "../../../assets/images/index";

const BestSellers = () => {
  return (
    <div className="w-full pb-20">
      <Heading heading="Our Bestsellers" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
        <Product
          _id="1011"
          img={bestSellerOne}
          productName="The Henna Artist"
          price="35.00"
          color="Blank and White"
          badge={true}
          des="For fans of Balli Kaur Jaswal's Erotic Stories for Punjabi Widows and Thrity Umrigar's The Space Between Us, Alka Josh's The Henna Artist by is lushly-rendered, emotional book club fiction set in post-Raj 1950s Jaipur about a young woman struggling to shape her own destiny in a world pivoting between the traditional and the modern.After fleeing an arranged marriage as a fifteen year old to an abusive older man, Lakshmi Shastri steals away alone from her rural village to Jaipur. Here, against odds, she carves out a living for herself as a henna artist, and friend and confidante to wealthy, upper caste women."
        />
        <Product
          _id="1012"
          img={bestSellerTwo}
          productName="The Housemaid"
          price="180.00"
          color="Gray"
          badge={false}
          des="The explosive sequel to the internationally bestselling thriller The Housemaid by Freida McFadden, The Housemaid's Secret is an unbelievably twisty read about the secrets kept at the dark heart of a family."
        />
        <Product
          _id="1013"
          img={bestSellerThree}
          productName="The Seven Husbands of.."
          price="25.00"
          color="Mixed"
          badge={true}
          des="The Seven Husbands of Evelyn Hugo is a historical fiction novel by American author Taylor Jenkins Reid and published by Atria Books in 2017. The novel tells the story of the fictional Old Hollywood star Evelyn Hugo, who, at age 79, gives a final interview to an unknown journalist, Monique Grant. "
        />
        <Product
          _id="1014"
          img={bestSellerFour}
          productName="The East Indian"
          price="220.00"
          color="Black"
          badge={false}
          des="The East Indian: A Novel Set in the 1600s, this book tells the story of a boy originally from the Coromandel Coast of India, nicknamed Tony by an Englishman. Tony becomes the first eastern Indian to arrive in North America. He journeys by ship to London and is then kidnapped and sent to Jamestown as an indentured servant."
        />
      </div>
    </div>
  );
};

export default BestSellers;
