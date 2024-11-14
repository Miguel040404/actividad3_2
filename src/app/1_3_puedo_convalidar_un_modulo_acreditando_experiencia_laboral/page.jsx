import Titulo from "@/components/titulo";
import Nav from "@/components/nav";

export const metadata = {
  title: "1.3.- ¿Puedo convalidar un módulo acreditando experiencia laboral?"
};

export default function Home() {
  return (
    <>
      <Titulo>  {metadata.title} </Titulo>
      <Nav pos={13} />

      <div className="flex flex-col gap-4">


        <div>
          <img
            className="float-right w-[300px] h-[332px] border-2 border-black ml-4 mb-4"
            title="Trabajo"
            alt="Trabajo"
            src="https://www.juntadeandalucia.es/educacion/gestionafp/documentacion/Informacion_tutorial/industrial-1636390_960_720.jpg"
          />

          <p>
            <b>Salvo el módulo de Formación en Centros de Trabajo</b><i>(las &quot;prácticas&quot;)</i>,
            <b> la respuesta es no</b>. En general, <b>no es posible convalidar un módulo acreditando experiencia laboral a través de un informe de vida laboral</b>.
          </p>

          <p className="pt-4">
            Si alguna persona cree que con su experiencia profesional ha adquirido las competencias necesarias de un módulo concreto, debe acreditar la posesión de esas unidades de competencia bien mediante un <b>certificado de profesionalidad </b>
            o bien porque ha participado en un <a className='text-blue-600 underline' href="https://www.juntadeandalucia.es/educacion/gestionafp/documentacion/Informacion_tutorial/13_puedo_convalidar_un_mdulo_acreditando_experiencia_laboral.html#:~:text=procedimiento%20de%20acreditaci%C3%B3n%20de%20competencias%20profesionales"> procedimiento de acreditación de competencias profesionales </a>
            y así se lo han reconocido, <u>no a través de un certificado de vida laboral</u>. <b>Tampoco serán válidos los resguardos de haber solicitado el certificado de profesionalidad, los diplomas o certificados de asistencia expedidos por el centro o entidad de formación u otros documentos justificativos distintos de los indicados.</b>
            Estas convalidaciones se regulan en el anexo V.A del Real Decreto que crea el título que se está estudiando (en este anexo se indican las unidades de competencia que se adquieren al superar cada módulo profesional).
          </p>

          <p className="pt-4">
            Por tanto, <b>las unidades de competencia debidamente acreditadas pueden ser aportadas para solicitar la convalidación de módulos profesionales según lo regulado en el anexo V.A del Real Decreto</b>
            que regula cada título siempre que se aporte el <b>certificado de profesionalidad</b> o la <b> certificación oficial de la acreditación de la Unidad de Competencia. </b>
          </p>

        </div>
      </div>
    </>
  );
}

