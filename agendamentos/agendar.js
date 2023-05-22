const form = document.querySelector('form');
const agendamentos = document.querySelector('#agendamento');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const data = document.querySelector('#data').value;
    const hora = document.querySelector('#hora').value;
    const select = document.getElementById('name');
    const nome = select.options[select.selectedIndex].value;

    if (data == '') {
        alert('É necessario informar uma data');
    } else if (hora == '') {
        alert('É necessario informar uma hora');
    } else if (nome == '') {
        alert('É necessario informar um profissional');
    } else {

        const status = 0; 
        const agendamento = {data, hora, nome, status };

        // Aqui você pode enviar o agendamento para o servidor
        localStorage.setItem("data", agendamento.data);
        localStorage.setItem("hora", agendamento.hora);
        localStorage.setItem("nome", agendamento.nome);
        localStorage.setItem("status", agendamento.status);

        window.location.href = "agendamento.html";
    }



});

