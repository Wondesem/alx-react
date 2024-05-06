import * as notificationData from "../../../../notifications.json";

export default function getAllNotificationsByUser(userId) {
    notificationData.filter((item) => item.author.id === userId).map((notify) => notify.context)
}