class Fsocket{
    constructor(id){
        this.id = id;
        this.domainWithPort = window.location.host;
        this.wssOrWs = window.location.protocol == "http:"?"ws":"wss"
        this.socket = new WebSocket(`${this.wssOrWs}://${this.domainWithPort}/usr/${id}`);
        this.messages = [];
    }

    sendMessage(type,message,client){
        this.socket.send(JSON.stringify({msg_type:type,message:message,from:this.id,to:client}))
    }

    ping(){
        this.socket.send(JSON.stringify({msg_type:"PING",message:"",from:"",to:""}))
    }

    


}
