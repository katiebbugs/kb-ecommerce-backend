const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll({
    include: {
      model: Product,
      attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
    }
  })
    .then(allCategories => {
      if(!allCategories) {
        res.status(404).json({ message: "No Results Found" });
        return;
      }
      res.json(allCategories);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err)
    });
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findOne({
    where: {
      id: req.params.id
    },
    include: {
      model: Product,
      attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
    }
  })
    .then(getCategory => {
      if(!getCategory) {
        res.status(404).json({ message: "No Results Found" });
        return;
      }
      res.json(getCategory);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err)
    });
});

router.post('/', (req, res) => {
  // create a new category
  Category.create({
    category_name: req.body.category_name
  })
    .then(createdCategory => res.json(createdCategory))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(req.body, {
    where: {
      id: req.params.id
    }
  })
    .then(updatedCategory => {
      if(!updatedCategory) {
        res.status(404).json({ message: "This tag ID does not exist" });
        return;
      }
      res.json(updatedCategory);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err)
    });
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(deletedCategory => {
    if(!deletedCategory) {
      res.status(404).json({ message: "This tag ID does not exist" });
      return;
    }
    res.json(deletedCategory);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err)
  });
});

module.exports = router;
