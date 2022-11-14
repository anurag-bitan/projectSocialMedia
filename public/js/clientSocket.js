var connected = false;

var socket = io("http://localhost:3004");
socket.emit( "setup", userLoggedIn );

socket.on("connected",()=> connected = true);
socket.on("message recived",(newMessage)=> messageRecived(newMessage));

socket.on("notification recived",(newNotification)=>{
    $.get("/api/notifications/latest", (notificationData)=>{
        showNotificationPopup(notificationData)
        refreshNotificationsBadge();
    })
})

function emitNotification(userId){
    if(userId == userLoggedIn._id) return;

    socket.emit("notification recived", userId);
}
