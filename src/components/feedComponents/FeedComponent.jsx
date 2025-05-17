import newsfeed from "../../data/newsfeed.json"
import PostItem from "./PostItem"
///<summary>
///catergory = {1:Post, 2:Log, 3:Contest, 4:Contacts, 5:Ads}
///</summary>
const FeedComponent = () => {
  const feedcontent = newsfeed.map((post, i) => (
    <div
      key={i}
      className="w-full min-h-50 bg-white border border-gray-300 rounded-md mb-3"
    >
      <PostItem post={post}></PostItem>
    </div>
  ))

  return <>{feedcontent}</>
}

export default FeedComponent
