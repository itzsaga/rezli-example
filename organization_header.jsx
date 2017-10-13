const OrganizationHeader = (props) => {
  const { description, facebook_url, follower_count, header_image_url, linkedin_url, location,
    organization_size, slug, twitch_url, twitter_url, url, year_established, youtube_url } = props;
  const headerStyle = { background: `url(${header_image_url}) center top / cover no-repeat` };
  const facebook = facebook_url ? <a className="organization-social__facebook" target="_blank" href={facebook_url}><i className="fa fa-facebook" /></a> : null;
  const linkedin = linkedin_url ? <a className="organization-social__linkedin" target="_blank" href={linkedin_url}><i className="fa fa-linkedin" /></a> : null;
  const twitch = twitch_url ? <a className="organization-social__twitch" target="_blank" href={twitch_url}><i className="fa fa-twitch" /></a> : null;
  const twitter = twitter_url ? <a className="organization-social__twitter" target="_blank" href={twitter_url}><i className="fa fa-twitter" /></a> : null;
  const youtube = youtube_url ? <a className="organization-social__youtube" target="_blank" href={youtube_url}><i className="fa fa-youtube" /></a> : null;
  const orgUrl = url ? <div className="organization-website"><a target="_blank" href={url}>{url}</a></div> : null;
  const orgDesc = description || null;
  const orgSizeDt = organization_size ? <dt className="organization-size-label">{I18n.t('organizations.show.header.size')}</dt> : null;
  const orgSizeDd = organization_size ? <dd className="organization-size">{organization_size}</dd> : null;
  const orgLocDt = location ? <dt className="organization-location-label">{I18n.t('organizations.show.header.location')}</dt> : null;
  const orgLocDd = location ? <dd className="organization-location">{location.name}</dd> : null;
  const orgEstDt = year_established ? <dt className="organization-founded-label">{I18n.t('organizations.show.header.founded')}</dt> : null;
  const orgEstDd = year_established ? <dd className="organization-founded">{year_established}</dd> : null;
  return (
    <header className="organization-header" style={headerStyle}>
      <div className="container">
        <a href={`${window.location.href}/followers`}>
          <dl className="follower__count">
            <dt>{I18n.t('organizations.show.header.followers')}</dt>
            <dd id={`${slug}_follower_count`}>{follower_count}</dd>
          </dl>
        </a>
      </div>
      <aside className="organization-profile-info">
        <div className="organization-social">
          {facebook}
          {twitter}
          {linkedin}
          {youtube}
          {twitch}
        </div>
        {orgUrl}
        <div className="organization-description">
          {orgDesc}
          <dl className="organization-details">
            {orgSizeDt}
            {orgSizeDd}
            {orgLocDt}
            {orgLocDd}
            {orgEstDt}
            {orgEstDd}
          </dl>
        </div>
      </aside>
    </header>
  );
};
