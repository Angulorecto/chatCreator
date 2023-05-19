const Pusher = require("pusher");

const pusher = new Pusher({
  appId: "1603441",
  key: "a60fb7b833e006c5b4c7",
  secret: "89c66397865616a59a91",
  cluster: "us2",
  useTLS: true
});

pusher.trigger("my-channel", "my-event", {
  message: "hello world"
});
