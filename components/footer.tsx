import React from "react";
import { Section } from "./section";

const Link = ({ label, link}) => {
  return (
    <li className="mb-4"><a href={link}>{label}</a></li>
  )
}

export const Footer = () => {
  return (
    <Section>
      <div className="absolute left-0 right-0 h-px bg-white"></div>
      <div className="relative h-full w-full max-w-site-full mx-auto pt-20 pb-10 px-40">
        <h3 className="text-white text-lg font-1 mb-10">CONNECT</h3>
        <div className="grid grid-cols-2 gap-10">
          <div>
            <h2 className="text-white text-3xl font-2 mb-12">Connect with the Filecoin Community</h2>
            <ul className="text-white text-sm">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10">
                  <img className="mx-auto" src="./img/icon-calendar.svg" />
                </div>
                <a href="#">Subscribe to Our Calendar</a>
              </div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10">
                  <img className="mx-auto" src="./img/icon-mail.svg" />
                </div>
                <a href="#">Subscribe to out mailing list</a>
              </div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10">
                  <img className="mx-auto" src="./img/icon-slack.svg" />
                </div>
                <a href="#">Filecoin Slack Channel</a>
              </div>
            </ul>
          </div>
          <div className="grid grid-cols-2 text-white text-sm pt-10">
            <div>
              <img className="mb-8 h-8" src="./img/icon-twitter.svg" />
              <ul className="mb-12">
                <Link label="Filecoin" link="#" />
                <Link label="Filecoin Foundation" link="#" />
              </ul>
            </div>
            <div>
              <img className="mb-8 h-8" src="./img/icon-youtube.svg" />
              <ul className="mb-12">
                <Link label="Filecoin" link="#" />
                <Link label="Filecoin Foundation" link="#" />
              </ul>
            </div>
            <div>
              <img className="mb-8 h-8" src="./img/icon-meetup.svg" />
              <ul className="mb-12">
                <Link label="Filecoin" link="#" />
              </ul>
            </div>
            <div>
              <img className="mb-8 h-8" src="./img/icon-discord.svg" />
              <ul className="mb-12">
                <Link label="IPFS" link="#" />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
