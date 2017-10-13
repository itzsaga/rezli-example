const OrganizationTitlebar = ({ logo_url, title, industry, admin, slug, onFollow, onUnfollow }) => {
  let followButton;
  if (admin) {
    followButton = <a className="btn btn-primary" href={window.location.href + '/edit'}>Edit</a>;
  } else {
    followButton = <FollowButton slug={slug} isUser={false} onFollow={onFollow} onUnfollow={onUnfollow} />;
  }
  return (
    <div className="organization-titlebar container">
      <div className="organization-avatar-section pull-left">
        <img className="organization-logo img-circle" src={logo_url} alt={title}/>
      </div>
      <h1 className="organization-title pull-left">{title}</h1>
      <h2 className="organization-industry pull-left">{industry}</h2>
      <div className="pull-right">
        <ShareDropdown shareIconColor="black"/>
      </div>
      <div className="organization-follow-section pull-right">
        {followButton}
      </div>
    </div>
  );
};

