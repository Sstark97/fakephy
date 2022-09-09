import { useState } from "react";

const Content = ({ src, alt }: any) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <li className="basis-2/5 md:basis-1/4 xl:basis-1/5 h-1/4 w-full">
      {loaded ? null : (
        <div className="bg-gray-200 h-full animate-pulse"/>
      )}
      <img
        style={loaded ? {} : { display: "none" }}
        className="w-full h-full object-cover"
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
      />
    </li>
  );
};

export default Content;
