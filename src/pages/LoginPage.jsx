import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { submitLogin } from "../store/actions";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const eRef = useRef();
  const pRef = useRef();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, err } = useSelector((state) => state.UniversalReducer);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      email: eRef.current.value,
      password: pRef.current.value,
    };
    dispatch(submitLogin(payload)).then(() => navigate("/test"));
  };

  if (err) return <h1>Something is wrong!</h1>;

  return (
    <div className="w-full h-screen overflow-hidden">
      <div className="absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]">
        <form
          onSubmit={handleSubmit}
          className="w-80 p-5 shadow-md rounded-md flex flex-col gap-3"
        >
          <h1 className="text-center text-2xl mb-3">Login User</h1>
          <input
            type="email"
            placeholder="your email"
            ref={eRef}
            className="py-2 px-3 outline-none border-b border-zinc-100 focus:border-blue-400"
          />
          <input
            type="password"
            placeholder="your password"
            ref={pRef}
            className="py-2 px-3 outline-none border-b border-zinc-100 focus:border-blue-400"
          />
          <button
            type="submit"
            disabled={loading}
            className="px-4 py-2 disabled:cursor-wait bg-blue-400 text-white rounded-md hover:bg-blue-500 mt-3 disabled:bg-slate-200"
          >
            Log-In
          </button>
        </form>
      </div>
    </div>
  );
}
