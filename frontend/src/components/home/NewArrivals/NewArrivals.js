import React from "react";
import Slider from "react-slick";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  newArrOne,
  newArrTwo,
  newArrThree,
  newArrFour,
} from "../../../assets/images/index";
import SampleNextArrow from "./SampleNextArrow";
import SamplePrevArrow from "./SamplePrevArrow";

const NewArrivals = () => {
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
    <div className="w-full pb-16">
      <Heading heading="New Arrivals" />
      <Slider {...settings}>
        <div className="px-2">
          <Product
            _id="100001"
            img={newArrOne}
            productName="Modern Generative Ai.."
            price="44.00"
            color="Black"
            badge={true}
            des="Generative AI models and AI language models are becoming increasingly popular due to their unparalleled capabilities. This book will provide you with insights into the inner workings of the LLMs and guide you through creating your own language models. You'll start with an introduction to the field of generative AI, helping you understand how these models are trained to generate new data.

            Next, you'll explore use cases where ChatGPT can boost productivity and enhance creativity. You'll learn how to get the best from your ChatGPT interactions by improving your prompt design and leveraging zero, one, and few-shots learning capabilities. The use cases are divided into clusters of marketers, researchers, and developers, which will help you apply what you learn in this book to your own challenges faster."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100002"
            img={newArrTwo}
            productName="Blazor in Action"
            price="250.00"
            color="Black"
            badge={true}
            des="Blazor in Action is a practical guide to building stunning UIs and client-side applications using C# and .NET. Written to the most recent stable build of Blazor, this example-driven book shows how to build a complete end-to-end hiking route web application that’s full of easily reusable code."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100003"
            img={newArrThree}
            productName="Apps and Services With.."
            price="80.00"
            color="Mixed"
            badge={true}
            des="Apps and services with .net 8 Elevate your practical C# and .NET skills to the next level with this new edition of Apps and Services with .NET 8.



            With chapters that put a variety of technologies into practice, including Web API, gRPC, GraphQL, and SignalR, this book will give you a broader scope of knowledge than other books that often focus on only a handful of .NET technologies. You'll dive into the new unified model for Blazor Full Stack and leverage .NET MAUI to develop mobile and desktop apps."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100004"
            img={newArrFour}
            productName="Prompt Engineering and.."
            price="60.00"
            color="Mixed"
            badge={false}
            des="Prompt engineering and chatgpt is the art of writing prompts that enable large language models (LLMs) like ChatGPT to generate creative and informative text. In this book, you will learn the essential skills you need to become a master prompt engineer.

            You will start by learning about the different types of prompts that can be used with ChatGPT. You will then learn how to write effective prompts, using techniques such as prompt priming, iteration, and the fourth grader technique You will also learn how to use ChatGPT to act as an expert on a particular topic, extract key points from text, and get creative ideas. "
          />
        </div>
        <div className="px-2">
        <Product
            _id="100002"
            img={newArrTwo}
            productName="Blazor in Action"
            price="250.00"
            color="Black"
            badge={true}
            des="Blazor in Action is a practical guide to building stunning UIs and client-side applications using C# and .NET. Written to the most recent stable build of Blazor, this example-driven book shows how to build a complete end-to-end hiking route web application that’s full of easily reusable code."
          />
        </div>
      </Slider>
    </div>
  );
};

export default NewArrivals;
