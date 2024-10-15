import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tag from "../../Components/Tag";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";

function Home() {
  return (
    <div className="">
      <div className="w-full rounded bg-[#f7d7da] text-sm py-2 my-3 px-3">
        This template is under maintenance!
      </div>
      <div className="flex gap-3">
        <Tag
          leftIcon={<FontAwesomeIcon icon={faDollarSign} fontSize={18} />}
          className="flex-1 bg-[#dff7f9]"
          value={153000}
        />
        <Tag value={20} description="Sales" className="flex-1 bg-[#fffac3]" />
        <Tag value={20} description="Customer" className="flex-1" />
        <Tag
          value={20}
          description="Employee"
          className="flex-1 bg-[#ebeff2]"
        />
      </div>
      <div className="flex gap-3 mt-3">
        <div className="flex-1 rounded-md px-3 pt-3 pb-5 shadow-lg shadow-slate-300">
          <h2 className="text-[#009788] font-semibold text-base">
            Chart Daily
          </h2>
        </div>
        <div className="flex-1 rounded-md px-3 pt-3 pb-5 shadow-lg shadow-slate-300">
          <h2 className="text-[#009788] font-semibold text-base">Todo List</h2>
        </div>
      </div>
    </div>
  );
}
export default Home;
