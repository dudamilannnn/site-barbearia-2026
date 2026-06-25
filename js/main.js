/* ==========================================
   CARROSSEL DE DEPOIMENTOS
========================================== */

const depoimentos = document.querySelectorAll(".depoimento");

let indiceAtual = 0;

function trocarDepoimento() {

    depoimentos[indiceAtual].classList.remove("ativo");

    indiceAtual++;

    if (indiceAtual >= depoimentos.length) {
        indiceAtual = 0;
    }

    depoimentos[indiceAtual].classList.add("ativo");

}

setInterval(trocarDepoimento, 5000);


/* ==========================================
   FAQ
========================================== */

const perguntas = document.querySelectorAll(".faq-question");

perguntas.forEach(pergunta => {

    pergunta.addEventListener("click", () => {

        const item = pergunta.parentElement;

        item.classList.toggle("active");

    });

});


/* ==========================================
   AGENDAMENTO WHATSAPP
========================================== */

const formulario = document.getElementById("bookingForm");

formulario.addEventListener("submit", function (event) {

    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();

    const servico = document.getElementById("servico").value;

    const data = document.getElementById("data").value;

    const horario = document.getElementById("horario").value;

    if (!nome || !servico || !data || !horario) {

        alert("Preencha todos os campos.");

        return;

    }

    const mensagem =

`Olá!

Gostaria de agendar um horário.

Nome: ${nome}

Serviço: ${servico}

Data: ${data}

Horário: ${horario}`;

    const numero = "5516999999999";

    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

    window.open(url, "_blank");

});


/* ==========================================
   BOTÃO VOLTAR AO TOPO
========================================== */

const botaoTopo = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        botaoTopo.classList.add("show");

    } else {

        botaoTopo.classList.remove("show");

    }

});

botaoTopo.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/* ==========================================
   SCROLL SUAVE DOS LINKS
========================================== */

const links = document.querySelectorAll('a[href^="#"]');

links.forEach(link => {

    link.addEventListener("click", function (e) {

        const destino = document.querySelector(this.getAttribute("href"));

        if (!destino) return;

        e.preventDefault();

        destino.scrollIntoView({

            behavior: "smooth"

        });

    });

});


/* ==========================================
   DATA MÍNIMA DO AGENDAMENTO
========================================== */

const campoData = document.getElementById("data");

const hoje = new Date();

const ano = hoje.getFullYear();

const mes = String(hoje.getMonth() + 1).padStart(2, "0");

const dia = String(hoje.getDate()).padStart(2, "0");

campoData.min = `${ano}-${mes}-${dia}`;