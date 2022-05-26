function fillCell(feat){
	return "<td>" + feat + "</td>";
}

function fillFileCell(feat){
	if(feat != "N/A" & feat != ""){
		if(Array.isArray(feat)){
			let cell = "";
			for(let i=0; i<feat.length; i++){
				cell += "<a href='files/" + feat[i] + "'><img src='img/pdf.png'></a>";
				cell += "<br>";
			}
			return fillCell(cell);
		} else{
			return fillCell("<a href='files/" + feat + "'><img src='img/pdf.png'></a>");
		}
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
	r += fillFileCell(observation["file"]);
	r += fillFileCell(observation["cover_letter"]);
	r += fillFileCell(observation["review"]);
	r += "</tr>";
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