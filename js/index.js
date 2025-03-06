const periodos = {
    "1º Período": [
        { nome: "Cálculo", horarios: ["Segunda: 07:00 - 07:50", "Segunda: 07:50 - 08:40", "Quarta: 07:00 - 07:50", "Quarta: 07:50 - 08:40", "Quarta: 08:40 - 09:30"] },
        { nome: "Algoritmos", horarios: ["Terça: 07:00 - 07:50", "Terça: 07:50 - 08:40", "Sexta: 09:45 - 10:35", "Sexta: 10:35 - 11:25"] },
        { nome: "Fund. Computação", horarios: ["Segunda: 08:40 - 09:30", "Segunda: 09:45 - 10:35", "Terça: 09:45 - 10:35", "Terça: 10:35 - 11:25"] },
        { nome: "Ling. Marcação", horarios: ["Quinta: 07:00 - 07:50", "Quinta: 07:50 - 08:40", "Sexta: 07:00 - 07:50", "Sexta: 07:50 - 08:40"] },
        { nome: "Inglês Inst.", horarios: ["Segunda: 10:35 - 11:25", "Quinta: 08:40 - 09:30"] },
        { nome: "Português", horarios: ["Quarta: 09:45 - 10:35", "Quarta: 10:35 - 11:25"] },
    ],
    "2º Período": [
        { nome: "Ger. Mudanças", horarios: ["Segunda: 13:00 - 13:50", "Segunda: 13:50 - 14:40"] },
        { nome: "Probabilidade", horarios: ["Terça: 13:00 - 13:50", "Terça: 13:50 - 14:40", "Quarta: 13:00 - 13:50", "Quarta: 13:50 - 14:40"] },
        { nome: "Est. Dados", horarios: ["Segunda: 14:30 - 15:20", "Segunda: 15:25 - 16:15", "Segunda: 16:35 - 17:25"] },
        { nome: "Redes", horarios: ["Quinta: 13:00 - 13:50", "Quinta: 13:50 - 14:40", "Quinta: 14:30 - 15:20"] },
        { nome: "L. S. Web", horarios: ["Sexta: 13:00 - 13:50", "Sexta: 13:50 - 14:40"] },
        { nome: "Soc. Tec. Inf.", horarios: ["Sexta: 16:35 - 17:25"] },
    ],
    "3º Período": [
        { nome: "Proj. Desenv. Software", horarios: ["Segunda: 07:00 - 07:50", "Segunda: 07:50 - 08:40", "Terça: 07:00 - 07:50", "Terça: 07:50 - 08:40", "Quarta: 08:40 - 09:30"] },
        { nome: "Prog. Orientada Objetos", horarios: ["Terça: 08:40 - 09:30", "Terça: 09:45 - 10:35", "Terça: 10:35 - 11:25", "Quarta: 07:00 - 07:50", "Quarta: 07:50 - 08:40", "Quarta: 09:45 - 10:35", "Quarta: 10:35 - 11:25"] },
        { nome: "Banco de Dados I", horarios: ["Quinta: 07:00 - 07:50", "Quinta: 07:50 - 08:40", "Quinta: 09:45 - 10:35", "Quinta: 10:35 - 11:25"] },
        { nome: "Metodologia", horarios: ["Sexta: 09:45 - 10:35", "Sexta: 10:35 - 11:25"] },
        { nome: "Sistemas Operacionais", horarios: ["Sexta: 07:00 - 07:50", "Sexta: 07:50 - 08:40", "Sexta: 08:40 - 09:30", "Sexta: 09:45 - 10:35"] },
    ],
    "4º Período": [
        { nome: "Análise Proj. Sistemas", horarios: ["Terça: 13:00 - 13:50", "Terça: 13:50 - 14:40", "Terça: 14:30 - 15:20", "Terça: 15:25 - 16:15", "Terça: 16:35 - 17:25"] },
        { nome: "Lab. Redes", horarios: ["Terça: 13:00 - 13:50", "Terça: 13:50 - 14:40", "Terça: 14:30 - 15:20"] },
        { nome: "Banco de Dados II", horarios: ["Terça: 13:00 - 13:50", "Terça: 13:50 - 14:40", "Terça: 14:30 - 15:20", "Terça: 15:25 - 16:15", "Terça: 16:35 - 17:25"] },
        { nome: "Teste de Software", horarios: ["Terça: 13:00 - 13:50", "Terça: 13:50 - 14:40", "Terça: 14:30 - 15:20"] },
        { nome: "Ger. Projetos", horarios: ["Terça: 13:00 - 13:50", "Terça: 13:50 - 14:40", "Terça: 14:30 - 15:20", "Terça: 15:25 - 16:15", "Terça: 16:35 - 17:25"] },
        { nome: "Prog. Web I", horarios: ["Terça: 14:30 - 15:20", "Terça: 15:25 - 16:15", "Terça: 16:35 - 17:25"] },
    ],
    "5º Período": [
        { nome: "Interação Humano-Computador", horarios: ["Segunda: 07:00 - 07:50", "Segunda: 07:50 - 08:40", "Terça: 07:00 - 07:50", "Terça: 07:50 - 08:40"] },
        { nome: "Desenv. Aplic. Corporativas", horarios: ["Segunda: 08:40 - 09:30", "Segunda: 09:45 - 10:35", "Segunda: 10:35 - 11:25", "Quarta: 07:00 - 07:50", "Quarta: 07:50 - 08:40", "Quarta: 08:40 - 09:30"] },
        { nome: "Segurança da Informação", horarios: ["Terça: 08:40 - 09:30", "Terça: 09:45 - 10:35", "Terça: 10:35 - 11:25", "Quinta: 07:00 - 07:50", "Quinta: 07:50 - 08:40"] },
        { nome: "Padrões de Projeto", horarios: ["Quarta: 09:45 - 10:35", "Quarta: 10:35 - 11:25", "Quinta: 09:45 - 10:35", "Quinta: 10:35 - 11:25"] },
        { nome: "Prog. Dispositivos Móveis", horarios: ["Sexta: 07:00 - 07:50", "Sexta: 07:50 - 08:40", "Sexta: 08:40 - 09:30", "Sexta: 09:45 - 10:35", "Sexta: 10:35 - 11:25"] },
    ],
    "6º Período": [
        { nome: "TCC II", horarios: ["Terça: 13:00 - 13:50", "Terça: 13:50 - 14:40"] },
        { nome: "Libras", horarios: ["Quarta: 08:40 - 09:30", "Quarta: 09:45 - 10:35", "Quarta: 10:35 - 11:25"] },
        { nome: "Empreendedorismo", horarios: ["Segunda: 13:00 - 13:50", "Segunda: 13:50 - 14:40", "Segunda: 14:30 - 15:20", "Terça: 13:00 - 13:50"] },
        { nome: "Recursos Humanos TI", horarios: ["Terça: 13:50 - 14:40", "Terça: 14:30 - 15:20", "Quinta: 15:25 - 16:15", "Quinta: 16:35 - 17:25"] },
        { nome: "Sistemas Distribuídos", horarios: ["Quarta: 13:00 - 13:50", "Quarta: 13:50 - 14:40", "Quarta: 14:30 - 15:20", "Quinta: 13:00 - 13:50", "Quinta: 13:50 - 14:40", "Quinta: 14:30 - 15:20"] },
        { nome: "Prog. Web II", horarios: ["Quinta: 15:25 - 16:15", "Quinta: 16:35 - 17:25", "Sexta: 13:00 - 13:50", "Sexta: 13:50 - 14:40"] },
        { nome: "Gestão TI", horarios: ["Segunda: 15:25 - 16:15", "Segunda: 16:35 - 17:25", "Quinta: 15:25 - 16:15", "Quinta: 16:35 - 17:25"] },
    ]
};

