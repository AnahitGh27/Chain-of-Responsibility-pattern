import { IReceiptSender } from "./IReceiptSender.js";

class EmailReceiptSender extends IReceiptSender
{
    constructor(nextSender = null) {
        super();
        this.nextSender = nextSender;
    }
    
    sendReceipt(product, user) {
        const report = product.getProductReport();
        if (user.settings.sendEmail) {
            console.log(`Receipt was send via Email: ${user.email}
            ${report}`);
        } else if (this.nextSender) {
            this.nextSender.sendReceipt(product, user);
        } else {
            console.log(`failed to send receipt`);
        }
    }
}

export { EmailReceiptSender };