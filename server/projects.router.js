const express = require('express');
const pool = require('./pool');

const router = express.Router();

router.get('/', (req, resp) => {

	// Query the database for all rows from 'projects' table
	pool.query('SELECT * FROM projects')
	.then(result => {
		resp.send(result.rows);
	})
	.catch(error => {
		console.log('error with getting projects from database', error);
		resp.sendStatus(500);
	});

}); 

router.put('/', (req, resp) => {

	const project = req.body;

	pool.query(`INSERT INTO "projects" 
		("name", "description", "website", "github", "date_completed", "tag_id")
		VALUES ($1, $2, $3, $4, $5, $6);`,
		[project.name, project.description, project.website, project.github, project.date, project.tags])
	.then (result => {
		resp.sendStatus(201);
	})
	.catch ( error => {
		console.log('error adding project to database', error);
		resp.sendStatus(500);
	})
});


router.delete('/:id', (req, resp) => {

	const id = req.params.id;

	pool.query(`DELETE FROM "projects"
				WHERE "id" = $1;`, [id])
	.then( result => {
		resp.sendStatus(201);
	})
	.catch( error => {
		console.log('error deleting project', error);
		resp.sendStatus(500);
	})
})

module.exports = router;