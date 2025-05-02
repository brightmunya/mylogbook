import contacts from "../../possibleContacts.json"
import SuggestedContact from "./SuggestedContact"

const SuggestedContactList = () => {
  const topXContacts = contacts.slice(0, 4)
  console.log(topXContacts)
  const listContacts = topXContacts.map((contact) => (
    <SuggestedContact contact={contact}></SuggestedContact>
  ))
  const styleButtonPrimary =
    "border rounded-md w-full border-gray-400 h-full text-[10px]"
  return (
    <div>
      <h3 className="py-2">Suggested Contacts</h3>
      <div className="grid gap-2 grid-cols-4 mb-3">{listContacts}</div>
    </div>
  )
}

export default SuggestedContactList
