import React from "react";
import Form from "@/components/Form";
import Maps from "@/components/Maps";
import Wa from "@/components/Wa";
import Gallery from "@/components/Gallery";
import Image from "next/image";
import Link from "next/link";
import Faq from "@/components/Faq";

const page = () => {
  return (
    <div>
      <section
        className="flex custom-overlay  w-[full] flex-col justify-center xl:h-screen h-auto  bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('img/dunasasia/1.jpg')",
        }}
      >
        <div className="w-full  z-10 gap-8 flexflex-col justify-between lg:px-24">
          <div className="flex justify-between lg:flex-row flex-col flex-wrap">
            <div className=" lg:w-full  h-20 lg:mb-[8vh] mb-5 lg:mt-[-6vh]">
              <div className="lg:mb-2 lg:mt-4 justify-center flex">
                <Image src="/img/logo-nobg.png" width={300} height={80}></Image>
              </div>
            </div>
            <div className=" flex text-white flex-col justify-center lg:gap-6 my-6 w-full lg:w-[50%]">
              <div className="justify-start items-start flex flex-col mx-4 lg:mx-0 lg:gap-1 gap-3">
                <div className="flex justify-start items-center lg:mb-[1rem] gap-2 mt-2 lg:mt-0">
                  <div>
                    <Image
                      className="w-[40px] p-2 backdrop-sepia-0 bg-[#058FC7]/50 rounded-full stroke-white"
                      src="/icons/location.svg"
                      width={250}
                      height={232}
                    ></Image>
                  </div>
                  <span>
                    <span className=" font-bold"> Ubicación : </span>KM 109 de
                    la Panamericana Sur en el distrito de Asia
                  </span>
                </div>
                <div className="flex flex-col lg:gap-3">
                  <h1 className=" text-[2rem] leading-none pb-6 lg:my-0 lg:text-7xl  text-white ">
                    Condominio Residencial <br className=" hidden lg:block" />{" "}
                    <span className=" font-black"> Dunas de Asia</span>
                  </h1>
                  <h2 className=" lg:text-[2rem] text-[1rem] font-light leading-none">
                    5 kilómetros de Playa Sarapampa,
                    <span className=" font-bold"> totalmente privado</span>
                  </h2>
                  <p className=" lg:text-xl">
                    Lotes de playa de alta rentabilidad, desde:
                  </p>
                  <span className=" lg:text-[3rem] text-[2.2rem] font-black">
                    USD $50,000
                  </span>
                </div>
              </div>
            </div>
            <div
              id="form-p"
              className="flex flex-col w-full lg:w-[50%] lg:px-4 justify-center"
            >
              <Form />
            </div>
          </div>
        </div>
      </section>
      <section className=" lg:h-[screen] h-auto flex xl:flex-row flex-col justify-center px-4 lg:px-0">
        <div className="flex flex-col justify-center gap-8">
          <div className="lg:w-[1140px]">
            <div className="flex lg:flex-row flex-col justify-between items-center w-auto  my-6 ">
              <h2 className=" text-4xl">
                Conoce más del<span className=" font-bold"> Proyecto</span>
              </h2>
              <div>
                <Image
                  src="/img/logodunas.png"
                  className=" text-[#15AF3A] flex  p-1 "
                  width={100}
                  height={60}
                ></Image>
              </div>
            </div>
            <p className=" my-4 text-lg">
              Dunas de Asia es la oportunidad para que tú y tu familia disfruten
              de vivir en un proyecto cercano al mar. La oportunidad de
              construir hasta 5 pisos te abrirá un mundo de posibilidades, desde
              lujosas viviendas unifamiliares hasta exclusivos departamentos de
              inversión con vista al mar.
            </p>
            <iframe
              src="https://www.youtube.com/embed/U5DEAVNG0uM?autoplay=1&mute=1&loop=1&playlist=U5DEAVNG0uM"
              width="560"
              height="315"
              className="responsive-iframe rounded-xl"
              title="Poseidón Primer número cel"
              frameborder="0"
              allow="fullscreen;"
            ></iframe>
            <div className="flex flex-row gap-4 justify-center my-6 text-white">
              <button className=" bg-[#15AF3A] h-[55px] p-[15px] rounded-[8px]">
                <Link href="#form">
                  Separa tu lote por solo{" "}
                  <span className=" font-black">USD $500 dólares</span>{" "}
                </Link>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className=" w-full h-auto bg-[#058FC7] text-white mt-12 ">
        <div className=" lg:max-w-[1140px] m-auto flex flex-col py-8 items-center">
          <div className="flex flex-col items-center">
            <h2 className=" text-4xl m-2 font-bold">¿Quiénes somos?</h2>
            <p className=" text-center lg:text-[1.1rem] mx-4">
              Somos una empresa en rubro de desarrollo y comercialización de
              proyectos inmobiliarios de gran trayectoria con más de 4 años de
              experiencia en Venta de lotes exclusivos con vista al mar en Lima
              Sur.
            </p>
          </div>
          <div className=" mt-12">
            <Image src="/img/logo-nobg.png" width={300} height={80}></Image>
          </div>
        </div>
      </section>
      <section className=" xl:h-[70vh] h-auto flex flex-col justify-center items-center px-4 lg:px-0">
        <div className="flex lg:flex-row flex-col justify-between items-center w-full lg:w-[1290px] my-12 px-2">
          <h2 className=" text-3xl py-4 lg:py-0">
            Características del<span className=" font-bold "> Proyecto</span>
          </h2>
          <div className="flex flex-row justify-start items-start gap-10">
            <div>
              <span className=" uppercase">
                <span className=" font-extrabold text-2xl">31 lotes M2</span>
                <br className=" hidden lg:block" /> desde 150 M2 a más
              </span>
            </div>
            <div>
              <span className=" uppercase">
                <span className=" font-extrabold text-2xl">63 Estac.</span>
                <br className=" hidden lg:block" /> DE 16.50 M2
              </span>
            </div>
          </div>
        </div>
        <div className=" flex flex-col  justify-center items-center lg:max-w-[1290px] gap-8 ">
          <div className="  text-left leading-[1.2] flex flex-col lg:flex-row justify-between w-full gap-4 mx-4 lg:mx-0 ">
            <div className=" flex gap-2 items-center text-[14px] ">
              <div className="">
                <Image
                  src="/icons/atrib/redesagua.svg"
                  className="bg-[#B9F6F7] text-[#15AF3A] flex  p-4 rounded-full"
                  width={60}
                  height={60}
                ></Image>
              </div>
              <p className="">
                Redes de agua,
                <br className=" hidden lg:block" /> desagüe y electrificación
              </p>
            </div>
            <div className=" flex gap-2 items-center text-[14px]">
              <div className="">
                <Image
                  src="/icons/atrib/keys.svg"
                  className="bg-[#B9F6F7] text-[#15AF3A] flex  p-4 rounded-full"
                  width={60}
                  height={80}
                ></Image>
              </div>
              <p>Entrega Inmediata</p>
            </div>
            <div className="flex gap-2 items-center text-[14px]">
              <div className="bg-[#B9F6F7] rounded-full">
                <Image
                  src="/icons/atrib/portico.svg"
                  className=" text-[#15AF3A] flex  p-4 "
                  width={60}
                  height={80}
                ></Image>
              </div>
              <p>Pórtico de Ingreso</p>
            </div>
            <div className="flex gap-2 items-center text-[14px]">
              <div className="">
                <Image
                  src="/icons/atrib/seg.svg"
                  className="bg-[#B9F6F7] text-[#15AF3A] flex  p-4 rounded-full"
                  width={60}
                  height={80}
                ></Image>
              </div>
              <p>
                Caseta de Seguridad <br className=" hidden lg:block" />{" "}
                (vigilada las 24 horas)
              </p>
            </div>
            <div className="flex gap-2 items-center text-[15px]">
              <div className="">
                <Image
                  src="/icons/atrib/light.svg"
                  className="bg-[#B9F6F7] text-[#15AF3A] flex  p-4 rounded-full"
                  width={60}
                  height={80}
                ></Image>
              </div>
              <p>
                Postes con <br className=" hidden lg:block" />
                luminarias solares
              </p>
            </div>
            <div className="flex gap-2 items-center text-[14px]">
              <div className="">
                <Image
                  src="/icons/atrib/services.svg"
                  className="bg-[#B9F6F7] text-[#15AF3A] flex  p-3 rounded-full"
                  width={60}
                  height={80}
                ></Image>
              </div>
              <p>Servicios básicos</p>
            </div>
          </div>
          <div className="  text-left leading-[1.2] flex flex-col lg:flex-row justify-between w-full gap-4 mx-4 lg:mx-0 ">
            <div className=" flex gap-2 items-center text-[14px] ">
              <div className="">
                <Image
                  src="/icons/atrib/park.svg"
                  className="bg-[#B9F6F7] text-[#15AF3A] flex  p-4 rounded-full"
                  width={60}
                  height={60}
                ></Image>
              </div>
              <p className="">
                Área de estacionamiento
                <br className=" hidden lg:block" />
              </p>
            </div>
            <div className=" flex gap-2 items-center text-[14px]">
              <div className="">
                <Image
                  src="/icons/atrib/cerco.svg"
                  className="bg-[#B9F6F7] text-[#15AF3A] flex  p-4 rounded-full"
                  width={60}
                  height={80}
                ></Image>
              </div>
              <p>Cerco Perimétrico</p>
            </div>

            <div className="flex gap-2 items-center text-[14px]">
              <div className="">
                <Image
                  src="/icons/atrib/beach.svg"
                  className="bg-[#B9F6F7] text-[#15AF3A] flex  p-4 rounded-full"
                  width={60}
                  height={80}
                ></Image>
              </div>
              <p>Vista al Mar</p>
            </div>
            <div className="flex gap-2 items-center text-[15px]">
              <div className="">
                <Image
                  src="/icons/atrib/area.svg"
                  className="bg-[#B9F6F7] text-[#15AF3A] flex  p-4 rounded-full"
                  width={60}
                  height={80}
                ></Image>
              </div>
              <p>
                Lotes con área <br className=" hidden lg:block" />
                desde 150 M2
              </p>
            </div>
            <div className="flex gap-2 items-center text-[14px]">
              <div className="">
                <Image
                  src="/icons/atrib/alfalto.svg"
                  className="bg-[#B9F6F7] text-[#15AF3A] flex  p-3 rounded-full"
                  width={60}
                  height={80}
                ></Image>
              </div>
              <p>Camino Asfaltado</p>
            </div>
          </div>
        </div>
      </section>
      <section className="xl:m-auto h-auto">
        <Maps />
      </section>
      <section className="w-full h-auto flex flex-col justify-center items-center mt-24 bg-[#058FC7] text-white">
        <div className=" xl:max-w-[1290px] h-auto lg:mx-0 w-full my-10 ">
          <h2 className="mx-4 font-semibold lg:mx-0 text-4xl my-2">
            A un paso de:
          </h2>
          <div className=" grid lg:grid-cols-2 gap-4 mx-4 lg:mx-0 ">
            <div className="">
              <Image
                className="rounded-xl"
                data-aos="fade-up"
                src="/img/basia.jpg"
                width={629}
                height={420}
              ></Image>
              <h3 className=" text-xl font-extrabold my-2">
                BOULEVARD DE ASIA
              </h3>
              <p className=" my-1">
                Disfruta de los diferentes puntos de diversión que ofrece el
                Boulevard, ubicado a 20 min de nuestro condominio, rodeado de
                centros comerciales y centros de entretenimiento.
              </p>
            </div>
            <div>
              <Image
                className="rounded-xl"
                data-aos="fade-up"
                src="/img/playas.jpg"
                width={629}
                height={420}
              ></Image>
              <h3 className=" text-xl font-extrabold my-2">HERMOSAS PLAYAS</h3>
              <p className=" my-1">
                A unos minutos de balnearios y lindas playas como: Playa Cocoa,
                Playa Gaviotas, Playa las Totoritas, Los Cocos, Las Palmas,
                Valdivia, entre otras.
              </p>
            </div>
            <div>
              <Image
                className="rounded-xl"
                data-aos="fade-up"
                src="/img/dunas.jpg"
                width={629}
                height={420}
              ></Image>
              <h3 className=" text-xl font-extrabold my-2">DUNAS DE ASIA</h3>
              <p className=" my-1">
                Disfruta de un lugar idóneo para los deportes de aventura en las
                dunas de Asia, como Sandboard y Off Road 4×4.
              </p>
            </div>
            <div>
              <Image
                className="rounded-xl"
                data-aos="fade-up"
                src="/img/lomas.jpg"
                width={629}
                height={420}
              ></Image>
              <h3 className=" text-xl font-extrabold my-2">LOMAS DE ASIA</h3>
              <p className=" my-1">
                Disfruta de amplias lomas costeras cubiertas por vegetación
                estacional durante los meses de invierno y primavera.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className=" w-auto h-[85vh] flex flex-col justify-center my-4">
        <div className=" flex justify-center">
          <h2 className=" text-4xl font-extrabold my-6">
            Explora más el proyecto
          </h2>
        </div>
        <div>
          <Gallery />
        </div>
        <div className="flex flex-row gap-4 justify-center my-6 text-white">
          <button className=" bg-[#15AF3A] h-[55px] p-[15px] rounded-[8px]">
            <Link href="#form">
              Separa tu lote por solo
              <span className=" font-black "> USD $500 dólares</span>
            </Link>
          </button>
        </div>
      </section>
      <section className=" my-10">
        <div className=" w-full lg:w-6/12 m-auto px-6 lg:px-0  ">
          <h2 className=" text-center text-4xl my-6 font-bold">
            Preguntas Frecuentes
          </h2>
          <Faq />
          <div className="flex flex-row gap-4 justify-center my-20  text-white">
            <button className=" bg-[#15AF3A] h-[55px] p-[15px] rounded-[8px]">
              <Link href="#form">
                Separa tu lote por solo
                <span className=" font-black "> USD $500 dólares</span>
              </Link>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