const listaPeriodos = document.getElementById("materias-lista");
const tabelaHorarios = document.getElementById("tabela-horarios").getElementsByTagName("tbody")[0];
const conflitosDiv = document.getElementById("conflitos");

// Criar botões de período
Object.keys(periodos).forEach(periodo => {
    const botaoPeriodo = document.createElement("button");
    botaoPeriodo.innerText = periodo;
    botaoPeriodo.classList.add("btn-periodo");
    botaoPeriodo.addEventListener("click", () => togglePeriodo(periodo));
    listaPeriodos.appendChild(botaoPeriodo);

    const divMaterias = document.createElement("div");
    divMaterias.classList.add("dropdown-materias");
    divMaterias.setAttribute("id", `dropdown-${periodo.replace(" ", "-")}`);
    divMaterias.style.display = "none";

    periodos[periodo].forEach((materia, index) => {
        const div = document.createElement("div");
        div.classList.add("materia-item");

        const label = document.createElement("label");
        
        const spanNome = document.createElement("span");
        spanNome.classList.add("materia-nome");
        spanNome.textContent = materia.nome;
        
        const spanHorarios = document.createElement("span");
        spanHorarios.classList.add("materia-horarios");
        spanHorarios.textContent = materia.horarios.map(h => h.replace("Segunda:", "Seg").replace("Terça:", "Ter").replace("Quarta:", "Qua").replace("Quinta:", "Qui").replace("Sexta:", "Sex")).join(", ");

        label.appendChild(spanNome);
        label.appendChild(spanHorarios);

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.value = `${periodo}-${index}`;

        div.appendChild(checkbox);
        div.appendChild(label);
        divMaterias.appendChild(div);
    });

    listaPeriodos.appendChild(divMaterias);
});

