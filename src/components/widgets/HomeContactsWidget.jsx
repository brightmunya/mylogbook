const HomeContactsWidget = () => {
  return (
    <div className="w-70 h-20 bg-white border border-gray-300 rounded-lg mb-2 widget home-contacts">
      <div className="flex widget-header">
        <div className="flex-1">
          <h3 className="px-2">Contacts</h3>
        </div>
        <div className="w-10 text-center">12</div>
      </div>
      <div className="widget-body">
        <ul className="contact-list px-2">
          <li>
            <div className="contact-thumbnail"></div>
          </li>
          <li>
            <div className="contact-thumbnail"></div>
          </li>
          <li>
            <div className="contact-thumbnail"></div>
          </li>
          <li>
            <div className="contact-thumbnail"></div>
          </li>
          <li>
            <div className="contact-thumbnail"></div>
          </li>
          <li>
            <div className="contact-thumbnail"></div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HomeContactsWidget;
