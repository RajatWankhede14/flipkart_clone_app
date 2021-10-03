import React, { Fragment } from "react";
import {
  PlusIcon,
  SearchIcon,
  ChevronDownIcon,
  ShoppingCartIcon,
} from "@heroicons/react/solid";
import { Menu, Transition } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Navbar() {
  return (
    <div className="navbar">
      <nav className="bg-blue-600 py-3 px-6 max-w-full m-auto text-white flex justify-around">
        <div>
          <img
            src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png"
            alt="flipkart_logo"
            className="object-contain h-3 sm:h-5"
          />
          <p className="italic text-white font-light text-xs flex">
            Explore{" "}
            <span className="text-yellow-300 font-medium gap-x-1"> Plus</span>
            <span>
              <PlusIcon className="w-3 h-3" color="yellow" />
            </span>
          </p>
        </div>
        <div className="border-2 border-grey-300 shadow-md flex w-2/6 sm:w-2/4">
          <input
            type="text"
            name="search"
            id="search"
            className="text-black px-4 py-2 text-sm border-none w-full"
            placeholder="Search for products, brands and more"
          />
          <SearchIcon className="h-9 w-auto bg-white p-1 " color="blue" />
        </div>
        <div className="w-1/3">
          <ul className="flex justify-evenly">
            <li className="align-middle py-2">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="inline-flex justify-center w-full rounded-md border-gray-300 shadow-sm text-xs sm:text-base font-medium text-white">
                    Options
                    <ChevronDownIcon
                      className="h-5 w-5 align-middle"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="origin-top-right absolute -right-16 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none text-center">
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "text-center block px-4 py-3 text-sm border-b-2"
                            )}
                          >
                            My Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "text-center block px-4 py-3 text-sm border-b-2"
                            )}
                          >
                            SuperCoin Zone
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "text-center block px-4 py-3 text-sm border-b-2"
                            )}
                          >
                            Flipkart Plus Zone
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            type="submit"
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "text-center block w-full px-4 py-3 text-sm border-b-2"
                            )}
                          >
                            Orders
                          </button>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            type="submit"
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "text-center block w-full px-4 py-3 text-sm border-b-2"
                            )}
                          >
                            Wishlist
                          </button>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            type="submit"
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "text-center block w-full px-4 py-3 text-sm border-b-2"
                            )}
                          >
                            My Chats
                          </button>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            type="submit"
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "text-center block w-full px-4 py-3 text-sm border-b-2"
                            )}
                          >
                            Coupons
                          </button>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            type="submit"
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "text-center block w-full px-4 py-3 text-sm border-b-2"
                            )}
                          >
                            Gift Cards
                          </button>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            type="submit"
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "text-center block w-full px-4 py-3 text-sm border-b-2"
                            )}
                          >
                            Notifications
                          </button>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            type="submit"
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "text-center block w-full px-4 py-3 text-sm"
                            )}
                          >
                            Logout
                          </button>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </li>
            <li className="align-middle py-2">
              <div>
                <Menu as="div" className="relative inline-block text-left">
                  <div>
                    <Menu.Button className="inline-flex justify-center w-full rounded-md border-gray-300 shadow-sm text-xs sm:text-base font-medium text-white">
                      More
                      <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="origin-top-left absolute -right-16 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none text-center">
                      <div className="py-1">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "text-center block px-4 py-3 text-sm border-b-2"
                              )}
                            >
                              Notification Preferences
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "text-center block px-4 py-3 text-sm border-b-2"
                              )}
                            >
                              Sell on Flipkart
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "text-center block px-4 py-3 text-sm border-b-2"
                              )}
                            >
                              24X7 Customer Care
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              type="submit"
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "text-center block w-full px-4 py-3 text-sm border-b-2"
                              )}
                            >
                              Advertise
                            </button>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              type="submit"
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "text-center block w-full px-4 py-3 text-sm"
                              )}
                            >
                              Download App
                            </button>
                          )}
                        </Menu.Item>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </li>
            <li className="align-middle py-3 sm:py-2 inline-flex text-xs sm:text-base">
              <ShoppingCartIcon className="w-4 h-4 sm:w-6 sm:h-6" /> Cart
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
