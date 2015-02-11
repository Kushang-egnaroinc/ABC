var users = { "NE" : [ 
      { "Name"  : "Brahan", "email" : "brahanm@egnaroinc.com" },
      { "Name"  : "Pavan", "email" : "pavant@egnaroinc.com" },
       { "Name"  : "Narendra", "email" : "narendrap@egnaroinc.com" },
	{ "Name"  : "pravin", "email" : "pravinp@egnaroinc.com" },
	{ "Name"  : "Aravind", "email" : "arvindk@egnaroinc.com" }   	
   ]                       
}    

$(document).ready(function(){
for(var i=0;i<users.NE.length;i++)
{	
   $('#table').append('<tr class="odd gradeX"><td>'+users.NE[i].Name+'</td>'+'<td>' + users.NE[i].email+'</td><td><input type="checkbox" class = "checkbox1"></td></tr>');}
});