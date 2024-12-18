import { FaStar } from "react-icons/fa6";

export const getRatingStar = (rating) => {
  return Array.from({ length: rating }, (_, index) => <FaStar key={index} />);
};
