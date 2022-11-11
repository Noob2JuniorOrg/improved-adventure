import { Link, Outlet } from 'react-router-dom';

function CustomHeader(props) {
  return (
    <>
      {' '}
      <header className="z-20 grid grid-cols-10 p-5 fixed text-sky-100 bg-sky-700 w-screen h-25">
        <h1 className="col-start-2 min-w-[350px] col-end-10 order-2 block font-header text-xl text-center">
          {props.title}{' '}
        </h1>
        <Link to="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
            />
          </svg>
        </Link>
      </header>
      <div className="pt-16">
        <Outlet />
      </div>
    </>
  );
}

export default CustomHeader;
