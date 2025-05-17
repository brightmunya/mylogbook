import PostActions from "./PostActions"
import PostGenericContent from "./PostGenericContent"
import PostHeader from "./PostHeader"
import PostQSLContent from "./PostQSLContent"
const PostItem = ({ post }) => {
  return (
    <>
      <PostHeader
        postType={post.category}
        user={post.user}
        postDate={post.datePosted}
      ></PostHeader>
      <div className="post-body">
        {post.category === 1 && (
          <PostGenericContent post={post}></PostGenericContent>
        )}
        {post.category === 2 && <PostQSLContent post={post}></PostQSLContent>}
      </div>
      <PostActions></PostActions>
    </>
  )
}

export default PostItem
