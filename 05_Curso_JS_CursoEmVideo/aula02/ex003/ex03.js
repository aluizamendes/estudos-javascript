var nome = prompt("Qual o seu nome?");

document.write(`Olá ${nome}! Seu nome tem ${nome.length} letras.<br>`);
document.write(`Seu nome em maiúsculas é ${nome.toUpperCase()}.<br>`);
document.write(`Seu nome em minúsculas é ${nome.toLowerCase()}.`);