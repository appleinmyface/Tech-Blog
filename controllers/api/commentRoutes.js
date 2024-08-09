const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// POST a new comment
router.post('/', withAuth, async (req, res) => {
  try {
    const newComment = await Comment.create({
      content: req.body.content,
      postId: req.body.postId,
      userId: req.session.userId,
    });
    res.status(200).json(newComment);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
