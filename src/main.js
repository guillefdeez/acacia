
// Path: src-tauri/src-tauri/main.rs
const { invoke } = window.__TAURI__.tauri;

document.getElementById('add').addEventListener('click', async (event) => {
    event.preventDefault();// ASI NO SE RECARGA LA PAGINA

    document.getElementById('result').innerText = await invoke('calculate', {
        num1 : parseFloat(document.getElementById('number1').value),
        oper : "+",
        num2: parseFloat(document.getElementById('number2').value)
  });
});
document.getElementById('subtract').addEventListener('click', async (event) => {
    event.preventDefault();// ASI NO SE RECARGA LA PAGINA

    document.getElementById('result').innerText = await invoke('calculate', {
        num1 : parseFloat(document.getElementById('number1').value),
        oper : "-",
        num2: parseFloat(document.getElementById('number2').value)
  });
});
document.getElementById('multiply').addEventListener('click', async (event) => {
    event.preventDefault();// ASI NO SE RECARGA LA PAGINA

    document.getElementById('result').innerText = await invoke('calculate', {
        num1 : parseFloat(document.getElementById('number1').value),
        oper : "*",
        num2: parseFloat(document.getElementById('number2').value)
  });
});
document.getElementById('divide').addEventListener('click', async (event) => {
    event.preventDefault();// ASI NO SE RECARGA LA PAGINA

    document.getElementById('result').innerText = await invoke('calculate', {
        num1 : parseFloat(document.getElementById('number1').value),
        oper : "/",
        num2: parseFloat(document.getElementById('number2').value)
  });
});
