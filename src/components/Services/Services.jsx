import { React, useState } from "react";
import Image from "react-bootstrap/Image";
import question from "../../images/main/question.svg";


const Services=()=>{
  return
  (<div className="main-services">
      <div className="services-title">
      <h2>Наши услуги</h2>
      <></>
      </div>
  </div>)
};

// const Services = () => {
//   return (
//     <div className="main-services">
//       <div className="services-title">
//         <h2>Наши услуги</h2>
//       </div>
//       <div className="services-container">
//         <div id="office" className="services-card">
//           <div className="card-title">
//             <h3>Уборка офиса</h3>
//           </div>
//           <Slider type="office" />
//         </div>
//         <div className="services-card">
//           <Image className="question" src={question} />
//           <div className="card-title">
//             <h3>
//               Уборка после <br /> ремонта
//             </h3>
//           </div>
//           <Slider type="repair" />
//         </div>
//         <div className="services-card">
//           <Image className="question" src={question} />
//           <div className="card-title">
//             <h3>
//               Генеральная <br /> уборка
//             </h3>
//           </div>
//           <Slider type="generalCleaning" />
//         </div>
//         <div className="services-card">
//           <Image className="question" src={question} />
//           <div className="card-title">
//             <h3>Поддерживающая уборка</h3>
//           </div>
//           <Slider type="supportCleaning" />
//         </div>
//         <div className="services-card">
//           <div className="card-title">
//             <h3>Мытье окон</h3>
//           </div>
//           <Slider type="windowCleaning" />
//         </div>
//         <div className="services-card">
//           <div className="card-title">
//             <h3>Доп услуги</h3>
//           </div>
//           <Slider type="extraService" />
//         </div>
//       </div>
//     </div>
//   );
// };

export default Services;
