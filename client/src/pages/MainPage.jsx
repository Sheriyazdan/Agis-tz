import React from "react";
import { Link } from "react-router-dom";

function MainPage() {
  return (
    <div>
      <section className={"banner_block"}>
        <div className="container">
          <div className={"banner_block_item"}>
            <div className={"banner_text"}>
              <div className={"banner_block_desc"}>Тестовое задание</div>
              <span>
                от компаний АГИС: • приложение должно содержать 2 страницы и
                компонент навигации (меню); • Первая страница ознакомительная
                (информационная страница, нужно показать навыки в верстке); •
                Вторая страница должна позволять ввести, редактировать и удалять
                текстовые данные, сохранить и удалять их в БД, и отобразить
                список всех сохраненных текстовых значений (текст бокс, вводим
                текст, нажимаем на кнопку, значение сохранилось в базе, и список
                всех значений в базе) • база данных должна быть использована
                MongoDB
              </span>
              <div className={`btn-main ${"banner_btn"}`}>
                <Link to={"/posts"}>Страница постов</Link>
              </div>
            </div>
            <div className={"banner_block_img"}>
              <img src="../images/outstaff-banner.png" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className={"section_outstaff_services"}>
        <div className="container">
          <div className={"section_outstaff_item"}>
            <div className={"title_item"}>Шерияздан</div>
            <div className={"section_outstaff_main"}>
              <div className={"section_outstaff_img"}>
                <img src="../icons/ux-ui-design.png" alt="" />
              </div>
              <span className={"section_outstaff_text"}>
                В программирование
              </span>
            </div>
            <div className={"title_item"}>навыки:</div>
          </div>
          <div className={"section_outstaff_items"}>
            <div className={"section_outstaff_item_block"}>
              <div className={"section_outstaff_block_img"}>
                <img src="../icons/front-end-dev.png" alt="" />
              </div>
              <span className={"section_outstaff_block_text"}>
                Front-end development (продвинутый)
              </span>
            </div>
            <div className={"section_outstaff_item_block"}>
              <div className={"section_outstaff_block_img"}>
                <img src="../icons/mobile-dev.png" alt="" />
              </div>
              <span className={"section_outstaff_block_text"}>
                Mobile development (начинающий)
              </span>
            </div>
            <div className={"section_outstaff_item_block"}>
              <div className={"section_outstaff_block_img"}>
                <img src="../icons/back-end-dev.png" alt="" />
              </div>
              <span className={"section_outstaff_block_text"}>
                Node JS (начинающий)
              </span>
            </div>
            <div className={"section_outstaff_item_block"}>
              <div className={"section_outstaff_block_img"}>
                <img src="../icons/devops.png" alt="" />
              </div>
              <span className={"section_outstaff_block_text"}>
                CRM
              </span>
            </div>
            <div className={"section_outstaff_item_block"}>
              <div className={"section_outstaff_block_img"}>
                <img src="../icons/software-testing.png" alt="" />
              </div>
              <span className={"section_outstaff_block_text"}>
                2 года опыта
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MainPage;
