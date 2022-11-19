let div = document.querySelector("#div")
function drawElements(data){
for(let item of data){
    if(item.city_id === 2 || item.registration_date == 2022){
        div.innerHTML = `
        <p>${item.title}</p>
        <p>${item.instagram}</p>
        <p>${item.phones}</p>
        <p>${item.addresses}</p>
        <hr>
         `
        }
    }
}
    loadData()


async function loadData(){
    let response = await fetch("https://realibi.kz/courses")
    let data = await response.json()
    drawElements(data)
}





