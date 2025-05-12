import newsfeed from "../../newsfeed.json"
import PostItem from "./PostItem"
import PostQSL from "./PostQSL"
///<summary>
///catergory = {1:Post, 2:Log, 3:Contest, 4:Contacts}
///</summary>
const FeedComponent = () => {
  
  const feedcontent =newsfeed.map((post, i) => {
    <div key={i} className="w-full min-h-50 bg-white border border-gray-300 rounded-md mb-3">
            <PostItem post={post}></PostItem>
          </div> 
      })

  return (
    <>
    {newsfeed.map((p, i) => (
      
        <div key={i} className="w-full min-h-50 bg-white border border-gray-300 rounded-md mb-3">
          <PostItem post={p}></PostItem>
        </div> 
              
    ))
    }
    </>
  )
}

export default FeedComponent
