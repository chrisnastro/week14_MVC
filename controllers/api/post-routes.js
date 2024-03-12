const router = require('express').Router();
const { post } = require('.');
const { Post, User, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll({
            include: [{ model: User, attributes: ["username"] }],
        });
        res.status(200).json(postData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id, {
            include: [
                { model: User, attributes: ["username"] },
                {
                    model: Comment, include: [{ model: User, attributes: ["username"] }],
                },
            ],
        });
        if (!postData) {
            res.status(404).json({ message: "No post associated with ID!" });
            return;
        }
        res.status(200).json(postData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.put('/:id', withAuth, async (req, res) => {
    try {
        const postUpdate = await Post.update(req.body, {
            where: { id: req.params.id },
        });
        if (!postUpdate) {
            res.status(404).json({ message: "No post associated with ID!" });
            return;
        } res.status(200).json(postUpdate);

    } catch (err) {
        res.status(500).json(err);
    }
});

router.delete('/:id', withAuth, async (req, res) => {
    try {
        await Comment.destroy({
            where: { post_id: req.params.id },
        });
        const deletedPost = await Post.destroy({ where: { id: req.params.id }, });
        if (!deletedPost) {
            res.status(404).json({ message: "No post associated with ID!" });
            return;
        }
        res.status(200).json(deletedPost);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;