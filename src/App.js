import HomeSection from "./Component/HomeSection/HomeSection";
import { NavBar } from "./Component";
import { Layout } from "./Component/Layout/Layout";

function App() {
  return (
    <Layout>
      <NavBar />
      <HomeSection />
    </Layout>
  );
}
export default App;
