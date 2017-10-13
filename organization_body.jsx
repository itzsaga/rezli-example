const OrganizationBody = ({ content_text, header_text, primary_image_url, secondary_image_url }) =>
<div className="organization-body">
  <div className="container">
    <div className="col-xs-12">
      <div className="organization-body-header">
        <img className="col-md-6 col-xs-12" src={primary_image_url} />
        <img className="col-md-6 col-xs-12" src={secondary_image_url} />
      </div>
      <div className="organization-body-content">
        <h1 className="text-center">{header_text}</h1>
        <p className="text-center">{content_text}</p>
      </div>
    </div>
  </div>
</div>;