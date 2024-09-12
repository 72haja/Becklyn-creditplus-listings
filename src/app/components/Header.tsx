import { Dropdown } from "@/app/components/ds/Dropdown";
import { graphql } from "@/app/services/graphql";
import { useQuery } from 'urql';

const JobOfferQuery = graphql(`
  query JobOfferList($limit: Int = 10) {
    jobCollection(
      limit: $limit
      where: {
        available: true
      }
    ) {
      total
      items {
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
      }
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

  const [allJobOffersResult] = useQuery({
    query: JobOfferQuery,
  });

  return (
    <div
      className="bg-gray-75 grid grid-cols-1
        desktop:px-[256px] desktop:pt-[100px] desktop:pb-[60px]
        tablet:px-[64px] tablet:pt-[50px] tablet:pb-[80px]
        px-[16px] pt-[30px] pb-[60px]"
    >
      <span
        className="text-center
        tablet:unnamed-character-style-8 tablet:text-primary
        unnamed-character-style-9 text-primary"
      >
        {
          allJobOffersResult.data?.jobCollection?.total
            ? allJobOffersResult.data?.jobCollection?.total + ' '
            : '... '
        }
        offene Stellen bei Creditplus
      </span>
      <span
        className="font-bold text-secondary text-center
          desktop:unnamed-character-style-2 leading-[68px] desktop:font-bold desktop:text-secondary
          tablet:pt-[18px] tablet:unnamed-character-style-3 tablet:font-bold tablet:text-secondary
          pt-[12px] unnamed-character-style-4"
      >
        Hier beginnt deine Zukunft
      </span>
      <div
        className="grid
          desktop:gap-6
          tablet:grid-cols-3 tablet:grid-rows-1 tablet:gap-5 tablet:mt-[30px]
          grid-cols-1 grid-rows-3 gap-3 mt-[24px]"
      >
        <Dropdown
          placeholder='Wähle einen Bereich'
          items={allJobOffersResult.data?.jobCollection?.items
            .filter((item) => item !== null)
            .reduce((acc, item) => {
              if(
                !item.department?.title
                || acc.includes(item.department.title)
              ) return acc;
            
              acc.push(item.department.title);
              return acc;
            }, [] as string[])
            ?? []
          }
          loading={allJobOffersResult.fetching}
          value={props.workType}
          onChange={props.onWorkTypeChange}
        />
        <Dropdown
          placeholder='Wähle eine Stadt'
          items={allJobOffersResult.data?.jobCollection?.items
            .filter((item) => item !== null)
            .reduce((acc, item) => {
              if(
                !item.locationsCollection?.items[0]?.city
                || acc.includes(item.locationsCollection.items[0].city)
              ) return acc;
            
              acc.push(item.locationsCollection.items[0].city);
              return acc;
            }, [] as string[])
            ?? []
          }
          loading={allJobOffersResult.fetching}
          value={props.location}
          onChange={props.onLocationChange}
        />
        <Dropdown
          placeholder='Wähle ein Erfahrungslevel'
          items={allJobOffersResult.data?.jobCollection?.items
            .filter((item) => item !== null)
            .reduce((acc, item) => {
              if(
                !item.levelsCollection?.items[0]?.title
                || acc.includes(item.levelsCollection.items[0].title)
              ) return acc;
            
              acc.push(item.levelsCollection.items[0].title);
              return acc;
            }, [] as string[])
            ?? []
          }
          loading={allJobOffersResult.fetching}
          value={props.experienceLevel}
          onChange={props.onExperienceLevelChange}
        />
      </div>
    </div>
  );
}
