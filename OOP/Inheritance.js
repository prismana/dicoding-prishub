class MailService 
{
    constructor(sender)
    {
        this.sender = sender
    }

    sendMessage(message, receiver)
    {
        console.log(`${this.sender} sent ${message} to ${receiver}`)
    }
}

//subclass dari MailService
class WhatsAppService extends MailService 
{

    //ini namanya constuctor iveridding
    constructor(sender, isBussines)
    {
        super(sender)
        this.isBussines = isBussines
    }

    sendBroadcastMessage(message, receivers) 
    {
        for (const receiver of receivers) 
        {
            this.sendMessage(message, receiver);
        }
    }

    //disini kita melakukan overidding method untuk pesan yang lebih spesifik
    sendMessage(message, receiver)
    {
        console.log(`${this.sender} sent ${message} to ${receiver} via WhatsApp`)
    }
}

class EmailService extends MailService 
{
    sendDelayedMessage(message, receiver, delay) 
    {
        setTimeout(() => {
            this.sendMessage(message, receiver);
        }, delay);
    }
}

const whatsap = new WhatsAppService("+6285869206158")
whatsap.sendBroadcastMessage("Testing", ['+6285868684951', '+638684731'])
whatsap.sendMessage("Test aja hehe", "+1 989892 898323")