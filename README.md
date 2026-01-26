# Fsocket_server_V2

**This is a simple websocket relay that forward websocket message from one client to another, Ready to host mode**
```
Simply git clone and run
```

>run fsocket [with custom port]

    fsocket -p [port]
    eg:- fsock -p 3000

    default : 8080

>enable/disable website mode

    fsocket -w=[true/false]
    
    eg:- fsocket -w=false //disables website mode
    eg:- fsocket -w=true //enables website mode

    default : true

>make executable

    chmod +x fsocket

> Testing

    Testing Websocket Chats with fsocket
    route : /testws
    status : available

    Testing Webrtc With fsocket
    route : /testwsrtc
    status : unavailable

> New

    send a simple empty message with message type PING to make connection alive (for timeouts)


