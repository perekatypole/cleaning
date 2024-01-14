import { React, useState } from "react";
import Image from "react-bootstrap/Image";
import question from "../../images/main/question.svg";
import DropdownBtn from "../heandlers/DropdownBtn";
import Slider from "../Slider/Slider"

const Services = () => {
  return (
    <div className="main-services">
      <div className="services-title">
        <h2>Наши услуги</h2>
      </div>
      <div className="services-container">
        <div id="office" className="services-card">
          <div className="card-title">
            <h3>Уборка офиса</h3>
          </div>
          <Slider />
          <DropdownBtn />
          {/* <div className="card-main">
            <div className="card-main-line">
              <p>Ежедневная уборка офиса до 500м2</p>
              <p>70 руб/м2</p>
            </div>
            <div className="card-main-line">
              <p>Ежедневная уборка офиса от 500м2 до 1000м2</p>
              <p>55 руб/м2</p>
            </div>
            <div className="card-main-line">
              <p>Ежедневная уборка офиса от 1000м2</p>
              <p>45 руб/м2</p>
            </div>
          </div> */}
            {/* <div
              id="office-dropdown"
              className="services-container office-drop"
            >
              <div className="card-main-line">
                <p>Ежедневная уборка офиса от 1000м2</p>
                <p>45 руб/м2</p>
              </div>
              <div className="card-main-line">
                <p>Ежедневная уборка офиса от 1000м2</p>
                <p>45 руб/м2</p>
              </div>
            </div> */}
        </div>
        <div className="services-card">
          <Image className="question" src={question} />
          <div className="card-title">
            <h3>
              Уборка после <br /> ремонта
            </h3>
          </div>
          <div className="card-main">
            <div className="card-main-line">
              <p>Однушка</p>
              <p>Требуется осмотр</p>
            </div>
            <div className="card-main-line">
              <p>Двушка</p>
              <p>Требуется осмотр</p>
            </div>
            <div className="card-main-line">
              <p>Трешка</p>
              <p>Требуется осмотр</p>
            </div>
          </div>
        </div>
        <div className="services-card">
          <Image className="question" src={question} />
          <div className="card-title">
            <h3>
              Генеральная <br /> уборка
            </h3>
          </div>
          <div className="card-main">
            <div className="card-main-line">
              <p>Однушка</p>
              <p>от 4490 руб</p>
            </div>
            <div className="card-main-line">
              <p>Двушка</p>
              <p>от 5490 руб</p>
            </div>
            <div className="card-main-line">
              <p>Трешка</p>
              <p>от 5990 руб</p>
            </div>
          </div>
        </div>
        <div className="services-card">
          <Image className="question" src={question} />
          <div className="card-title">
            <h3>Поддерживающая уборка</h3>
          </div>
          <div className="card-main">
            <div className="card-main-line">
              <p>Однушка</p>
              <p>от 1990 руб</p>
            </div>
            <div className="card-main-line">
              <p>Двушка</p>
              <p>от 2490 руб</p>
            </div>
            <div className="card-main-line">
              <p>Трешка</p>
              <p>от 2990 руб</p>
            </div>
          </div>
        </div>
        <div className="services-card">
          <div className="card-title">
            <h3>Мытье окон</h3>
          </div>
          <div className="card-main">
            <div className="card-main-line">
              <p>Окно - створка с двух сторон</p>
              <p>300 руб/м2</p>
            </div>
            <div className="card-main-line">
              <p>Балкон до 3-ех стоврок</p>
              <p>1200 руб/м2</p>
            </div>
            <div className="card-main-line">
              <p>Деревянные рамы</p>
              <p>450 руб/м2</p>
            </div>
            <div className="card-main-line">
              <p>Жалюзи</p>
              <p>200 руб/м2</p>
            </div>
          </div>
          <DropdownBtn type={" window"} />
        </div>
        <div className="services-card">
          <div className="card-title">
            <h3>Доп услуги</h3>
          </div>
          <div className="card-main">
            <div className="card-main-line">
              <p>Почасовая работа сотрудника</p>
              <p>500 руб</p>
            </div>
            <div className="card-main-line">
              <p>Замена постельного белья</p>
              <p>100 руб</p>
            </div>
            <div className="card-main-line">
              <p>Мытье холодильника включая морозилку</p>
              <p>450 руб/м2</p>
            </div>
          </div>
          <DropdownBtn type={" additional"} />
        </div>
      </div>
    </div>
  );
  // <Row className="main-services row-cols-2 justify-content-between">
  //   <Column md={12}>
  //     <h2 className="text-center">Наши услуги</h2>
  //   </Column>
  //   <Row className="services-card row-cols-1">
  //     <Image className="question" src={question} />
  //     <Column>
  //       <h3 className="text-center">Уборка офиса</h3>
  //       <Row className="justify-content-between">
  //         <Column md={8} className="d-flex align-items-center">
  //           <p>Ежедневная уборка офиса до 500м2</p>
  //         </Column>
  //         <Column className="d-flex justify-content-end align-items-center">
  //           <p>70 руб/м2</p>
  //         </Column>
  //       </Row>
  //       <Row className="d-flex justify-content-between">
  //         <Column md={8} className="d-flex align-items-center">
  //           <p>Ежедневная уборка офиса от 500м2</p>
  //         </Column>
  //         <Column className="d-flex justify-content-end align-items-center">
  //           <p>55 руб/м2</p>
  //         </Column>
  //       </Row>
  //       <Row className="d-flex justify-content-between">
  //         <Column md={8} className="d-flex align-items-center">
  //           <p>Ежедневная уборка офиса от 1000м2</p>
  //         </Column>
  //         <Column className="d-flex justify-content-end align-items-center">
  //           <p>45 руб/м2</p>
  //         </Column>
  //       </Row>
  //     </Column>
  //     <Column className="d-flex justify-content-center">
  //       <Image src={more} />
  //     </Column>
  //   </Row>
  //   <Column md={4} className="services-card offset-4">
  //     <Column className="question-container d-flex justify-content-end">
  //       <Image src={question} />
  //     </Column>
  //     <Column>
  //       <h3 className="text-center">Уборка после ремонта</h3>
  //       <Row className="justify-content-between">
  //         <Column md={8} className="d-flex align-items-center">
  //           <p>Однушка</p>
  //         </Column>
  //         <Column className="d-flex justify-content-end align-items-center">
  //           <p>Требуется осмотр</p>
  //         </Column>
  //       </Row>
  //       <Row className="d-flex justify-content-between">
  //         <Column md={8} className="d-flex align-items-center">
  //           <p>Двушка</p>
  //         </Column>
  //         <Column className="d-flex justify-content-end align-items-center">
  //           <p>Требуется осмотр</p>
  //         </Column>
  //       </Row>
  //       <Row className="d-flex justify-content-between">
  //         <Column md={8} className="d-flex align-items-center">
  //           <p>Трешка</p>
  //         </Column>
  //         <Column className="d-flex justify-content-end align-items-center">
  //           <p>Требуется осмотр</p>
  //         </Column>
  //       </Row>
  //     </Column>
  //     <Column className="d-flex justify-content-center">
  //       <Image src={more} />
  //     </Column>
  //   </Column>
  //   <Column md={4} className="services-card">
  //     <Column className="question-container d-flex justify-content-end">
  //       <Image src={question} />
  //     </Column>
  //     <Column>
  //       <h3 className="text-center">Уборка офиса</h3>
  //       <Row className="justify-content-between">
  //         <Column md={8} className="d-flex align-items-center">
  //           <p>Ежедневная уборка офиса до 500м2</p>
  //         </Column>
  //         <Column className="d-flex justify-content-end align-items-center">
  //           <p>70 руб/м2</p>
  //         </Column>
  //       </Row>
  //       <Row className="d-flex justify-content-between">
  //         <Column md={8} className="d-flex align-items-center">
  //           <p>Ежедневная уборка офиса от 500м2</p>
  //         </Column>
  //         <Column className="d-flex justify-content-end align-items-center">
  //           <p>55 руб/м2</p>
  //         </Column>
  //       </Row>
  //       <Row className="d-flex justify-content-between">
  //         <Column md={8} className="d-flex align-items-center">
  //           <p>Ежедневная уборка офиса от 1000м2</p>
  //         </Column>
  //         <Column className="d-flex justify-content-end align-items-center">
  //           <p>45 руб/м2</p>
  //         </Column>
  //       </Row>
  //     </Column>
  //     <Column className="d-flex justify-content-center">
  //       <Image src={more} />
  //     </Column>
  //   </Column>
  //   <Column md={4} className="services-card offset-4">
  //     <Column className="question-container d-flex justify-content-end">
  //       <Image src={question} />
  //     </Column>
  //     <Column>
  //       <h3 className="text-center">Уборка офиса</h3>
  //       <Row className="justify-content-between">
  //         <Column md={8} className="d-flex align-items-center">
  //           <p>Ежедневная уборка офиса до 500м2</p>
  //         </Column>
  //         <Column className="d-flex justify-content-end align-items-center">
  //           <p>70 руб/м2</p>
  //         </Column>
  //       </Row>
  //       <Row className="d-flex justify-content-between">
  //         <Column md={8} className="d-flex align-items-center">
  //           <p>Ежедневная уборка офиса от 500м2</p>
  //         </Column>
  //         <Column className="d-flex justify-content-end align-items-center">
  //           <p>55 руб/м2</p>
  //         </Column>
  //       </Row>
  //       <Row className="d-flex justify-content-between">
  //         <Column md={8} className="d-flex align-items-center">
  //           <p>Ежедневная уборка офиса от 1000м2</p>
  //         </Column>
  //         <Column className="d-flex justify-content-end align-items-center">
  //           <p>45 руб/м2</p>
  //         </Column>
  //       </Row>
  //     </Column>
  //     <Column className="d-flex justify-content-center">
  //       <Image src={more} />
  //     </Column>
  //   </Column>
  //   <Column md={4} className="services-card">
  //     <Column className="question-container d-flex justify-content-end">
  //       <Image src={question} />
  //     </Column>
  //     <Column>
  //       <h3 className="text-center">Уборка офиса</h3>
  //       <Row className="justify-content-between">
  //         <Column md={8} className="d-flex align-items-center">
  //           <p>Ежедневная уборка офиса до 500м2</p>
  //         </Column>
  //         <Column className="d-flex justify-content-end align-items-center">
  //           <p>70 руб/м2</p>
  //         </Column>
  //       </Row>
  //       <Row className="d-flex justify-content-between">
  //         <Column md={8} className="d-flex align-items-center">
  //           <p>Ежедневная уборка офиса от 500м2</p>
  //         </Column>
  //         <Column className="d-flex justify-content-end align-items-center">
  //           <p>55 руб/м2</p>
  //         </Column>
  //       </Row>
  //       <Row className="d-flex justify-content-between">
  //         <Column md={8} className="d-flex align-items-center">
  //           <p>Ежедневная уборка офиса от 1000м2</p>
  //         </Column>
  //         <Column className="d-flex justify-content-end align-items-center">
  //           <p>45 руб/м2</p>
  //         </Column>
  //       </Row>
  //     </Column>
  //     <Column className="d-flex justify-content-center">
  //       <Image src={more} />
  //     </Column>
  //   </Column>
  //   <Column md={4} className="services-card offset-4">
  //     <Column className="question-container d-flex justify-content-end">
  //       <Image src={question} />
  //     </Column>
  //     <Column>
  //       <h3 className="text-center">Уборка офиса</h3>
  //       <Row className="justify-content-between">
  //         <Column md={8} className="d-flex align-items-center">
  //           <p>Ежедневная уборка офиса до 500м2</p>
  //         </Column>
  //         <Column className="d-flex justify-content-end align-items-center">
  //           <p>70 руб/м2</p>
  //         </Column>
  //       </Row>
  //       <Row className="d-flex justify-content-between">
  //         <Column md={8} className="d-flex align-items-center">
  //           <p>Ежедневная уборка офиса от 500м2</p>
  //         </Column>
  //         <Column className="d-flex justify-content-end align-items-center">
  //           <p>55 руб/м2</p>
  //         </Column>
  //       </Row>
  //       <Row className="d-flex justify-content-between">
  //         <Column md={8} className="d-flex align-items-center">
  //           <p>Ежедневная уборка офиса от 1000м2</p>
  //         </Column>
  //         <Column className="d-flex justify-content-end align-items-center">
  //           <p>45 руб/м2</p>
  //         </Column>
  //       </Row>
  //     </Column>
  //     <Column className="d-flex justify-content-center">
  //       <Image src={more} />
  //     </Column>
  //   </Column>
  // </Row>
};

export default Services;
