/* 
PROCEDIMENTO
Descrição: Exibe uma mensagem fixa
Nome: mostraAlerta
Parâmetro: void
Retorno: void
void -> significa que não retorna valor
*/

function mostraAlerta()
{
    alert("Alerta");
}

/* 
FUNÇÂO
Descrição: Exibe uma mensagem com parâmetro
Nome: mostraAlerta1
Parâmetro: string
Retorno: void
void -> significa que não retorna valor
*/

function mostraAlerta1(msg)
{
    alert("Boa Noite, "+msg);
}

function mensagem_com_parametro_return(msg1)
{
    return("Você digitou "+msg1 )
}

/*
DESAFIO
*/

function soma(num1, num2)
{
    var soma = parseFloat(num1) + parseFloat(num2)
    return(soma)
}
