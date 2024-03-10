// тут будуть запити, які ми будемо робии на сервер

export const getUsers = () => {
    const url = 'https://randomuser.me/api';
    return fetch(url) 
    .then((response) => response.json());
}