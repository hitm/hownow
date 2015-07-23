$(document).ready(function(){
myDataRef.on('child_added', function(snapshot) {
   var message = snapshot.val();
   displayChatMessage(message.name, message.text, message.sfor, message.from, message.tags);
     });
   function displayChatMessage(name, text, sfor, from, tags) {
       $delbtn = '<button type="button" class="delstring" value="' + name + '" >x</button>';
   listItem = '<div class="skill", id="skill-' + name + '">' + name + $delbtn + '</div>' + '</br>';
   $('#messagesDiv').append(listItem);
   $('#messagesDiv')[0].scrollTop = $('#messagesDiv')[0].scrollHeight;
};
 });