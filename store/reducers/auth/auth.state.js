import { deleteCookie, getCookie, setCookie } from "cookies-next";
export default {
  access_token: getCookie("access_token"),
  data_member_reg: [],
  user_data: {},
  data_member_reg_detail: [],
};
