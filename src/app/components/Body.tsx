import { Pagination } from "@/app/components/pagination/Pagination";
import { StellenListElement } from "@/app/components/StellenList/StellenListElement";
import { graphql } from "@/app/services/graphql";
import { useEffect, useMemo, useState } from "react";
import { useQuery } from "urql";

const JobOfferQuery = graphql(`
  query JobOfferList(
    $limit: Int = 10,
    $skip: Int = 0,
    $workTypeId: Int = null,
    $locationId: Int = null,
    $experienceLevelId: Int = null) {
    jobOfferCollection(
      limit: $limit, 
      skip: $skip, 
      where: {
        AND: [
          { bereich: { id: $workTypeId } },
          { stadt: { id: $locationId } },
          { erfahrungslevel: { id: $experienceLevelId } }
        ]
      }
    ) {
      items {
        stadt { stadt }
        bereich { name }
        erfahrungslevel { erfahrungslevel }
        arbeitszeitmodell
      }
      total
    }
  }
`);

export type BodyProps = {
  workType: string,
  location: string,
  experienceLevel: string,
};

export const Body = ({
  ...props
}) => {

  const [currentPage, setCurrentPage] = useState(1);

  const [allJobOffersResult] = useQuery({
    query: JobOfferQuery,
    variables: {
      limit: 10,
      skip: (currentPage - 1) * 10,
      workTypeId: props.workType || null,
      locationId: props.location || null,
      experienceLevelId: props.experienceLevel || null,
    },
  });

  const totalPages = useMemo(() => {
    return Math.ceil((allJobOffersResult.data?.jobOfferCollection?.total || 0) / 10);
  }, [allJobOffersResult.data?.jobOfferCollection?.total]);

  useEffect(() => {
    setCurrentPage(1);
  }, [props.workType, props.location, props.experienceLevel]);

  return (
    <div className="bg-gray-50 lg:px-[308px] lg:py-[60px] grid grid-cols-1">
      <div className="grid grid-cols-1 gap-6">
        {
          allJobOffersResult.data?.jobOfferCollection?.items.map((jobOffer, index) => (
            jobOffer &&
            <StellenListElement
              key={index}
              jobTitle={jobOffer.bereich?.name || ''}
              location={jobOffer.stadt?.stadt || ''}
              title={jobOffer.erfahrungslevel?.erfahrungslevel || ''}
              time={jobOffer.arbeitszeitmodell || ''}
            />
          ))
        }
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
