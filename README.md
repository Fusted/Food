# Food

Тестовый проект для изучения работы чистого JS в браузере.

Основные функции разделены по модулям, сборщик - WebPack

В проекте используется эмулятор сервера - json server 

Для запуска запуска:
### `json-server js/db.json`


С сервера берутся карточки для меню, а также на него отсылаются данные с обратной связи.

Функционал сайта:
1) Кнопки "Связаться с нами". Открывают модальное окно и отправляют данные на сервер. В случае ошибки это сообщается пользователю
2) Табовый выбор картинок (меню)
3) Слайдеры с индикаторами (выбор слайда производится с помощью стрелок)
4) Калькулятор калорий (статичные данные сохраняются в local storage)
5) Таймер до 1 января 
6) Модальное окно с обратной связью вызывается после 15 сек нахождения пользователя на сайте, или если пользователь долистал до конца. После любого вызова модального окна, данные функции збрасываются

