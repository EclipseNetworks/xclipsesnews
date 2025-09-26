const RPC = require("discord-rpc");
const { Client } = require("discord-game-sdk");

const client = new RPC.Client({ transport: "ipc" });

const clientId = "1421057441424211968"; // Replace with your Discord Application ID
const client = new Client({ clientId });

RPC.register(clientId);

  client.setActivity({
    details: "Trading Modded Cars 🚘",
    state: "In Xclipse Trader",
    startTimestamp: new Date(),
    largeImageKey: "logo",       // upload in Developer Portal > Rich Presence > Art Assets
    largeImageText: "Xclipse Trader",
    smallImageKey: "car",        // optional secondary icon
    smallImageText: "Custom Cars",
    instance: false,
    buttons: [
      {
        label: "Join Server",
        url: "https://discord.gg/bR5SmE47wf"
      }
    ]
  });
});

// Log in the client
client.login();