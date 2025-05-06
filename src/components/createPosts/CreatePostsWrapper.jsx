import { useState } from "react"
import CreateBuySellSwap from "./CreateBuySellSwap"
import CreateLog from "./CreateLog"
import CreatePost from "./CreatePost"
const CreatePostsWrapper = () => {
  const [showNewPostForm, setShowNewPostForm] = useState("")
  const [activeForm, setActiveForm] = useState("")
  function OpenNewPostForm() {
    setShowNewPostForm(<CreatePost></CreatePost>)
    setActiveForm("post")
  }
  function OpenNewLogForm() {
    setShowNewPostForm(<CreateLog></CreateLog>)
    setActiveForm("log")
  }
  function OpenNewBuySellForm() {
    setShowNewPostForm(<CreateBuySellSwap></CreateBuySellSwap>)
    setActiveForm("buysellswap")
  }
  return (
    <>
      <div className="bg-gray-200 rounded-lg p-2 mb-2">
        <div className="grid grid-cols-3 gap-2 ">
          <div className="h-8 ">
            <button
              className={
                "text-sm h-full w-full rounded-md " +
                (activeForm == "post" ? "bg-white" : "")
              }
              onClick={OpenNewPostForm}
            >
              Relay
            </button>
          </div>
          <div className="h-8 ">
            <button
              className={
                "text-sm h-full w-full rounded-md " +
                (activeForm == "log" ? "bg-white" : "")
              }
              onClick={OpenNewLogForm}
            >
              Log
            </button>
          </div>
          <div className="h-8 ">
            <button
              className={
                "text-sm h-full w-full rounded-md " +
                (activeForm == "buysellswap" ? "bg-white" : "")
              }
              onClick={OpenNewBuySellForm}
            >
              Buy/Sell/Swap
            </button>
          </div>
        </div>
      </div>

      {showNewPostForm}

      {/* <CreateBuySellSwap></CreateBuySellSwap> */}
      {/* <CreateLog></CreateLog> */}
    </>
  )
}

export default CreatePostsWrapper
