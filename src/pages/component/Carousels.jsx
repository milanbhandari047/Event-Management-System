import React, { useState } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Carousels() {
  const [display, setDisplay] = useState(true);
  const [width, setWidth] = useState(600);

  const ImgUrls = [
    {
      img: "https://www.simplilearn.com/ice9/labels/Miscrosoft_Home.svg?w=240&dpr=1",
      alt: "Microsoft Logo",
    },
    {
      img: "https://www.simplilearn.com/ice9/labels/Purdue_Home.svg?w=200&dpr=1",
      alt: "Purdue Logo",
    },
    {
      img: "https://www.simplilearn.com/ice9/labels/Brown_Home.svg?w=200&dpr=1",
      alt: "Brown Logo",
    },
    {
      img: "https://www.simplilearn.com/ice9/labels/AWS_Home.svg?w=128&dpr=1",
      alt: "AWS Logo",
    },
    {
      img: "https://www.simplilearn.com/ice9/labels/IBM_Home.svg?w=160&dpr=1",
      alt: "IBM Logo",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 2,
  };
  return (
    <div>
      <h2 className="mt-4  m-auto flex  justify-center">
        {" "}
        Partnering with world's leading universities and companies{" "}
      </h2>
      <Slider {...settings}>
        <button className="button" onClick={() => setWidth(width + 100)}>
          {" "}
        </button>
        <button className="button" onClick={() => setWidth(width - 100)}>
          {" "}
        </button>
        <button className="button" onClick={() => setDisplay(!display)}>
          {" "}
        </button>

        <div
          style={{
            width: width + "px",
            display: display ? "block" : "none",
          }}
          className="flex flex-row"
        >
          <div className=" w-3/4 mt-4  gap-2 flex">
            {" "}
            {ImgUrls.map((imgUrl, index) => (
              <img key={index} src={imgUrl.img} alt={imgUrl.alt} />
            ))}
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default Carousels;
