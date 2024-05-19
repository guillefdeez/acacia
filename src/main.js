
// Path: src-tauri/src-tauri/main.rs
const { invoke } = window.__TAURI__.tauri;

document.getElementById('submit').addEventListener('click', async (event) => {
    event.preventDefault();// ASI NO SE RECARGA LA PAGINA

    document.getElementById('result').innerText = await invoke('calculate', {
        num1 : parseFloat(document.getElementById('number1').value),
        oper : document.getElementById('operator').value,
        num2: parseFloat(document.getElementById('number2').value)
  });
})