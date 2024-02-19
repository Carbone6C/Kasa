import { useState, useEffect } from 'react'
import Collapse from '../../components/Collapse/collapse'
import LayoutAbout from '../../components/LayoutAbout/layoutAbout'
import { getAbout } from '../../utilis/getAbout.js'

function About() {
  const [aboutData, setAboutData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAbout()
        setAboutData(data)
      } catch (error) {
        console.error('Error fetching about data:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <div>
      <LayoutAbout text="" />
      {aboutData.map((apropos, index) => (
        <Collapse
          title={apropos.title}
          text={apropos.text}
          key={`${apropos.title}-${index}`}
          customStyles={'custom-collapse-style-about'}
        />
      ))}
    </div>
  )
}

export default About
