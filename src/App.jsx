import { useState } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"

import Navbar from "./components/Navbar"
import CreateLog from "./components/createPosts/CreateLog"
import CreateBuySellSwap from "./components/createPosts/CreateBuySellSwap"
import CreatePost from "./components/createPosts/CreatePost"
import FeedComponent from "./components/feedComponents/FeedComponent"
import SuggestedContact from "./components/userComponents/SuggestedContact"
import PostTradeItem from "./components/feedComponents/PostTradeItem"
import PostQSL from "./components/feedComponents/PostQSL"
import UserCard from "./components/userComponents/UserCard"
import HomeContactsWidget from "./components/widgets/HomeContactsWidget"
import SuggestedContactList from "./components/userComponents/SuggestedContactList"
import PostItem from "./components/feedComponents/PostItem"
import CreatePostsWrapper from "./components/createPosts/CreatePostsWrapper"

function App() {
  const [count, setCount] = useState(0)
  const styleButtonPrimary =
    "border rounded-md w-full border-gray-400 h-full text-[12px]"
  const styleCard = "bg-white border border-gray-300 rounded-lg mb-2 p-2"
  return (
    <>
      <div>
        <Navbar></Navbar>
      </div>
      <div className="flex w-[1080px] mx-auto">
        <div className="md:shrink-0 me-2">
          <UserCard></UserCard>
          <HomeContactsWidget></HomeContactsWidget>
          <div className="w-70 h-20 bg-white border border-gray-300 rounded-lg">
            <div className="flex">
              <div className="flex-1">
                <h3 className="px-2">Awards</h3>
              </div>
              <div className="w-10 text-center">4</div>
            </div>
            <div></div>
          </div>
        </div>
        <div className="flex-1 px-2 ">
          <CreatePostsWrapper></CreatePostsWrapper>
          <SuggestedContactList></SuggestedContactList>
          <FeedComponent>
            <PostItem></PostItem>
          </FeedComponent>
          <FeedComponent>
            <PostTradeItem></PostTradeItem>
          </FeedComponent>
          <FeedComponent>
            <PostTradeItem></PostTradeItem>
          </FeedComponent>
          <FeedComponent>
            <PostQSL></PostQSL>
          </FeedComponent>
          <FeedComponent>
            <PostItem></PostItem>
          </FeedComponent>
        </div>
        <div className="w-50">
          <div className="pb-3">
            <div className="float-right">
              <button>
                <i className="icon-[line-md--cog-loop]"></i>
              </button>
            </div>
            <h5>Active Contests</h5>
          </div>

          <div>
            <div>
              <h5>Communities</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
