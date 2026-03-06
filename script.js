async function convert(){

    const amount = document.getElementById("amount").value;
    const currency = document.getElementById("currency").value;

    const url = `https://hexarate.paikama.co/api/rates/HUF/${currency}/latest`;

    const response = await fetch(url);
    const data = await response.json();

    const rate = data.data.mid;

    const result = (amount * rate).toFixed(2);

    document.getElementById("result").innerText =
        `${amount} HUF = ${result} ${currency}`;
}