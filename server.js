let express = require("express");
const app = express();
const path = require("path");
let PORT = process.env.PORT || 4000;
const server = app.listen(PORT, function () {
  console.log(
    "The server is running, " +
      " please, open your browser on http://localhost:%s",
    PORT
  );
});
if (process.env.NODE_ENV === "production") {
  app.use(express.static("front/project/build"));
  app.get("*", (req, res, next) => {
    let url = req.originalUrl;
    if (!url.startsWith("/api/")) {
      res.sendFile(
        path.join(__dirname, "front", "project", "build", "index.html")
      );
      return;
    }
    next();
  });
}
