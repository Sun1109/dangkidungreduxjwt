import axios from 'axios';

export const userPostFetch = (user) => async (dispatch) => {
    // return fetch("https://5f918ab1563c230016178e63.mockapi.io/users", {
    //   method: "POST",
    //   headers: {
    //     'Content-Type': 'application/json',
    //     Accept: 'application/json',
    //   },
    //   body: JSON.stringify({user})
    // })
    const res = await axios.post("https://5f918ab1563c230016178e63.mockapi.io/users", user)
      .then(resp => resp.json())
      .then(data => {
        if (data.message) {
        } else {
          localStorage.setItem("token", data.jwt)
          dispatch(loginUser(data.user))
        }
      })
  }

export const loginUser = userObj => ({
    type: 'LOGIN_USER',
    payload: userObj
})