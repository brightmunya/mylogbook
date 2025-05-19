import PostActions from "./PostActions"
import PostGenericContent from "./PostGenericContent"
import PostHeader from "./PostHeader"
import PostQSLContent from "./PostQSLContent"
import PostTradeItem from "./PostTradeItem"

const PostItem = ({ post }) => {
  return (
    <>
      {post.category === 3 && (
        <div className="post-category px-2 py-1">
          <div className="border-b-1 border-gray-300 pb-1">
            <div className="text-[0.8rem]">Market</div>
          </div>
        </div>
      )}
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
        {post.category === 3 && <PostTradeItem post={post}></PostTradeItem>}
      </div>
      <PostActions></PostActions>
    </>
  )
}

export default PostItem
