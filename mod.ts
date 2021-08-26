import {
  init,
  commands,
  handle,
  SlashCommandPartial,
  client
} from "https://code.harmony.rocks/main/deploy";

init({ env: true }); // TOKEN (optional, only for managing commands in code) and PUBLIC_KEY (required for verifying interactions)

handle("Cheemsify", (d) => {
  // Blame Discord's weird MD parser
  return d.reply((d as any).targetMessage!.embeds);
}, "MESSAGE");

// If you wanna register
const cmds = [
  {
    name: "Cheemsify",
    type: "MESSAGE",
  },
];

commands.all().then(e => {
  if (e.size !== cmds.length) return commands.bulkEdit(cmds);
})
// Log all errors.
client.on("interactionError", console.error);