// Função para alternar a visibilidade dos períodos
function togglePeriodo(periodoId) {
    const content = document.getElementById(periodoId);
    if (content) {
        content.style.display = content.style.display === 'none' ? 'block' : 'none';
    }
}

// Função para gerar o horário
function gerarHorario() {
    const horarioTabela = document.getElementById('horarioTabela');
    const conflitosDiv = document.getElementById('conflitos');
    
    // Limpa a tabela e os conflitos
    horarioTabela.innerHTML = '';
    conflitosDiv.innerHTML = '';
    conflitosDiv.classList.remove('active');
    
    // Define todos os horários possíveis
    const horarios = [
        "07:00 - 07:50", "07:50 - 08:40", "08:40 - 09:30", "09:45 - 10:35", "10:35 - 11:25",
        "13:00 - 13:50", "13:50 - 14:40", "14:30 - 15:20", "15:25 - 16:15", "16:35 - 17:25"
    ];

    const dias = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta"];
    const diasAbreviados = ["Seg", "Ter", "Qua", "Qui", "Sex"];
    const conflitos = [];
    const ocupacao = {};

    // Cria a estrutura base da tabela
    horarios.forEach(horario => {
        const row = document.createElement('tr');
        const horarioCell = document.createElement('td');
        horarioCell.textContent = horario;
        row.appendChild(horarioCell);

        dias.forEach(() => {
            const cell = document.createElement('td');
            row.appendChild(cell);
        });

        horarioTabela.appendChild(row);
    });

    // Processa as matérias selecionadas
    document.querySelectorAll('input[type="checkbox"]:checked').forEach(checkbox => {
        const materiaItem = checkbox.closest('.materia-item');
        const materiaName = materiaItem.querySelector('.materia-nome').textContent;
        const horariosTexto = materiaItem.querySelector('.materia-horarios').textContent;
        
        horariosTexto.split(', ').forEach(bloco => {
            const [diaAbreviado, horario] = bloco.split(' ');
            const diaCompleto = dias[diasAbreviados.indexOf(diaAbreviado)];
            const [horaInicio, horaFim] = horario.split('-');
            const colIndex = dias.indexOf(diaCompleto) + 1;

            // Encontra as linhas correspondentes aos horários
            const rowIndexInicio = horarios.findIndex(h => h.startsWith(horaInicio));
            const rowIndexFim = horarios.findIndex(h => h.startsWith(horaFim));

            if (rowIndexInicio !== -1 && colIndex !== 0) {
                for (let i = rowIndexInicio; i <= rowIndexFim; i++) {
                    if (i >= 0 && i < horarioTabela.rows.length) {
                        const cell = horarioTabela.rows[i].cells[colIndex];
                        const key = `${diaCompleto}-${horarios[i]}`;

                        if (ocupacao[key]) {
                            conflitos.push(`Conflito: ${ocupacao[key]} e ${materiaName} em ${diaCompleto} ${horarios[i]}`);
                            cell.classList.add('conflito');
                            cell.textContent += ` / ${materiaName}`;
                        } else {
                            ocupacao[key] = materiaName;
                            cell.textContent = materiaName;
                        }
                    }
                }
            }
        });
    });

    // Mostra conflitos se houver
    if (conflitos.length > 0) {
        conflitosDiv.innerHTML = `
            <h3>⚠️ Conflitos Encontrados:</h3>
            <ul>
                ${conflitos.map(conflito => `<li>${conflito}</li>`).join('')}
            </ul>
        `;
        conflitosDiv.classList.add('active');
    }
}
