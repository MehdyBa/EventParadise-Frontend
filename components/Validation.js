const form = document.querySelector("form");
const elements = form.elements;

for (const element of elements) {
        element.addEventListener("invalid", (event) => {
			event.preventDefault();
            const helpText = document.getElementById (`${element.id}Help`);
            helpText.classList.add("text-danger");
			element.classList.add("is-invalid");
        
		});
      element.addEventListener("change", (event) => {
        const validity = element.checkValidity();
        if (validity) {
            const helpText = document.getElementById (`${element.id}Help`);
            helpText.classList.remove("text-danger");
            helpText.classList.add("text-success");
            element.classList.add("is-valid");
            element.classList.remove("is-invalid");
            console.log(element.name)
        }
    
    });
        
	
}
form.addEventListener("submit", (event) => {
    event.preventDefault();
	
    console.log("implement form reset");
    console.log("implement toaster");

});