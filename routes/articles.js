const express = require('express');
const router = express.Router();

//Getting the Article model
const Article = require('../models/articles');

//REQUESTS TO GET ALL ARTICLES
router.get('/', (req, res) => {
    Article.find()
        .then(article => res.json(article))
        .catch(err => res.status(400).json(`Error: ${err}`))
});

//REQUEST TO CREATE NEW ARTICLE
router.post('/add', (req, res) => {
    const newArticle = new Article({
        title: req.body.title,
        article: req.body.article,
        author: req.body.author,
    })

    newArticle.save()
        .then(() => res.json("Article added successfully"))
        .catch(err => res.status(400).json("Error: " + err))
});

//REQUEST TO FIND ARTICLE BY ID
router.get('/:id', (req, res) => {
    Article.findById(req.params.id)
        .then(article => res.json(article))
        .catch(err => res.status(400).json("Error: " + err))
});

//REQUEST TO UPDATE AN ARTICLE
router.put('/update/:id', (req, res) => {
    Article.findById(req.params.id)
        .then(article => {
            article.title = req.body.title,
            article.article = req.body.article,
            article.author = req.body.author
        
            article.save()
                .then((article) => res.json(article))
                .catch((err) => res.status(500).json("Error: " + err.message))
        })
});

//REQUEST TO DELETE AN ARTICLE
router.delete('/:id', (req, res) => {
    Article.findByIdAndDelete(req.params.id)
        .then(() => res.json("The article is deleted"))
        .catch(err => res.status(400).json("Error: " + err) )
})

module.exports = router;
