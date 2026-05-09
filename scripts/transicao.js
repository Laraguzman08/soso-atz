function redirecionar() {
    window.location.href = "home.html";
    // não colocar public/ antes, pois o arquivo transicao e home já estão na mesma pasta
}

setTimeout(redirecionar, 5000);
// setTimeout é uma função que executa uma função após um determinado tempo; 
// 5000 = 5000 milissegundos = 5 segundos