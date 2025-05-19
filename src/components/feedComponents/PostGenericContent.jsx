const PostGenericContent = ({ post }) => {
  return (
    <>
      <div className="post-text py-1 px-3">
        <p className="text-[11pt]">{post.message}</p>
      </div>
      <div className="py-2 px-0">
        <img src={post.photos[0]} width="100%" />
      </div>
    </>
  )
}

export default PostGenericContent
