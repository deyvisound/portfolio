function clearText(field){

    if (field.defaultValue == field.value) field.value = '';
    else if (field.value == '') field.value = field.defaultValue;

}

/**
Faz a tradução
**/
function translator(){

	var fields = $(".translate");
	var length = 0; 

	for(var e in fields){

		length++;
		var key = $(fields[e]).data("text");
		var html = language[setLanguage][key]; //language and setLanguage are super global

		$(fields[e]).html(html);

		if(length >= fields.length){
			break;
		}
	}

}

/**
muda o idioma
**/
function changeLanguage(lang){
	setLanguage = lang;

	translator();
}