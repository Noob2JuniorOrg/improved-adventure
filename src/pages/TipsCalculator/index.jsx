import Logo from './Logo';
import LeftContainer from './LeftContainer';
import RightContainer from './RightContainer';
import { Provider } from 'react-redux';
import store from './store/store';

function TipsCalculator() {
  return (
    <Provider store={store}>
      <div className="bg-tipcalc-background pt-12 font-tipcalc font-bold tablet:pt-32 tablet:pb-24">
        <Logo />
        <main className="bg-white flex flex-col rounded-t-3xl p-6 pt-8 w-full max-w-4xl m-auto tablet:flex-row tablet:justify-between tablet:p-8 tablet:rounded-3xl">
          <LeftContainer />
          <RightContainer />
        </main>
      </div>
    </Provider>
  );
}

export default TipsCalculator;
