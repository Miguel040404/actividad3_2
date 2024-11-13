import Titulo from "@/components/titulo";
import Nav from "@/components/nav";


export const metadata = {
  title: "1.3.- ¿Puedo convalidar un módulo acreditando experiencia laboral?"
};

export default function Home() {
  return (
    <>
      <Titulo>  { metadata.title } </Titulo>
      <Nav pos={13} />

      <div className="flex flex-col gap-4">

      <p><b>Salvo el módulo de Formación en Centros de Trabajo</b><i>(las "prácticas")</i>,<b>la respuesta es no</b>. En general, <b>no es posible convalidar un módulo acreditando experiencia laboral a través de un informe de vida laboral</b>.</p>
      
      <div> 
      <img className="w-[300px] h-[332px] border-2 border-black self-center mt-8" title="Trabajo" alt="Trabajo" src="https://www.juntadeandalucia.es/educacion/gestionafp/documentacion/Informacion_tutorial/industrial-1636390_960_720.jpg" width="960" height="720 f" />
      </div>
      <p><b>Salvo el módulo de Formación en Centros de Trabajo</b><i>(las "prácticas")</i>,<b>la respuesta es no</b>. En general, <b>no es posible convalidar un módulo acreditando experiencia laboral a través de un informe de vida laboral</b>.</p>
      
      </div>
    </>
  );
}
