export const userPostFetch = cat => {
  return dispatch => {
    return fetch("https://5f918ab1563c230016178e63.mockapi.io/users", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({cat})
    })
      .then(resp => resp.json())
      .then(data => {
        if (data.message) {
        } else {
          localStorage.setItem("token", data.jwt)
          dispatch(loginUser(data.user))
        }
      })
  }
}

export const loginUser = catObj => ({
    type: 'LOGIN_USER',
    payload: catObj
})