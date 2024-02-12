import { SET_ERR, SET_LOADING, SET_MESSAGE, SET_USER } from "../keys";

// user actions
export function setUser(payload) {
  return { type: SET_USER, payload };
}

// universal actions
export function setErr(payload) {
  return { type: SET_ERR, payload };
}

export function setMessage(payload) {
  return { type: SET_MESSAGE, payload };
}

export function setLoading(payload) {
  return { type: SET_LOADING, payload };
}

// auth actions
export function submitLogin(payload) {
  const ctrl = new AbortController();
  const signal = ctrl.signal;
  return async function (dispatch) {
    dispatch(setLoading(true));
    try {
      let res = await fetch("https://reqres.in/api/login", {
        method: "POST",
        body: JSON.stringify({
          email: payload.email,
          password: payload.password,
        }),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        signal,
      });
      if (!res.ok) throw Error(res.status);
      let data = await res.json();
      sessionStorage.setItem("access_token", data.token);
      dispatch(setLoading(false));
      dispatch(setUser({ email: payload.email }));
    } catch (error) {
      console.log(error);
      dispatch(setLoading(false));
      dispatch(setErr(error));
    }
  };
}

export function registerUser(payload) {
  const ctrl = new AbortController();
  const signal = ctrl.signal;
  return async function (dispatch) {
    dispatch(setLoading(true));
    try {
      let res = await fetch("https://reqres.in/api/register", {
        method: "POST",
        body: JSON.stringify({
          email: payload.email,
          password: payload.password,
        }),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        signal,
      });
      if (!res.ok) throw Error(res.status);
      dispatch(setLoading(false));
    } catch (error) {
      console.log(error);
      dispatch(setLoading(false));
      dispatch(setErr(error));
    }
  };
}
