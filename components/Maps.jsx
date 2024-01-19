import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaWaze } from "react-icons/fa";
import { SiGooglestreetview } from "react-icons/si";


const maps = () => {
  return (
    <div className="flex max-w-[1290px] h-auto m-auto  items-center flex-col">
      <div className="flex lg:flex-row flex-col justify-between items-center w-full lg:w-[1290px] my-6 px-2">
        <h2 className=" text-3xl">
          Ubicación del <span className=" font-bold">Proyecto</span>
        </h2>
        <div className="flex flex-row gap-4">
          <div>
            <button className="flex flex-row items-center justify-center gap-2 text-sm uppercase border-solid border-[1px] border-[#15AF3A] px-[15px] h-[50px] rounded-md hover:bg-[#15AF3A] hover:text-white">
            <SiGooglestreetview className=" text-xl" />
             <Link
                target="_blank"
                href="https://maps.app.goo.gl/ZWMAqAwspjsn7MiR9"
              >
                Ver con Maps
              </Link>
            </button>
          </div>
          <div>
            <button className=" flex flex-row items-center justify-center gap-2 text-sm uppercase border-solid border-[1px] border-[#00B0A6] px-[15px] h-[50px] rounded-md p-2 hover:bg-[#00B0A6] hover:text-white">
            <FaWaze className=" text-xl" />
              <Link
                target="_blank"
                href="https://ul.waze.com/ul?place=ChIJc_I5f5NgBZERjE_KyeiQ3Hg&ll=-12.80106690%2C-76.52570070&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location"
              >
                Ver con Waze
              </Link>{" "}
            </button>
          </div>
        </div>
      </div>

      <div className=" w-full h-[60vh]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d242.9630792673682!2d-76.48633086381061!3d-13.009589317459506!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91055725851834b1%3A0x55fbe6e447703cb5!2sCondominio%20Residencial%20Playa%20Hueso%20de%20Los%20Reyes!5e0!3m2!1ses!2spe!4v1705001003527!5m2!1ses!2spe"
          width="1290"
          height="500"
          className=" w-full h-full lg:rounded-2xl shadow-md"
          allowfullscreen
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="flex flex-col xl:flex-row gap-2 w-full  lg:max-w-[1202px] rounded-md m-[1rem] px-6 lg:px-0 bg-[#fff] shadow-xl">
        <div className=" bg-[#058FC7] text-white lg:rounded-s-lg p-2 xl:p-6 lg:w-[40%]">
          <span className="text-md ">Ubícanos en</span>
          <h3 className=" text-xl font-bold">
            KM 109 de la Panamericana Sur en el distrito de Asia
          </h3>
        </div>
        <div className="flex xl:flex-row flex-col gap-4 justify-center lg:items-center w-full lg:w-[60%] ">
          <div className="lg:w-[30%] flex flex-row items-center gap-2 ">
            <div>
              <Image
                src="/icons/adelanto.svg"
                className="bg-[#B9F6F7] p-3 rounded-full"
                width={50}
                height={50}
              ></Image>
            </div>
            <p className="text-[1rem] mx-1">
              Inscritos en <br className=" hidden lg:block" />{" "}
              <span className=" font-bold">Registros Públicos</span>
            </p>
          </div>
          <div className="lg:w-[30%] flex flex-row items-center gap-2">
            {" "}
            <div>
              <Image
                src="/icons/adelanto.svg"
                className="bg-[#B9F6F7] p-3 rounded-full"
                width={50}
                height={50}
              ></Image>
            </div>
            <p className="text-[1rem] mx-1">
              Precios desde <br className=" hidden lg:block" />{" "}
              <span className=" font-bold">USD $50,000</span>
            </p>
          </div>
          <div className="lg:w-[30%] flex flex-row items-center gap-2">
            {" "}
            <div>
              <Image
                src="/icons/adelanto.svg"
                className="bg-[#B9F6F7] p-3 rounded-full"
                width={50}
                height={50}
              ></Image>
            </div>
            <p className="text-[1rem] mx-1">
              Separa con
              <br className=" hidden lg:block" />
              <span className=" font-bold"> USD $500 </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default maps;
