```javascript
window.addEventListener("load", function () {

    // FORMULÁRIO
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

    const salvarBtn = document.getElementById("salvarBtn");
    const limparBtn = document.getElementById("limparBtn");
    const apagarBtn = document.getElementById("apagarBtn");
    const mensagemErro = document.getElementById("mensagemErro");

    // PRÉVIA
    const previewNome = document.getElementById("previewNome");
    const previewCpu = document.getElementById("previewCpu");
    const previewGpu = document.getElementById("previewGpu");
    const previewRam = document.getElementById("previewRam");
    const previewStorage = document.getElementById("previewStorage");
    const previewMonitor = document.getElementById("previewMonitor");

    const notaFinal = document.getElementById("notaFinal");
    const notaGaming = document.getElementById("notaGaming");
    const notaTrabalho = document.getElementById("notaTrabalho");
    const notaVisual = document.getElementById("notaVisual");

    const barraGaming = document.getElementById("barraGaming");
    const barraTrabalho = document.getElementById("barraTrabalho");
    const barraVisual = document.getElementById("barraVisual");

    const temaBtn = document.getElementById("temaBtn");
    const listaRanking = document.getElementById("listaRanking");


    // PONTOS DOS COMPONENTES

    const pontosCPU = {
        "ryzen5-5600": 6.5,
        "ryzen5-7600": 7.5,
        "ryzen5-7600x": 8,
        "ryzen7-5700x": 7.5,
        "ryzen7-7800x3d": 10,
        "ryzen7-9700x": 9,
        "ryzen9-7900x": 9.5,
        "i3-12100f": 5.5,
        "i5-12400f": 6.5,
        "i5-13400f": 7.5,
        "i5-14400f": 8,
        "i5-14600k": 8.5,
        "i7-13700k": 9,
        "i7-14700k": 9.5,
        "i9-14900k": 10
    };

    const pontosGPU = {
        "gtx1650": 4.5,
        "rtx3060": 6,
        "rtx4060": 6.5,
        "rtx4060ti": 7,
        "rtx4070": 8,
        "rtx4070super": 8.5,
        "rtx4070ti": 9,
        "rtx4080": 9.5,
        "rtx4090": 10,
        "rx6600": 5.5,
        "rx7600": 6.5,
        "rx7700xt": 8,
        "rx7800xt": 8.5,
        "rx7900xt": 9,
        "rx7900xtx": 9.5
    };

    const pontosRAM = {
        "8": 4,
        "16": 7,
        "32": 9,
        "64": 10,
        "128": 10
    };

    const pontosStorage = {
        "ssd480": 5,
        "ssd1tb": 6.5,
        "ssd2tb": 7,
        "nvme1tb": 8,
        "nvme2tb": 9,
        "nvme4tb": 10
    };

    const pontosPlacaMae = {
        "a520": 5,
        "b450": 5.5,
        "b550": 7,
        "b650": 8,
        "x670": 9,
        "h610": 5,
        "b660": 7,
        "b760": 8,
        "z690": 9,
        "z790": 10
    };

    const pontosFonte = {
        "500w": 5,
        "550w": 6,
        "600w": 6.5,
        "650w": 7.5,
        "750w": 8.5,
        "850w": 9,
        "1000w": 9.5,
        "1200w": 10
    };

    const pontosMonitor = {
        "1080p60": 5,
        "1080p144": 7,
        "1080p165": 7.5,
        "1440p144": 8,
        "1440p165": 8.5,
        "1440p240": 9,
        "4k60": 8.5,
        "4k144": 10
    };

    const pontosPerifericos = {
        "basico": 5,
        "intermediario": 7,
        "gamer": 8.5,
        "premium": 10
    };


    // TEXTO DA OPÇÃO

    function textoSelecionado(select) {
        if (select.value === "") {
            return "—";
        }

        return select.options[select.selectedIndex].text;
    }


    // LIMITAR NOTA

    function limitarNota(valor) {
        if (valor < 0) {
            return 0;
        }

        if (valor > 10) {
            return 10;
        }

        return valor;
    }


    // CALCULAR NOTA

    function calcularNota() {

        const cpuPontos = pontosCPU[cpu.value] || 0;
        const gpuPontos = pontosGPU[gpu.value] || 0;
        const ramPontos = pontosRAM[ram.value] || 0;
        const storagePontos = pontosStorage[storage.value] || 0;
        const placaMaePontos = pontosPlacaMae[placaMae.value] || 0;
        const fontePontos = pontosFonte[fonte.value] || 0;
        const monitorPontos = pontosMonitor[monitor.value] || 0;
        const perifericosPontos = pontosPerifericos[perifericos.value] || 0;

        let gaming =
            gpuPontos * 0.55 +
            cpuPontos * 0.25 +
            ramPontos * 0.10 +
            monitorPontos * 0.10;

        let trabalho =
            cpuPontos * 0.40 +
            ramPontos * 0.25 +
            storagePontos * 0.15 +
            gpuPontos * 0.10 +
            placaMaePontos * 0.10;

        let visual =
            perifericosPontos * 0.45 +
            monitorPontos * 0.35 +
            placaMaePontos * 0.10 +
            fontePontos * 0.10;

        let final =
            gaming * 0.45 +
            trabalho * 0.30 +
            visual * 0.25;

        gaming = limitarNota(gaming);
        trabalho = limitarNota(trabalho);
        visual = limitarNota(visual);
        final = limitarNota(final);

        notaGaming.textContent = gaming.toFixed(1);
        notaTrabalho.textContent = trabalho.toFixed(1);
        notaVisual.textContent = visual.toFixed(1);
        notaFinal.textContent = final.toFixed(1);

        barraGaming.style.width = (gaming * 10) + "%";
        barraTrabalho.style.width = (trabalho * 10) + "%";
        barraVisual.style.width = (visual * 10) + "%";

        return {
            gaming: gaming,
            trabalho: trabalho,
            visual: visual,
            final: final
        };
    }


    // ATUALIZAR PRÉVIA

    function atualizarPreview() {

        previewNome.textContent = nome.value.trim() || "Seu Setup";
        previewCpu.textContent = textoSelecionado(cpu);
        previewGpu.textContent = textoSelecionado(gpu);

        if (ram.value !== "") {
            previewRam.textContent = ram.value + " GB";
        } else {
            previewRam.textContent = "—";
        }

        previewStorage.textContent = textoSelecionado(storage);
        previewMonitor.textContent = textoSelecionado(monitor);

        if (
            cpu.value !== "" &&
            gpu.value !== "" &&
            ram.value !== "" &&
            storage.value !== "" &&
            placaMae.value !== "" &&
            fonte.value !== "" &&
            monitor.value !== "" &&
            perifericos.value !== ""
        ) {
            calcularNota();
        } else {
            notaFinal.textContent = "0.0";
            notaGaming.textContent = "0.0";
            notaTrabalho.textContent = "0.0";
            notaVisual.textContent = "0.0";

            barraGaming.style.width = "0%";
            barraTrabalho.style.width = "0%";
            barraVisual.style.width = "0%";
        }
    }


    // VERIFICAR FORMULÁRIO

    function formularioValido() {

        if (nome.value.trim() === "") {
            mensagemErro.textContent = "Digite um nome para o setup.";
            return false;
        }

        if (cpu.value === "") {
            mensagemErro.textContent = "Selecione um processador.";
            return false;
        }

        if (gpu.value === "") {
            mensagemErro.textContent = "Selecione uma placa de vídeo.";
            return false;
        }

        if (ram.value === "") {
            mensagemErro.textContent = "Selecione a memória RAM.";
            return false;
        }

        if (placaMae.value === "") {
            mensagemErro.textContent = "Selecione uma placa-mãe.";
            return false;
        }

        if (storage.value === "") {
            mensagemErro.textContent = "Selecione o armazenamento.";
            return false;
        }

        if (fonte.value === "") {
            mensagemErro.textContent = "Selecione a fonte.";
            return false;
        }

        if (monitor.value === "") {
            mensagemErro.textContent = "Selecione o monitor.";
            return false;
        }

        if (perifericos.value === "") {
            mensagemErro.textContent = "Selecione os periféricos.";
            return false;
        }

        if (preco.value === "" || Number(preco.value) <= 0) {
            mensagemErro.textContent = "Digite um preço válido.";
            return false;
        }

        mensagemErro.textContent = "";

        return true;
    }


    // SALVAR SETUP

    function salvarSetup() {

        if (!formularioValido()) {
            return;
        }

        const notas = calcularNota();

        const setup = {
            id: Date.now(),
            nome: nome.value.trim(),
            cpu: textoSelecionado(cpu),
            gpu: textoSelecionado(gpu),
            ram: ram.value + " GB",
            storage: textoSelecionado(storage),
            placaMae: textoSelecionado(placaMae),
            fonte: textoSelecionado(fonte),
            monitor: textoSelecionado(monitor),
            perifericos: textoSelecionado(perifericos),
            preco: Number(preco.value),
            gaming: notas.gaming,
            trabalho: notas.trabalho,
            visual: notas.visual,
            nota: notas.final
        };

        let setups = JSON.parse(
            localStorage.getItem("ratemysetup")
        );

        if (!Array.isArray(setups)) {
            setups = [];
        }

        setups.push(setup);

        localStorage.setItem(
            "ratemysetup",
            JSON.stringify(setups)
        );

        alert("Setup salvo com sucesso! 🚀");

        limparFormulario();
        renderizarSetups();
    }


    // ESCAPAR TEXTO

    function escapar(texto) {
        return String(texto)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }


    // RANKING

    function renderizarSetups() {

        let setups = JSON.parse(
            localStorage.getItem("ratemysetup")
        );

        if (!Array.isArray(setups)) {
            setups = [];
        }

        setups.sort(function (a, b) {
            return b.nota - a.nota;
        });

        listaRanking.innerHTML = "";

        if (setups.length === 0) {

            const vazio = document.createElement("div");

            vazio.className = "ranking-vazio";

            vazio.innerHTML =
                "<div>🖥️</div>" +
                "<h3>Nenhum setup ainda</h3>" +
                "<p>Crie seu primeiro setup para aparecer aqui.</p>";

            listaRanking.appendChild(vazio);

            return;
        }

        setups.forEach(function (setup, index) {

            const item = document.createElement("div");

            item.className = "ranking-item";

            const posicao = document.createElement("div");
            posicao.className = "ranking-posicao";
            posicao.textContent = "#" + (index + 1);

            const informacoes = document.createElement("div");
            informacoes.className = "ranking-info";

            const titulo = document.createElement("h3");
            titulo.textContent = setup.nome;

            const componentes = document.createElement("p");
            componentes.textContent =
                setup.cpu + " • " +
                setup.gpu + " • " +
                setup.ram;

            const valor = document.createElement("p");
            valor.textContent =
                "R$ " +
                Number(setup.preco).toLocaleString("pt-BR");

            const nota = document.createElement("div");
            nota.className = "ranking-nota";

            const numero = document.createElement("strong");
            numero.textContent = Number(setup.nota).toFixed(1);

            const total = document.createElement("span");
            total.textContent = "/10";

            nota.appendChild(numero);
            nota.appendChild(total);

            informacoes.appendChild(titulo);
            informacoes.appendChild(componentes);
            informacoes.appendChild(valor);

            item.appendChild(posicao);
            item.appendChild(informacoes);
            item.appendChild(nota);

            listaRanking.appendChild(item);
        });
    }


    // LIMPAR

    function limparFormulario() {

        nome.value = "";
        cpu.value = "";
        gpu.value = "";
        ram.value = "";
        storage.value = "";
        placaMae.value = "";
        fonte.value = "";
        monitor.value = "";
        perifericos.value = "";
        preco.value = "";

        mensagemErro.textContent = "";

        atualizarPreview();
    }


    // APAGAR TODOS

    function apagarTodos() {

        const confirmar = confirm(
            "Tem certeza que deseja apagar todos os seus setups?"
        );

        if (!confirmar) {
            return;
        }

        localStorage.removeItem("ratemysetup");

        renderizarSetups();
    }


    // MODO ESCURO / CLARO

    function atualizarTema() {

        const tema = localStorage.getItem("tema");

        if (tema === "claro") {
            document.body.classList.add("claro");
            temaBtn.textContent = "🌙";
        } else {
            document.body.classList.remove("claro");
            temaBtn.textContent = "☀️";
        }
    }

    temaBtn.addEventListener("click", function () {

        const modoClaro =
            document.body.classList.toggle("claro");

        if (modoClaro) {
            localStorage.setItem("tema", "claro");
        } else {
            localStorage.setItem("tema", "escuro");
        }

        atualizarTema();
    });


    // BOTÕES

    salvarBtn.addEventListener("click", salvarSetup);
    limparBtn.addEventListener("click", limparFormulario);
    apagarBtn.addEventListener("click", apagarTodos);


    // ATUALIZAR PRÉVIA

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

    campos.forEach(function (campo) {

        campo.addEventListener("input", atualizarPreview);
        campo.addEventListener("change", atualizarPreview);

    });


    // INICIAR SITE

    atualizarTema();
    atualizarPreview();
    renderizarSetups();

});
```
