const OrganizationShowContainer = React.createClass({
  mixins: [Reflux.connect(AuthStore, 'auth')],

  getInitialState() {
    return {
      organization: {},
      jobs: [],
      links: [],
      admin: false
    };
  },

  componentWillMount() {
    const url = window.location.href.split('/');
    const slug = `${url[url.length - 1]}`;
    this.fetchOrganizations(slug);
    this.fetchJobs(slug);
    this.fetchLinks(slug);
  },

  fetchOrganizations(slug) {
    fetch(`/organizations/${slug}.json`)
      .then((response) => {
        response.json()
          .then((json) => {
            this.setState({
              organization: json
            });
          });
      })
      .catch((err) => {
        console.log(`There was an error fetching organization: ${err}`);
      });
  },

  fetchJobs(slug) {
    fetch(`/organizations/${slug}/jobs.json`)
      .then((response) => {
        response.json()
          .then((json) => {
            this.setState({
              jobs: json
            });
          });
      })
      .catch((err) => {
        console.log(`There was an error fetching jobs: ${err}`);
      });
  },

  fetchLinks(slug) {
    fetch(`/organizations/${slug}/links.json`)
      .then((response) => {
        response.json()
          .then((json) => {
            this.setState({
              links: json
            });
          });
      })
      .catch((err) => {
        console.log(`There was an error fetching jobs: ${err}`);
      });
  },

  showOrgBody() {
    const headerText = this.state.organization.header_text !== '';
    const contentText = this.state.organization.content_text !== '';
    const imageMissing = 'image_missing';
    // These two ternary operators will return true if "image_missing" is not in the urls.
    const primaryImage = this.state.organization.primary_image_url.indexOf(imageMissing) === -1;
    const secondaryImage = this.state.organization.secondary_image_url.indexOf(imageMissing) === -1;
    return headerText && contentText && primaryImage && secondaryImage;
  },

  checkAdmin() {
    const admins = this.state.organization.admins ? this.state.organization.admins : [];
    const user = this.state.auth.user ? this.state.auth.user : null;
    if (admins.length > 0 && user && !this.state.admin) {
      if (admins.some(admin => admin.id === user.id)) {
        this.setState({ admin: true });
      }
    }
  },

  onFollow() {
    this.setState({ ...this.state,
      organization: {
        ...this.state.organization,
        follower_count: this.state.organization.follower_count + 1
      }
    });
  },

  onUnFollow() {
    this.setState({ ...this.state,
      organization: {
        ...this.state.organization,
        follower_count: this.state.organization.follower_count - 1
      }
    });
  },

  render() {
    const { content_text, description, facebook_url, featured_members, follower_count,
      header_image_url, header_text, industry, linkedin_url, logo_url, organization_size,
      primary_image_url, secondary_image_url, slug, title, twitch_url, twitter_url, url,
      year_established, youtube_url } = this.state.organization;
    const location = this.state.organization.location;
    const { isLoggedIn } = this.state.auth;
    const jobs = this.state.jobs;
    const links = this.state.links;
    const { admin } = this.state;
    if (!this.state.auth || !this.state.organization.success) {
      return <LoadingSpinner />;
    }
    this.checkAdmin();
    return (
      <div>
        <OrganizationTitlebar
          {...{
            admin,
            industry,
            logo_url,
            slug,
            title
          }}
          onFollow={this.onFollow}
          onUnfollow={this.onUnFollow}
        />
        <OrganizationHeader
          {...{
            description,
            facebook_url,
            follower_count,
            header_image_url,
            linkedin_url,
            location,
            organization_size,
            slug,
            twitch_url,
            twitter_url,
            url,
            year_established,
            youtube_url
          }}
        />
        {this.state.jobs.length > 0 && <OrganizationJobs {...{ isLoggedIn, jobs, title }} />}
        {this.showOrgBody() && <OrganizationBody
          {...{
            content_text,
            header_text,
            primary_image_url,
            secondary_image_url
          }}
        />}
        {this.state.organization.featured_members.length > 0 && <OrganizationFeaturedMembers
          {...{
            isLoggedIn,
            featured_members,
            title
          }}
        />}
        {this.state.links.length > 0 && <OrganizationLinks {...{ links, title }} />}
      </div>
    );
  }
});
