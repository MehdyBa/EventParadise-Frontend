const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
    event.preventDefault();
	
});

const elements = form.elements;

for (const element of elements) {
   
        element.addEventListener("invalid", (event) => {
			
			event.preventDefault();
			element.classList.add("is-invalid");

			
		});
	

}

	
    console.log("implement form reset");
    console.log("implement toaster");

