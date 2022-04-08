import Axios from "axios";

import { toast } from "react-toastify";
import decode from "jwt-decode";
import moment from "moment";

import createAuthRefreshInterceptor from "axios-auth-refresh";
// import { setRefreshUser } from "./authUtils";



const UAT_SERVER_URL = "https://jsonplaceholder.typicode.com";


const api_base_path = UAT_SERVER_URL;

Axios.defaults.baseURL = api_base_path;
Axios.defaults.headers.common["Accept-Language"] = "en";
Axios.defaults.timeout = 800000;


const setRefreshUser = (refreshTokeninfo) => {
    const user = JSON.parse(localStorage.getItem("salesUser"));
  
    localStorage.setItem(
      "salesUser",
      JSON.stringify({
        ...user,
        token: refreshTokeninfo.token,
        refresh: refreshTokeninfo.refresh,
      })
    );
};

// Function that will be called to refresh authorization
const refreshAuthLogic = (failedRequest) =>
  Axios.create({
    baseURL: api_base_path,
    timeout: 800000,
    headers: { "Content-Type": "application/json", Authorization: "" },
  })
    .post(
      "auth_management/web/v1/refresh/",

      {
        refresh:
          JSON.parse(localStorage.getItem("salesUser")) != undefined
            ? JSON.parse(localStorage.getItem("salesUser")).refresh
            : "",
      }
    )
    .then((tokenRefreshResponse) => {
      setRefreshUser(tokenRefreshResponse.data);
      failedRequest.response.config.headers.Authorization = `DHAM ${tokenRefreshResponse.data.token}`;
      return Promise.resolve();
    })
    .catch((err) => {
      localStorage.clear();
      window.location.href = "/login";
    });
createAuthRefreshInterceptor(Axios, refreshAuthLogic);



Axios.interceptors.request.use(function (config) {
 
  const user = JSON.parse(localStorage.getItem("salesUser"));
  if (JSON.parse(localStorage.getItem("salesUser")) != undefined) {
    config.headers.Authorization = `DHAM ${
      JSON.parse(localStorage.getItem("salesUser")).token
    }`;
    config.headers["Content-Type"] = "application/json";
  }

  return config;
});

const typeChecker = (p) => {
  if (Array.isArray(p)) return "array";
  if (typeof p === "string") return "string";
  if (p != null && typeof p === "object") return "object";
  return "other";
};

// refresh token set process start
Axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log("error from axiosUtils======", error.response);
    if (error.response && error.response.status) {
      switch (error.response.status) {
        case 404:
          toast.warn(error.response.data.message);
          break;
        case 409:
          toast.warn(error.response.data.message);
          break;
        case 400:
          if (error.response.data.hasOwnProperty("errors")) {
            // console.log("error=type", typeChecker(error.response.data.errors));
            if (typeChecker(error.response.data.errors) === "object") {
              Object.keys(error.response.data.errors).map((obj, i) => {
                if (typeChecker(error.response.data.errors[obj]) === "array") {
                  toast.error(error.response.data.errors[obj].join(". "));
                } else {
                  // console.log("type checker=====na",typeChecker(error.response.data.errors[obj]));
                }
              });
            } else if (typeChecker(error.response.data.errors) === "array") {
              const customjson = [];
              error.response.data.errors.map((item, index) => {
                Object.keys(item).map((singleItem, i) => {
                  customjson.push(item[singleItem].en);
                });
              });
              if (customjson.length > 0) {
                toast.error(customjson.join(". "));
              }
            }
          } else {
            toast.error(error.response.data.message);
          }

          break;

        case 500:
          toast.error("Internal server error!");
          break;
        case 401:
          /*
          const user = JSON.parse(localStorage.getItem("salesUser"));
          Axios.interceptors.response.eject();
          delete Axios.defaults.headers.common["Authorization"];
          const instance = Axios.create({
            baseURL: api_base_path,
            timeout: 800000,
            headers: { "Content-Type": "application/json" },
          });
          instance
            .post(`auth_management/web/v1/refresh/`, { refresh: user.refresh })
            .then((response) => {
              setRefreshUser(response.data);
            })
            .catch((err) => {});
            */
          // localStorage.clear();
          // window.location.href = "/login";

          toast.warn(error.response.data.message);
          break;
        default:
          toast.warn(error.response.data.message);
          break;
      }
      return error;
      // return error.response;
    }
  }
);
// refresh token set process end

const fetchBinaryData = (url, data) => {
  return Axios.post(url, data, {
    responseType: "arraybuffer",
  })
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      throw err.response;
    });
};

const fetchDatas = (url) => {
  return Axios.get(url)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      throw err.response;
    });
};

const fetchData = (url) => {
  return Axios.get(url)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      throw err.response;
    });
};

const fetchEditData = (url) => {
  return Axios.get(url)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      throw err.response;
    });
};

const addData = (url, data) => {
  return Axios.post(url, data, {
    "content-type": "multipart/form-data",
  })
    .then((response) => {
      toast.success(response.data.message);
      return response.data;
    })
    .catch((err) => {
      throw err.response;
    });
};

const addDataWithoutToasterMessage = (url, data) => {
  return Axios.post(url, data, {
    "content-type": "multipart/form-data",
  })
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      throw err.response;
    });
};

const editData = (url, updateData) => {
  return Axios.put(url, updateData)
    .then((response) => {
      toast.success(response.data.message);
      return response.data;
    })
    .catch((err) => {
      throw err.response;
    });
};

const removeData = (url, data) => {
  return Axios.delete(url)
    .then((response) => {
      console.log("response", response.data.status);
      toast.success("Deleted Successfully");
      return response;
    })
    .catch((err) => {
      throw err.response;
    });
};

const arrayToObject = (array) =>
  array.reduce((obj, item) => {
    obj[Object.keys(item)[0]] = item[Object.keys(item)[0]].reduce(
      (obj2, item2, index) => {
        obj2[index] = item2.name;
        return obj2;
      },
      []
    );
    return obj;
  }, {});

const findSpecificModuleBasePermission = (moduleName) => {
  const user = JSON.parse(localStorage.getItem("salesUser"));
  const allPermissions = arrayToObject(user.permission_data);
  const moduleBasePermission = allPermissions[moduleName];
  return moduleBasePermission;
};

export {
  fetchBinaryData,
  fetchDatas,
  fetchData,
  addData,
  fetchEditData,
  editData,
  removeData,
  findSpecificModuleBasePermission,
  addDataWithoutToasterMessage,
};
