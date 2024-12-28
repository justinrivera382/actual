// @desc        Get all posts
// @route       GET /api/v1/posts
// @access      Public
exports.getPosts = (req, res, next) => {
  res.status(200).json({ success: true, msg: "Show all bootcamps" });
};

// @desc        Get single posts
// @route       GET /api/v1/posts/:id
// @access      Public
exports.getPost = (req, res, next) => {
  res.status(200).json({ success: true, msg: `Get post ${req.params.id}` });
};

// @desc        Create a post
// @route       POST /api/v1/posts/
// @access      Private
exports.createPost = (req, res, next) => {
  res.status(200).json({ success: true, msg: `Created a new post` });
};

// @desc        Update a post
// @route       PUT /api/v1/posts/:id
// @access      Private
exports.updatePost = (req, res, next) => {
  res.status(200).json({ success: true, msg: `Updated post ${req.params.id}` });
};

// @desc        Delete a post
// @route       DELETE /api/v1/posts/:id
// @access      Private
exports.deletePost = (req, res, next) => {
  res.status(200).json({ success: true, msg: `Delete post ${req.params.id}` });
};
