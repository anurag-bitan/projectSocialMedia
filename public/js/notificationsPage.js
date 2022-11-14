$(document).ready(()=>{
    $.get("/api/notifications",(data)=>{
        outputNotificationList(data,$(".resultsContainer"))
        console.log(data);
    })
});

$("#markNotificationsAsRead").click(()=> markNotificationsAsOpened());

