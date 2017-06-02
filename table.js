/**
 * Created by Jane on 4/4/2017.
 */


function updateRowIdxToOrder(rowNum, id){
    var endOrderNum = row_idx_to_order.length;
    console.log("End "+endOrderNum);
    for(var i = rowNum ; i <(endOrderNum+1) ; i++){
        console.log("in for loop"+i);
        var oldRecord = row_idx_to_order[i];
        row_idx_to_order[i+1] = oldRecord;
        console.log(row_idx_to_order);
    }
    row_idx_to_order[rowNum] = id;
    console.log(row_idx_to_order);
}

function addRow(rowName){
	//increase track of number of rows
    total_rows ++;
    row_idx_to_order[total_rows] = "row"+total_rows;

    //get the row name from user's input
    $('<tr id='+'\"row'+total_rows+'\"'+'></tr>').appendTo('#tab_logic tbody');
    var new_row =  "<td>" + rowName + "</td>";
    for(var i=0; i<total_columns; i++){
        var col_num = i+1;
        new_row += '<td id="td'+total_rows+col_num+'"'+'><input type="text" name="hi" placeholder="" class="form-control data-input"'+' id='+total_rows+col_num+'></td>';

    }
    $(new_row).appendTo("#row"+total_rows);

}

function addColumn(columnName){
	
	total_columns ++;
	col_order_to_idx[total_columns] = total_columns;
    $('<th class="text-center" id='+"th"+total_columns+'>'+columnName+'</th>').appendTo('#tab_logic thead tr');


    columns.push("col"+(total_columns));
    for(var i=0; i<total_rows; i++){
        var row_idx = i+1;
        var rowToAppend = '#row'+row_idx;
        $('<td '+'id="td'+row_idx+total_columns+'"'+'><input type="text" name="hi" placeholder="" class="form-control data-input"'+' id="'+row_idx+total_columns+'"></td>').appendTo(rowToAppend);
	}

}

function removeRow(){
	if(total_rows>1){
            $("#row"+total_rows).html('');
            total_rows--;
    }
}

function removeColumn(columnNum){
	//remove table head
	thToRemove = $("#th"+col_order_to_idx[columnNum]);
	thToRemove.remove();

	//remove tds
	for(var i=0; i<total_rows; i++){
        var row_idx = i+1;
		var tdId = row_idx.toString() + col_order_to_idx[columnNum].toString()
		console.log(tdId);
        $('#td'+tdId).remove();
	}
	
	//change order
	for(var i=columnNum; i<total_columns; i++){
		col_order_to_idx[i] = col_order_to_idx[i+1]
	}
	delete col_order_to_idx[total_columns];
	total_columns --;
}

function setData(rowNum, columnNum, data){
	$('#'+rowNum + col_order_to_idx[columnNum]).val(data)
}	


