import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TipsCalculator from './pages/TipsCalculator/index';
import LandingPageEz from './pages/LandingPageEz/index';
import LandingPage from './pages/LandingPage/index';
import GithubUserSearch from './pages/GithubUserSearch/index';
import EcommerceProductPage from './pages/EcommerceProductPage/index';
import Home from './pages/Home';
import CustomHeader from './components/CustomHeader';
import 'tailwindcss/tailwind.css';
import HomeHeader from './components/HomeHeader';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route
            index
            element={
              <>
                <HomeHeader /> <Home />
              </>
            }
          />
          <Route
            path="tips-calculator"
            element={
              <>
                <CustomHeader title="Tips calculator" /> <TipsCalculator />
              </>
            }
          />
          <Route
            path="landing-page-ez"
            element={
              <>
                <CustomHeader title="Landing page - Equalizer" />
                <LandingPageEz />
              </>
            }
          />
          <Route
            path="landing-page-adv"
            element={
              <>
                <CustomHeader title="Landing page - Loopstudios" />
                <LandingPage />
              </>
            }
          />
          <Route
            path="github-user-search"
            element={
              <>
                <CustomHeader title="Github user search" />
                <GithubUserSearch />
              </>
            }
          />
          <Route
            path="ecommerce-product-page"
            element={
              <>
                <CustomHeader title="Ecommerce product page" />
                <EcommerceProductPage />
              </>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
