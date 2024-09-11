import { Dropdown } from "@/app/components/ds/Dropdown";
import { graphql } from "@/app/services/graphql";
import { useState } from "react";
import { useQuery } from 'urql';

const BereichsQuery = graphql(`
  query BereichListe($limit: Int = 10) {
    bereichCollection(limit: $limit) {
      items {
        name
        id
      }
    }
  }
`);

const StadtQuery = graphql(`
  query StadtListe($limit: Int = 10) {
    stadtCollection(limit: $limit) {
      items {
        stadt
        id
      }
    }
  }
`);

const ErfahrungslevelQuery = graphql(`
  query ErfahrungslevelListe($limit: Int = 10) {
    erfahrungslevelCollection(limit: $limit) {
      items {
        erfahrungslevel
        id
      }
    }
  }
`);

const JobOfferQuery = graphql(`
  query JobOfferList($limit: Int = 10) {
    jobOfferCollection(limit: $limit) {
      total
    }
  }
`);

export type HeaderProps = {
  workType: string,
  location: string,
  experienceLevel: string,
  onWorkTypeChange: (workType: string) => void,
  onLocationChange: (location: string) => void,
  onExperienceLevelChange: (experienceLevel: string) => void,
};

export const Header = ({
  ...props
}) => {

  const [allWorkTypesResult] = useQuery({
    query: BereichsQuery,
  });

  const [allLocationsResult] = useQuery({
    query: StadtQuery,
  });

  const [allExperienceLevelsResult] = useQuery({
    query: ErfahrungslevelQuery,
  });

  const [allJobOffersResult] = useQuery({
    query: JobOfferQuery,
  });

  return (
    <div className="bg-gray-75 lg:px-[256px] lg:pt-[100px] lg:pb-[60px] grid grid-cols-1">
      <span className="unnamed-character-style-8 text-primary text-center">
        {
          allJobOffersResult.data?.jobOfferCollection?.total
            ? allJobOffersResult.data?.jobOfferCollection?.total + ' '
            : '... '
        }
        offene Stellen bei Creditplus
      </span>
      <span className="pt-[18px] unnamed-character-style-2 leading-[68px] font-bold text-secondary text-center">Hier beginnt deine Zukunft</span>
      <div className="grid grid-cols-3 gap-6 mt-[30px]">
        <Dropdown
          placeholder='Wähle einen Bereich'
          items={allWorkTypesResult.data?.bereichCollection?.items
            .map((item: any) => ({ label: item.name, value: item.id }))
            ?? []
          }
          loading={allWorkTypesResult.fetching}
          value={props.workType}
          onChange={props.onWorkTypeChange}
        />
        <Dropdown
          placeholder='Wähle eine Stadt'
          items={allLocationsResult.data?.stadtCollection?.items
            .map((item: any) => ({ label: item.stadt, value: item.id }))
            ?? []
          }
          loading={allLocationsResult.fetching}
          value={props.location}
          onChange={props.onLocationChange}
        />
        <Dropdown
          placeholder='Wähle ein Erfahrungslevel'
          items={allExperienceLevelsResult.data?.erfahrungslevelCollection?.items
            .map((item: any) => ({ label: item.erfahrungslevel, value: item.id }))
            ?? []
          }
          loading={allExperienceLevelsResult.fetching}
          value={props.experienceLevel}
          onChange={props.onExperienceLevelChange}
        />
      </div>
    </div>
  );
}
