const OrganizationJobs = ({ title, jobs, isLoggedIn }) => {
  const jobCards = jobs.map(job =>
    <div key={job.id} className="col-xs-12 col-sm-4 col-md-3">
      <JobCard job={job} isLoggedIn={isLoggedIn} />
    </div>
  );
  const jobPlural = jobs.length > 1 ? I18n.t('organizations.show.jobs.jobs') : I18n.t('organizations.show.jobs.job');
  return (
    <div className="organization-jobs">
      <div className="container">
        <div className="jobs-header col-xs-12">
          <h3 className="jobs-title text-center">{I18n.t('organizations.show.jobs.want-to-work-for')} {title}?</h3>
          <div className="jobs-count text-center">
            <em>{jobs.length} {jobPlural}</em> {I18n.t('organizations.show.from')} {title}
          </div>
        </div>
        <div className="row">
          {jobCards}
        </div>
      </div>
    </div>
  );
};
