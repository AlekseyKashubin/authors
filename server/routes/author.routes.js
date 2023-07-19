const authorController = require('../controllers/author.controller')




module.exports = app => {
    app.get("/api", authorController.hello);
    
    app.get("/api/authors",authorController.allAuthors)
    
    app.get("/api/authors/:id", authorController.oneAuthor)
    
    app.post("/api/authors", authorController.addAuthor);
    
    app.put("/api/authors/:id", authorController.updateAuthor);
    
    app.delete("/api/authors/:id", authorController.deleteAuthor);
    }