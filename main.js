//================ contas dias da semana =====================//

const diasDaSemana = [
    "Sabado", "Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira"
];
const diaDaSemanaSpan = document.getElementById('dia-da-semana');

diaDaSemanaSpan.textContent = `${diasDaSemana[new Date().getDay()]}`;

//================================================================

$(document).ready(function() {
    $('#carrossel-img').slick()
})






document.addEventListener('DOMContentLoaded', function() {
    const calendar = document.getElementById('calendar');
    const agenda = document.getElementById('agenda');
    const monthYear = document.getElementById('monthYear');

    // Dados de exemplo dos compromissos
    const appointments = {
        '2024-06-01': ['Reunião com o cliente', 'Dentista às 16h'],
        '2024-06-03': ['Projeto de equipe', 'Aula de Yoga às 18h'],
        '2024-06-07': ['Almoço com Maria', 'Entrega do relatório'],
    };

    // Função para gerar o calendário
    function generateCalendar(year, month) {
        const date = new Date(year, month - 1, 1);
        const daysInMonth = new Date(year, month, 0).getDate();
        const today = new Date();
        const todayStr = `${today.getFullYear()}-${(today.getMonth() + 1).toString().padStart(2, '0')}-${today.getDate().toString().padStart(2, '0')}`;

        // Limpar o calendário existente
        calendar.innerHTML = '';

        // Definir o título do mês e ano
        const monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
        monthYear.textContent = `${monthNames[month - 1]} ${year}`;

        // Adicionar os dias ao calendário
        for (let i = 1; i <= daysInMonth; i++) {
            const day = document.createElement('div');
            day.className = 'day';
            day.textContent = i;

            const dateStr = `${year}-${month.toString().padStart(2, '0')}-${i.toString().padStart(2, '0')}`;

            // Destacar o dia atual
            if (dateStr === todayStr) {
                day.classList.add('today');
            }

            // Adicionar evento de clique para mostrar os compromissos
            day.addEventListener('click', function() {
                showAppointments(dateStr);
            });

            calendar.appendChild(day);
        }
    }

    // Função para mostrar os compromissos
    function showAppointments(date) {
        agenda.innerHTML = `<h2>Compromissos para ${date}</h2>`;
        const dateAppointments = appointments[date];

        if (dateAppointments) {
            const list = document.createElement('ul');
            dateAppointments.forEach(appointment => {
                const listItem = document.createElement('li');
                listItem.textContent = appointment;
                list.appendChild(listItem);
            });
            agenda.appendChild(list);
        } else {
            agenda.innerHTML += '<p>Nenhum compromisso agendado.</p>';
        }
    }

    // Gerar o calendário para o mês atual e mostrar compromissos para hoje
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    generateCalendar(year, month);
    const todayStr = `${year}-${month.toString().padStart(2, '0')}-${today.getDate().toString().padStart(2, '0')}`;
    showAppointments(todayStr);
});
