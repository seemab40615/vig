import HomeSection from "./Component/HomeSection/HomeSection";
import { NavBar } from "./Component";
import { Layout } from "./Component/Layout/Layout";
import Footer from './Component/Footer/Footer';

function App() {
  return (
    <Layout>
      <NavBar />
      <HomeSection />
      <Footer />
    </Layout>
  );
}
export default App;
