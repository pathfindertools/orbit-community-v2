import * as React from "react";
import { isString } from "../../helpers/utilities";
import { Section } from "../section";

const linkTarget = (link) => {
  const isExternalLink = isString(link) && link.charAt(0) !== '#'
  return isExternalLink ? '_blank' : ''
}


const Card = ({ data, index, parentField = ""  }) => {
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
          style={{backgroundImage: `url(./img/flag-${data.country}.png)`}}
        ></div>
        <div className=" flex-none w-8 h-12 bg-contain bg-no-repeat" style={{backgroundImage: `url(./img/badge-${data.badge}.png)`}}></div>
      </div>
    </div>
  )
}


export const LeaderCards = ({ data, parentField = "" }) => {
  const tw = data.tailwind || {};
  return (
    <Section className="p-20 px-60 sm:px-4 sm:py-8" background={data.background} navigationLabel={data.navigationLabel}>
      <div className="">
        <div className={tw.content}>
          {data.headline && <h2 className="font-bold font-3 text-4xl uppercase text-center text-white mb-8 sm:text-2xl" data-tinafield={`${parentField}.headline`}>{data.headline}</h2>}
        </div>
      </div>
      <div className="leader-cards grid gap-2 grid-cols-1 mx-auto max-w-desktop-full">
{/*         
        { data.headline && 
          <div className="flex bg-black items-center px-10 md:px-6 py-4 sm:px-6 text-md font-2 text-white font-bold uppercase">
            <span className="w-1/3 flex-1">{data.cardlabels?.nameLabel}</span>
            <span className="px-6 ">{data.cardlabels?.countryLabel}</span>
            <span>{data.cardlabels?.badgeLabel}</span>
          </div> 
        }
        { data.headline && 
          <div className="flex sm:hidden bg-black items-center px-10 py-4 md:px-6 sm:py-4 sm:px-6 text-md font-2 text-white font-bold uppercase">
            <span className="w-1/3 flex-1">{data.cardlabels?.nameLabel}</span>
            <span className="px-6 ">{data.cardlabels?.countryLabel}</span>
            <span>{data.cardlabels?.badgeLabel}</span>
          </div> 
        } */}

        {data.items && (
          data.items.map(function (block, index) {
            return <Card
              key={index}
              index={index}
              data={block}
              parentField={`${parentField}.items`}
            />
          })
        )}
      </div>
    </Section>
  );
};
