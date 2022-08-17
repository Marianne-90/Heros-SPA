import { useParams, Navigate } from "react-router-dom"
import { getHeroById } from "../helpers";

export const Hero = () => {
  const { id } = useParams();

  const hero = getHeroById(id);

  if (!hero) {
    return <Navigate to="/marvel"/>
  }

  return (
    <>
      <h1>Hero Page</h1>
      <h2>{hero.id}</h2>
    </>
  )
}