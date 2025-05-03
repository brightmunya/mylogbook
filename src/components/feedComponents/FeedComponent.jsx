import PostItem from "./PostItem"
///<summary>
///catergory = {1:Post, 2:Log, 3:Contest, 4:Contacts}
///</summary>
const FeedComponent = ({ category = 1, children }) => {
  let display
  if (category === 1) {
    display = <PostItem></PostItem>
  }
  return (
    /* frame */
    <div className="w-full min-h-50 bg-white border border-gray-300 rounded-md mb-3">
      {/* container */}
      {children}
    </div>
  )
}

export default FeedComponent
