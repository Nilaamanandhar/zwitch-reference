import axios from "axios";
import { endpoints } from "../../endpoints";
import config from "../../../config/config";

axios.defaults.baseURL = config.API_BASE_URL;
axios.defaults.headers.post["Content-Type"] = "application/json";


//Get Collection List
// export const getCollectionList = (data) => {
// 	const options = {
// 		url: `${endpoints.uploadProduct}?userId=${data.userId}`,
// 		data: null,
// 		method: "get",
// 	};
// 	return axios(options);
// };


