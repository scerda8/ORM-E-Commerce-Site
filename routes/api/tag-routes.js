const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async(req, res) => {
    try {
       const tags=await Tag.findAll({include:[{model:Product,ProductTag}]})
       res.status(200).json(tags)
    } catch (error) {
    res.status(500).json(error.message)
    }
  // find all tags
  // be sure to include its associated Product data
});

router.get('/:id',async (req, res) => {
    try {
        const tag=await Tag.findByPk(req.params.id,{include:[{model:Product,ProductTag}]})
        res.status(200).json(tag)
    } catch (error) {
        res.status(500).json(error.message)
    }
  // find a single tag by its `id`
  // be sure to include its associated Product data
});

router.post('/',async (req, res) => { 
    try {
        const tag=await Tag.create(req.body)
        res.status(200).json(tag)
    } catch (error) {
    res.status(500).json(error.message)
    }
  // create a new tag
});

router.put('/:id', async(req, res) => {
    try {
        const tag=await Tag.update(req.body,{where:{id:req.params.id}})
        res.status(200).json(tag)
    } catch (error) {
    res.status(500).json(error.message)   
    }
  // update a tag's name by its `id` value
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try {
    const tags=await Tag.destroy({where:{id:req.params.id}})
    res.status(200).json(tags)
  } catch (error) {
    res.status(500).json(error.message)
  }
});

module.exports = router;