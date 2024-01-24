import { useEffect } from "react";
import "./NotFoundPage.scss";

export const NotFoundPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="NotFoundPage"></div>
  )
}