const periodos = {
    "1º Período": [
        { nome: "Cálculo", horarios: ["M1Seg", "M2Seg", "M3Ter","M1Qua", "M2Qua", "M3Qua"] },
        { nome: "Algoritmos", horarios: ["M1Ter", "M2Ter", "M4Qui", "M5Qui", "M3Sex", "M4Sex", "M5Sex"] },
        { nome: "Fundamentos de Computação", horarios: ["M3Seg", "M4Seg", "M4Ter", "M5Ter"] },
        { nome: "Linguagem de Marcação", horarios: ["M1Qui", "M2Qui", "M1Sex", "M2Sex"] },
        { nome: "Inglês Instrumental", horarios: ["M5Seg", "M3Qui"] },
        { nome: "Português", horarios: ["M4Qua", "M5Qua"] },
    ],
    "2º Período": [
        { nome: "Gerenciamento de Mudanças", horarios: ["T1Seg", "T2Seg"] },
        { nome: "Probabilidade", horarios: ["T1Ter", "T2Ter", "T1Qua", "T2Qua", "T3Qua"] },
        { nome: "Estruturas de Dados", horarios: ["T3Seg", "T4Seg", "T5Seg", "T3Ter", "T4Ter", "T5Ter"] },
        { nome: "Redes", horarios: ["T4Qua", "T5Qua", "T1Qui", "T2Qui", "T3Qui", "T4Qui"] },
        { nome: "Laboratório de Sistemas Web", horarios: ["T5Qui","T1Sex ", "T2Sex", "T3Sex"] },
        { nome: "Sociedade e Tecnologia da Informação", horarios: ["T4Sex", "T5Sex"] },
    ],
    "3º Período": [
        { nome: "Projeto e Desenvolvimento de Software", horarios: ["M1Seg", "M2Seg", "M1Ter", "M2Ter", "M3Ter"] },
        { nome: "Programação Orientada a Objetos", horarios: ["M3Seg", "M4Seg", "M5Seg", "M1Qua", "M2Qua", "M3Qua"] },
        { nome: "Banco de Dados I", horarios: ["M4Ter", "M5Ter", "M1Qui", "M2Qui", "M3Qui", "M1Sex", "M2Sex"] },
        { nome: "Metodologia", horarios: ["M4Qua", "M5Qua"] },
        { nome: "Sistemas Operacionais", horarios: ["M4Qui", "M5Qui","M3Sex", "M4Sex", "M5Sex"] },
    ],
    "4º Período": [
        { nome: "Análise e Projeção de Sistemas", horarios: ["T1Seg", "T2Seg", "T3Seg", "T4Ter", "T5Ter"] },
        { nome: "Laboratório de Redes", horarios: ["T1Ter", "T2Ter", "T3Ter"] },
        { nome: "Banco de Dados II", horarios: ["T4Seg", "T5Seg", "T1Qua", "T2Qua", "T3Qua"] },
        { nome: "Teste de Software", horarios: ["T1Qui", "T2Qui", "T3Qui"] },
        { nome: "Gerenciamento de Projetos", horarios: ["T4Qua", "T5Qua", "T1Sex", "T2Sex"] },
        { nome: "Programação Web I", horarios: ["T4Qui", "T5Qui", "T3Sex", "T4Sex", "T5Sex"] },
    ],
    "5º Período": [
        { nome: "Interação Humano-Computador", horarios: ["M1Seg", "M2Seg", "M1Ter", "M2Ter"] },
        { nome: "Desenvolvimento de Aplicações Corporativas", horarios: ["M3Seg", "M4Seg", "M5Seg", "M1Qua", "M2Qua", "M3Qua"] },
        { nome: "Segurança da Informação", horarios: ["M3Ter", "M4Ter", "M5Ter", "M1Qui", "M2Qui"] },
        { nome: "Padrões de Projeto", horarios: ["M4Qua", "M5Qua", "M3Qui","M4Qui", "M5Qui"] },
        { nome: "Programação para Dispositivos Móveis", horarios: ["M2Sex", "M3Sex", "M4Sex", "M5Sex"] },
    ],
    "6º Período": [
        { nome: "Trabalho de Conclusão de Curso II", horarios: ["M1Ter", "M2Ter"] },
        { nome: "Língua Brasileira de Sinais", horarios: ["M3Ter", "M4Ter", "M5Ter"] },
        { nome: "Empreendedorismo", horarios: ["T1Seg", "T2Seg", "T3Seg", "T1Ter"] },
        { nome: "Recursos Humanos em TI", horarios: ["T2Ter", "T3Ter", "T4Qua", "T5Qua"] },
        { nome: "Sistemas Distribuídos", horarios: ["T4Ter", "T5Ter", "T1Qua", "T2Qua", "T3Qua"] },
        { nome: "Programação Web II", horarios: ["T1Qui","T2Qui", "T3Qui", "T1Sex", "T2Sex"] },
        { nome: "Gestão de Tecnologia da Informação", horarios: ["T4Seg", "T5Seg", "T4Qui", "T5Qui"] },
    ]
};

