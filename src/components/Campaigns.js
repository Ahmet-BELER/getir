import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect } from "react";
import Banners from "../api/banners.json";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";


function NextButton({  onClick }) {
  return (
    <button
      className="text-brand-color z-10 absolute top-1/2 -right-6 -translate-y-1/2"
      onClick={onClick}
    >
      <IoIosArrowForward size={22} />
    </button>
  );
}


function PrevButton({  onClick }) {
  return (
    <button
      className="text-brand-color z-10 absolute top-1/2 -left-6 -translate-y-1/2"
      onClick={onClick}
    >
      <IoIosArrowBack size={22} />
    </button>
  );
}



    export default function Campaigns() {

      const [banner, setBanner] = useState([])

      useEffect(() => {
        setBanner(Banners)
      }, [])

      const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        nextArrow: <NextButton />,
        prevArrow: <PrevButton />,
      };


      return (
        <div className="bg-white py-4">

          <div className="container mx-auto">
            <h3 className="container mx-auto text-11 font-semibold mb-3 px-6 py-4 md:px-0">Campaigns</h3>

            <Slider className="-mx-2" {...settings}>
              {banner.length &&
                banner.map((banner, index) => (
                  <div key={banner.id}>
                    <figure className="px-2">
                      <img
                        src={banner.image}
                        className="rounded-lg"
                      />
                    </figure>
                  </div>
                ))}
            </Slider>
          </div>
        </div>
      )
    }

