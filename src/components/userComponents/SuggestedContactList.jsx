import contacts from "../../possibleContacts.json"
import SuggestedContact from "./SuggestedContact"
//Swiper Components
import { Swiper, SwiperSlide } from "swiper/react"
// import required modules
import { Pagination, Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

const SuggestedContactList = () => {
  const topXContacts = contacts.slice(0, 4)

  const listContacts = contacts.map((contact, i) => (
    <SwiperSlide key={i}>
      <SuggestedContact contact={contact}></SuggestedContact>
    </SwiperSlide>
  ))

  const styleButtonPrimary =
    "border rounded-md w-full border-gray-400 h-full text-[10px]"
  return (
    <>
      <h3 className="py-2">Suggested Contacts</h3>
      <Swiper
        slidesPerView={4}
        spaceBetween={5}
        pagination={false}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper mb-3"
      >
        {listContacts}
      </Swiper>
    </>
  )
}

export default SuggestedContactList
