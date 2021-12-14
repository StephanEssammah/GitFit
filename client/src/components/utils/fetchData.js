export const fetchData = async (user) => {
  const data = await fetch('http://localhost:8080/user/getData', {
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
