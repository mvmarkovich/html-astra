<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("Авторизованное обучение");
?>

<div class="section-anchor" id="anchor-0">
            <div class="intro intro--static">
              <div class="container">
                <div class="intro__wrap">  
                  <div class="intro__info">
                    <h1 class="intro__title">Авторизованное обучение от ГК «Астра»</h1>
                    <p class="intro__desc"><strong>ГК Астра имеет широкую сеть авторизованных учебных центров по всей территории Российской Федерации.</strong> <br><br> Учебные центры формируются на базе организаций, осуществляющих лицензионную деятельность в сфере дополнительного профессионального образования.</p>
                    <ul class="list-dots">
                      <li>Центры дополнительного профессионального образования</li>
                      <li>Университеты</li>
                      <li>Колледжи</li>
                    </ul>
                  </div>
                  <div class="intro__img--wrap"><img class="intro__img" src="img/intro/plug-auth.svg" width="560" height="512" alt="Название"></div>
                </div>
              </div>
            </div>
          </div>
          <section class="feedback feedback--test feedback--narrow section-anchor" id="anchor-2">
            <div class="container">
              <div class="feedback__body">
                <form class="form feedback__form" id="check-sert" action="/" method="/">
                  <div class="feedback__form-header">
                    <h3 class="feedback__title">Проверить сертификат</h3>
                    <div class="feedback__form-steps">
                      <ul class="feedback__form-steps-list">
                        <li class="feedback__form-steps-item">Шаг 1</li>
                        <li class="feedback__form-steps-item">Шаг 2</li>
                        <li class="feedback__form-steps-item">Шаг 3</li>
                      </ul><span class="btn btn--reset btn--back-before" id="feedback__btn-prev" onclick="nextPrev(-1)">Назад</span>
                    </div>
                  </div>
                  <div class="feedback__form-content">
                    <div class="feedback__form-tab">
                      <div class="feedback__form-tab--inner">
                        <div class="feedback__form-inputs">
                          <div class="form__desc">Сервис проверки подлинности сертификата, выданного ГК Astra Linux <br><br> Сервис предназначен для проверки подлинности сертификата по его номеру и фамилии обладателя сертификата. Сервис абсолютно бесплатный.</div>
                          <div class="input">
                            <label class="input__label" for="check-sert-number">Серия и номер сертификата</label>
                            <input class="input__elem" id="check-sert-number" type="text" placeholder="Ввести" name="check-sert-number">
                          </div>
                          <div class="input">
                            <label class="input__label" for="check-sert-name">Данные обладателя сертификата</label>
                            <input class="input__elem" id="check-sert-name" type="text" placeholder="Ввести" name="check-sert-name">
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="feedback__form-tab">
                      <div class="feedback__form-tab--inner">
                        <div class="feedback__form-inputs">
                          <div class="form__desc">Бланк официального письма-заявки на предоставление операционной системы «Astra Linux Special Edition»</div>
                          <div class="input">
                            <div class="feedback__docs">
                              <div class="feedback__docs-title">Бланки:</div>
                              <div class="feedback__docs-list"><a class="feedback__docs-item" href="#" download></a><a class="feedback__docs-item" href="#" download></a><a class="feedback__docs-item" href="#" download></a></div>
                            </div>
                            <input class="input__file" id="feedback-attach-file" type="file" name="feedback-attach-file">
                            <label class="input__file-label input__file-label--border" for="feedback-attach-file"> <i class="icons icons--doc-gray"></i>
                              <div class="input__file-label-title">Прикрепить бланк</div><i class="icons icons--attach"></i>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="feedback__form-tab">
                      <div class="feedback__form-tab--inner">
                        <div class="feedback__form-inputs">
                          <div class="form__success"><img class="form__success-icon" src="img//form-success.svg" width="72" height="72" alt="Success!">
                            <div class="form__success-title">Вы успешно отправили данные</div>
                            <p class="form__success-desc">После получения заявки сотрудники ООО «РусБИТех-Астра» свяжутся с контактным лицом и запросят данные, необходимые для подготовки акта приема передачи операционной системы в демонстрационно - ознакомительных целях, а также договорятся о сроках и способах передачи экземпляра программ</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="feedback__form-footer" id="form-steps-footer">
                    <button class="btn btn--accent btn--arrow-right-after" id="feedback__btn-next" type="button" onclick="nextPrev(1)" aria-label="Next tab">Далее</button>
                    <p class="form__agree" id="form-steps-headline">Вопросы по Партнёрской программе: <br> на <a href="mailto:partner@astralinux.ru">partner@astralinux.ru</a></p>
                  </div>
                </form>
              </div>
            </div>
          </section>
          <section class="section section-anchor" id="anchor-1">
            <div class="container">
              <div class="title__block">
                <h2>Программы курсов</h2>
              </div>
              <div class="materials">
                <div class="materials__list materials__list--bg">
                  <div class="materials__item"><a class="materials__item--inner" href="#" download>
                      <div class="materials__item-img--wrap"><img class="materials__item-img" src="img/material-book.svg" width="56" height="56" alt="Документ"></div>
                      <div class="materials__item-text">
                        <div class="materials__item-title">Курс</div>
                        <div class="materials__item-desc">Описание курса</div>
                      </div></a></div>
                  <div class="materials__item"><a class="materials__item--inner" href="#" download>
                      <div class="materials__item-img--wrap"><img class="materials__item-img" src="img/material-book.svg" width="56" height="56" alt="Документ"></div>
                      <div class="materials__item-text">
                        <div class="materials__item-title">Курс</div>
                        <div class="materials__item-desc">Описание курса</div>
                      </div></a></div>
                  <div class="materials__item"><a class="materials__item--inner" href="#" download>
                      <div class="materials__item-img--wrap"><img class="materials__item-img" src="img/material-book.svg" width="56" height="56" alt="Документ"></div>
                      <div class="materials__item-text">
                        <div class="materials__item-title">Курс</div>
                        <div class="materials__item-desc">Описание курса</div>
                      </div></a></div>
                  <div class="materials__item"><a class="materials__item--inner" href="#" download>
                      <div class="materials__item-img--wrap"><img class="materials__item-img" src="img/material-book.svg" width="56" height="56" alt="Документ"></div>
                      <div class="materials__item-text">
                        <div class="materials__item-title">Курс</div>
                        <div class="materials__item-desc">Описание курса</div>
                      </div></a></div>
                  <div class="materials__item"><a class="materials__item--inner" href="#" download>
                      <div class="materials__item-img--wrap"><img class="materials__item-img" src="img/material-book.svg" width="56" height="56" alt="Документ"></div>
                      <div class="materials__item-text">
                        <div class="materials__item-title">Курс</div>
                        <div class="materials__item-desc">Описание курса</div>
                      </div></a></div>
                  <div class="materials__item"><a class="materials__item--inner" href="#" download>
                      <div class="materials__item-img--wrap"><img class="materials__item-img" src="img/material-book.svg" width="56" height="56" alt="Документ"></div>
                      <div class="materials__item-text">
                        <div class="materials__item-title">Курс</div>
                        <div class="materials__item-desc">Описание курса</div>
                      </div></a></div>
                  <div class="materials__item"><a class="materials__item--inner" href="#" download>
                      <div class="materials__item-img--wrap"><img class="materials__item-img" src="img/material-book.svg" width="56" height="56" alt="Документ"></div>
                      <div class="materials__item-text">
                        <div class="materials__item-title">Скрытый курс</div>
                        <div class="materials__item-desc">Описание курса</div>
                      </div></a></div>
                  <div class="materials__item"><a class="materials__item--inner" href="#" download>
                      <div class="materials__item-img--wrap"><img class="materials__item-img" src="img/material-book.svg" width="56" height="56" alt="Документ"></div>
                      <div class="materials__item-text">
                        <div class="materials__item-title">Скрытый курс</div>
                        <div class="materials__item-desc">Описание курса</div>
                      </div></a></div>
                </div>
              </div>
            </div>
          </section>
          <section class="section section-anchor" id="anchor-3">
            <div class="container">
              <div class="title__block">
                <h2>Образовательные ресурсы</h2>
              </div>
              <div class="edu-resour">
                <div class="edu-resour__row row">
                  <div class="edu-resour__col col-12 col-md-6">
                    <div class="edu-resour__col--body">
                      <div class="edu-resour__col-title">Вики библиотека</div><a class="link link--target-sec edu-resour__col-link" href="https://wiki.astralinux.ru" target="_blank">https://wiki.astralinux.ru</a>
                    </div>
                  </div>
                  <div class="edu-resour__col col-12 col-md-6">
                    <div class="edu-resour__col--body">
                      <div class="edu-resour__col-title">Образовательный портал</div><a class="link link--target-sec edu-resour__col-link" href="https://education.astralinux.ru/welcome.php#components" target="_blank">https://education.astralinux.ru/welcome.php#components</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section class="feedback feedback--narrow">
            <div class="container">
              <div class="feedback__body">
                <form class="form feedback__form" action="/" method="/">
                  <div class="feedback__form-header">
                    <h3 class="feedback__title">Связаться с нами</h3>
                  </div>
                  <div class="feedback__form-content">
                    <div class="form__desc">Выберите тему обращения:</div>
                    <div class="feedback__tags">
                      <div class="feedback__tags-list">
                        <div class="input">
                          <input class="input__radio--bg" id="feedback-theme-0" type="radio" name="feedback-theme">
                          <label class="input__radio--bg-label" for="feedback-theme-0">Проблемы с работой сайта</label>
                        </div>
                        <div class="input">
                          <input class="input__radio--bg" id="feedback-theme-1" type="radio" name="feedback-theme">
                          <label class="input__radio--bg-label" for="feedback-theme-1">Сообщить об уязвимости</label>
                        </div>
                        <div class="input">
                          <input class="input__radio--bg" id="feedback-theme-2" type="radio" name="feedback-theme">
                          <label class="input__radio--bg-label" for="feedback-theme-2">Сотрудничество</label>
                        </div>
                        <div class="input">
                          <input class="input__radio--bg" id="feedback-theme-3" type="radio" name="feedback-theme">
                          <label class="input__radio--bg-label" for="feedback-theme-3">Другой вопрос</label>
                        </div>
                      </div>
                    </div>
                    <div class="form__desc">Данные для связи:</div>
                    <div class="form__group">
                      <div class="input">
                        <input class="input__elem" type="text" placeholder="ФИО" name="feedback-name">
                      </div>
                      <div class="input">
                        <input class="input__elem" type="text" placeholder="Номер телефона" name="feedback-phone">
                      </div>
                    </div>
                    <div class="input">
                      <textarea class="input__elem" name="feedback-massage" cols="30" rows="5" placeholder="Ваш вопрос"> </textarea>
                    </div>
                  </div>
                  <div class="feedback__form-footer">
                    <button class="btn btn--accent btn--arrow-right-after" type="button" aria-label="Send form">Далее</button>
                    <p class="form__agree">Нажимая на кнопку, вы даете согласие <br> на <a href="#">обработку персональных данных</a></p>
                  </div>
                </form>
              </div>
            </div>
          </section>

