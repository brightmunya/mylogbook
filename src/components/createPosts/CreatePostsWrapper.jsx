import { useState } from "react"
import CreateBuySellSwap from "./CreateBuySellSwap"
import CreateLog from "./CreateLog"
import CreatePost from "./CreatePost"
const CreatePostsWrapper = () => {
  const [showNewPostForm, setShowNewPostForm] = useState("")
  const [activeForm, setActiveForm] = useState(0)
  const aForm =
    activeForm == 1 ? (
      <CreatePost onClose={() => setActiveForm(0)}></CreatePost>
    ) : activeForm == 2 ? (
      <CreateLog onClose={() => setActiveForm(0)}></CreateLog>
    ) : activeForm == 3 ? (
      <CreateBuySellSwap onClose={() => setActiveForm(0)}></CreateBuySellSwap>
    ) : (
      ""
    )

  return (
    <>
      <div className="bg-gray-200 rounded-lg p-2 mb-2">
        <div className="grid grid-cols-3 gap-2 ">
          <div className="h-8 ">
            <button
              className={
                "text-sm h-full w-full rounded-md " +
                (activeForm == 1 ? "bg-white" : "")
              }
              onClick={() => setActiveForm(1)}
            >
              Relay
            </button>
          </div>
          <div className="h-8 ">
            <button
              className={
                "text-sm h-full w-full rounded-md " +
                (activeForm == 2 ? "bg-white" : "")
              }
              onClick={() => setActiveForm(2)}
            >
              Log
            </button>
          </div>
          <div className="h-8 ">
            <button
              className={
                "text-sm h-full w-full rounded-md " +
                (activeForm == 3 ? "bg-white" : "")
              }
              onClick={() => setActiveForm(3)}
            >
              Buy/Sell/Swap
            </button>
          </div>
        </div>
      </div>

      {aForm}

      {/* <CreateBuySellSwap></CreateBuySellSwap> */}
      {/* <CreateLog></CreateLog> */}
    </>
  )
}

export default CreatePostsWrapper
