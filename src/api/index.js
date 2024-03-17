// тут будуть запити, які ми будемо робии на сервер

export const getUsers = (count = 100, page = 1) => {
    const url = `https://randomuser.me/api/?page=${page}&results=${count}&seed=abc`
    return fetch(url)
        .then((response) => response.json());
}