<script type="text/javascript">
  //
  // Form tabs
  //
  
  var currentTab = 0;
  showTab(currentTab);
  
  function showTab(n) {
      var x = document.getElementsByClassName("feedback__form-tab");
      x[n].style.display = "block";
  
      if (n == 0) {
          document.getElementById("feedback__btn-prev").style.display = "none";
      } else {
          document.getElementById("feedback__btn-prev").style.display = "inline-flex";
      }
  
      if (n == (x.length - 2)) {
          document.getElementById("form-steps-footer").style.display = "flex";
          document.getElementById("feedback__btn-next").innerHTML = "Отправить запрос";
  
          document.getElementById("feedback__btn-next").classList.replace('btn--arrow-right-after', 'btn--email-after');
  
          document.getElementById("form-steps-headline").style.display = "block";
          
      } else if (n == (x.length - 1)) {
          document.getElementById("form-steps-footer").style.display = "none";
  
      } else {
          document.getElementById("form-steps-footer").style.display = "flex";
          document.getElementById("feedback__btn-next").classList.replace('btn--email-after', 'btn--arrow-right-after');
          document.getElementById("feedback__btn-next").innerHTML = "Далее";
      }
  
      fixStepIndicator(n)
  }
  
  function nextPrev(n) {
      var x = document.getElementsByClassName("feedback__form-tab");
      if (n == 1 && !validateForm()) return false;
      x[currentTab].style.display = "none";
      currentTab = currentTab + n;
  
      if (currentTab >= x.length) {
          //document.getElementById("form-steps").submit();
          
          return false;
      }
  
      showTab(currentTab);
  }
  
  function validateForm() {
      var x, y, i, valid = true;
      x = document.getElementsByClassName("feedback__form-tab");
      y = x[currentTab].getElementsByTagName("input");
  
      for (i = 0; i < y.length; i++) {
          if (y[i].value == "") {
  
          y[i].className += " invalid";
  
          valid = false;
          }
      }
  
      if (valid) {
          document.getElementsByClassName("feedback__form-steps-item")[currentTab].className += " is-finish";
      }
  
      return valid;
  }
  
  function fixStepIndicator(n) {
      var i, x = document.getElementsByClassName("feedback__form-steps-item");
      for (i = 0; i < x.length; i++) {
          x[i].className = x[i].className.replace(" is-active", "");
      }
  
      x[n].className += " is-active";
  }
</script>

<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>