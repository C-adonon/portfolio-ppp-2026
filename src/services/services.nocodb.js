import axios from "axios";
import router from "../router";

const CAT_API_URL = import.meta.env.VITE_NOCODB_CAT_API_URL;
const PRJ_API_URL = import.meta.env.VITE_NOCODB_PRJ_API_URL;
const API_TOKEN = import.meta.env.VITE_NOCODB_API_TOKEN;

// interceptor to add a new header to all requests
axios.interceptors.request.use((config) => {
  config.headers["xc-token"] = API_TOKEN;
  return config;
});

export async function getAllProjects() {
  const resp = await axios.get(PRJ_API_URL + "records");
  // console.log(resp.data.list);
  return resp.data.list;
}

export async function getAllCategories() {
  const resp = await axios.get(CAT_API_URL + "records");
  // console.log(resp.data.list);
  return resp.data.list;
}

export async function getProjectByName(name) {
  // console.log("requested prj : " + name);
  let params = new URLSearchParams();
  params.append("where", "(name_slug,eq," + name + ")");
  const resp = await axios.get(PRJ_API_URL + "records", {
    params: params,
  });
  // console.log("in services: " + resp);
  if (resp.data.list.length == 0) {
    router.push({ name: "not-found" });
    return;
  } else {
    return resp.data.list[0];
  }
}

export async function getProjectsByCategories(category) {
  let params = new URLSearchParams();
  params.append("where", "(categories_url,eq," + category + ")");
  const resp = await axios.get(PRJ_API_URL + "records", {
    params: params,
  });
  if (resp.data.list.length <= 0) {
    router.push({ name: "not-found" });
    return;
  } else {
    return resp.data.list;
  }
  // THIS IS OLD CODE, NOT USED
  // resp.data.list.forEach((project) => {
  //   if (project.fields.categories_url.includes(category)) {
  //     projects.push(project);
  //   }
  // });
}
