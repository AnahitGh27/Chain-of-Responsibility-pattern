import { IReceiptSender } from "./IReceiptSender.js";

class NotificationReceiptSender extends IReceiptSender 
{
    constructor(nextSender = null) {
        super();
        this.nextSender = nextSender;
    }

    sendReceipt(product, user) {
        const report = product.getProductReport();
        if (user.settings.sendNotification) {
            console.log(`Receipt was send via Notification to user: ${user.name}
            ${report}`);
        } else if (this.nextSender) {
            this.nextSender.sendReceipt(product, user);
        } else {
            console.log(`Failed to send receipt`);
        }
    }
}

export { NotificationReceiptSender };