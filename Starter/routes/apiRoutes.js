// LOAD DATA

const noteListItems = [];

// ROUTING

module.exports = function (app) {
  // API GET Requests

  app.get("/api/notes", function (req, res) {
    res.json(activeNote);
  });

  // API POST Requests

  app.post("/api/notes", function (req, res) {
    if (noteListItems < 5) {
      noteListItems.push(req.body);
      res.json(true);
    }
  });

  //API DELETE

  app.delete("api/notes/:id", function (req, res) {
    res.send(note.id);
  });
};
