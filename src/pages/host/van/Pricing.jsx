import { useOutletContext } from "react-router-dom";
const Pricing = () => {
  const { van } = useOutletContext();
  return (
    <div>
      <div className="p-5">
        <span className="font-bold text-xl">${van.price}</span>/day
      </div>
    </div>
  );
};

export default Pricing;
