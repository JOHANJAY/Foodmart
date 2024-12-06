import { popularVendors } from "../db/Arrays"
import { Link } from "react-router-dom"

const VendorList = () => {
  return (
    <div className="p-5 bg-[#93D856]">
        <h2 className="text-2xl pb-5">Popular Vendors</h2>
        <div className="flex items-center space-x-28">
            {popularVendors.map((vendor) => (
                <div key={vendor.id} className="flex items-center space-x-3 pb-3">
                    <div className="w-40 rounded-full">
                        {vendor.img}
                    </div>
                    <div className="flex flex-col">
                        <h3 className="font-bold text-sm">{vendor.name}</h3>
                        <p className="text-sm font-bold">{vendor.location}</p>
                        <div className="pt-1 flex space-x-1">
                            {vendor.rating}
                        </div>
                    </div>
                </div>
            ) )}
        </div>
        <div className="flex justify-end">
            <Link to="/vendors" className="p-3 font-bold bg-[#C7B8EA] border border-[#8E44AD]">VIEW ALL VENDORS</Link>
        </div>
    </div>
  )
}
export default VendorList