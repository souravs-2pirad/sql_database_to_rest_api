import express = require("express"); // Include express
import Knex from "knex";

let router: express.Router = express.Router();
let current_table = "product";

// GET /entitiy OR GET /entitiy?k1=v1&k2=v2...
// returns a json array of entities with or without search criteria.
router.get(`/${current_table}`, (req, res) =>
{
    if (req.query)
    {
        res.send({ msg: `Get ${current_table}s with criteria ${req.query}` });
    }
    else
    {
        res.send({ msg: `Get all ${current_table}s` });
    }
});

// GET /entitiy/:id
// reads entity with filter on primary key id and returns the entity as json.
router.get(`/${current_table}/:id`, (req, res) =>
{
    let id = req.params.id;
    res.send({ msg: `Get ${current_table} with id = ${id}` });
});

// POST /entitiy/
// inserts an entity in the table and returns status as json.
router.post(`/${current_table}`, (req, res) =>
{
    let body = req.body;
    res.send({ msg: `Insert the entity json : \n${body}\ninto ${current_table} table` });
});

// PUT /entitiy/:id
// updates the given attributes of entity with id and returns status as json.
router.put(`/${current_table}/:id`, (req, res) =>
{
    let body = req.body;
    let id = req.params.id;
    res.send({ msg: `Update the entity ${id} with attributes from the json : \n${body}` });
});

// DELETE /entitiy/:id
// deletes the entity with id and returns status as json.
router.delete(`/${current_table}/:id`, (req, res) =>
{
    let id = req.params.id;
    res.send({ msg: `delete the entity ${id} from ${current_table}` });
});
export = router;
