import React from "react";
import Form from "@/components/Form";
import Maps from "@/components/Maps";
import Wa from "@/components/Wa";
import Gallery from "@/components/Gallery";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <div>
      <section
        className="flex custom-overlay  w-[full] flex-col justify-center xl:h-screen h-auto  bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('img/hero/h-asia109.jpg')",
        }}
      >
        <div className="w-full  z-10 gap-8 flexflex-col justify-between lg:px-24">
          <div className="flex justify-between lg:flex-row flex-col">
            <div className=" flex text-white flex-col justify-center lg:gap-6 ">
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
                    <span className=" font-bold"> Ubicacion : </span>KM 109 de
                    la Panamericana Sur en el distrito de Asia.
                  </span>
                </div>
                <div className="flex flex-col lg:gap-3">
                  <h1 className=" text-[2rem] leading-none my-3 lg:my-0 lg:text-5xl  text-white ">
                    Condominio Residencial de Playa
                    <span className=" font-black"> <br className=" hidden lg:block" />Asia 109</span>{" "}
                  </h1>
                  <h2 className=" lg:text-[2rem] text-[1rem] font-light leading-none">
                    Malecón de<br className="hidden lg:block" />
                    <span className=" font-bold"> 200 metros </span>lineale
                  </h2>
                  <p className=" lg:text-xl">
                    Lotes de playa de alta rentabilidad, desde:
                  </p>
                  <span className=" lg:text-6xl text-[2.2rem] font-black">
                    USD $60,000
                  </span>
                  <p className=" text-sm">
                    Consulta por nuestros descuentos especiales en pagos al
                    contado.
                  </p>
                  
                </div>
                <div>
                  <p className=" lg:text-xl">
                    ¡Asegura tu lugar junto al mar ahora!
                  </p>
                  <button className=" bg-[#15AF3A] h-[55px] px-[5px] lg:px-[25px] lg:text-xl rounded-[8px] my-4">
                    <Link href="#form">
                      Separa tu lote por solo{" "}
                      <span className=" font-black">USD $500 dólares</span>{" "}
                    </Link>
                  </button>
                  <p className=" text-xl">
                    Con partida<span className=" font-extrabold"> N°21261906</span> 
                  </p>
                </div>
              </div>
            </div>
            <div
              id="form-p"
              className="flex flex-col basis-[50%] lg:px-4 justify-center"
            >
              <Form />
            </div>
          </div>
        </div>
      </section>
      <section className=" lg:h-[screen] h-auto flex xl:flex-row flex-col justify-center">
        <div className="flex flex-col justify-center gap-8">
          <div className="lg:w-[1140px]">
            <div className="flex lg:flex-row flex-col justify-between items-center w-auto  my-6 ">
              <h2 className=" text-3xl">
                Conoce mas del<span className=" font-bold"> Proyecto</span>
              </h2>
              <div>
                <Image
                  src="/img/LOGO-ASIA109-r.png"
                  className="bg-[#B9F6F7] text-[#15AF3A] flex  p-1 rounded-full"
                  width={60}
                  height={60}
                ></Image>
              </div>
            </div>
            <iframe
              src="https://www.youtube.com/embed/V2aUnFMf_Fo?autoplay=1&mute=1&loop=1&playlist=V2aUnFMf_Fo"
              width="560"
              height="315"
              className="responsive-iframe"
              title="Poseidón Primer número cel"
              frameborder="0"
              allow="fullscreen;"
            ></iframe>
            <div className="flex flex-row gap-4 justify-center my-6 text-white">
              <button className=" bg-[#15AF3A] h-[55px] p-[15px] rounded=[8px]">
                <Link href="#form">
                  Separa tu lote por solo{" "}
                  <span className=" font-black">USD $500 dólares</span>{" "}
                </Link>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className=" xl:h-[70vh] h-auto flex flex-col justify-center items-center">
        <div className="flex lg:flex-row flex-col justify-between items-center w-full lg:w-[1290px] my-12 px-2">
          <h2 className=" text-3xl">
            Caracteristicas del<span className=" font-bold"> Proyecto</span>
          </h2>
          <div className="flex flex-row justify-start items-start gap-10">
            <div>
              <span className=" uppercase">
                <span className=" font-extrabold text-2xl">42 lotes M2</span>
                <br className=" hidden lg:block" /> desde 161 M2 a mas
              </span>
            </div>
            <div>
              <span className=" uppercase">
                <span className=" font-extrabold text-2xl">77 Estac.</span>
                <br className=" hidden lg:block" /> DE 12.50 M2
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
              <div className="">
                <Image
                  src="/icons/atrib/portico.svg"
                  className="bg-[#B9F6F7] text-[#15AF3A] flex  p-4 rounded-full"
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
                  src="/icons/atrib/green.svg"
                  className="bg-[#B9F6F7] text-[#15AF3A] flex  p-4 rounded-full"
                  width={60}
                  height={80}
                ></Image>
              </div>
              <p>
                Áreas Verdes,
                <br className=" hidden lg:block" /> veredas y sardineles
              </p>
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
              <p>Frente al Mar</p>
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
                desde 120 M2
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
              <p>Camino Afirmados</p>
            </div>
          </div>
        </div>
      </section>
      <section className="xl:m-auto xl:h-[80vh] h-auto">
        <Maps />
      </section>
      <section className="w-full h-auto flex flex-col justify-center items-center mt-24 bg-[#058FC7] text-white">
        <div className=" xl:max-w-[1290px] h-auto lg:mx-0 w-full my-10 ">
          <h2 className="mx-4 font-semibold lg:mx-0 text-4xl my-2">
            A un paso de:
          </h2>
          <div className=" grid lg:grid-cols-2 gap-4 mx-4 lg:mx-0">
            <div className="">
              <Image
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
                centros comerciales y centros de entretenimiento
              </p>
            </div>
            <div>
              <Image
                data-aos="fade-up"
                src="/img/playas.jpg"
                width={629}
                height={420}
              ></Image>
              <h3 className=" text-xl font-extrabold my-2">HERMOSAS PLAYAS</h3>
              <p className=" my-1">
                A unos minutos de balnearios y lindas playas como: Playa Cocoa,
                Playa Gaviotas, Playa la Totoritas, Los Cocos, Las Palmas,
                Valdivia, entre otras.
              </p>
            </div>
            <div>
              <Image
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
      <section className=" w-auto h-[70vh] flex flex-col justify-center">
      <div className=" flex justify-center">
          <h2 className=" text-2xl font-extrabold my-6">
            Explora mas el proyecto
          </h2>
        </div>
        <div>
          <Gallery />
        </div>
        <div className="flex flex-row gap-4 justify-center my-6 text-white">
          <button className=" bg-[#15AF3A] h-[55px] p-[15px] rounded=[8px]">
            <Link href="#form">
              Separa tu lote por solo{" "}
              <span className=" font-black">USD $500 dólares</span>{" "}
            </Link>
          </button>
        </div>
      </section>
      <Wa />
    </div>
  );
};

export default page;
