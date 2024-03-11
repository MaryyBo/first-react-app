// тут будуть запити, які ми будемо робии на сервер

export const getUsers = () => {
    const url = 'https://randomuser.me/api/?results=100';
    return fetch(url) 
    .then((response) => response.json());
}