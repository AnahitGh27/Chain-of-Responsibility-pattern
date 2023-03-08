class User 
{
    constructor(name, email, phone, sendEmail = false, sendSMS = false, sendNotification = false) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.balance = 0;
        this.settings = {
            sendEmail: sendEmail,
            sendSMS: sendSMS,
            sendNotification: sendNotification 
        }
    }
    
    addBalance(amount) {
        if (amount > 0) { this.balance += amount; }
    }
}

export { User }