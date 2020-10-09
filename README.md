## Contacts-App:

<img src="https://user-images.githubusercontent.com/62475313/95621512-d5bbbc80-0a3f-11eb-817e-0d48d2c536e6.png" alt="app-preview"></img>

### STACK:
**React** for frontend,

**Material UI** as a UI library ,

**Redux** for state management,

**Reselect** to implement filter and statistics, avoiding performance issues,

**Redux-saga** for asynchronous store update.

## &#9758; Complete MVP:

### Two settings of data viewing:
* tabular view
* tiled view

### Contact's list view:
* user's birthday must be in US format
* email must be clickable using copy
* phone must be clickable with copy
* address must be in the format: / country / street number street name, city, state zip code
street number street name, city, state code

### Ability to filter data: (Reselect)
* by full name;
* by gender;
* by nationality;

### Data Statistics: (Reselect)
* collection size
* number of men, women and indetermitate
* who is predominant
* number of contacts for each nationality

#### More about filter: 
* Filter happens without manual form submit.
* Clearing the filter returns the collection to its original state.
* The entire collection gets filtered.

#### What else is there?
By clicking on the user's name or avatar, there is a transition to the page for viewing user data
When returning from the view page to the contact list page, the previously selected filter, sorting and pagination state must be saved and applied.

#### What I would like to improve in my application:
Mobile version requires adjustments;
Error message when returning an error from an API request;



## Сообщение к заданию:
Задание заняло выполнить 18 часов.
Выполнила пункт 3 и 4.

Я использовала 

React, 
Material UI, 
Redux для стейт менеджмента,
Reselect для фильтра ,
Redux-saga для асинхронного получения данных.

## Выполнила пункты:

### Два режима просмотра данных: 
* табличный вид 
* плиточный вид 

### Отображение списка контактов:
* день рождения пользователя должен быть в американском формате 
* email должен быть кликабельным с возможностью скопировать 
* телефон должен быть кликабельным с возможностью скопировать 
* адрес должен быть в формате:   /страна/ номер улицы название улицы, город, штат индекс 
номер улицы название улицы, город, штат индекс 

### Возможность фильтровать данные: (Reselect)
* по полному имени;
* по половому признаку;
* по национальности; 

### Статистика по данным:  (Reselect)
* размер коллекции 
* кол-во мужчин, женщин и неопределившихся 
* вывести кого больше
* кол-во контактов по каждой национальности 
По клику на имя или аватар пользователя есть переход на страницу просмотра данных пользователя 
При возврате со страницы просмотра на страницу списка контактов, должно быть сохранено и применено ранее выбранное состояние фильтра, сортировки и пагинации.

#### Подробнее о фильтре: (Reselect)
* Фильтрация происходит без ручной отправки формы.
* Очистка фильтра возвращает коллекцию к изначальному состоянию.
* Фильтруется вся коллекция.

#### Чтобы я хотела улучшить в своём приложении:
Мобильная версия требует корректировок;
Сообщение об ошибке при возвращении ошибки из запроса c API;

