import ComplainAdmin from './components/ComplainAdmin/ComplainAdmin'
import Herosection from './components/Adminherosection/Adminherosection'
import Featurecard from './components/AdminFeatureCard/Adminfeaturecard'
import Footer from './components/footer/Footer'

const Admin = () => {
  return (
    <>
    <ComplainAdmin/>
      <Herosection/>
      <Featurecard/>
    {/* <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /> */}
      <Footer/>
    </>
  )
}

export default Admin