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
              <span className={"section_outstaff_block_text"}>CRM</span>
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
      <section className={"section_outstaff_technologies"}>
        <div className="container">
          <div className={"section_outstaff_title"}>My technologies</div>
          <div className={"section_outstaff_items"}>
            <div className={"section_outstaff_item"}>
              <div className={"section_outstaff_item_title"}>
                Technology stack frontend
              </div>
              <div className={"section_outstaff_cards"}>
                <div className={"section_outstaff_card"}>
                  <div className={"section_outstaff_img"}>
                    <img src="../icons/html.png" alt="" />
                  </div>
                  <div className={"section_outstaff_text"}>HTML</div>
                </div>
                <div className={"section_outstaff_card"}>
                  <div className={"section_outstaff_img"}>
                    <img src="../icons/css.png" alt="" />
                  </div>
                  <div className={"section_outstaff_text"}>CSS</div>
                </div>
                <div className={"section_outstaff_card"}>
                  <div className={"section_outstaff_img"}>
                    <img src="../icons/javaScript.png" alt="" />
                  </div>
                  <div className={"section_outstaff_text"}>JavaScript</div>
                </div>
                <div className={"section_outstaff_card"}>
                  <div className={"section_outstaff_img"}>
                    <img src="../icons/typeScript.png" alt="" />
                  </div>
                  <div className={"section_outstaff_text"}>TypeScript</div>
                </div>
                <div className={"section_outstaff_card"}>
                  <div className={"section_outstaff_img"}>
                    <img src="../icons/react.png" alt="" />
                  </div>
                  <div className={"section_outstaff_text"}>React</div>
                </div>
                <div className={"section_outstaff_card"}>
                  <div className={"section_outstaff_img"}>
                    <img src="../icons/redux.png" alt="" />
                  </div>
                  <div className={"section_outstaff_text"}>Redux</div>
                </div>
                <div className={"section_outstaff_card"}>
                  <div className={"section_outstaff_img"}>
                    <img src="../icons/next.png" alt="" />
                  </div>
                  <div className={"section_outstaff_text"}>Next JS</div>
                </div>
                <div className={"section_outstaff_card"}>
                  <div className={"section_outstaff_img"}>
                    <img src="../icons/react-native.png" alt="" />
                  </div>
                  <div className={"section_outstaff_text"}>React Native</div>
                </div>
              </div>
            </div>
            <div className={"section_outstaff_item"}>
              <div className={"section_outstaff_item_title"}>Ui/Ux tools</div>
              <div className={"section_outstaff_cards"}>
                <div className={"section_outstaff_card"}>
                  <div className={"section_outstaff_img"}>
                    <img src="../icons/figma.png" alt="" />
                  </div>
                  <div className={"section_outstaff_text"}>Figma</div>
                </div>
                <div className={"section_outstaff_card"}>
                  <div className={"section_outstaff_img"}>
                    <img src="../icons/adobe-photoshop.png" alt="" />
                  </div>
                  <div className={"section_outstaff_text"}>Photoshop</div>
                </div>
                <div className={"section_outstaff_card"}>
                  <div className={"section_outstaff_img"}>
                    <img src="../icons/adobe-illustrator.png" alt="" />
                  </div>
                  <div className={"section_outstaff_text"}>Illustrator</div>
                </div>
                <div className={"section_outstaff_card"}>
                  <div className={"section_outstaff_img"}>
                    <img src="../icons/after-effects.png" alt="" />
                  </div>
                  <div className={"section_outstaff_text"}>After effects</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={"seo_quotation"}>
        <div className="container">
          <div className={"seo_quotation_item"}>
            <div className={"seo_quotation_items"}>
              Почему вы должны взять именно меня?
            </div>
          </div>
          <div className={"seo_quotation_mark"}>
            <div className={"seo_quotation_mark_img"}>
              <img src="../icons/seo-mark.svg" alt="" />
            </div>
            <div className={"seo_quotation_text"}>
              Искренне люблю frontend! Я всегда заинтересован в развитии и
              обмене знаниями с командой, стараюсь перенимать опыт коллег. Умею
              и люблю работать в команде, потому что понимаю насколько это важно
              для развития проекта. Участие в интересных проектах, которые
              помогают делать жизнь пользователя проще, приносит огромное
              удовольствие, и я со всем энтузиазмом готов вносить свой вклад в
              их развитие. Компания АГИС, рассчитываю на долгосрочное сотрудничество с вами.
            </div>
            <div className={"seo_quotation_mark_img_reverse"}>
              <img src="../icons/seo-mark-reverse.svg" alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MainPage;
