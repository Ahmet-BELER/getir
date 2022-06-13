import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaFacebook } from "react-icons/fa";
import React, { useState } from "react";
import ReactFlagsSelect from "react-flags-select";



export default function HeroSection() {

    const [selected, setSelected] = useState("TR");
    const phones = {
        US: "+1",
        DE: "+50",
        TR: "+90",
        IT: "+7",
        IN: "+15",
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: "linear",
        
    };

    return (


        <div className="relative   before:bg-gradient-to-r h-auto md:h-[500px] before:from-primary-brand-color before:to-transparent before:absolute before:inset-0 before:w-full before:h-full before:z-10">
            <Slider {...settings}>
                <div>
                    <img
                        className="w-full  h-[500px] object-cover"
                        src="https://getir.com/_next/static/images/getir-mainpage-2-7c23764275cdaf14d7b6cf15ebbdd0c1.jpg"
                        alt="Getir"
                    />

                </div>
                <div>
                    <img
                        className="w-full  h-[500px] object-cover"
                        src="https://getir.com/_next/static/images/getir-mainpage-1-757eca6a46304def60cabce74d3f20a2.jpg"
                        alt="getir2"
                    />
                </div>

                <div>

                    <img src="https://cdn.getir.com/misc/611e55d33ea65bef40f9ba05_banner_tr_1629378026496.jpeg"
                        className="w-full  h-[500px] object-cover" />
                </div>


            </Slider>
            <div className="container flex  justify-between items-center absolute top-0 left-1/2 -translate-x-1/2 h-full z-20">
                <div >
                    <img
                        src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg"
                        alt="Getir"
                    />
                    <h3 className="mt-8 text-4xl font-semibold text-white">
                        Dakikalar içinde <br /> Kapınızda
                    </h3>
                </div>

                <div className="w-[400px] rounded-lg bg-gray-50 p-6 ">
                    <h4 className="text-primary-brand-color text-center font-semibold mb-4 ">Giriş yap ve kayıt ol </h4>
                    <div className="grid gap-y-4">
                        <div className="flex gap-x-2">
                            <ReactFlagsSelect
                                countries={Object.keys(phones)}
                                customLabels={phones}
                                placeholder="Select Language"
                                onSelect={(code) => setSelected(code)}
                                selected={selected}
                                className="flag-select "

                            />

                            <label className="flex-1 relative block">
                                <input className="flex-1 h-14 px-4 border-2 border-gray-200 rounded-lg w-full hover:border-primary-brand-color  transition-colors peer text-sm focus:pt-2" />
                                <span className="absolute cursor-text top-0 left-0 h-full px-4 flex items-center transition-all text-sm text-gray-700   peer-focus:text-primary-brand-color peer-focus:text-xs  peer-focus:h-6 peer-valid:text-primary-brand-color peer-valid:text-xs  ">Telefon Numarası</span>

                            </label>
                        </div>
                        <button className="bg-brand-yellow h-12 flex transition-colors hover:bg-primary-brand-color hover:text-brand-yellow items-center justify-center rounded-md w-full text-sm font-semibold text-primary-brand-color">
                            Telefon Numarası ile Devam Et
                        </button>

                        <hr className="h-[1px] bg-gray-300 "></hr>
                        <button className="bg-blue-100 h-12 flex transition-colors hover:bg-blue-600 hover:text-blue-100 items-center justify-center rounded-md w-full text-sm font-semibold text-blue-600">
                            <FaFacebook size={18} className="mr-4" /> Facebook ile Devam Et
                        </button>
                    </div>
                </div>


            </div>
        </div>
    )
}


