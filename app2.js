const contenedor = document.querySelector(".contenedor")
async function optenerPost(){
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await response.json()
    console.log(data)
    data.forEach(element => {
       contenedor.innerHTML += "<h4>" + element.title + "-" + element.id +"</h4>"

    });

}
optenerPost()