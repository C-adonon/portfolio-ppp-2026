import axios from "axios";
import router from "../router";

const API_URL = import.meta.env.VITE_API_URL;

export async function getAllProjects() {
  const resp = await axios.get(API_URL + "projects");
  return resp.data.records;
}

export async function getAllCategories() {
  const resp = await axios.get(API_URL + "categories");
  return resp.data.records;
}

export async function getProjectByName(name) {
  const resp = await axios.get(API_URL + "projects");
  let projects = resp.data.records;
  let project = projects.find((project) => project.fields.name_slug === name);
  if (project === undefined) {
    router.push({ name: "not-found" });
  } else {
    return project;
  }
}

export async function getProjectsByCategories(category) {
  const resp = await axios.get(API_URL + "projects");
  let projects = [];
  resp.data.records.forEach((project) => {
    if (project.fields.categories_url.includes(category)) {
      projects.push(project);
    }
  });
  return projects;
}
