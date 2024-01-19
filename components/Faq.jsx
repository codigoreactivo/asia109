'use client'
import { useState } from 'react';

const Accordion = ({ items }) => {
    const [openIndex, setOpenIndex] = useState(null);
  
    const toggleAccordion = (index) => {
      setOpenIndex(openIndex === index ? null : index);
    };
  
    const accordionItems = [  // Cambié el nombre de la variable
    { title: '¿Cuánto es el mantenimiento del Condominio mensual?', content: 'El mantenimiento es de S/150 MENSUALES, pagados a partir de Enero del 2025.' },
    { title: '¿Cuántos pisos se puede construir, es igual para todas las filas?', content: 'Los parámetros urbanísticos son de CINCO PISOS más TERRAZA.' },
    { title: '¿Qué tipo de zonificación tiene el Condominio?', content: 'Zonificación residencial de densidad media.' },
    { title: '¿Existen restricciones para la construcción?', content: 'Es importante mencionar que se deja un retiro de 3 M.L. por el frente, es decir, si su lote mide por el frente 7 metros (7*3 = 21 m2 que dejará de retiro como área verde), de sus 140 m2 de área, quedando un área de construcción de 119 m2. Por otro lado, la fachada es de color blanco, el diseño de su casa internamente como externamente es a elección de cada propietario.' },
    // Agrega más preguntas y respuestas según sea necesario
    ];
  return (
    <div className="space-y-2">
      {accordionItems.map((item, index) => (
        <div key={index} className="border p-2 rounded-xl shadow-lg transition-all duration-300 ease-in-out">
          <div
            className="flex justify-between items-center cursor-pointer h-[60px] "
            onClick={() => toggleAccordion(index)}
          >
            <p className="font-semibold ">{item.title}</p>
            <span>{openIndex === index ? '-' : '+'}</span>
          </div>
          {openIndex === index && (
            <div className="mt-2 ">
              <p>{item.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
