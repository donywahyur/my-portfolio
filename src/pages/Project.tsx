import { useEffect, useState } from "react";
import Preloader from "../components/Preloader";

export default function Projects() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) return <Preloader />;
  return <div>Projects</div>;
}
