const materias = [
    { nome: "Matemática", dia: "Segunda", horario: "08:00 - 10:00" },
    { nome: "Física", dia: "Terça", horario: "10:00 - 12:00" },
    { nome: "Química", dia: "Quarta", horario: "14:00 - 16:00" },
    { nome: "História", dia: "Quinta", horario: "08:00 - 10:00" },
    { nome: "Geografia", dia: "Sexta", horario: "16:00 - 18:00" },
    { nome: "Biologia", dia: "Segunda", horario: "08:00 - 10:00" }, // Conflito com Matemática
];

const materiasLista = document.getElementById("materias-lista");
const tabelaHorarios = document.getElementById("tabela-horarios").getElementsByTagName("tbody")[0];
const conflitosDiv = document.getElementById("conflitos");

materias.forEach((materia, index) => {
    const div = document.createElement("div");
    div.classList.add("materia");

    const label = document.createElement("label");
    label.innerText = `${materia.nome} (${materia.dia}, ${materia.horario})`;

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.value = index;

    div.appendChild(label);
    div.appendChild(checkbox);
    materiasLista.appendChild(div);
});

document.getElementById("gerar-horario").addEventListener("click", () => {
    let selecionadas = [];
    let conflitos = [];

    // Limpa tabela e conflitos
    Array.from(tabelaHorarios.getElementsByTagName("td")).forEach(td => td.innerText = "");
    conflitosDiv.innerHTML = "";

    // Obtém matérias selecionadas
    document.querySelectorAll("#materias-lista input:checked").forEach(input => {
        selecionadas.push(materias[input.value]);
    });

    let ocupacao = {};

    // Preenche a tabela e verifica conflitos
    selecionadas.forEach(materia => {
        let key = `${materia.dia}-${materia.horario}`;
        if (ocupacao[key]) {
            conflitos.push(`Conflito entre ${ocupacao[key]} e ${materia.nome} (${materia.dia}, ${materia.horario})`);
        } else {
            ocupacao[key] = materia.nome;
            preencherTabela(materia.dia, materia.horario, materia.nome);
        }
    });

    // Exibe conflitos
    if (conflitos.length > 0) {
        conflitosDiv.innerHTML = `<h3>⚠️ Conflitos de Horário:</h3><ul>${conflitos.map(c => `<li>${c}</li>`).join('')}</ul>`;
    }
});

function preencherTabela(dia, horario, nome) {
    let colunas = { "Segunda": 1, "Terça": 2, "Quarta": 3, "Quinta": 4, "Sexta": 5 };
    let linhas = { "08:00 - 10:00": 0, "10:00 - 12:00": 1, "14:00 - 16:00": 2, "16:00 - 18:00": 3 };

    let celula = tabelaHorarios.rows[linhas[horario]].cells[colunas[dia]];
    if (celula.innerText !== "") {
        celula.classList.add("conflito");
    }
    celula.innerText = nome;
}
