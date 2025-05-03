import PostActions from "./PostActions"
import PostHeader from "./PostHeader"

const PostTradeItem = () => {
  return (
    <>
      <div className="post-category px-2">
        <div className="border-b-1 border-gray-300 pb-1">
          <div className="text-[0.8rem]">Market</div>
        </div>
      </div>
      <PostHeader postType="3"></PostHeader>
      <div className="post-body">
        <div className="grid grid-cols-3">
          <div className="col-span-2">
            <div className="flex">
              <img src="/images/bg.jpg" />
            </div>
          </div>
          <div className="px-2">
            <div>Yauesu FT-991 Radio</div>
            <div>
              <p className="text-[9pt] py-1">
                I am selling a yaesu ft-991 radio, in good condition. I only
                used for a couple of months.
              </p>
            </div>
            <div className="text-[11pt]">
              <div>Used Like New</div>
              <div>R3,500 (neg)</div>
              <div>Open to trade</div>
            </div>
          </div>
        </div>
      </div>
      <PostActions></PostActions>
    </>
  )
}

export default PostTradeItem
