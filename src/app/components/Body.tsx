import { Pagination } from "@/app/components/pagination/Pagination";
import { StellenListElement } from "@/app/components/StellenList/StellenListElement";
import { graphql } from "@/app/services/graphql";
import { useEffect, useMemo, useState } from "react";
import { useQuery } from "urql";

const JobOfferQuery = graphql(`
  query JobOfferList(
    $limit: Int = 10,
    $skip: Int = 0
    $workType: String = null,
    $location: String = null,
    $level: String = null) {
    jobCollection(
      limit: $limit
      skip: $skip, 
      where: {
        available: true
        AND: [
          { department: { title: $workType } },
          { locations: { city: $location } },
          { levels: { title: $level } }
        ]
      }
    ) {
      total
      items {
        available
        locationsCollection {
          items {
            city
          }
        }
        levelsCollection {
          items {
            title
          }
        }
        department {
          title
        }
        typesCollection {
          items {
            title
          }
        }
        name
      }
    }
  }
`);

// const JobOfferQuery = graphql(`
//   query JobOfferList(
//     $limit: Int = 10,
//     $skip: Int = 0,
//     $workTypeId: Int = null,
//     $locationId: Int = null,
//     $experienceLevelId: Int = null) {
//     jobOfferCollection(
//       limit: $limit, 
//       skip: $skip, 
//       where: {
//         AND: [
//           { bereich: { id: $workTypeId } },
//           { stadt: { id: $locationId } },
//           { erfahrungslevel: { id: $experienceLevelId } }
//         ]
//       }
//     ) {
//       items {
//         stadt { stadt }
//         bereich { name }
//         erfahrungslevel { erfahrungslevel }
//         arbeitszeitmodell
//       }
//       total
//     }
//   }
// `);

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
      workType: props.workType || null,
      location: props.location || null,
      level: props.experienceLevel || null,
    },
  });

  const totalPages = useMemo(() => {
    return Math.ceil((allJobOffersResult.data?.jobCollection?.total || 0) / 10);
  }, [allJobOffersResult.data?.jobCollection?.total]);

  useEffect(() => {
    setCurrentPage(1);
  }, [props.workType, props.location, props.experienceLevel]);

  return (
    <div
      className="bg-gray-50 grid grid-cols-1
        desktop:px-[308px]
        tablet:px-16
        px-4 py-[60px]
      "
    >
      <div
        className="grid grid-cols-1
          tablet:gap-6
          gap-[10px]"
      >
        {
          allJobOffersResult.data?.jobCollection?.items
            .filter((jobOffer) => jobOffer != null)
            .map((jobOffer, index) => (
            <StellenListElement
              key={index}
              jobTitle={jobOffer.name || ''}
              location={jobOffer.locationsCollection?.items[0]?.city || ''}
              title={jobOffer.department?.title || ''}
              time={jobOffer.typesCollection?.items[0]?.title || ''}
            />
          ))
        }
      </div>
      <div 
        className="flex justify-between
          desktop:mt-12
          tablet:mt-8
          mt-[30px]"
      >
        <Pagination
          current={currentPage}
          total={totalPages}
          onCurrentChange={setCurrentPage}
        />
      </div>
    </div>
  );
}
