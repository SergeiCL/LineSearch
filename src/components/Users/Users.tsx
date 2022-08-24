import React, {ChangeEvent, FC, useState} from 'react'
import {USERS} from './usersData';
import {IUser} from './IUser';

const Users:FC = () => {
    /*Реализуем State
    IUser[] - массип пользователей
    */
    const [users, setUsers] = useState<IUser[]>(USERS);

    /*
    search - относится к пустому полю
    */
    const[search, setSearch] = useState('');
    /*
    Сделаем ф-цию, которая удаляет пользователя
    Вкачестве параметров ф-ция принимает id

    filter - метод массива 
    */
    const deleteUser = (id:number) =>{
        /*Вернём новый массив, в котором на
        каждого перебираемого пользователя user
        мы будем возвращать тех пользователей
        у которого user.id несовпадают с id*/
        setUsers(users.filter(user => user.id !== id));
    }
    /*Безопасный способ удаления пользователя

    Функция confirm отображает модальное окно
    с текстом вопроса question и двумя кнопками: OK и Отмена.
    
    confirm - возвращант true или false

    console.log('isDelet');
    const isDelet = window.confirm('Do you really delete this user?');
    */
    
    /*
    Render - если чего-то нет или неполучено мы показываем одно
    Если данные есть то показываем другое
    Рендеринг основывается на if
    */

    /*
    Поиск пользователей
    Сверху делаем строчку поиска в неё
    будем что то вводить. В соответствии по найденым в impoot значениям и
    по имени пользователя сортируем массив
    */

    /*
    Метод tolocalowerCase() - приводит все символы
    к нижнему регистру.

    Метод includes() определяет, содержит
    ли массив определённый элемент, возвращая
    в зависимости от этого true или false.

    */
    const searchedUsers = () => {
        if(search){//Если есть search, то возвращаем отфильтрованных пользователей
            return users.filter(user => user.name.toLowerCase().includes(search.toLowerCase()));
        }
        //Иначе обычных
        return users;
    };
    console.log(searchedUsers());
  return (
    /*
    Создаём папку Users и файл users.tsx

    Вставляем картачки

    В bootstrap ищем Components / Card

    Слово container в компоненте App.stx отступы

    Описываем тип пользователей с которыми будем работать
    Делаем новый файл IUser.ts - TypeScript

    Js явл-ся динамическим языком т.е. формирует типы
    после того как кампилятор прошол и сделал код

    Интерфейс - описывает набор данных

    IUser   I - говорит о том что это будет интерфейс

    json placeholder - фейковый набор данных, который
    иммитирует запрос на сервер и в ответ присылает пользователей

    son placeholder / Resources / users
    
    В usersData делаем export const Users

    Теперь говорим что эти пользователи будут
    определённого типа
    
    В IUser делаем export interface IUser

    */
    <>
    {/*Строка поиска input требует закрывающийся тег /> */}
    <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">Search</span>
        <input type="text" 
               className="form-control" 
               placeholder="Username" 
               aria-label="Username" 
               aria-describedby="basic-addon1"
               /*onChange={(event) => console.log(event.target.value)}на каждое изменение input в console.log выыодим изменение*/
               onChange = {(event) => setSearch(event.target.value)}/*Сделаем ф-цию*/
               />
    </div>
    <div className="row row-cols-1 row-cols-md-3 g-4">
        {/*Обратимся к пользователям
           Каждому пользователю нужен ключ

           Ключи нужны реакту для того, чтобы
           понимать разницу между дублируемыми
           компонентами

           Ключ указываем в самом
           верхнем div
          */
        }
        {users.length ? /*Если есть такие пользователи т.е
                        есть ли у пользователя длинна   
                        то делаем users.map
                        users явл-ся массивом объекта
                        */

        /*searchedUsers() - Вызываем найденных
          пользователей при наборе в поисковике
        */
        searchedUsers().map(user =>
            <div className="col" key={user.id}>
                <div className="card h-100">
                    <div className="card-body">
                        <h5 className="card-title">{/*Поля Номер и  Имя пользователя*/`№ ${user.id} - ${user.name}`}</h5>
                       <p className="card-text">Email: {user.email}</p>
                       <p className="card-text">City: {user.address.city}</p>
                       <p className="card-text">Company: {user.company.name}</p>
                    </div> 
                    <div className="card-footer">
                    <button type="button" className = "btn btn-danger" onClick={()=> deleteUser(user.id)}>Delete</button>{/*Кнопка для удалентя пользователя. Удаляем по id*/}
                    </div>
                </div>
            </div>
        )
    :<h2>Users not exist</h2>/*Если пользователя нет отправляем заголовок*/
    }
    </div>
    </>
  )
}

export default Users