const apiImage = "https://dog.ceo/api/breeds/image/random";
const apiCat = "https://catfact.ninja/fact";
const apiUniversity = "http://universities.hipolabs.com/search?country=United+States";
async function getImage(){
    try{
    const res = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await res.json();
    document.querySelector("#content img").src = data.message;
    return data;
    }
    catch(error){
        console.log("error",error)
    }
}

async function getCat(){
    try{
        const res = await fetch(apiCat);
        const data = await res.json();
        document.querySelector("#content h3").innerHTML = data.fact;
        return data;
    }
    catch(error){
        console.log("error",error.message);
    }
}

async function getUniversity(){
    try{
    const res = await fetch(apiUniversity);
    const data = await res.json();

    //if the data isn't an array ,we can use Object.values(data).map() or Object.keys(data).map();
    //I can learn more about Object by write in google Object.entries()

    document.querySelector("#actor").innerHTML = `
    <select id="myselect" onchange="me(this.value)">
    ${data.map((actor) => `<option> ${actor.name} </option>`)}
    </select>
    `
    return data;
    }catch(error){
        console.log("error",error);
    }
}
getUniversity();

function me(name){
    // const name = document.getElementById("myselect").value;
    console.log(name);
    document.querySelector("#content").innerHTML += `<em>${name}</em>`;
    getImage();
    getCat();
}