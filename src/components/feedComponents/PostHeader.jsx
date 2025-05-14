const PostHeader = ({ postType = 1, user, postDate }) => {
  const headerText =
    postType == "2"
      ? "is selling"
      : postType == "3"
      ? "is looking for"
      : postType == "4"
      ? "received"
      : "posted"

  const datePosted = new Date(postDate)
  const today = new Date()
  const diffTime = Math.abs(today - datePosted)
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24))
  const diffHours = Math.floor(diffTime / (1000 * 60 * 60))
  const diffMinutes = Math.floor(diffTime / (1000 * 60))
  const postDateText =
    diffDays > 0
      ? `${diffDays > 1 ? diffDays + " days ago" : "a day ago"}`
      : diffHours > 0
      ? `${diffHours} hour${diffHours > 1 ? "s" : ""} ago`
      : diffMinutes > 0
      ? `${diffMinutes > 1 ? diffMinutes + " minutes ago" : "a minute ago"}`
      : "just now"

  console.log("PostHeader", diffTime, diffDays, diffHours, diffMinutes)
  return (
    <div className="flex post-header p-2">
      <div className="thumbnail">
        <i className="icon-[mdi--account-circle-outline] post-thumbnail"></i>
      </div>
      <div className="flex-1 ps-2 ">
        <div className="">
          <div className="title">
            {user.callsign} ({user.name}) {headerText}
          </div>
          <p className="location">
            <small>{user.country}</small>&nbsp;&bull;&nbsp;
            <small>posted {postDateText}</small>
          </p>
        </div>
      </div>
      <div>
        <button>
          <i className="icon-[mdi--dots-horizontal] text-xl"></i>
        </button>
      </div>
    </div>
  )
}

export default PostHeader
