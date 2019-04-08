// Fonction réalisant un calcul sur des valeurs
function calcul()
{
  // Version détaillée
  alert(shoeSize.value);
  alert(document.getElementById("yearOfBirth").value);
  // Si les deux valeurs ne sont pas des chiffres :
  if ((isNaN(shoeSize.value)) && (isNaN(document.getElementById("yearOfBirth").value)))
  {
    alert("Vous n'avez pas rentré des chiffres !");
  }
  else
  {
    var pointure = document.getElementById("shoeSize").value;
    var naissance = document.getElementById("yearOfBirth").value;
    var res = ((((pointure*2)+5)*50)-naissance)+1766;
    alert(pointure);
    alert(naissance);
    alert(res);
    // Version courte
    alert((((((document.getElementById("shoeSize").value)*2)+5)*50)-(document.getElementById("yearOfBirth").value))+1766);

  }


}
