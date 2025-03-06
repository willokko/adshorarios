const periodos = {
    "1º Período": [
        { nome: "Cálculo", horarios: ["M1Seg", "M2Seg", "M1Qua", "M2Qua", "M3Qua"] },
        { nome: "Algoritmos", horarios: ["M1Ter", "M2Ter", "M4Sex", "M5Sex"] },
        { nome: "Fundamentos de Computação", horarios: ["M3Seg", "M4Seg", "M4Ter", "M5Ter"] },
        { nome: "Linguagem de Marcação", horarios: ["M1Qui", "M2Qui", "M1Sex", "M2Sex"] },
        { nome: "Inglês Instrumental", horarios: ["M5Seg", "M3Qui"] },
        { nome: "Português", horarios: ["M4Qua", "M5Qua"] },
    ],
    "2º Período": [
        { nome: "Gerenciamento de Mudanças", horarios: ["T1Seg", "T2Seg"] },
        { nome: "Probabilidade", horarios: ["T1Ter", "T2Ter", "T1Qua", "T2Qua", "T3Qua"] },
        { nome: "Estruturas de Dados", horarios: ["T3Seg", "T4Seg", "T5Seg", "T3Ter", "T4Ter", "T5Ter"] },
        { nome: "Redes", horarios: ["T3Qua", "T4Qua", "T5Qua", "T1Qui", "T2Qui"] },
        { nome: "Laboratório de Sistemas Web", horarios: ["T1Qui", "T2Qui", "T5Sex"] },
        { nome: "Sociedade e Tecnologia da Informação", horarios: ["T4Sex", "T5Sex"] },
    ],
    "3º Período": [
        { nome: "Projeto e Desenvolvimento de Software", horarios: ["M1Seg", "M2Seg", "M1Ter", "M2Ter", "M3Qua"] },
        { nome: "Programação Orientada a Objetos", horarios: ["M3Ter", "M4Ter", "M1Qua", "M2Qua", "M4Qua", "M5Qua"] },
        { nome: "Banco de Dados I", horarios: ["M1Qui", "M2Qui", "M4Qui", "M5Qui"] },
        { nome: "Metodologia", horarios: ["M4Sex", "M5Sex"] },
        { nome: "Sistemas Operacionais", horarios: ["M1Sex", "M2Sex", "M3Sex", "M4Sex"] },
    ],
    "4º Período": [
        { nome: "Análise e Projeção de Sistemas", horarios: ["T1Ter", "T2Ter", "T3Ter", "T4Ter", "T5Ter"] },
        { nome: "Laboratório de Redes", horarios: ["T1Ter", "T2Ter", "T3Ter"] },
        { nome: "Banco de Dados II", horarios: ["T1Ter", "T2Ter", "T3Ter", "T4Ter", "T5Ter"] },
        { nome: "Teste de Software", horarios: ["T1Ter", "T2Ter", "T3Ter"] },
        { nome: "Gerenciamento de Projetos", horarios: ["T1Ter", "T2Ter", "T3Ter", "T4Ter", "T5Ter"] },
        { nome: "Programação Web I", horarios: ["T3Ter", "T4Ter", "T5Ter"] },
    ],
    "5º Período": [
        { nome: "Interação Humano-Computador", horarios: ["M1Seg", "M2Seg", "M1Ter", "M2Ter"] },
        { nome: "Desenvolvimento de Aplicações Corporativas", horarios: ["M3Seg", "M4Seg", "M5Seg", "M1Qua", "M2Qua", "M3Qua"] },
        { nome: "Segurança da Informação", horarios: ["M3Ter", "M4Ter", "M5Ter", "M1Qui", "M2Qui"] },
        { nome: "Padrões de Projeto", horarios: ["M4Qua", "M5Qua", "M4Qui", "M5Qui"] },
        { nome: "Programação para Dispositivos Móveis", horarios: ["M1Sex", "M2Sex", "M3Sex", "M4Sex", "M5Sex"] },
    ],
    "6º Período": [
        { nome: "Trabalho de Conclusão de Curso II", horarios: ["T1Ter", "T2Ter"] },
        { nome: "Língua Brasileira de Sinais", horarios: ["M3Qua", "M4Qua", "M5Qua"] },
        { nome: "Empreendedorismo", horarios: ["T1Seg", "T2Seg", "T3Seg", "T1Ter"] },
        { nome: "Recursos Humanos em TI", horarios: ["T2Ter", "T3Ter", "T4Qui", "T5Qui"] },
        { nome: "Sistemas Distribuídos", horarios: ["T1Qua", "T2Qua", "T3Qua", "T1Qui", "T2Qui", "T3Qui"] },
        { nome: "Programação Web II", horarios: ["T4Qui", "T5Qui", "T1Sex", "T2Sex"] },
        { nome: "Gestão de Tecnologia da Informação", horarios: ["T4Seg", "T5Seg", "T4Qui", "T5Qui"] },
    ]
};

