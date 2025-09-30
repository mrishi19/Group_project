import React from "react";
import Slider from "react-slick";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  saleOne,
  saleTwo,
  saleThree,
  saleFour,
} from "../../../assets/images/index";
import SampleNextArrow from "../NewArrivals/SampleNextArrow";
import SamplePrevArrow from "../NewArrivals/SamplePrevArrow";


const Sale = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <div className="w-full mt-4 pb-16">
      <Heading  heading="Offers" />
      <Slider {...settings}>
        <div className="px-2">
          <Product
            _id="100001"
            img={saleOne}
            productName="Men's Search For Meaning"
            price="44.00"
            color="Yes"
            badge={false}
            salebadge={true}
            des="The book focuses on love, hope, responsibility, inner freedom, and the beauty to be found in both nature and art as means that help one endure and overcome harrowing experiences. As noted above, Frankl had begun developing meaning therapy (Logotherapy) before he was arrested and imprisoned by the Nazis.."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100002"
            img={saleTwo}
            productName="Zero To One"
            price="99.00"
            color="Yes"
            badge={false}
            salebadge={true}
            des="Going from zero to one means going from nothing to something. This is the greatest leap possible — greater than going from one to 10 or even from one to 100. To go from zero to one is to conjure something into existence from the dark void of oblivion. This is the essence of true innovation."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100003"
            img={saleThree}
            productName="Harry Potter"
            price="199.00"
            color="Mixed"
            badge={false}
            salebadge={true}
            des="On a fundamental level, the Harry Potter novels contain the essential elements of a captivating adventure story. Danger, compassion, bravery, suspense and high emotion combine to enthral the reader and sustain their curiosity as the story unfolds through the seven-part series.."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100004"
            img={saleFour}
            productName="The Bestseller Thinking"
            price="59.00"
            color="Black"
            badge={true}
            des="Thinking, also known as 'cognition', refers to the ability to process information, hold attention, store and retrieve memories and select appropriate responses and actions. The ability to understand other people, and express oneself to others can also be categorised under thinking.."
          />
        </div>
        <div className="px-2">
        <Product
            _id="100002"
            img={saleTwo}
            productName="Zero To One"
            price="99.00"
            color="Yes"
            badge={false}
            salebadge={true}
            des="Going from zero to one means going from nothing to something. This is the greatest leap possible — greater than going from one to 10 or even from one to 100. To go from zero to one is to conjure something into existence from the dark void of oblivion. This is the essence of true innovation."
          />
        </div>
      </Slider>
    </div>
  );
};

export default Sale;
