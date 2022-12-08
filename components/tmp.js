const form = document.querySelector("form");

const elements = form.elements;

for (const element of elements) { // for(String str: strings)
    const type = element.type;
    if (type != "submit") {
        element.addEventListener("invalid", (event) => {
           /* console.log(element.style.backgroundColor = "red");*/
        });
    }

}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("implement form reset");
    console.log("implement toaster");
});