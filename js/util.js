function initSite(){
	setTitles();
	translator();
}

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

function setTitles(){
	$('.w25').attr('title','25%');
	$('.w35').attr('title','35%');
	$('.w45').attr('title','45%');
	$('.w55').attr('title','55%');
	$('.w65').attr('title','65%');
	$('.w75').attr('title','75%');
	$('.w85').attr('title','85%');
	$('.w95').attr('title','95%');
	$('.w20').attr('title','20%');
	$('.w30').attr('title','30%');
	$('.w40').attr('title','40%');
	$('.w50').attr('title','50%');
	$('.w60').attr('title','60%');
	$('.w70').attr('title','70%');
	$('.w80').attr('title','80%');
	$('.w90').attr('title','90%');
}