// Entrando com os dados
const N = parseFloat(lines[0]);

const palpiteInicial = parseFloat(lines[1]);

// Função v(x) simplificada
function v(x) {
    return parseFloat(lines[3].split(" "));
}

// Derivada de v(x)
function dv(x) {
    return parseFloat(lines[4].split(" "));
}

// Método de Newton-Raphson
function newtonRaphson(N, palpiteInicial, tolerancia = 1 * Math.pow(10,-6), maxInteracoes = 100) {
    let x = palpiteInicial;
    for (let i = 0; i < maxInteracoes; i++) {
        // Calcular a função v(x) - N
        let fx = v(x) - N;
        // Calcular a derivada v'(x)
        let dfx = dv(x);

        if (dfx === 0) {
            console.log("Derivada zero — método falhou.");
            return null;
        }

        // Calcular o próximo valor de x
        let nextX = x - fx / dfx;

        // Verificar se o erro entre as aproximações está abaixo da tolerância
        if (Math.abs(nextX - x) < tolerancia) {
            // Retorna o valor de t, arredondado para 4 casas decimais
            return parseFloat(nextX.toFixed(4));
        }

        x = nextX;
    }

    console.log("Não convergiu.");
    return null;
}

const resultado = newtonRaphson(N, palpiteInicial);

// Imprimir o instante t quando a velocidade atinge o valor desejado
if (resultado !== null) {
    console.log(`Instante t onde v(t) = ${N} m/s: t = ${resultado} s`);
} else {
    console.log("Não foi possível encontrar o instante.");
}