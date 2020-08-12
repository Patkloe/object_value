// version 1.0  , this is still manual

var maVoiture = new Object();
maVoiture.fabricant = "Ford";
maVoiture.modèle = "Mustang";
maVoiture.année = 1969;

var nomPropriété = "fabricant";
maVoiture[nomPropriété] = "Ford";

nomPropriété = "modèle";
maVoiture[nomPropriété] = "Mustang";
function afficherProps(obj, nomObjet) {
  var resultat = "";
  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
        resultat += nomObjet + "." + i + " = " + obj[i] + "\n";
    }
  }
  return resultat;
}
afficherProps(maVoiture, "maVoiture");

//version 2.0, dynamically provides values to the objet
var modele = ["VW","MERCEDES","AUDI","BMW","MERCEDES"];
var maVoiture = new Object();
var j = 0;
for(let i = 0; i < modele.length; i++){
  j = i;
  maVoiture[modele[i]] = modele[j];
}
//maVoiture.fabricant = "VW PASSAT TDI";
//maVoiture.modèle = "Mustang";
//maVoiture.année = 1969;

//var nomPropriété = "fabricant";
//maVoiture[nomPropriété] = "Ford";

//nomPropriété = "modèle";
//maVoiture[nomPropriété] = "Mustang";
function afficherProps(obj, nomObjet) {
  var resultat = "";
  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
        resultat += nomObjet + "." + i + " = " + obj[i] + "\n";
    }
  }
  return resultat;
}
afficherProps(maVoiture, "maVoiture");
