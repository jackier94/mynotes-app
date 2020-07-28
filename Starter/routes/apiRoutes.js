// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================
const noteListItems = [];
var tableData = require("../data/tableData");
var waitListData = require("../data/waitinglistData");

// ROUTING

module.exports = function (app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/notes", function (req, res) {
    res.json(activeNote);
  });

  //   app.get("/api/waitlist", function (req, res) {
  //     res.json(waitListData);
  //   });

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
