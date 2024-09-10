import { Pagination } from "@/app/components/pagination/Pagination";
import { StellenListElement } from "@/app/components/StellenList/StellenListElement";
import { useState } from "react";

export const Body = () => {

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  return (
    <div className="bg-gray-50 lg:px-[308px] lg:py-[60px] grid grid-cols-1">
      <div className="grid grid-cols-1 gap-6">
        <StellenListElement
          title="IT & Projektmanagement"
          jobTitle="(Junior) Full Stack Developer (m/w/d)"
          location="Stuttgart"
          time="Vollzeit"
        />
      </div>
      <div className="mt-[48px] flex justify-between">
        <Pagination
          current={currentPage}
          total={totalPages}
          onCurrentChange={setCurrentPage}
        />
      </div>
    </div>
  );
}
