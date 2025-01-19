import apiClient from "../client";
import { Project } from "../types/projectTypes";

export const getProjects = async (): Promise<Project[]> => {
  const response = await apiClient.get("/projects");
  return response.data;
};
