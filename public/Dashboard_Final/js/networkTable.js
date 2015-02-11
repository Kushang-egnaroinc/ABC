var users = { "NE" : [ 
      { "NID"  : "1", "NName" : "SONET" },
      { "NID"  : "2", "NName" : "VPN2" },
       { "NID"  : "3", "NName" : "nerrow" },
	{ "NID"  : "4", "NName" : "Wireless" },
	{ "NID"  : "5", "NName" : "VPN" }   	
   ]                       
}    

$(document).ready(function(){
for(var i=0;i<users.NE.length;i++)
{	
   $('#table').append('<tr class="odd gradeX"><td>'+users.NE[i].NID+'</td>'+'<td>' + users.NE[i].NName+'</td><td><input type="checkbox" class = "checkbox1"></td></tr>');}
});