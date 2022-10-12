import React from 'react'
import Slider from "react-slick"
import { TinaMarkdown } from 'tinacms/dist/rich-text'
import { Buttons } from "../buttons"
import { Section } from "../section"

const Card = ({ data, category, imageWidth, index, parentField = "" }) => {
  const isHome = category === "home"
  const arrowIcon = <svg className="inline-block relative -top-0.5 ml-2" width="20" viewBox="0 0 29 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 2.7915H27V27.7915" stroke="#3F8EF7" strokeWidth="4" /><path d="M27 2.7915L2 27.7915" stroke="#3F8EF7" strokeWidth="4" /></svg>
  return (
    <div className="rounded-lg sm:rounded overflow-hidden mx-2 mb-10">
      {data.imageSrc && (
        <div className="relative" style={{ paddingTop: "56.25%" }}>
          <img
            alt={data.name}
            src={data.imageSrc}
            className="absolute inset-0 w-full h-full object-cover"
            data-tinafield={`${parentField}.${index}.image`}
            width={imageWidth}
          />
        </div>
      )}
      <div className="bg-white p-5 font-2">
        <p className="text-xs mb-3">{data.time}</p>
        <h3 className="text-2xl mb-3">{data.name}</h3>
        <a className='text-primary font-1 text-base' href={data.link}>
          LEARN MORE {arrowIcon}
        </a>
      </div>
    </div>
  )
}


export const SliderCards = ({ data, parentField = "" }) => {
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: parseInt(data.slidesToShow) || 1,
    slidesToScroll: 1
  }
  const imageWidth = 1200/settings.slidesToShow
  return (
    <Section background={data.background} navigationLabel={data.navigationLabel}>
      <div className="p-20 max-w-5xl mx-auto sm:px-6 sm:py-12">
        <div className="w-full">
          {data.headline &&
            <h2 className="uppercase text-white text-xl mb-12 sm:mb-4 font-1">{data.headline}</h2>
          }
          {data.body && (
            <div className={`markdown text-white text-base mb-10`} data-tinafield={`${parentField}.body`}>
              <TinaMarkdown content={data.body} />
            </div>
          )}
          <Slider {...settings}>
            {data.items && (
              data.items.map(function (block, index) {
                return <Card
                  key={index}
                  index={index}
                  category={data.category}
                  data={block}
                  imageWidth={imageWidth}
                  parentField={`${parentField}.items`}
                />
              })
            )}
          </Slider>
        </div>
        {data.buttonLabel && 
          <Buttons buttons={[{
            link: data.buttonLink,
            label: data.buttonLabel,
            type: data.buttonType
          }]} className=""  data-tinafield={`${parentField}.link`} />
        }
      </div>
    </Section>
  );
};
