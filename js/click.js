$(document).ready(function(){
	$('#messagesDiv').on('click', '.delstring', function(){
		name = $(this).val();
		myDataRef.child(name).remove();
		$('#skill-' + name).slideUp(500, function() {
			$('#skill-' + name).remove(); 
		});
	});
});