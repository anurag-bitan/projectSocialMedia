const mongoose = require('mongoose');
const User = require('./UserSchema');
const Schema = mongoose.Schema;

const notificationSchema = new Schema({

    userTo:{ type: Schema.Types.ObjectId , ref: 'User' },
    userFrom:{ type: Schema.Types.ObjectId , ref: 'User' },
    notificationType: String,
    opened: {type : Boolean, default:false},
    entityId: Schema.Types.ObjectId
},{ timestamps: true });

notificationSchema.statics.insertNotification = async(userTo, userFrom, notificationType,entityId)=>{
    var data = {
        userTo:userTo,
        userFrom:userFrom,
        notificationType:notificationType,
        entityId:entityId
    };

    await Notification.deleteOne(data).catch(error => console.log(error));
    return Notification.create(data).catch(error => console.log(error));
}


var Notification = mongoose.model('Notification',notificationSchema);
module.exports = Notification;