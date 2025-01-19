// hooks/useFetchUsers.ts
import { useEffect, useState } from "react";
import { Project } from "../api/types/projectTypes";
import { getProjects } from "../api/services/projectServices";

const useFetchUsers = () => {
  const [data, setData] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const users = await getProjects();
        setData(users);
      } catch (err) {
        setError("Error fetching users");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return { data, loading, error };
};

export default useFetchUsers;
