const OrganizationFeaturedMembers = ({ isLoggedIn, featured_members, title }) => {
  const featuredMemberCards = featured_members.map(member =>
    <div key={member.id} className="col-xs-12 col-sm-4 col-md-3">
      <UserCard user={member} isLoggedIn={isLoggedIn} />
    </div>
  );
  const empPlural = featured_members.length > 1 ? I18n.t('organizations.show.featured-members.employees') : I18n.t('organizations.show.featured-members.employee');
  return (
    <div className="featured-members">
      <div className="container">
        <div className="col-xs-12">
          <h3 className="featured-members-title text-center">{I18n.t('organizations.show.featured-members.who-works-for')} {title}?</h3>
          <div className="featured-members-count text-center">
            <em>{featured_members.length} {empPlural}</em> {I18n.t('organizations.show.from')} {title}
          </div>
          <div className="row">
            {featuredMemberCards}
          </div>
        </div>
      </div>
    </div>
  );
};
