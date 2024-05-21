const router = require('express').Router();
const { Category, Product,ProductTag } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const categories=await Category.findAll({include:[Product]})
    res.status(200).json(categories)
  } catch (error) {
    res.status(500).json(error.message)
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const category=await Category.findByPk(req.params.id,{include:[Product]}) 
    res.status(200).json(category)
  } catch (error) {
    res.status(500).json(error.message)
  }
});

router.post('/', async(req, res) => {
    try {
        const category=await Category.create(req.body)
        res.status(200).json(category)
    } catch (error) {
     res.status(500).json(error.message)
    }
  // create a new category
});

router.put('/:id',async (req, res) => {
  // update a category by its `id` value
  try {
    const category=await Category.update(req.body,{where:{id:req.params.id}})
    res.status(200).json(category)
  } catch (error) {
    res.status(500).json(error.message)
  }
});

router.delete('/:id', async(req, res) => {
  // delete a category by its `id` value
try {
    const category=await ProductTag.destroy({where:{id:req.params.id}})
    res.status(200).json(category)
} catch (error) {
    res.status(500).json(error.message)
}
});

module.exports = router;