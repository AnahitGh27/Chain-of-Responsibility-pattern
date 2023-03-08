import { IReceiptSender } from "./IReceiptSender.js";

class SMSReceiptSender extends IReceiptSender
{
    constructor(nextSender = null) {
        super();
        this.nextSender = nextSender;
    }
    
    sendReceipt(product, user) {
        const report = product.getProductReport();
        if (user.settings.sendSMS) {
            console.log(`Receipt was send via SMS: ${user.phone}
            ${report}`);
        } else if (this.nextSender) {
            this.nextSender.sendReceipt(product, user);
        } else {
            console.log(`failed to send receipt`);
        }
    }
}

export { SMSReceiptSender };