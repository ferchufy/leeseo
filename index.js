const { Client, GatewayIntentBits } = require("discord.js");

// Crea una nueva instancia del cliente de Discord
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds, 
    GatewayIntentBits.GuildMessages, 
    GatewayIntentBits.MessageContent
  ]
});

// Token del bot (Reemplázalo con el tuyo)
const TOKEN = "";

// Evento cuando el bot se conecta
client.once("ready", () => {
  console.log(`✅ Bot conectado como ${client.user.tag}`);
});

// Evento para responder a mensajes
client.on("messageCreate", (message) => {
  if (message.content === "!ping") {
    message.reply("🏓 Pong!");
  }
});

// Inicia sesión con el token del bot
client.login(TOKEN);
