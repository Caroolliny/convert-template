//console.log("Javascript funcionando!")

//Cotação de moedas do dia
const USD = 4.87
const EUR = 5.32
const GBP = 6.08

// Obetendo os elementos do formulario
const form = document.querySelector("form");
const amount = document.getElementById("amount");
const currency = document.getElementById("currency");
const footer = document.querySelector("main footer"); //vai puxar o main e então puxar o footer que está dentro do main
const description = document.getElementById("description");
const result = document.getElementById("result");

// Manipulando o input amoun para receber somante números.
amount.addEventListener("input", () => {

    //Para procurar letras
    const hasCharactersRegex = /\D+/g //D para encontrar os caracteres tipo texto, e g para global, valendo para tudo 
    amount.value = amount.value.replace(hasCharactersRegex, "")
})


//Capiturando o evento de submit(enviar) do formulario
form.onsubmit = (event) => {
    event.preventDefault()

    switch (currency.value){
        case "USD":
            convertCurrency(amount.value, USD, "US$")
            break
        case "EUR":
            convertCurrency(amount.value, EUR, "€")
            break
        case "GBP":
            convertCurrency(amount.value, GBP, "£")
            break
    }
}

//Função para converter a moeda
function convertCurrency(amount, price, symbol){
    try {
        //textContent pq vamos manipular o conteúdo que está lá dentro
        //Exibindo a cotação da moeda.
        description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}` //usando crase

        let total = String(amount * price).replace(".",",") //calcula o total. / Replace muda o ponto por virgula.

        // Exibindo o resultado da conversão
        result.textContent = `${total} Reais`

        //Aplica a classe que exibe o footer para mostrar o resultado.
        footer.classList.add("show-result")

    } catch(error) {
        console.log(error)

        //Remove a classe do footer removendo ele da tela
        footer.classList.remove("show-result")
        alert("Não foi possível converter a moeda. Por favor tente mais tarde")
    }

}

//Java Script é uma liguagem com tipagem dinâmica

//Formata a moeda em real brasileiro
function formatCurrencyBRL(value){
    // Converte para numero para utilizar o toLocaleString para formatar no padrão BRL (R$ 00,00)
    return Number(value).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    })
}

