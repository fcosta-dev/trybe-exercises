const router = require('express').Router();
const { readContentFile, writeContentFile } = require('../helpers/readWriteFile');
const validations = require('../middlewares/validations');
const PATH_FILE = './teams.json';

router.get('/', async(_req, res) => {
    const teams = await readContentFile(PATH_FILE) || [];

    res.status(200).json({ teams });
});

router.post('/', validations.isValid, async(req, res,) => {
    const newTeam = {
        ...req.body,
        initials: req.body.initials.toUpperCase(),
    };
    const team = await writeContentFile(PATH_FILE, newTeam);

    res.status(200).json(team);
});

module.exports = router;
