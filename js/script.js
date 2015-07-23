$(document).ready(function(){
	var myDataRef = new Firebase('https://hownow.firebaseio.com/skills');

	myDataRef.on('child_added', function(snapshot) {
		var message = snapshot.val();
		displayChatMessage(message.name, message.text, message.sfor, message.from, message.tags);
		});
	function displayChatMessage(name, text, sfor, from, tags) {
		$delbtn = '<button type="button" class="delstring" value="' + name + '" ><span class="glyphicon glyphicon-remove" "></span></button>';
		listItem = '<div class="skill", id="' + name + '">' + name + $delbtn + '</div>' + '</br>';
		$('#skillsDiv').append(listItem);
		$('#skillsDiv')[0].scrollTop = $('#skillsDiv')[0].scrollHeight;
		console.log('list_load');
		};
	
	
	$('#container').on('click', '.delstring', function(){
	//	name = $(this).val();
	//	myDataRef.child(name).remove();
	//	$(name).slideUp(500, function() {
	//		$(name).remove(); 
	//	});
		console.log('skill_deleted');
	});


	$('#container').on('click', '.skill', function(){
		name = $(this).attr('id');
/*		var skillRef = new Firebase('https://hownow.firebaseio.com/skills/' + name );
			skillRef.on('value', function(snapshot) {
			var skill = snapshot.val();
		$('#skillDiv').html('<div id="opened_skill"><p>Skill:</p> <br> <div class="skill_param"> name:' + name + '</div> <br> <div class="skill_param">text:' + skill.text + '</div> <br> <div class="skill_param">from:<div class="skill", id="' + skill.from + '">' + skill.from + '</div> <br> <div class="skill_param">for:<div class="skill", id="' + skill.sfor + '">' + skill.sfor + '</div> <br> <div class="skill_param"> tags:' + skill.tags + '</div>    </div>');
*/		
		console.log('open_skill' + name);  
	//	});
		});
		
});



 
