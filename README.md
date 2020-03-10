# Задание

Стандартное CRUD приложение использующее API

Использовать UI фреймворк: https://evergreen.segment.com/
Нужно использовать React (хуки и контекст), React Router, axios, остальное на ваш вкус

Все асинхронные запросы должны быть сделаны с включением спиннера, чтобы показать юзеру, что что то происходит
Задание может быть не полным, ожидается, что вы будете задавать вопросы в процессе

экран #1
список постов в виде таблицы
для каждого поста выводить: title, пользователя который создал пост по имени, действия, которые с постом можно делать
действия: удалить, редактировать (соответствующими иконками)
при нажатии на удаление появляется диалог для подтверждения удаления.
при нажатии на редактировать переходим на второй экран
сверху таблицы кнопка - “создать”, при нажатии переход на экран 3

экран #2
редактирование поста
нужны поля: title, body и выпадающий список юзеров
обязательно к заполнения: тайтл и пользователь для поста
все поля при редактировании заполнены данными поста, который редактируется
при нажатии на кнопку сохранить,  данные отправляются на сервер
необходима возможность перейти обратно на экран с таблицей

экран #3
создание нового поста
теже поля, что и во втором экране
по умолчанию поле со списком пользователя, остается не выбранным
обязательно к заполнению: тайтл и пользователь для поста
кнопка с надписью “создать”, при нажатию на которую создается новый пост
необходима возможность перейти обратно на экран с таблицей


бонусы
добавить аватарку пользователя к постам, убрать имя пользователя в подсказку, появляющуюся при наведении мыши на аватар (для генерации аватаров использовать https://ui-avatars.com/)
разделить продакшен и девелопмент билды. В девелопмент билде подменять реальные данные полученные с сервера заглушками, чтобы отлаживать без наличия доступного сервера 