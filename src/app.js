require('dotenv').config();
const clientId = process.env.CLIENT_ID;

if (!clientId) {
  console.error("Error: CLIENT_ID is missing from .env!");
  process.exit(1);
}

const DiscordRPC = require("discord-rpc");
const RPC = new DiscordRPC.Client({ transport: "ipc" });
const config = require("../config.json");

DiscordRPC.register(clientId);

const startTimestamp = new Date();

async function setActivity() {
  if (!RPC) return;
  RPC.setActivity({
    details: config.details,
    state: config.state,
    startTimestamp,
    largeImageKey: config.largeImageKey,
    largeImageText: config.largeImageText,
    smallImageKey: config.smallImageKey,
    smallImageText: config.smallImageText,
    instance: false,
    buttons: config.buttons,
  });
}

RPC.on("ready", async () => {
  console.log("Discord RPC is running!");
  setActivity();
  setInterval(() => {
    setActivity();
  }, 15 * 1000);
});
RPC.login({ clientId }).catch((err) => console.error(err));
