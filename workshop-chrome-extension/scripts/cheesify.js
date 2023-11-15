function cheesify() {
  document.querySelectorAll("img").forEach((img) => {
    img.src = `https://source.unsplash.com/collection/8884129/`;
    img.srcset = img.src;
  });
}

// TODO: Write a function to listen for messages on the content page using chrome.runtime.onMessage
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "cheesify") cheesify();
});
