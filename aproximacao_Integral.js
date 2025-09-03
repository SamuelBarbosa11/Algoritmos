let a = parseFloat(lines[0]); // tempo incial
let b = parseFloat(lines[1]); // tempo final
let n = 100; // numero de particoes
let deltaX = (b - a) / n;

function velocidade(x) {
    return parseFloat(lines[3].split(" "));
};

function aceleracao(x) {
    return parseFloat(lines[4].split(" "));
};

let somaV = 0;
let somaA = 0;

for (let i = 0; i < n; i++) {

    somaV += velocidade(a + i * deltaX); // x -> 0(0 + 0 * deltaX); 0,2740374(0 + 1 * deltaX); 0,5480748(0 + 2 * deltaX); 0,8221122(0 + 3 * deltaX) ...
    somaA += aceleracao(a + i * deltaX);

}

let integral_velocidade = somaV * deltaX; // (X0 + X1 + X2... + X99) * deltaX
let integral_aceleracao = somaA * deltaX;

let velocidade_media = integral_velocidade / (b - a);
let aceleracao_media = integral_aceleracao / (b - a);

console.log(`velocidade media: ${velocidade_media.toFixed(2)}`);
console.log(`aceleração media: ${aceleracao_media.toFixed(2)}`);