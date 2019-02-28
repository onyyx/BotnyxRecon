//imports tmi (twitch nodeJS extension?)
const tmi = require("tmi.js");
const options = require("./Options"); //Your options file

//Connect to twitch server
const client = new tmi.client(options);
client.connect();

//on chat
client.on("chat", (channel, userstate, message, self) => {
    //channel is which channel it comes from. Not very usable if you are in one channel only.
    //Userstate is an object which contains a lot of information, if the user who wrote is a subscriber, what emotes he used etc.
    //message is the message itself.
    //self is your bot. 

    if (self) return; //If your bot wrote something, then ignore it because you dont want to listen to your own messages

    //used noxtrox' code as a base for functions
    if ((message.toLowerCase()).includes("noxtroz")) { //using string.includes is case-sensitive, so it is better to just make it lowercase
        client.say("OnyxRecon", `@${userstate.username}YOU WROTE TO THE ONE TRUE LEADER - THE STREAMER`);
    };

    //timeout
    if ((message.toLowerCase()).includes("bad word qwe123")) {
        client.timeout("OnyxRecon", userstate.username, 1, "He wrote a bad word"); //this is a promise so you can add .then and .catch if you want
    }


    //ONYX CODE---------------------------------------------------------------------------------------------
    //ONYX CODE---------------------------------------------------------------------------------------------
    //ONYX CODE---------------------------------------------------------------------------------------------

    //shout outs
    if ((message.toLowerCase()).includes("!so ")) { //using string.includes is case-sensitive, so it is better to just make it lowercase
        if ((message.toLowerCase()).includes("!so \@")) {
            var name2 = message.toString();
            var name = message.toLowerCase().toString().substring(5, name2.length );
            client.say("OnyxRecon", `Please check out this excellent streamer - twitch.tv/` + name);
        }
        else {
            var name = message.toLowerCase().toString().split("!so ");
            client.say("OnyxRecon", `Please check out this excellent streamer - twitch.tv/` + name[1]);
        }
    };

    //discord
    if ((message.toLowerCase()).includes("!discord")) {
        var name = "Feel free to join the discord and say hi!! https://discord.gg/uzhCCVz";
        client.say("OnyxRecon", name);
    }

    //YT
    if ((message.toLowerCase()).includes("!youtube")) {
        var name = "I post mainly videos of funny things that happen with me and my friends here youtube.com/c/onyxrecongaming";
        client.say("OnyxRecon", name);
    }

    //social
    if ((message.toLowerCase()).includes("!social")) {
        var name = "twitter.com/Onyx_Recon";
        client.say("OnyxRecon", name);
    }

    //
    if ((message.toLowerCase()).includes("!youtube")) {
        var name = "funny moments in gaming among other stuff - youtube.com/c/onyxrecongaming";
        client.say("OnyxRecon", name);
    }

}
    //Maybe you want to advertise your youtube or facebook/twitter
    //setInterval(() => {
    //client.say("channel", "sub pls");
    //}, 300000)); //Every 5 minute, your bot advertise your channel.

);
