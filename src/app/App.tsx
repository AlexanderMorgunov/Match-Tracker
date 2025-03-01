import { MainPage } from "../pages/mainPage/MainPage";
import { ClientProvider } from "./providers/ClientProvider/ClientProvider";

function App() {
  return (
    <ClientProvider>
      <MainPage />
    </ClientProvider>
  );
}

export default App;
