import Chai from "./chai.jsx"
function App() {
  const username = "chai aur code"
  return (
    
    <>
    <Chai/>
    <h3> test heading {username}</h3>
    </>
    
  )
}

export default App

// Just like ${} in js we use {} to access variable declared and {} is evaluated expression which means iske andr aap script ka final outcome likhte ho,because consider this ki ye parsing ke baad object banega and js ka object wala syntax mei kabhi conditionals or other calculations nahi allowed hoti thatswhy ushdr sirf evaluated expressions jaate h
// rule is to always start function name and like import Chai with upperCase letter remember it.
// One issue in jsx is ki ek he element ya ek  he tag return krskta h toh hum usko generally div se wrap krdete h or <> </> emoty tags called fragments bhi use kr skte hain.
