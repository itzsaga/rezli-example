const OrganizationLinks = ({ links, title }) => {
  const linksList = links.map(link =>
    (<div className="extra-info-link col-xs-12" key={link.id}>
      <div>
        <h5 className="extra-info-section-title">{link.title}</h5>
        <p className="extra-info-section-description">{link.description}</p>
      </div>
      <div className="extra-info-button-section">
        <a className="extra-info-section-button" target="_blank" href={link.url}>{link.call_to_action}</a>
      </div>
    </div>)
  );
  return (
    <div className="extra-info-section">
      <div className="container">
        <div className="col-xs-12">
          <div className="extra-info-header">
            <h1 className="extra-info-title">{I18n.t('organizations.show.links.learn-more-about')} {title}</h1>
          </div>
          {linksList}
        </div>
      </div>
    </div>
  );
};
