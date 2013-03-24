//sumTxt.clr.fdt is the title
//summary_REDBGWTV-xxx is the div to modify


deepText(document.getElementById("main"));

var nodeToModify = null;

function deepText(node){
    if(node){
        node = node.firstChild;
        while(node != null){
        
        	if(
        		node.className == "submit-buttons" || 
        		node.className == "submit-buttons bottom"
        	){
        		var minorSaveButton = document.createElement("input");
        		minorSaveButton.type = "button";
        		minorSaveButton.value = "Minor Save";
        		minorSaveButton.onclick = function(){
        			document.getElementById('minorEdit').checked=true;
        			document.getElementById('editpageform').submit();
        		};
        		
        		node.appendChild(minorSaveButton);
        	}
            else deepText(node);
            
            node = node.nextSibling;
        }
    }
}