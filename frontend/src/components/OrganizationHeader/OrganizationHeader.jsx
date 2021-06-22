import React from 'react'

export default function OrganizationHeader({data}) {
  return (
    <header className="d-flex justify-content-between align-items-center pb-3">
        <h2>
          {data.organization.name}{" "}
          <span className="text-secondary">
            Asset{data.organization.assets.length > 1 ? "s" : ""} (
            <span className="text-light">
              {data.organization.assets.length}
            </span>
            )
          </span>{" "}
        </h2>
        <h2>
          <span className="text-warning">
            Members (
            <span className="text-light">
              {data.organization.members.length}
            </span>
            )
          </span>
        </h2>
      </header>
  )
}
