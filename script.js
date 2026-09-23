// ========================================
// RATEMYSETUP
// JavaScript
// ========================================


// PEGAR ELEMENTOS
const form = document.getElementById("setupForm");

const nome = document.getElementById("nome");
const cpu = document.getElementById("cpu");
const gpu = document.getElementById("gpu");
const ram = document.getElementById("ram");
const storage = document.getElementById("storage");
const placaMae = document.getElementById("placaMae");
const fonte = document.getElementById("fonte");
const monitor = document.getElementById("monitor");
const perifericos = document.getElementById("perifericos");
const preco = document.getElementById("preco");


// PREVIEW
const previewNome = document.getElementById("previewNome");
const previewNota = document.getElementById("previewNota");

const nota = document.getElementById("nota");

const gaming = document.getElementById("gaming");
const trabalho = document.getElementById("trabalho");
const visual = document.getElementById("visual");

const gamingBar = document.getElementById("gamingBar");
const trabalhoBar = document.getElementById("trabalhoBar");
const visualBar = document.getElementById("visualBar");

const precoPreview = document.getElementById("precoPreview");


// ========================================
// CALCULAR NOTA
// ========================================

function calcularNota() {

    let notaGaming = 5;
    let notaTrabalho = 5;
    let notaVisual = 5;


    const cpuTexto =
        cpu.value.toLowerCase();

    const gpuTexto =
        gpu.value.toLowerCase();

    const ramTexto =
        ram.value.toLowerCase();

    const perifericosTexto =
        perifericos.value.toLowerCase();


    // GPU

    if (
        gpuTexto.includes("4090") ||
        gpuTexto.includes("4080") ||
        gpuTexto.includes("5090") ||
        gpuTexto.includes("5080")
    ) {

        notaGaming += 4;

    }

    else if (
        gpuTexto.includes("4070") ||
        gpuTexto.includes("5070") ||
        gpuTexto.includes("7900") ||
        gpuTexto.includes("7800")
    ) {

        notaGaming += 3.3;

    }

    else if (
        gpuTexto.includes("4060") ||
        gpuTexto.includes("5060") ||
        gpuTexto.includes("7600") ||
        gpuTexto.includes("3070")
    ) {

        notaGaming += 2.7;

    }

    else if (
        gpuTexto.includes("3060") ||
        gpuTexto.includes("6600") ||
        gpuTexto.includes("2060")
    ) {

        notaGaming += 2;

    }

    else if (gpuTexto !== "") {

        notaGaming += 1;

    }


    // CPU

    if (
        cpuTexto.includes("i9") ||
        cpuTexto.includes("ryzen 9") ||
        cpuTexto.includes("i7") ||
        cpuTexto.includes("ryzen 7")
    ) {

        notaGaming += 0.5;
        notaTrabalho += 2;

    }

    else if (
        cpuTexto.includes("i5") ||
        cpuTexto.includes("ryzen 5")
    ) {

        notaGaming += 0.3;
        notaTrabalho += 1.4;

    }

    else if (cpuTexto !== "") {

        notaTrabalho += 0.7;

    }


    // RAM

    if (
        ramTexto.includes("64") ||
        ramTexto.includes("32")
    ) {

        notaGaming += 0.5;
        notaTrabalho += 1.1;

    }

    else if (ramTexto.includes("16")) {

        notaGaming += 0.3;
        notaTrabalho += 0.7;

    }

    else if (ramTexto !== "") {

        notaTrabalho += 0.3;

    }


    // ARMAZENAMENTO

    if (storage.value !== "") {

        notaTrabalho += 0.3;

    }


    // MONITOR

    if (monitor.value !== "") {

        notaVisual += 1;

    }


    // VISUAL

    if (
        perifericosTexto.includes("rgb") ||
        perifericosTexto.includes("branco") ||
        perifericosTexto.includes("white") ||
        perifericosTexto.includes("clean")
    ) {

        notaVisual += 1.5;

    }


    if (placaMae.value !== "") {

        notaVisual += 0.3;

    }


    if (fonte.value !== "") {

        notaTrabalho += 0.2;

    }


    // LIMITAR ENTRE 1 E 10

    notaGaming =
        Math.min(10, Math.max(1, notaGaming));

    notaTrabalho =
        Math.min(10, Math.max(1, notaTrabalho));

    notaVisual =
        Math.min(10, Math.max(1, notaVisual));


    // NOTA FINAL

    const notaFinal =
        (
            notaGaming * 0.45 +
            notaTrabalho * 0.30 +
            notaVisual * 0.25
        );


    atualizarPreview(
        notaFinal,
        notaGaming,
        notaTrabalho,
        notaVisual
    );
}


