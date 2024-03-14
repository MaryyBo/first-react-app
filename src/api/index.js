// тут будуть запити, які ми будемо робии на сервер

export const getUsers = (count) => {
    const url =  `https://randomuser.me/api/?results=${count}`
    return fetch(url) 
    .then((response) => response.json());
}