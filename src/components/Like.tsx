import React, { useState } from "react";
import { BsHeartFill, BsHeart } from "react-icons/bs";

interface Props {
  onClick: () => void;
}

const Like = ({ onClick }: Props) => {
  const [status, setStatus] = useState(false);
  const toggle = () => {
    setStatus(!status);
    onClick();
  };
  if (status) return <BsHeartFill color="pink" size={20} onClick={toggle} />;
  return <BsHeart size={20} onClick={toggle}></BsHeart>;
};

export default Like;
