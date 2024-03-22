// import Home from "./Home";
import Register from "./Register";
import { UserProvider } from "./context/userContext";

function App() {

    return (
        <>
            <UserProvider>
                {/* <Home/> */}
                <Register/>
            </UserProvider>
        </>
    )
  
}

export default App;