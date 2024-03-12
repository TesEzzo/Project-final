import axios from "axios";
import Constants from "../../constants/index.js";

const fetchData = async () => {
    try {
      const response = await axios({
        url: `${Constants.API_HOST}/api/users`,
        method: "GET" || "POST",
      });
      const user = response.data.docs
      console.log(user);
    } catch (error) {
        throw new Error(error.message)
    }
  }
  fetchData()