import React, { Fragment } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { FaGithub, FaCode } from "react-icons/fa";
import { Popover, Transition } from "@headlessui/react";

export const Menu = () => {
  return (
    <Popover className="relative z-50">
      <Popover.Button className="text-2xl outline-none">
        <HiMenuAlt3 className="transition-colors hover:text-gray-300" />
      </Popover.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="top-8 right-0 border-secondary-400 bg-secondary-300 absolute flex w-[140px] flex-col space-y-2 rounded border-2 p-2">
          <a
            target="_blank"
            rel="noreferrer noopener"
            href="https://docs.google.com/forms/d/e/1FAIpQLSc5bp91hgi-M8RTSdclP9jDHdQq5HRdIt6ZogfOZtXT4IWP3Q/viewform"
            className="menu-item"
          >
            <FaCode className="text-base" />
            <p>Join Us</p>
          </a>

          <div className="bg-secondary-400 h-[2px] rounded-md" />

          <a
            target="_blank"
            rel="noreferrer noopener"
            href="https://github.com/gdsc-usls/gdsc-usls-id"
            className="menu-item"
          >
            <FaGithub className="text-base" />
            <p>Source</p>
          </a>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};
