import { useParams } from "react-router-dom"

export default function OrganizationAssets() {
  const { id } = useParams()
  return (
    <div>
      Organization Assets {id}
    </div>
  )
}
