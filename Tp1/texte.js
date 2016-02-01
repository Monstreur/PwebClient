function grasTexte(){
    var text = document.getElementById("original");
    text.style.fontWeight = 'bold';
}
function colorTexte(elemt){
    var color = elemt.value;
    var text = document.getElementById("original");
    text.style.color = color;
}
function epurerSelected(str){

	while( str.indexOf("<span class='selected'>") > -1)
  	{
    	str = str.replace(/<span class='selected'>(w+)<\/span>/, "$1");
  	}

  	return str;
}

var motif = "";
var pos = 0;
function avant() {
	var motifval = document.getElementById('motif').value.toLowerCase();
	if(motifval!=motif){
		motif = motifval;
		pos = 0;
	}
    var text = document.getElementById("original").innerHTML;
    text = String(text);
    text = epurerSelected(text);
    text2 = text.toLowerCase();
	pos = text2.indexOf(motif,pos);
	if(pos == -1)
		alert("Aucun résultat");
	else{
		var find = text.substring(pos,(pos+motif.length));
		var text = text.substring(0, pos)+"<span class='selected'>"+find+"</span>"+text.substring((pos+motif.length));
		document.getElementById('original').innerHTML = text;
		pos+=24;
	}
}