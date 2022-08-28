const autoID = options => function autoID(bag) {
  bag.hArray.forEach(h => {
    if (h.id) return;
    let id = h.textContent.trim().replace(/\s+/g, "-");
    let tempID = id;
    let c = 1;
    while(document.getElementById(id)) {
      id = tempID + `-${c}`
      c++;
    };
    h.id = id;
  });
}

export default autoID;
