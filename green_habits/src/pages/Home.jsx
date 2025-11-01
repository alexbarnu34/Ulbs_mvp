import React from "react";

const Home = () => {
  const sections = [
    {
      title:"Rolul Serviciului Asigurarea Calității",
      content: (
        <ul className="list-disc pl-6 space-y-2">
          <li>sprijină Comisia pentru Evaluarea şi Asigurarea Calităţii în realizarea managementului calităţii, 
            prin planificarea acţiunilor, organizarea echipelor de lucru pentru elaborarea documentelor, instruirea
            personalului privind asigurarea calităţii şi gestionarea documentelor sistemului calității</li>
          <li>sprijină Comisia de Monitorizare, Coordonare și Îndrumare Metodologică a Dezvoltării SCIM pentru a
            identificarea și abordarea riscurilor şi pentru a asigura în mod rezonabil că misiunea universității
            precum şi obiectivele generale au fost îndeplinite</li>
        </ul>
      )
    },
    {
      title:"Structura Sistemului de Management (SM) al ULBS",
      content: (
        <ul className="list-disc pl-6 space-y-2">
          <li>Serviciul Asigurarea Calității;</li>
          <li>Comisia pentru Evaluarea şi Asigurarea Calităţii - la nivelul universității;</li>
          <li><a href="https://senat.ulbsibiu.ro/wp-content/uploads/CPSAC.pdf">Comisia privind programele de studii și asigurarea calității - la nivelul Senatului;</a></li>
          <li>Subcomisiile pentru Evaluarea şi Asigurarea Calităţii (SCEAC) – la nivelul facultăților 9 subcomisii;
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Regulamentul de organizare şi funcţionare al CEAC (SCEAC) ULBS</li>
              <li>Membrii Comisiei pentru evaluarea și asigurarea calității</li>
              <li>Model și cerințe raport anual SCEAC - facultăți</li>
            </ul>
          </li>
          <li>Responsabilii cu asigurarea calității la nivelul tuturor entităților din ULBS (direcții, departamente, servicii, birouri, etc.);</li>
        </ul>
      )
    },
    {
      title:"Politica în domeniul calității a Universității ”Lucian Blaga” din Sibiu",
      content: (
        <ul className="list-disc pl-6 space-y-2">
          <li>Viziunea, misiunea, valorile și obiectivele strategice ale ULBS ”Lucian Blaga” din Sibiu</li>
          <li>Politica în domeniul calității a Universității ”Lucian Blaga” din Sibiu</li>
          <li> Asigurarea calității la Universitatea ”Lucian Blaga” din Sibiu.pdf</li>
        </ul>
      )
    }
  ];
  
  return (
    <div className="max-w-6xl mx-auto my-10 p-4">
      <table>
        <tbody>
          {sections.map((data,index) => (
            <tr className="border-t border-gray-300">
              <td key={index} className="w-1/4 bg-gray-100 p-4 font-semibold text-blue-900 align-top">
                {data.title}
               </td>
              <td className="w-3/4 p-4 text-gray-800 leading-relaxed">
                {data.content}
               </td>   
            </tr>            
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;