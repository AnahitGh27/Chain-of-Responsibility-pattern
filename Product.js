import { EmailReceiptSender } from "./EmailReceiptSender.js";
import { SMSReceiptSender } from "./SMSReceiptSender.js";
import { NotificationReceiptSender } from "./NotificationReceiptSender.js";

class Product
{
    constructor(name, price) {
        this.name = name;
        this.price = price;
        this.receiptSender = null;
    }

    getProductReport() {
        return `Product - ${this.name}, price - ${this.price}$`;
    }

    setReceiptSender() {
        const note = new NotificationReceiptSender();
        const sms = new SMSReceiptSender(note);
        const email = new EmailReceiptSender(sms);
        this.receiptSender = email;
    }

    purchase(user) {
        if(user.balance > this.price) {
            this.setReceiptSender();
            this.receiptSender.sendReceipt(this, user);
        } else {
            throw `not enough funds`;
        }
    }
}

export { Product } 