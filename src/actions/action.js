

export const userPostFetch = user => {
  return dispatch => {
    return fetch("https://5f918ab1563c230016178e63.mockapi.io/users", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({user})
    })
      .then(resp => resp.json())
      .then(data => {
        if (data.message) {
         console.log(user);
         console.log("aaaaaaaaaaaaaa");
        } else {
          localStorage.setItem("token", data.token)
          dispatch(loginUser(data.user))
        }
      })
  }
}

export const loginUser = userObj => ({
    type: 'LOGIN_USER',
    payload: userObj
})