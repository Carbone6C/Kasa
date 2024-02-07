import Gallery from '../../components/Gallery/gallery'
import Layout from '../../components/Layout/layout'
import './_home.scss'

function Home() {
  return (
    <div className="home">
      <Layout text="Chez vous, partout et ailleurs" />
      <Gallery />
    </div>
  )
}

export default Home
