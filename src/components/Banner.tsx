import { ReactComponent as Logo } from "@assets/fakephy.svg";

const Banner = () => {
  return (
    <div className="flex justify-center items-center h-2/6 py-3">
      <Logo className= "w-11 h-11"/>
      <span className="text-white">Fakephy</span>
    </div>
  );
};
export default Banner;
