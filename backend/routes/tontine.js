const express = require('express');
const router = express.Router();

// Sample data for tontine groups
let groups = [];

// Create a new group
router.post('/groups', (req, res) => {
    const { name, members } = req.body;
    const newGroup = { id: groups.length + 1, name, members: members || [] };
    groups.push(newGroup);
    res.status(201).json(newGroup);
});

// Get all groups
router.get('/groups', (req, res) => {
    res.status(200).json(groups);
});

// Get a specific group by ID
router.get('/groups/:id', (req, res) => {
    const group = groups.find(g => g.id === parseInt(req.params.id));
    if (!group) return res.status(404).send('Group not found');
    res.status(200).json(group);
});

// Join a group by ID
router.post('/groups/:id/join', (req, res) => {
    const group = groups.find(g => g.id === parseInt(req.params.id));
    if (!group) return res.status(404).send('Group not found');
    const { memberId } = req.body;
    if (!group.members.includes(memberId)) {
        group.members.push(memberId);
    }
    res.status(200).json(group);
});

// Leave a group by ID
router.post('/groups/:id/leave', (req, res) => {
    const group = groups.find(g => g.id === parseInt(req.params.id));
    if (!group) return res.status(404).send('Group not found');
    const { memberId } = req.body;
    group.members = group.members.filter(id => id !== memberId);
    res.status(200).json(group);
});

module.exports = router;
