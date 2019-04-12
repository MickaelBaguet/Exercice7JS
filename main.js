// Fonction réalisant un calcul sur des valeurs
function calcul()
{
  var pointure = document.getElementById("shoeSize").value;
  var naissance = document.getElementById("yearOfBirth").value;
  // Si les deux valeurs sont des chiffres et qu'ils ne sont pas vide :
  if (!isNaN(pointure) && !isNaN(naissance) && pointure && naissance)
  {
    var res = (pointure*2+5)*50-naissance+1766;
    alert(res);
    return res;
  }
  else
  {
    alert("Compléter correctement les champs !");
  }
}

document.getElementById('submit').onclick = function(){
  alert(calcul());
}
