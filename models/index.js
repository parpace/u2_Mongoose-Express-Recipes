const mongoose = require('mongoose')
const typeSchema = require('./type')
const recipeSchema = require('./recipe')
const ingredientSchema = require('./ingredient')

const Type = mongoose.model('Type', typeSchema)
const Recipe = mongoose.model('Recipe', recipeSchema)
const Ingredient = mongoose.model('Ingredient', ingredientSchema)

module.exports = {
    Type,
    Recipe,
    Ingredient
}