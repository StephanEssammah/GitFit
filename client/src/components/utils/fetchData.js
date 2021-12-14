export const fetchData = async (user) => {
  const API = process.env.NODE_ENV === 'production' ? '' : 'http://localhost:8080/'


  const data = await fetch(`${API}user/getData`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify({
        user: user
      })
    })

    const parsedData = await data.json()
    return parsedData
}
