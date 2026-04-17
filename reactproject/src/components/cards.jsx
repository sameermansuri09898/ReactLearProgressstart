import { Bookmark } from "lucide-react";

export default function Card(props) {
  return (
    <div className="w-full sm:w-[300px]">
      
      <div className="h-full flex flex-col justify-between p-5 border rounded-2xl shadow-sm hover:shadow-lg transition bg-white">
        
        {/* Top */}
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 rounded-full overflow-hidden border">
            <img
              src={props.brandLogo}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          <button className="flex items-center gap-1 text-gray-500 text-sm hover:text-black transition">
            Save <Bookmark size={16} />
          </button>
        </div>

        {/* Middle */}
        <div className="flex flex-col flex-grow">
          
          <div className="mb-2">
            <h2 className="text-black font-semibold">
              {props.companyName}
            </h2>
            <p className="text-xs text-gray-500">
              {props.datePosted}
            </p>
          </div>

          <h3 className="text-lg font-bold text-gray-800 mb-2">
            {props.post}
          </h3>

          <div className="flex flex-wrap gap-2 mb-4">
            <span className="text-xs px-3 py-1 bg-gray-100 rounded-full font-medium">
              {props.tag1}
            </span>
            <span className="text-xs px-3 py-1 bg-gray-100 rounded-full font-medium">
              {props.tag2}
            </span>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t my-3"></div>

        {/* Bottom */}
        <div className="flex justify-between items-center">
          <div>
            <p className="font-bold text-black">{props.pay}</p>
            <p className="text-xs text-gray-500">{props.location}</p>
          </div>

          <button className="bg-blue-600 text-white px-3 py-1.5 rounded-lg text-sm hover:bg-blue-700 transition">
            Apply
          </button>
        </div>

      </div>
    </div>
  );
}