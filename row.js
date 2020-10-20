function fillCell(feat){
	return "<td>" + feat + "</td>";
}

function fillFileCell(feat){
	if(feat != "N/A" & feat != ""){
		return fillCell("<a href='files/" + feat + "'><img src='img/pdf.png'></a>");
	} else{
		return fillCell(feat);
	}
}

function fillRow(observation){
	r = "<tr>";
	var finalRows = ["file", "cover_letter", "review"];
	for(o in observation){
		if(!finalRows.includes(o)){
			r = r + fillCell(observation[o]);
		}
	}
	r = r + fillFileCell(observation["file"]);
	r = r + fillFileCell(observation["cover_letter"]);
	r = r + fillFileCell(observation["review"]);
	r = r + "</tr>";
	$("#dat").append(r);
}

function fillTable(allObs){
	for(var i=0; i<data.length; i++){
		fillRow(allObs[i]);
	}
}


function init(){
	fillTable(data);
}