import ProfilePhoto from "./Component/Profile/ProfilePhoto";
import FullName from "./Component/Profile/FullName";
import Address from "./Component/Profile/Address";

function App() {
  return (
       <div style={{display:'flex', alignItems:'center', justifyContent:'space-evenly', flexWrap:'wrap', width:'5%', margin:'70px auto'}}>
  <ProfilePhoto/>
  <FullName/>
  <Address/>
    </div>
  );
}

export default App;
