import { CssBaseline } from "@mui/material";
import { Provider } from "react-redux";

import { User } from "./components/User";

import { store } from "./redux/store";
import Container from "@mui/material/Container";

const bgFooter = process.env.PUBLIC_URL + "/assets/images/footer.jpg";
const bgContainer = process.env.PUBLIC_URL + "/assets/images/container.jpg";

function App() {
  return (
    <Provider store={store}>
      <CssBaseline />
      <Container
        maxWidth="xl"
        sx={{
          marginTop: "3%",
          backgroundImage: `url(${bgContainer})`,
          
          paddingBottom: "2%",
        }}
      >
        <User />
      </Container>
      <Container
        maxWidth={false}
        sx={{
          marginTop: "0.3%",
          backgroundImage: `url(${bgFooter})`,
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
          paddingBottom: "2%",
          height: "400px",
        }}
      />
    </Provider>
  );
}

export default App;
