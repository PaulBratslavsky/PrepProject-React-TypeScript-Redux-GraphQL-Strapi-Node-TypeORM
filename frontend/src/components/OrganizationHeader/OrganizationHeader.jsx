export default function OrganizationHeader({data}) {
  return (
    <header className="d-flex justify-content-between align-items-center pb-3">
        <h3>
          {data.organization.name}{" "}
          <span className="text-secondary">
            Asset{data.organization.assets.length > 1 ? "s" : ""} (
            <span className="text-light">
              {data.organization.assets.length}
            </span>
            )
          </span>{" "}
        </h3>
        <h3>
          <span className="text-warning">
            Members (
            <span className="text-light">
              {data.organization.members.length}
            </span>
            )
          </span>
        </h3>
      </header>
  )
}
