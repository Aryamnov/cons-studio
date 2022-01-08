export const BASE_URL = "https://cons-api.aryamnov.ru";

const handleResponse = (response) =>
  response.ok ? response.json() : Promise.reject(`Ошибка ${response.status}`);

export const subscribe = (email) => {
  return fetch(`${BASE_URL}/`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      email: email
    }),
  }).then(handleResponse);
};
