import contacts from "../../data/connections.json"

const HomeContactsWidget = () => {
  //these will be replaced with the actual data from the database
  //top 5 contacts
  const previewContacts = contacts.length > 5 ? contacts.slice(0, 5) : contacts
  const displayPreview = previewContacts.map((contact) => {
    return (
      <li key={contact.pkID}>
        <div className="contact-thumbnail" title={contact.friend.name}>
          <img src={contact.friend.profilePicture} alt={contact.friend.name} />
        </div>
      </li>
    )
  })
  return (
    <div className="w-70 h-20 bg-white border border-gray-300 rounded-lg mb-2 widget home-contacts">
      <div className="flex widget-header">
        <div className="flex-1">
          <h3 className="px-2">Contacts</h3>
        </div>
        <div className="w-10 text-center">{contacts.length}</div>
      </div>
      <div className="widget-body">
        <ul className="contact-list px-2">
          {displayPreview}
          {contacts.length > 5 && (
            <li>
              <div className="contact-thumbnail" title="View all contacts">
                {/* <i className="icon-[svg-spinners--3-dots-bounce]"></i> */}
                <i className="icon-[tabler--dots]"></i>
              </div>
            </li>
          )}
        </ul>
      </div>
    </div>
  )
}

export default HomeContactsWidget
