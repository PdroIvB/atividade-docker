const table = document.querySelector("#table-body");
const nome = document.querySelector("#nome");
const email = document.querySelector("#email");
const btn = document.querySelector("#btn");

btn.addEventListener("click", sendData)

async function getData () {
    const res = await fetch("http://localhost:3000/data");
    const data = await res.json();
    
    table.innerHTML = "";

    data.forEach(element => {
        table.innerHTML += `
        <tr>
            <td>${element.nome}</td>
            <td>${element.email}</td>
            <td><button onclick="deleteData(${element.id})">Deletar</button></td>
        </tr>
        `
    })
}

async function sendData() {
    try {
        await fetch("http://localhost:3000/data",{
            method:"POST",
            headers:{"Content-Type": "application/json"},
            body:JSON.stringify({
                nome:nome.value,
                email:email.value
            })
        })
    } catch (error) {
        console.error(error.message)
    }

    getData();
    nome.value = "";
    email.value = "";
}

async function deleteData(id){
    try {
        await fetch(`http://localhost:3000/data/` + id,{
            method:"DELETE"
        })
    } catch (error) {
        console.error(error.message)
    }

    getData();
}

getData();