import { NavLink, Outlet, useNavigate } from "react-router-dom";

const SidebarLayout = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="relative flex w-full">
        <ul className="overflow-auto w-[10%] hidden lg:flex lg:flex-col bg-blue-200 min-h-screen space-y-3 p-4">
          <div className="w-16 h-16 mb-8">
            <img src="/logo192.png" alt="logo" />
          </div>
          <NavLink
            to={"/test"}
            className="hover:underline-offset-4 hover:underline"
          >
            Create
          </NavLink>
          <NavLink
            to={"/test1"}
            className="hover:underline-offset-4 hover:underline"
          >
            Update
          </NavLink>
          <NavLink
            to={"/test2"}
            className="hover:underline-offset-4 hover:underline"
          >
            Filter
          </NavLink>
          <button
            type="button"
            onClick={() => {
              sessionStorage.clear();
              navigate("/login");
            }}
            className="inline-flex hover:underline-offset-4 hover:underline"
          >
            Logout
          </button>
        </ul>
        <div className="w-svw bg-gray-300/85 min-h-screen">
          {/* header */}
          <header className="lg:inline-flex hidden justify-center w-full bg-blue-200 p-4">
            Welcome to test page
          </header>
          <header className="inline-flex lg:hidden justify-center w-full bg-blue-200 p-4 gap-3">
            <NavLink
              to={"/test"}
              className="hover:underline-offset-4 hover:underline"
            >
              Create
            </NavLink>
            <NavLink
              to={"/test1"}
              className="hover:underline-offset-4 hover:underline"
            >
              Update
            </NavLink>
            <NavLink
              to={"/test2"}
              className="hover:underline-offset-4 hover:underline"
            >
              Filter
            </NavLink>
            <button
              type="button"
              onClick={() => {
                sessionStorage.clear();
                navigate("/login");
              }}
              className="inline-flex hover:underline-offset-4 hover:underline"
            >
              Logout
            </button>
          </header>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default SidebarLayout;
