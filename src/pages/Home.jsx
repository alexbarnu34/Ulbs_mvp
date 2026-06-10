import React from "react";

const Home = () => {
  const sections = [
    {
      title:<p>Rolul Serviciului Asigurarea Calității</p>,
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
      title:<p>Structura Sistemului de Management (SM) al ULBS</p>,
      content: (
        <ul className="list-disc pl-6 space-y-2">
          <li>Serviciul Asigurarea Calității;</li>
          <li>Comisia pentru Evaluarea şi Asigurarea Calităţii - la nivelul universității;</li>
          <li><a className="hover:text-gray-300" href="https://senat.ulbsibiu.ro/wp-content/uploads/CPSAC.pdf">Comisia privind programele de studii și asigurarea calității - la nivelul Senatului;</a></li>
          <li>Subcomisiile pentru Evaluarea şi Asigurarea Calităţii (SCEAC) – la nivelul facultăților 9 subcomisii;
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li><a className="hover:text-gray-300" href="http://calitate.ulbsibiu.ro/documents/ROFcomisieEACULBS_2013_FINAL.pdf">Regulamentul de organizare şi funcţionare al CEAC (SCEAC) ULBS</a></li>
              <li><a className="hover:text-gray-300" href="https://www.ulbsibiu.ro/ro/despre/organizare/structura/rec/comisia-de-evaluare-si-asigurare-a-calitatii/">Membrii Comisiei pentru evaluarea și asigurarea calității</a></li>
              <li><a className="hover:text-gray-300" href="https://accounts.ulbsibiu.ro/myaccount-provider/module.php/core/loginuserpass.php?AuthState=_b603001496d74d6fabc65c41f51fde487729319505%3Ahttps%3A%2F%2Faccounts.ulbsibiu.ro%2Fmyaccount-provider%2Fsaml2%2Fidp%2FSSOService.php%3Fspentityid%3Dhttps%253A%252F%252Faccounts.ulbsibiu.ro%252Fredirect-service%252Fmodule.php%252Fsaml%252Fsp%252Fmetadata.php%252Fdefault-sp%26RelayState%3Dhttps%253A%252F%252Faccounts.ulbsibiu.ro%252Fredirect-service%252Fulbssite.php%253Foriginal%253Dhttp%253A%252F%252Fcalitate.ulbsibiu.ro%252Fdoc_SMI%252FRaport%252520SCEAC%2525202017.zip%26cookieTime%3D1762161072">Model și cerințe raport anual SCEAC - facultăți</a></li>
            </ul>
          </li>
          <li>Responsabilii cu asigurarea calității la nivelul tuturor entităților din ULBS (direcții, departamente, servicii, birouri, etc.);</li>
        </ul>
      )
    },
    {
      title:<p>Politica în domeniul calității a Universității ”Lucian Blaga” din Sibiu</p>,
      content: (
        <ul className="list-disc pl-6 space-y-2">
          <li><a className="hover:text-gray-300" href="http://calitate.ulbsibiu.ro/documents/Viziune-Misiune-Valori-Obiective%20ULBS.pdf">Viziunea, misiunea, valorile și obiectivele strategice ale ULBS ”Lucian Blaga” din Sibiu</a></li>
          <li><a className="hover:text-gray-300" href="http://calitate.ulbsibiu.ro/documents/Politica%20%C3%AEn%20domeniul%20calit%C4%83%C8%9Bii%20a%20ULBS.pdf">Politica în domeniul calității a Universității ”Lucian Blaga” din Sibiu</a></li>
          <li><a className="hover:text-gray-300" href="http://calitate.ulbsibiu.ro/documents/Asigurarea%20calit%C4%83%C8%9Bii%20la%20ULBS.pdf"> Asigurarea calității la Universitatea ”Lucian Blaga” din Sibiu.pdf</a></li>
        </ul>
      )
    }
  ];
  
  return (
    <div className="max-w-6xl mx-auto  p-4">
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