import contacts from "../../possibleContacts.json"
import SuggestedContact from "./SuggestedContact"

const SuggestedContactList = () => {
  const topXContacts = contacts.slice(0, 4)

  const listContacts = topXContacts.map((contact, i) => (
    <SuggestedContact key={i} contact={contact}></SuggestedContact>
  ))
  const styleButtonPrimary =
    "border rounded-md w-full border-gray-400 h-full text-[10px]"
  return (
    <>
      <h3 className="py-2">Suggested Contacts</h3>
      <div className="courosel">
        <div className="pager flex justify-between has-next ">
          <div className="left arrow ">
            <button>
              <i className="icon-[line-md--chevron-left] text-xl"></i>
            </button>
          </div>
          <div className="right arrow">
            <button>
              <i className="icon-[line-md--chevron-right] text-xl"></i>
            </button>
          </div>
        </div>
        <div className="grid gap-2 grid-cols-4 mb-3 grid-rows-1">
          {listContacts}
        </div>
      </div>
    </>
  )
}

export default SuggestedContactList
