import "./NotFoundPage.scss";

import NotFoundImg from '../../assets/images/404Page.jpg'

export const NotFoundPage = () => {
  return (
    <div className="NotFoundPage">
      <img src={NotFoundImg} alt="Not Found" />
    </div>
  )
}