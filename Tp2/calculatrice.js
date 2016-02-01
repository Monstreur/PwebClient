function modeCalculatrice (mode) {
	var body = document.getElementsByTagName('body').item(0);
	if(mode==0){
		var btn1 = document.getElementById('modeClassique');
		btn1.setAttribute("disabled","disabled");
		var btn2 = document.getElementById('modeScientifique');
		btn2.removeAttribute("disabled");
		
		var nodeObj = document.createElement('object');
		nodeObj.setAttribute("id","speciaux");
		body.appendChild(nodeObj);
		
		if(document.getElementById('resultat')==null){
			var nodeDiv = document.createElement('DIV');
			nodeDiv.setAttribute("id","resultat");
			nodeDiv.setAttribute("class","resultat-classique");
			body.appendChild(nodeDiv);
		}else{
			var resultat = document.getElementById('resultat');
			resultat.setAttribute("class","resultat-classique");
		}
		
		if(document.getElementById('laCalculatrice')==null){
			var nodeDiv = document.createElement('DIV');
			nodeDiv.setAttribute("id","laCalculatrice");
			nodeDiv.setAttribute("class","calc-simple");
			body.appendChild(nodeDiv);
		}
		
		if(document.getElementById('laCalculatriceScientifique')!=null){
			var calcScient = document.getElementById("laCalculatriceScientifique");
			calcScient.remove();
		}
		
	}else{
		var btn1 = document.getElementById('modeClassique');
		btn1.removeAttribute("disabled");
		var btn2 = document.getElementById('modeScientifique');
		btn2.setAttribute("disabled","disabled");
		
		if(document.getElementById('resultat')==null){
			var nodeDiv = document.createElement('DIV');
			nodeDiv.setAttribute("id","resultat");
			nodeDiv.setAttribute("class","resultat-scientifique");
			body.appendChild(nodeDiv);
		}else{
			var resultat = document.getElementById('resultat');
			resultat.setAttribute("class","resultat-scientifique");
		}
		
		if(document.getElementById('laCalculatrice')==null){
			var nodeDiv = document.createElement('DIV');
			nodeDiv.setAttribute("id","laCalculatrice");
			nodeDiv.setAttribute("class","calc-simple");
			body.appendChild(nodeDiv);
		}
		
		if(document.getElementById('laCalculatriceScientifique')==null){
			var nodeDiv = document.createElement('DIV');
			nodeDiv.setAttribute("id","laCalculatriceScientifique");
			nodeDiv.setAttribute("class","calc-scientifique");
			body.insertBefore(nodeDiv,document.getElementById('laCalculatrice'));
		}
		
	}
		
	ajouterBoutons(mode);
}
function initButton() {
    var btn1 = document.getElementById('modeClassique');
    initEventHandlers(btn1, 'click', function() {modeCalculatrice(0);});
    var btn2 = document.getElementById('modeScientifique');
    initEventHandlers(btn2, 'click', function() {modeCalculatrice(1);});
} // initButton

function initEventHandlers(element, event, fx) {
    if (element.addEventListener)
        element.addEventListener(event, fx, false);
    else if (element.attachEvent)
        element.attachEvent('on' + event, fx);
} // observe

initEventHandlers(window, 'load', initButton);


Math.puissancede2 = function(value){
	return value*value;
}
Math.puissancede3 = function(value){
	return value*value*value;
}
Math.factorielle = function(n) {
   return n > 1?n * Math.factorielle(n-1):1;
}


function resolve() {
	var z = document.getElementById('resultat');
	z.innerHTML = eval(z.innerHTML);
}
function clearAll() {
	var z = document.getElementById('resultat');
	z.innerHTML = "";
}
function clearOne() {
	var z = document.getElementById('resultat');
	z.innerHTML = z.innerHTML.substring(0,z.innerHTML.length-1);
}
function touche(t) {
	var z = document.getElementById('resultat');
	z.innerHTML += t; 
}
function special(nom) {
    var z = document.getElementById('resultat');
    resolve();
    z.innerHTML = "Math."+nom+"("+z.innerHTML+")";
    resolve();
}

function ajouterBouton(value,actionBouton,zone){
	if(document.getElementById("T"+value)==null){
		var bouton = document.createElement('INPUT');

		bouton.setAttribute("type","button");
		bouton.setAttribute("id","T"+value);
		bouton.setAttribute("class","bouton-simple");
		bouton.setAttribute("value",value);

		initEventHandlers(bouton, 'click', actionBouton);
		zone.appendChild(bouton);
	}
}

function ajouterBoutons(mode) {
	var nodeDiv = document.getElementById('laCalculatrice');
	ajouterBouton("7",function() {touche(7);},nodeDiv);
	ajouterBouton("8",function() {touche(8);},nodeDiv);
	ajouterBouton("9",function() {touche(9);},nodeDiv);
	ajouterBouton("/",function() {touche("/");},nodeDiv);
	
	nodeDiv.appendChild(document.createElement('br'));
	
	ajouterBouton("4",function() {touche(4);},nodeDiv);
	ajouterBouton("5",function() {touche(5);},nodeDiv);
	ajouterBouton("6",function() {touche(6);},nodeDiv);
	ajouterBouton("*",function() {touche("*");},nodeDiv);
	
	nodeDiv.appendChild(document.createElement('br'));
	
	ajouterBouton("1",function() {touche(1);},nodeDiv);
	ajouterBouton("2",function() {touche(2);},nodeDiv);
	ajouterBouton("3",function() {touche(3);},nodeDiv);
	ajouterBouton("-",function() {touche("-");},nodeDiv);
	
	nodeDiv.appendChild(document.createElement('br'));
	
	ajouterBouton("0",function() {touche(0);},nodeDiv);
	ajouterBouton(".",function() {touche(".");},nodeDiv);
	ajouterBouton("+",function() {touche("+");},nodeDiv);
	
	nodeDiv.appendChild(document.createElement('br'));
	
	ajouterBouton("AC",function() {clearAll();},nodeDiv);
	ajouterBouton("C",function() {clearOne();},nodeDiv);
	ajouterBouton("=",function() {resolve();},nodeDiv);
	
	if(mode==1){
		var nodeDiv = document.getElementById('laCalculatriceScientifique');
	
		ajouterBouton("√",function() {special("sqrt");},nodeDiv);
		ajouterBouton("^2",function() {special("puissancede2");},nodeDiv);
		ajouterBouton("^3",function() {special("puissancede3");},nodeDiv);
		ajouterBouton("π",function() {touche("Math.PI");},nodeDiv);
		ajouterBouton("n!",function() {special("factorielle");},nodeDiv);

	}

		
}






