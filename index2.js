let citites = [
    "Rabat" , "Casablanca" , "Mohammedia" , "Tanger" , "Agadir" , "Fez" , "Marrakesh" , "Sale" , "Oujda" ,"Meknes" , "Nador" ,"Essouira" , "Errachidia"
]

for(let city of citites){

    let contant = `<option value="${city} " > ${city} </option>` 

    document.getElementById("sec").innerHTML += contant

}