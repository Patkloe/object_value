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
