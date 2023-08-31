const button = document.getElementById("button");
button.addEventListener("click", async ()=>{

    const res = await((await fetch("https://dog.ceo/api/breeds/image/random")).json());
    const DogPicture = document.getElementById("DogPicture");
    DogPicture.style.backgroundImage = `url(${res.message})`;

    const fact = await (await fetch("https://dog-api.kinduff.com/api/facts")).json();
    const facts = document.getElementById("facts");
    facts.innerHTML = fact.facts[0]

    const body = document.getElementById("bodytype");
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    body.style.backgroundColor = "#" + randomColor;
})
