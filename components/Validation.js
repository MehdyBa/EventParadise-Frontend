const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
    event.preventDefault();
	
});

const elements = form.elements;

for (const element of elements) {
    const helpText = document.getElementById (`${element.id}Help`)
        element.addEventListener("invalid", (event) => {
			
			event.preventDefault();
            helpText.classList.add("text-danger");
			element.classList.add("is-invalid");

			
		});
	

}

	
    console.log("implement form reset");
    console.log("implement toaster");

