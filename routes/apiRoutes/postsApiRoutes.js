const router = require('express').Router()
const {
    createPosts,
    addComment,
    addLikes,
    addThreads,
    getPosts,
    updatePosts,
    updateComments,
    updateThreads,
    deletePosts,
    deleteComments,
    deleteThreads


} = require('../../controllers/apiControllers/postsApiController')
const {
    authenticate
} = require('../../middlewares/authenticate')



router.post('/addPosts/:userId', authenticate, createPosts)
router.post('/addComments/:userId/:postId', authenticate, addComment)
router.post('/addLikes/:userId/:postId', authenticate, addLikes)
router.post('/addThreads/:userId/:commentId', authenticate, addThreads)

//get all post on a single page 
router.get('/getposts/:userId', authenticate, getPosts)


///updating and deteting the post
router.put('/updatePosts/:userId/:postId', authenticate, updatePosts)
router.put('/updateComments/:userId/:commentId', authenticate, updateComments)
router.put('/updateThreads/:userId/:threadId', authenticate, updateThreads)

router.delete('/deletePosts/:userId/:postId', authenticate, deletePosts)
router.delete('/deleteComments/:userId/:commentId', authenticate, deleteComments)
router.delete('/deleteThreads/:userId/:threadId', authenticate, deleteThreads)


module.exports = router