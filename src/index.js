import {createPlugin} from "tocbase";

export default createPlugin("auto-id", (bag, resolveInput, pluginName) => {
  if (bag.plugins.__applied.length != 0) throw new Error(`${bag.TB} 👉 "${pluginName}" must be used as the 1st plugin.`);
  const ipSep = resolveInput("separator", "-");
  const ipBLowerCase = resolveInput("lowerCase", 1);

  bag.plugins[pluginName].__data.headings = [];

  bag.hArray.forEach(h => {
    if (h.hasAttribute("id")) return;
    const joinedText = h.textContent.trim().replace(/\s+/g, ipSep);
    let id = joinedText;
    let counter = 1;
    while(document.getElementById(id)) {
      id = joinedText + `${sep}${counter}`
      counter++;
    };
    h.id = ipBLowerCase ? id.toLowerCase() : id;
    bag.plugins[pluginName].__data.headings.push(h);
  });

  return () => bag.plugins[pluginName].__data.headings.forEach(h => {
    h.removeAttribute("id");
  });
});