const listaPeriodos = document.getElementById("materias-lista");
const tabelaHorarios = document.getElementById("tabela-horarios").getElementsByTagName("tbody")[0];
const conflitosDiv = document.getElementById("conflitos");

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
            checkbox.value = materia.horarios.join(", ");

            checkbox.addEventListener('change', () => {
                gerarHorario();
            });

            const label = document.createElement("label");
            label.htmlFor = materia.nome;
            label.innerText = materia.nome;

            div.appendChild(checkbox);
            div.appendChild(label);
            materiasContainer.appendChild(div);
        });

        tituloPeriodo.addEventListener("click", () => {
            materiasContainer.classList.toggle("active");
        });

        divMaterias.appendChild(materiasContainer);
        listaPeriodos.appendChild(divMaterias);
    });
}

window.onload = criarDropdowns;

function gerarHorario() {
    const conflitosDiv = document.getElementById('conflitos');
    conflitosDiv.innerHTML = ''; 
    conflitosDiv.classList.remove('active'); 

    const tabelaHorarios = document.getElementById('tabela-horarios').getElementsByTagName('tbody')[0];
    const cells = tabelaHorarios.getElementsByTagName('td');

    for (let i = 0; i < cells.length; i++) {
        if (i % 6 !== 0) { 
            cells[i].innerHTML = ''; 
            cells[i].classList.remove('conflito');
        }
    }
    document.querySelectorAll('input[type="checkbox"]:checked').forEach(checkbox => {
        const materiaItem = checkbox.closest('.materia-item');
        const materiaName = materiaItem.querySelector('label').innerText;
        const horariosTexto = checkbox.value.split(', '); 
        horariosTexto.forEach(codigo => {
            const cell = tabelaHorarios.querySelector(`#${codigo}`);
            if (cell) {
                if (cell.innerHTML) {
                    cell.classList.add('conflito');
                    conflitosDiv.classList.add('active');
                    conflitosDiv.innerHTML += `<p>Conflito: ${cell.innerHTML} e ${materiaName} em ${codigo}</p>`;
                }
                cell.innerHTML += (cell.innerHTML ? ' / ' : '') + materiaName;
            }
        });
    });
}

function limparSelecao() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    
    checkboxes.forEach(checkbox => {
        checkbox.checked = false;
    });
    gerarHorario();
}

function exportarPDF() {
    // Seleciona a seção que contém a tabela
    const element = document.querySelector('section');
    
    // Configurações específicas para capturar toda a tabela
    const opt = {
        margin: 10,
        filename: 'horario-ads.pdf',
        image: { type: 'jpeg', quality: 1 },
        html2canvas: { 
            scale: 1.5,
            useCORS: true,
            letterRendering: true,
            scrollX: 0,
            scrollY: 0,
            windowWidth: element.scrollWidth + 200, // Adiciona margem extra
            windowHeight: element.scrollHeight + 200 // Adiciona margem extra
        },
        jsPDF: { 
            unit: 'mm', 
            format: 'a3', // Usa formato A3 que é maior
            orientation: 'landscape',
            compress: false
        }
    };

    // Cria um container temporário com estilo específico
    const container = document.createElement('div');
    container.style.width = '100%';
    container.style.padding = '20px';
    container.style.backgroundColor = 'white';
    
    // Clone a tabela original
    const conteudo = element.cloneNode(true);
    
    // Ajusta o estilo da tabela clonada para garantir que fique completa
    const tabela = conteudo.querySelector('table');
    tabela.style.width = '100%';
    tabela.style.tableLayout = 'fixed';
    tabela.style.pageBreakInside = 'avoid';
    
    // Adiciona ao container
    container.appendChild(conteudo);
    
    // Aplica a exportação com as novas configurações
    html2pdf()
        .from(container)
        .set(opt)
        .save()
        .catch(err => {
            console.error('Erro ao gerar PDF:', err);
            alert('Ocorreu um erro ao gerar o PDF. Por favor, tente novamente.');
        });
}
