import Header from './Header';
import SearchBar from './SearchBar';
import Profile from './Profile';
import Body from './Body';
import { ThemeContextProvider } from './store/theme-context';

function GithubUserSearch() {
  return (
    <ThemeContextProvider>
      <Body>
        <Header />
        <SearchBar />
        <Profile />
      </Body>
    </ThemeContextProvider>
  );
}

export default GithubUserSearch;
