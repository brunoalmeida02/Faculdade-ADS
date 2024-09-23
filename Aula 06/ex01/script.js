/*exercício (1)
• Crie em uma página html um formulário contendo dois campos para
entrada de Nome e Sobrenome e dois botões. Utilizar o CSS é
encorajado, porém opcional.
a) Ao clicar em um botão (1), o conteúdo digitado deverá ser apresentado
em um alerta e impresso no console;
b) Ao clicar em um botão (2), o conteúdo digitado pelo usuário no campo
Nome deverá aparecer no campo Sobrenome e vice-versa. Este flip de
dados deverá ser executado a cada 2 segundos após o botão ter sido
clicado;
c) Implemente mais 2 botões com eventos e funções que quiser.*/
document.addEventListener("DOMContentLoaded", function () {
    const btn1 = document.getElementById("btn1");
    const btn2 = document.getElementById("btn2");
    const btn3 = document.getElementById("btn3");
    const btn4 = document.getElementById("btn4");
    const nome = document.getElementById("nome");
    const sobrenome = document.getElementById("sobrenome");
    const imageContainer = document.getElementsByClassName('imageContainer')[0];  // Acessa o primeiro elemento da coleção

    // Exibe o nome e o sobrenome
    btn1.addEventListener("click", function () {
        window.alert(nome.value + " " + sobrenome.value);
    });

    btn2.addEventListener("click", function () {
        const nomeOriginal = nome.value;
        const sobrenomeOriginal = sobrenome.value;

        nome.value = sobrenomeOriginal;
        sobrenome.value = nomeOriginal;

        setTimeout(() => {
            nome.value = nomeOriginal;
            sobrenome.value = sobrenomeOriginal;
        }, 2000);
    });

    btn3.addEventListener("click", function () {
        document.body.style.backgroundColor = "red";

        setTimeout(() => {
            document.body.style.backgroundColor = "#191f92";
        }, 2000);
    });

    btn4.addEventListener("click", function () {
        const img = document.createElement('img');
        img.src = './images.jpeg';  // Verifique se o caminho da imagem está correto
        img.alt = 'Vai Corinthians';
        img.style.width = '300px';
        img.style.height = 'auto';
        imageContainer.appendChild(img);  // Adiciona a imagem ao contêiner
    });
});