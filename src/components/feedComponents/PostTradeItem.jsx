const PostTradeContent = ({ post }) => {
  return (
    <>
      <div className="post-body">
        <div className="grid grid-cols-3">
          <div className="col-span-2">
            <div className="flex">
              <img src={post.photos[0]} />
            </div>
          </div>
          <div className="px-2">
            <div>{post.title}</div>
            <div>
              <p className="text-[9pt] py-1">{post.message}</p>
            </div>
            <div className="text-[11pt]">
              <div>{post.condition}</div>
              <div>
                {post.price} ({post.isNegotiable === "Yes" ? "neg" : "non-neg"})
              </div>
              <div>{post.swaps === "Yes" ? "Open to trade" : ""}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PostTradeContent
