import { useParams } from 'react-router-dom'
import Banner from '../../components/Banner/baan.jsx'
import Card from '../../components/Card/card'
import Collapse from '../../components/Collapse/collapse'
import './_apartment.scss'
import { getData } from '../../utilis/getData.js'
import { useEffect, useState } from 'react'

function Apartment() {
  const { id } = useParams()
  const [apartmentData, setApartmentData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getData()
        setApartmentData(data)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])

  if (!apartmentData) {
    return null
  }

  const selectedApartment = apartmentData.find(
    (apartment) => apartment.id.toString() === id
  )

  // Redirige vers la page d'erreur si aucun appartement n'est trouvé
  if (!selectedApartment) {
    window.location.href = '*'
    return null
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
