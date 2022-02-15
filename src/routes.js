const { addNoteHandler, getAllNotesHandler, getNoteByIDHandler, editNoteByIDHandler, deleteNoteByHandler } = require('./handler');

const routes = [
      {
        method: 'POST',
        path: '/notes',
        handler: addNoteHandler,
    },
    {
      method: 'GET',
      path: '/notes',
      handler: getAllNotesHandler,
    },
    {
      method: 'GET',
      path: '/notes/{id}',
      handler: getNoteByIDHandler,
    },
    {
      method:'PUT',
      path:'/notes/{id}',
      handler: editNoteByIDHandler,
    },
    {
      method:'DELETE',
      path:'/notes/{id}',
      handler: deleteNoteByHandler,
    },
];

module.exports = routes;