const listaPeriodos = document.getElementById("materias-lista");
const tabelaHorarios = document.getElementById("tabela-horarios").getElementsByTagName("tbody")[0];
const conflitosDiv = document.getElementById("conflitos");

// Função para criar os dropdowns
function criarDropdowns() {
    const listaPeriodos = document.getElementById("materias-lista");

    Object.keys(periodos).forEach(periodo => {
        const divMaterias = document.createElement("div");
        divMaterias.classList.add("dropdown-materias");

        const tituloPeriodo = document.createElement("h2");
        tituloPeriodo.innerText = periodo;
        divMaterias.appendChild(tituloPeriodo);

        const materiasContainer = document.createElement("div");
        materiasContainer.classList.add("materias-dropdown");

        periodos[periodo].forEach(materia => {
            const div = document.createElement("div");
            div.classList.add("materia-item");

            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.id = materia.nome;
            checkbox.value = materia.horarios.join(", "); // Armazena os horários como valor

            const label = document.createElement("label");
            label.htmlFor = materia.nome;
            label.innerText = materia.nome;

            div.appendChild(checkbox);
            div.appendChild(label);
            materiasContainer.appendChild(div);
        });

        // Adiciona a funcionalidade de dropdown
        tituloPeriodo.addEventListener("click", () => {
            materiasContainer.classList.toggle("active");
        });

        divMaterias.appendChild(materiasContainer);
        listaPeriodos.appendChild(divMaterias);
    });
}

// Chama a função para criar os dropdowns ao carregar a página
window.onload = criarDropdowns;

// Função para gerar o horário
function gerarHorario() {
    const conflitosDiv = document.getElementById('conflitos');
    conflitosDiv.innerHTML = ''; // Limpa os conflitos anteriores
    conflitosDiv.classList.remove('active'); // Remove a classe de ativo

    // Limpa a tabela antes de gerar um novo horário
    const tabelaHorarios = document.getElementById('tabela-horarios').getElementsByTagName('tbody')[0];
    const cells = tabelaHorarios.getElementsByTagName('td');

    // Limpa todas as células da tabela, exceto a primeira coluna
    for (let i = 0; i < cells.length; i++) {
        if (i % 6 !== 0) { // Mantém a primeira coluna (horários)
            cells[i].innerHTML = ''; // Limpa o conteúdo
            cells[i].classList.remove('conflito'); // Remove a classe de conflito
        }
    }

    // Processa as matérias selecionadas
    document.querySelectorAll('input[type="checkbox"]:checked').forEach(checkbox => {
        const materiaItem = checkbox.closest('.materia-item');
        const materiaName = materiaItem.querySelector('label').innerText;
        const horariosTexto = checkbox.value.split(', '); // Obtém os horários da matéria

        horariosTexto.forEach(codigo => {
            const cell = tabelaHorarios.querySelector(`#${codigo}`);
            if (cell) {
                if (cell.innerHTML) {
                    // Se já houver uma matéria na célula, adiciona um conflito
                    cell.classList.add('conflito');
                    conflitosDiv.classList.add('active');
                    conflitosDiv.innerHTML += `<p>Conflito: ${cell.innerHTML} e ${materiaName} em ${codigo}</p>`;
                }
                // Adiciona a matéria à célula
                cell.innerHTML += (cell.innerHTML ? ' / ' : '') + materiaName; // Adiciona a nova matéria
            }
        });
    });
}
