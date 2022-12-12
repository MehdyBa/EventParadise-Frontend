// document.getElementById("form").addEventListener("submit", function(e) {
     
//     	let erreur;
     
//     	let inputs = this.getElementsByTagName("input");
     
//         let select = this.getElementsByTagName("select")
    	
//         for (let i = 0; i < inputs.length; i++) {
//     		console.log(inputs[i]);
//     		if (!inputs[i].value) {
//     			erreur = "Veuillez renseigner tous les champs";
//     		}
//             if (!select[i].value) {
//                 erreur = "Veuillez sélectionner une valeur";
//             }
//     	}
     
//     	if (erreur) {
//     		e.preventDefault();
//     		document.getElementById("erreur").innerHTML = erreur;
//     		return false;
//     	} else {
//     		alert('Formulaire envoyé !');
//     	}
     
     
//     	let name = document.getElementById("name");
//         let date = document.getElementById("date")
//     	let lieu = document.getElementById("lieu");
//     	let thème = document.getElementById("thème");
//     	let tarif = document.getElementById("tarif");
//         let description = document.getElementById("description");
        
//         if (!description.value) {
//             erreur = "Ce champ est obligatoire ";
//         }
//         if (!tarif.value) {
//     		erreur = "Doit être positif";
//     	}
//     	if (!thème.value) {
//     		erreur = "Ce champ est obligatoire ";
//     	}
//     	if (!lieu.value) {
//     		erreur = "Ce champ est obligatoire ";
//         }
//         if (!date.value) {
//             erreur = "Doit être égale ou supérieure à aujourd’hui ";
//         }
//     	if (!name.value) {
//     		erreur = "Ce champ est obligatoire "; 
//         }
//     })

