const express = require('express');
const process = require('process');
const command = require('child_process');

const router = express.Router();

router.get('/', async(req, res) => {
    const branches = await getBranches();

    console.log(branches);
    res.status(200).json({'branches': [branches]});
});


const getBranches = () => {
    process.chdir('../../bizom-next');

    const branches = command.execSync('git branch').toString().split('\n');

    let remoteBranches = [];
    for(let i = 0; i < branches.length; i++) {
        console.log(branches[i]);
        if(branches[i] !== undefined || branches[i].length) {
            remoteBranches.push(branches[i].replace('*', '').trim());
        }
    }

    return remoteBranches;
}

module.exports = router;
