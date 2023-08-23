export async function setupCounter(element: HTMLButtonElement) {
  let counter = await fetch('http://localhost:3001/counter').then(r => r.json()).then(r => r.counter);
  const setCounter = async () => {
    counter = await fetch('http://localhost:3001/counter', {
      method: 'POST',
    }).then(r => r.json()).then(r => {
      return r.counter;
    });
    element.innerText = `count is ${counter}`;
  };
  element.addEventListener("click", async () => await setCounter(++counter));
  setCounter();
}
