import * as React from "react";
import { Section } from "../section";

const Card = ({ data, category, index, parentField = "" }) => {
  const isHome = category === "home"
  return (
    <div className="lc flex bg-accent1 text-white w-full py-4 px-10 sm:px-4 rounded-lg sm:rounded">
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
          {data.name && <h2 className="font-bold text-md sm:text-xs" data-tinafield={`${parentField}.${index}.name`}>{data.name}</h2>}
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
          className="flex-none w-20 min-w-12 h-12 bg-contain bg-no-repeat sm:mr-4 sm:w-12"
          style={{ backgroundImage: `url(/img/flag-${data.country}.png)` }}
        ></div>
        <div className={`flex-none w-8 h-12 bg-contain bg-no-repeat sm:w-8 ${isHome ? "" : "hidden sm:block"}`} style={{ backgroundImage: `url(/img/badge-${data.badge}.png)` }}></div>
      </div>
    </div>
  )
}


export const LeaderCards = ({ data, parentField = "" }) => {
  const isHome = data.category === "home"
  const wrapClasses = isHome ?
    "bg-gradient-to-b from-accent1 via-primary to-accent2 p-20 rounded-xl sm:px-4 sm:pb-12" :
    "flex gap-16 pl-28 sm:px-0"
  return (
    <Section className="p-20 max-w-5xl mx-auto sm:px-4 sm:py-8" navigationLabel={data.navigationLabel}>
      <div className={wrapClasses}>
        {data.headline && <h2 className="font-bold font-3 text-5xl uppercase text-center text-white mb-12 sm:text-4xl" data-tinafield={`${parentField}.headline`}>{data.headline}</h2>}
        {!isHome &&
          <div className="w-48 sm:hidden">
            <div className="flex items-center px-10 md:px-6 py-4 sm:px-6 text-md font-2 text-white font-bold uppercase">
              <span className="px-6 ">{data.cardlabels?.badgeLabel}</span>
            </div>
            <img src={`/img/${data.category}.svg`} />
          </div>
        }
        <div className="w-full">
          <div className="leader-cards grid gap-2 grid-cols-1 mx-auto max-w-desktop-full">
            {data.cardlabels?.nameLabel &&
              <div className="flex items-center px-10 md:px-6 py-4 sm:px-4 text-md font-2 text-white font-bold uppercase">
                <span className="w-1/3 flex-1">{data.cardlabels?.nameLabel}</span>
                <span className="px-6">{data.cardlabels?.countryLabel}</span>
                <span className={`${isHome ? "" : "hidden sm:block"}`}>{data.cardlabels?.badgeLabel}</span>
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
          <div className="text-white font-1 text-2xl mt-12 sm:text-lg sm:mt-6">
            <a href="/leaderboard">VIEW LEADERBOARD</a>
          </div>
        }
      </div>
    </Section>
  );
};