// ========================================
// ATUALIZAR PREVIEW
// ========================================

function atualizarPreview(
    notaFinal,
    notaGaming,
    notaTrabalho,
    notaVisual
) {

    previewNome.textContent =
        nome.value || "Seu setup";


    nota.textContent =
        notaFinal.toFixed(1);


    previewNota.textContent =
        notaFinal.toFixed(1) + "/10";


    gaming.textContent =
        notaGaming.toFixed(1);


    trabalho.textContent =
        notaTrabalho.toFixed(1);


    visual.textContent =
        notaVisual.toFixed(1);


    gamingBar.style.width =
        (notaGaming * 10) + "%";


    trabalhoBar.style.width =
        (notaTrabalho * 10) + "%";


    visualBar.style.width =
        (notaVisual * 10) + "%";


    precoPreview.textContent =
        formatarPreco(preco.value);
}


// ========================================
// FORMATAR PREÇO
// ========================================

function formatarPreco(valor) {

    const numero =
        Number(valor) || 0;


    return numero.toLocaleString(
        "pt-BR",
        {
            style: "currency",
            currency: "BRL"
        }
    );
}


// ========================================
// PEGAR DADOS DO FORMULÁRIO
// ========================================

function pegarSetup() {

    return {

        nome: nome.value,

        cpu: cpu.value,

        gpu: gpu.value,

        ram: ram.value,

        storage: storage.value,

        placaMae: placaMae.value,

        fonte: fonte.value,

        monitor: monitor.value,

        perifericos: perifericos.value,

        preco: Number(preco.value) || 0

    };

}


// ========================================
// CALCULAR NOTA DE UM SETUP
// ========================================

function calcularNotaSetup(setup) {

    let g = 5;
    let t = 5;
    let v = 5;


    const cpuTexto =
        setup.cpu.toLowerCase();

    const gpuTexto =
        setup.gpu.toLowerCase();


    // GPU

    if (
        gpuTexto.includes("4090") ||
        gpuTexto.includes("4080") ||
        gpuTexto.includes("5090") ||
        gpuTexto.includes("5080")
    ) {

        g += 4;

    }

    else if (
        gpuTexto.includes("4070") ||
        gpuTexto.includes("5070") ||
        gpuTexto.includes("7900") ||
        gpuTexto.includes("7800")
    ) {

        g += 3.3;

    }

    else if (
        gpuTexto.includes("4060") ||
        gpuTexto.includes("5060") ||
        gpuTexto.includes("7600") ||
        gpuTexto.includes("3070")
    ) {

        g += 2.7;

    }

    else if (
        gpuTexto.includes("3060") ||
        gpuTexto.includes("6600") ||
        gpuTexto.includes("2060")
    ) {

        g += 2;

    }

    else if (gpuTexto !== "") {

        g += 1;

    }


    // CPU

    if (
        cpuTexto.includes("i9") ||
        cpuTexto.includes("i7") ||
        cpuTexto.includes("ryzen 9") ||
        cpuTexto.includes("ryzen 7")
    ) {

        g += 0.5;
        t += 2;

    }

    else if (
        cpuTexto.includes("i5") ||
        cpuTexto.includes("ryzen 5")
    ) {

        g += 0.3;
        t += 1.4;

    }

    else if (cpuTexto !== "") {

        t += 0.7;

    }


    // RAM

    const ramTexto =
        setup.ram.toLowerCase();


    if (
        ramTexto.includes("32") ||
        ramTexto.includes("64")
    ) {

        g += 0.5;
        t += 1.1;

    }

    else if (ramTexto.includes("16")) {

        g += 0.3;
        t += 0.7;

    }


    if (setup.storage !== "") {

        t += 0.3;

    }


    if (setup.monitor !== "") {

        v += 1;

    }


    const perif =
        setup.perifericos.toLowerCase();


    if (
        perif.includes("rgb") ||
        perif.includes("branco") ||
        perif.includes("white") ||
        perif.includes("clean")
    ) {

        v += 1.5;

    }


    if (setup.placaMae !== "") {

        v += 0.3;

    }


    if (setup.fonte !== "") {

        t += 0.2;

    }


    g = Math.min(10, g);
    t = Math.min(10, t);
    v = Math.min(10, v);


    const final =
        g * 0.45 +
        t * 0.30 +
        v * 0.25;


    return {

        gaming: g,

        trabalho: t,

        visual: v,

        nota: final

    };

}


// ========================================
// SALVAR SETUP
// ========================================

