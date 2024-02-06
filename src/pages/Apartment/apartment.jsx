import { useParams } from 'react-router-dom'
import Banner from '../../components/Banner/Banner'
import Card from '../../components/Card/card'
import data from '../../data/data.json'
import Collapse from '../../components/Collapse/collapse'
import './_apartment.scss'

function Apartment() {
  const { id } = useParams()
  const selectedApartment = data.find(
    (apartment) => apartment.id.toString() === id
  )

  if (!selectedApartment) {
    // Redirige vers la page d'erreur si aucun appartement n'est trouvé
    return (window.location.href = '*')
  }

  return (
    <div>
      <Banner />
      <Card
        title={selectedApartment.title}
        location={selectedApartment.location}
        tags={selectedApartment.tags}
        host={selectedApartment.host}
        rating={selectedApartment.rating}
      />
      <div className="apartment-details">
        <Collapse
          title="Description"
          text={selectedApartment.description}
          customStyles="custom-collapse-style-apartment"
        />
        <Collapse
          title="Équipements"
          text={selectedApartment.equipments}
          customStyles="custom-collapse-style-apartment"
        />
      </div>
    </div>
  )
}

export default Apartment
