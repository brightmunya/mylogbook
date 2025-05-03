import PostActions from "./PostActions"
import PostHeader from "./PostHeader"
const PostQSL = () => {
  return (
    <>
      <PostHeader postType="4"></PostHeader>
      <div className="post-body">
        <div className="">
          <img src={`/images/qsl-double-example-2-both.jpg`} />
        </div>
      </div>
      <PostActions></PostActions>
    </>
  )
}

export default PostQSL
