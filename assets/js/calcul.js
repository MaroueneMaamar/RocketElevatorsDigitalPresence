
/***	Fonction qui retourne l index de lelement choisi dans la liste (1-residential,2-commercial,3-corporate,4-hybrid)  ***/
function choix() {
    var x = document.getElementById("Btype");
    var i = x.selectedIndex;
    return i;
}
           

/***	Fonction qui calcul le nombre d elevateur necessaire selon le type de building  ***/			
function CalculEstNbrElevators(){
	if (choix()==1){
	    var AvgAptPerFloor= Math.ceil(document.getElementById("NbrApartements").value/document.getElementById("NbrFloor").value);
	    var NbrColumn=(Math.ceil((document.getElementById("NbrFloor").value)/20));	
	    var Est = (Math.ceil(AvgAptPerFloor/6))*NbrColumn ;
	    document.getElementById("EstNbrElevators").value = Est; 
	    }
	    else if (choix()==2){
	        document.getElementById("EstNbrElevators").value =  document.getElementById("NbrElevatorCage").value;
	        }
	        else if ((choix()==3)||(choix()==4)){
				var NbrTotalFloor = Number(document.getElementById("NbrFloor").value) + Number(document.getElementById("NbrBasements").value);
				var NbrTotalOccupants = Number(document.getElementById("NbrOccupantsMax").value) * Number(NbrTotalFloor);
				var NbrColumn=Math.ceil(Number(NbrTotalFloor)/20);
				var NbrCage=Math.ceil(Number(NbrTotalOccupants)/1000);
				var NbrCageColumn = Math.ceil(( Number(NbrCage)/Number(NbrColumn)));
				var Est = Math.ceil((Number(NbrColumn))*NbrCageColumn);
				document.getElementById("EstNbrElevators").value = Est;	
			    }
	CalculBudget();
}
		         
/***	Fonction qui calcul le budget selon le type de building, la qualite et le nombre des elevateurs  ***/
function CalculBudget(){
	if (document.getElementById("Standard").checked){
		var pu = 7565;
		var pourcentage = 0.1;
    	}
		else if (document.getElementById("Premium").checked){
			var pu = 12345;
			var pourcentage = 0.13;
			}
			else if (document.getElementById("Excelium").checked){
				var pu = 15400;
				var pourcentage = 0.16;
				}
	var nb= document.getElementById("EstNbrElevators").value;
	var ic= (Number(pu)*Number(pourcentage)*Number(nb));
	document.getElementById("UnitPrice").value=(pu).toFixed(2);
	document.getElementById("InstallCost").value=(ic).toFixed(2);
	document.getElementById("TotalCost").value=(Number(ic) + (Number(pu)*Number(nb))).toFixed(2);	
}
		