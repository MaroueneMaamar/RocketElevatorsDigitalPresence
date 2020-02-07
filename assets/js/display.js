/*** Fonction qui affiche seulement les elements correspondants au type de building ***/
/** div1 : Number of apartements in the building  **/
/** div2 : Number of floors **/
/** div3 : Number of basements **/
/** div4 : Number of distinct businesses **/
/** div5 : Number of parking space available **/
/** div6 : Number of elevator cages to be deployed **/
/** div7 : Number of separate tenant companies **/
/** div8 : Maximum number of occupants per floor **/
/** div9 : Number of hours of activity of the building **/
/** div10 : Estimate number of elevators **/
/** div11 : The range of elevators **/
/** div12 : Estimate budget **/

function UpdateDisplay() {
    if (choix()==1){
        document.getElementById("div1").style.display="";
        document.getElementById("div2").style.display="";
        document.getElementById("div3").style.display="";
        document.getElementById("div5").style.display="none";
        document.getElementById("div4").style.display="none";
        document.getElementById("div6").style.display="none";
        document.getElementById("div7").style.display="none";
        document.getElementById("div8").style.display="none";
        document.getElementById("div9").style.display="none";
	   }
		else if (choix()==2){
            document.getElementById("div4").style.display="";
            document.getElementById("div2").style.display="";
            document.getElementById("div3").style.display="";
            document.getElementById("div5").style.display="";
            document.getElementById("div6").style.display="";
            document.getElementById("div1").style.display="none";
            document.getElementById("div7").style.display="none";
            document.getElementById("div8").style.display="none";
            document.getElementById("div9").style.display="none";
			}
            else if (choix()==3){
                document.getElementById("div7").style.display="";
                document.getElementById("div2").style.display="";
                document.getElementById("div3").style.display="";
                document.getElementById("div5").style.display="";
                document.getElementById("div8").style.display="";
                document.getElementById("div1").style.display="none";
                document.getElementById("div4").style.display="none";
                document.getElementById("div6").style.display="none";
                document.getElementById("div9").style.display="none";
				}
                else if (choix()==4){
                    document.getElementById("div4").style.display="";
                    document.getElementById("div2").style.display="";
                    document.getElementById("div3").style.display="";
                    document.getElementById("div5").style.display="";
                    document.getElementById("div8").style.display="";
                    document.getElementById("div9").style.display="";
                    document.getElementById("div1").style.display="none";
                    document.getElementById("div6").style.display="none";
                    document.getElementById("div7").style.display="none";
			        }
    document.getElementById("div10").style.display="";
    document.getElementById("div11").style.display="";
    document.getElementById("div12").style.display="";
    CalculEstNbrElevators();
    CalculBudget();
}
	