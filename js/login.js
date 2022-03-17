var users = [
    { username: 'admin' }
  ];
  
  var button = document.getElementById('login');
  
  button.onclick = function() {
   var username = document.getElementById('username').value;
  
   for (var i = 0; i < users.length; i++) {
      if(username == users[i].username) {
         window.location.href = 'https://alexanderkubicek.github.io/save-tech.github.io/check-list.html';
         break;
      }else{
         alert('You are trying to break in!');
      }
   }
}