async function ASYNCAPI() {
  const callAPI = await fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((json) => console.log(json));

  return callAPI;
}

console.log(
  ASYNCAPI()
    .then(() => console.log("Đây là API"))
    .catch((e) => console.log(e.message))
);