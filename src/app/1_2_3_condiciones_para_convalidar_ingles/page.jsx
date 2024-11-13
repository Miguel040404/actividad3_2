import Titulo from "@/components/titulo";
import Nav from "@/components/nav";


export const metadata = {
  title: "1.2.3.- Condiciones para convalidar Inglés"
};

export default function Home() {
  return (
    <>
      <Titulo>  {metadata.title} </Titulo>
      <Nav pos={8} />

      <div className="flex flex-col gap-4">
        <p>La documentación a aportar varía en función del módulo Inglés que se desee convalidar. Siempre deben ser estudios cursados y superados de lengua inglesa.</p>

        <table className="max-w-[100%] lg:w-[80%] self-center border-separate mt-5 ml-[20px]">
          <tbody>
            <tr>
              <th className="border-2 border-blue-200 p-4 text-center bg-blue-200">Módulo a convalidar</th>
              <td className="border-2 border-blue-200 p-4 text-center bg-blue-200"><b>Formación a aportar</b></td>
            </tr>
            <tr>
              <th className="border-2 border-blue-200 p-4 text-center bg-blue-200">0156 Inglés</th>
              <td className="border-2 border-blue-200 p-4 flex flex-col">Lengua Extranjera LOGSE (duración de 65 horas, según el Real Decreto que establece el título de formación profesional y sus enseñanzas mínimas)<br /> Cuando la lengua extranjera cursada y superada sea inglés.</td>
              <td className="border-2 border-blue-200 p-4 flex flex-col">Lengua Extranjera LOGSE o de la C.A. <br /> Cuando la lengua extranjera cursada y superada sea inglés</td>
              <td className="border-2 border-blue-200 p-4 flex flex-col">Módulos Profesionales de Lengua <br /> Extranjera LOGSE de ciclos formativos de Grado Superior, en cualquiera de sus denominaciones, siempre que sea la misma que la que se desea convalidar.</td>
              <td className="border-2 border-blue-200 p-4 flex flex-col">Certificado del Ciclo Elemental, de Inglés, de la Escuela Oficial de Idiomas. <br /> (RD 967/1988, de 2 de septiembre).</td>
              <td className="border-2 border-blue-200 p-4 flex flex-col">Certificado de Nivel Intermedio (B1), de Inglés, de la Escuela Oficial de Idiomas. <br /> (RD 1629/2006, de 29 de diciembre).</td>
              <td className="border-2 border-blue-200 p-4 flex flex-col">Certificado de Aptitud de Inglés de la Escuela Oficial de Idiomas. <br /> (RD 967/1988, de 2 de septiembre).</td>
              <td className="border-2 border-blue-200 p-4 flex flex-col">Certificado de Nivel Avanzado (B2), o superior, de Inglés de la Escuela Oficial  <br /> de Idiomas. <br /> (RD 1629/2006, de 29 de diciembre). </td>
              <td className="border-2 border-blue-200 p-4 flex flex-col">Título de Grado, o equivalente, en Filología Inglesa.</td>
              <td className="border-2 border-blue-200 p-4 flex flex-col">Título de Grado, o equivalente, en Traducción e Interpretación (Inglés).</td>
              <td className="border-2 border-blue-200 p-4 flex flex-col">0179 Inglés.</td>
              <td className="border-2 border-blue-200 p-4 flex flex-col">Organización, administración y gestión de una unidad/gabinete de prótesis dentales. <br></br> Ciclo Prótesis Dentales. (Sanidad)</td>
              <td className="border-2 border-blue-200 p-4 flex flex-col">Administración y gestión de un gabinete audioprotésico. <br></br> Ciclo Audioprótesis. (Sanidad)</td>
              <td className="border-2 border-blue-200 p-4 flex flex-col">Organización y gestión de una empresa agraria. <br></br> Ciclo Gestión y Organización de los <br></br> Recursos Naturales y Paisajísticos. (Agraria) Ciclo Gestión y Organización de <br></br> Empresas Agropecuarias. (Agraria)</td>
              <td className="border-2 border-blue-200 p-4 flex flex-col">Ciclo completo de Administración y finanzas. <br></br> (RD 1659/1994, de 22 de julio). (Administración y Gestión)</td>
              <td className="border-2 border-blue-200 p-4 flex flex-col">Técnico en Gestión Administrativa LOE.  Ciclo completo</td>
              <td className="border-2 border-blue-200 p-4 flex flex-col">Técnico en Superior en Administración y Finanzas LOE. Ciclo completo</td>

            </tr>
            <tr>
              <th className="border-2 border-blue-200 p-4 text-center bg-blue-200">0179 Inglés</th>
              <td className="border-2 border-blue-200 p-4 flex flex-col">Lengua Extranjera LOGSE (Inglés). </td>
              <td className="border-2 border-blue-200 p-4 flex flex-col">Lengua Extranjera (duración de 90 horas, según reales decretos por los que se <br /> establecen los títulos de formación profesional y sus enseñanzas mínimas) <br /> Cuando la lengua extranjera cursada y superada sea inglés</td>
              <td className="border-2 border-blue-200 p-4 flex flex-col">Lengua Extranjera en Comercio Internacional. <br /> Cuando la lengua extranjera cursada y superada sea inglés.</td>
              <td className="border-2 border-blue-200 p-4 flex flex-col">Certificado de Aptitud de Inglés de la Escuela Oficial de Idiomas. <br /> (RD 967/1988, de 2 de septiembre).</td>
              <td className="border-2 border-blue-200 p-4 flex before:flex-col">Certificado de Nivel Avanzado (B2), o superior, de Inglés de la Escuela Oficial <br /> de Idiomas. <br /> (RD 1629/2006, de 29 de diciembre).</td>
              <td className="border-2 border-blue-200 p-4 flex flex-col">Título de Grado, o equivalente, en Filología Inglesa</td>
              <td className="border-2 border-blue-200 p-4 flex flex-col">Título de Grado, o equivalente, en Traducción e Interpretación (Inglés).</td>


            </tr>
          </tbody>
        </table>

        <div className="h-[190px] w-[1120px] bg-yellow-100 border border-black rounded-[20px] ml-12 p-4 pt-10 shadow-[4px_4px_0px_rgba(50,51,50,0.2)]">

          <div className="flex items-center space-x-2 pl-6">
            <img src="https://www.juntadeandalucia.es/educacion/gestionafp/documentacion/Informacion_tutorial/icon_parasabermasfpd.png" alt="Icono Para Saber Más" />
            <p className="text-[35px] font-bold text-yellow-800">Para saber más</p>
          </div>
          <br />
          <p className="text-[17px] text-yellow-800 pl-6" >
            Por tanto, no es posible,
            <span className="bg-yellow-200 underline decoration-yellow-800 font-bold">EN NINGÚN CASO</span>,
            convalidar este módulo por haber cursado una asignatura universitaria relativa a este idioma.
          </p>
        </div>

      </div>
    </>
  );
}
