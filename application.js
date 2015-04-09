$(document).ready(function(){



$('#generate').on('click', function(){

$('table').remove();

var size = +$('#size').val();
var row = createRow(size);

$('#container').append('<table></table>');

function createRow(size2) {
	var addRow;
	for( i = 0; i < size2 ; i++ ){
		addRow = addRow + "<td><div class='box'></div></td>";
	}
	return addRow;
}

for( j = 0; j < size; j++){
	var table = $('#container').children();    
	table.append("<tr>"+ row +"<tr>");
}

$('.box').on('mouseenter', function(){
	$(this).css({'background-color':'red'});


		});
	});

});