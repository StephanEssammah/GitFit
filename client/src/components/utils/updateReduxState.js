import { useDispatch } from "react-redux";
import { setData } from "../../redux/name/user.actions";

const API = process.env.NODE_ENV === 'production' ? '' : 'http://localhost:8080/'

export const updateReduxState = async (user) => {
  const dispatch = useDispatch();
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
    dispatch(setData(data));
}
