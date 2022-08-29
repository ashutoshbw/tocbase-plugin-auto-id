export default (options = {}) => ({
  name: "auto-id",
  setup(bag) {
    bag.hArray.forEach(h => {
      if (h.id) return;
      const sep = bag.hasKey(options, "separator") ? options.separator : "-";
      const joinedText = h.textContent.trim().replace(/\s+/g, sep);
      let id = joinedText;
      let counter = 1;
      while(document.getElementById(id)) {
        id = joinedText + `${sep}${counter}`
        counter++;
      };
      h.id = options.lowerCase ? id.toLowerCase() : id;
    });
  }
});
