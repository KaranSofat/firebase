
angular.module('starter.services', ['firebase'])
.factory("Auth", ["$firebaseAuth", "$rootScope",
    function ($firebaseAuth, $rootScope) {
            var ref = new Firebase(firebaseUrl);
            return $firebaseAuth(ref);
}])


  .factory('Fire', function ($firebase) {
    var firebaseUrl = 'https://scorching-torch-6154.firebaseio.com/';
   
    var ref = new Firebase(firebaseUrl);
   
    return {
     
        Register: function (data) {
            var ref = new Firebase(firebaseUrl);
           var users = $firebase(ref.child('users')).$asArray();
           users.$add(data).then(function (data) {
            console.log("message added");
                });
                 
        }
        
    }
})
.factory('Users', function ($firebase) {

    var firebaseUrl = 'https://scorching-torch-6154.firebaseio.com/';
    
    var ref = new Firebase(firebaseUrl);
    var users = $firebase(ref.child('users')).$asArray();

    return {
        all: function () {
            return users;
        },
        get: function (userId) {
            // Simple index lookup
            return users.$getRecord(userId);
        }
       
    }
})
.factory('CreateRoom', function ($firebase) {

   var firebaseUrl = 'https://scorching-torch-6154.firebaseio.com/';
   
    var ref = new Firebase(firebaseUrl);
   
    return {
     
        create: function (data) {
        console.log(data);
            var ref = new Firebase(firebaseUrl);
           var users = $firebase(ref.child('rooms')).$asArray();
           users.$add(data).then(function (data) {
            console.log("room added");
                });
                 
        }
        
    }
})

.factory('Mess', function ($firebase) {
 var firebaseUrl = 'https://scorching-torch-6154.firebaseio.com/';
  var ref = new Firebase(firebaseUrl);
     var messages = $firebase(ref.child('chat')).$asArray();
    return {
          all: function () {
            return messages;
        },
    
        
    
        send: function (from,message) {
             console.log("sending message from :" + from + " & message is " + message);
            if (from && message) {
                var chatMessage = {
                    from: from,
                    message: message,
                    createdAt: Firebase.ServerValue.TIMESTAMP
                };
                var ref = new Firebase(firebaseUrl);
                var chats = $firebase(ref.child('chat')).$asArray();
                chats.$add(chatMessage).then(function (data) {
                    console.log("message added");
                });
            }
        },
        
        }

})


.factory('Chats', function ($firebase, Rooms) {
  var firebaseUrl = 'https://scorching-torch-6154.firebaseio.com/';
    var selectedRoomId;

    var ref = new Firebase(firebaseUrl);
    var chats;

    return {
        all: function () {
            return chats;
        },
        remove: function (chat) {
            chats.$remove(chat).then(function (ref) {
                ref.key() === chat.$id; // true item has been removed
            });
        },
        get: function (chatId) {
            for (var i = 0; i < chats.length; i++) {
                if (chats[i].id === parseInt(chatId)) {
                    return chats[i];
                }
            }
            return null;
        },
        
        selectRoom: function (roomId) {
            console.log("selecting the room with id: " + roomId);
            selectedRoomId = roomId;
            if (!isNaN(roomId)) {
                chats = $firebase(ref.child('rooms').child(selectedRoomId).child('chats')).$asArray();
                console.log(chats);
            }
        },
        send: function (from, message) {
            console.log("sending message from :" + from + " & message is " + message);
           
            if (from && message) {
                var chatMessage = {
                    from: from,
                    message: message,
                    id:6,
                    createdAt: Firebase.ServerValue.TIMESTAMP
                };
                chats.$add(chatMessage).then(function (data) {
                    console.log("message added");
                });
            }
        }
    }
})





.factory('Rooms', function ($firebase) {
  var firebaseUrl = 'https://scorching-torch-6154.firebaseio.com/';
    // Might use a resource here that returns a JSON array
    var ref = new Firebase(firebaseUrl);
    var rooms = $firebase(ref.child('rooms')).$asArray();

    return {
        all: function () {
            return rooms;
        },
        get: function (roomId) {
            // Simple index lookup
            return rooms.$getRecord(roomId);
        }
    }
    
});





/*.factory('ViewUser', function ($firebase) {

    var firebaseUrl = 'https://blazing-fire-2739.firebaseio.com/users'+id;
    var ref = new Firebase(firebaseUrl);
   

    return {
        all: function (id) {
        alert(id);
         var users = $firebase(ref.child('users')).$asArray();
            return users;
        }
       
       
    }
});*/