form.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();


        const setup =
            pegarSetup();


        if (setup.nome === "") {

            alert(
                "Digite um nome para o setup."
            );

            return;

        }


        const setups =
            JSON.parse(
                localStorage.getItem(
                    "ratemysetup"
                )
            ) || [];


        setups.push(setup);


        localStorage.setItem(
            "ratemysetup",
            JSON.stringify(setups)
        );


        document.getElementById(
            "status"
        ).textContent =
            "Salvo com sucesso!";


        renderizarSetups();


        document.getElementById(
            "ranking"
        ).scrollIntoView({
            behavior: "smooth"
        });

    }
);


// ========================================
// RENDERIZAR RANKING
// ========================================

function renderizarSetups() {

    const lista =
        document.getElementById(
            "listaSetups"
        );


    const setups =
        JSON.parse(
            localStorage.getItem(
                "ratemysetup"
            )
        ) || [];


    if (setups.length === 0) {

        lista.innerHTML = `
        
            <div class="vazio">

                <strong>
                    Nenhum setup cadastrado
                </strong>

                Crie o primeiro setup acima!

            </div>

        `;

        return;

    }


    // Criar notas

    const setupsComNota =
        setups.map(function(setup) {

            const avaliacao =
                calcularNotaSetup(setup);


            return {

                ...setup,

                ...avaliacao

            };

        });


    // Ordenar pela nota

    setupsComNota.sort(
        (a, b) =>
            b.nota - a.nota
    );


    lista.innerHTML =
        setupsComNota.map(
            function(setup, index) {

                return `

                <article class="setup-card">

                    <div class="setup-top">

                        <div>

                            <h3>
                                ${escapar(
                                    setup.nome
                                )}
                            </h3>

                            <div class="posicao">
                                #${index + 1} no ranking
                            </div>

                        </div>

                        <div class="setup-nota">
                            ${setup.nota.toFixed(1)}
                        </div>

                    </div>


                    <div class="tags">

                        ${criarTag(setup.cpu)}

                        ${criarTag(setup.gpu)}

                        ${criarTag(setup.ram)}

                        ${criarTag(setup.storage)}

                    </div>


                    <div class="setup-bottom">

                        <span>
                            🎮 ${setup.gaming.toFixed(1)}
                            ·
                            💼 ${setup.trabalho.toFixed(1)}
                        </span>

                        <strong>
                            ${formatarPreco(
                                setup.preco
                            )}
                        </strong>

                    </div>

                </article>

                `;

            }
        ).join("");

}


// ========================================
// CRIAR TAG
// ========================================

function criarTag(texto) {

    if (!texto) {

        return "";

    }


    return `
    
        <span class="tag">
            ${escapar(texto)}
        </span>

    `;

}


// ========================================
// SEGURANÇA DO TEXTO
// ========================================

function escapar(texto) {

    return String(texto)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");

}


// ========================================
// LIMPAR FORMULÁRIO
// ========================================

document.getElementById(
    "limpar"
).addEventListener(
    "click",
    function() {

        form.reset();

        document.getElementById(
            "status"
        ).textContent =
            "Novo setup";


        calcularNota();

    }
);


// ========================================
// APAGAR TODOS OS SETUPS
// ========================================

document.getElementById(
    "apagarTudo"
).addEventListener(
    "click",
    function() {

        const confirmar =
            confirm(
                "Tem certeza que deseja apagar todos os setups?"
            );


        if (!confirmar) {

            return;

        }


        localStorage.removeItem(
            "ratemysetup"
        );


        renderizarSetups();

    }
);


// ========================================
// MODO CLARO / ESCURO
// ========================================

const temaBtn =
    document.getElementById(
        "temaBtn"
    );


temaBtn.addEventListener(
    "click",
    function() {

        document.body.classList.toggle(
            "claro"
        );


        if (
            document.body.classList.contains(
                "claro"
            )
        ) {

            temaBtn.textContent =
                "🌙";


            localStorage.setItem(
                "tema",
                "claro"
            );

        }

        else {

            temaBtn.textContent =
                "☀️";


            localStorage.setItem(
                "tema",
                "escuro"
            );

        }

    }
);


// ========================================
// CARREGAR TEMA
// ========================================

if (
    localStorage.getItem("tema")
    ===
    "claro"
) {

    document.body.classList.add(
        "claro"
    );

    temaBtn.textContent =
        "🌙";

}


// ========================================
// ATUALIZAR PREVIEW ENQUANTO DIGITA
// ========================================

const campos = [

    nome,
    cpu,
    gpu,
    ram,
    storage,
    placaMae,
    fonte,
    monitor,
    perifericos,
    preco

];


campos.forEach(
    function(campo) {

        campo.addEventListener(
            "input",
            calcularNota
        );

    }
);


// ========================================
// INICIAR
// ========================================

calcularNota();

renderizarSetups();