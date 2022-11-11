import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="pt-32 pb-32 px-5 font-header h-full bg-sky-100">
      <div className="m-auto w-1/3 min-w-[250px] ">
        <h1 className="uppercase text-2xl text-sky-700">React projects</h1>
        <h2 className="text-sky-900 text-lg">By Maya Lourie:</h2>
        <ul className="mt-2 flex flex-col justify-between h-40 text-sky-700">
          <li className="hover:font-bold">
            <Link to="/tips-calculator">Tip Calculator</Link>
          </li>
          <li className="hover:font-bold">
            <Link to="/landing-page-ez">Landing page ez</Link>
          </li>
          <li className="hover:font-bold">
            <Link to="/landing-page-adv">Landing page advanced</Link>
          </li>
          <li className="hover:font-bold">
            <Link to="/github-user-search">Github user search</Link>
          </li>
          <li className="hover:font-bold">
            <Link to="/ecommerce-product-page">Ecommerce product page</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
