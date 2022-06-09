import React from "react";

type Props = {
  link: string | undefined;
  width: number;
  height: number;
};
export const YouTube: React.FC<Props> = ({ link, width, height }) => {
  return (
    <div>
      <iframe
        width={width}
        height={height}
        src={link}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="rounded-lg p-2"
      />
    </div>
  );
};
