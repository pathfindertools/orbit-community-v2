import * as React from "react";
import { Section } from "../section";

const Card = ({ data, category, index, parentField = "" }) => {
  return (
    <div className="lc flex bg-accent1 text-white w-full py-4 px-10 sm:px-4 rounded-lg">
      <div className="flex w-full">
        <div className="flex-none w-12 h-12 mr-6 rounded-lg sm:mr-4">
          {data.imageSrc && (
            <img
              alt={data.name}
              src={data.imageSrc}
              className=""
              data-tinafield={`${parentField}.${index}.image`}
              width="128"
            />
          )}
        </div>
        <div className="flex-1 w-1/2">
          {data.name && <h2 className="font-bold text-md" data-tinafield={`${parentField}.${index}.name`}>{data.name}</h2>}
          {data.twitter && (
            <a className="text-md"
              data-tinafield={`${parentField}.${index}.twitter`}
              href={`https://twitter.com/${data.twitter.toLowerCase()}`}
              target="_blank">
              {`@${data.twitter}`}
            </a>
          )}
        </div>
        <div
          className="flex-none w-20 min-w-12 h-12 bg-contain bg-no-repeat sm:mr-4"
          style={{ backgroundImage: `url(/img/flag-${data.country}.png)` }}
        ></div>
        {category === "home" &&
          <div className="flex-none w-8 h-12 bg-contain bg-no-repeat" style={{ backgroundImage: `url(/img/badge-${data.badge}.png)` }}></div>
        }
      </div>
    </div>
  )
}


export const LeaderCards = ({ data, parentField = "" }) => {
  const wrapClasses = data.category === "home" ?
    "bg-gradient-to-b from-accent1 via-primary to-accent2 p-20 rounded-xl" :
    "flex gap-16 pl-28"
  return (
    <Section className="p-20 max-w-5xl mx-auto sm:px-4 sm:py-8" navigationLabel={data.navigationLabel}>
      <div className={wrapClasses}>
        {data.headline && <h2 className="font-bold font-3 text-5xl uppercase text-center text-white mb-12 sm:text-2xl" data-tinafield={`${parentField}.headline`}>{data.headline}</h2>}
        {data.category !== "home" &&
          <div className="w-48">
            <div className="flex items-center px-10 md:px-6 py-4 sm:px-6 text-md font-2 text-white font-bold uppercase">
              <span className="px-6 ">{data.cardlabels?.badgeLabel}</span>
            </div>
            <img src={`/img/${data.category}.svg`} />
          </div>
        }
        <div className="w-full">
          <div className="leader-cards grid gap-2 grid-cols-1 mx-auto max-w-desktop-full">
            {data.cardlabels?.nameLabel &&
              <div className="flex items-center px-10 md:px-6 py-4 sm:px-6 text-md font-2 text-white font-bold uppercase">
                <span className="w-1/3 flex-1">{data.cardlabels?.nameLabel}</span>
                <span className="px-6">{data.cardlabels?.countryLabel}</span>
                {data.category === "home" &&
                  <span>{data.cardlabels?.badgeLabel}</span>
                }
              </div>
            }
            {data.items && (
              data.items.map(function (block, index) {
                return <Card
                  key={index}
                  index={index}
                  category={data.category}
                  data={block}
                  parentField={`${parentField}.items`}
                />
              })
            )}
          </div>
        </div>
        {data.category === "home" &&
          <div className="text-white font-1 text-2xl mt-12">
            <a href="/leaderboard">VIEW LEADERBOARD</a>
          </div>
        }
      </div>
    </Section>
  );
};
