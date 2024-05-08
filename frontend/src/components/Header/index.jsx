import { Fragment } from "react";
import {NavLink} from "react-router-dom"
import Menu from "../Menu";
import { SubMenu } from "../../Data/SubMenu";
export default function Header() {
  return (
    <Fragment>
      <header className="bg-white dark:bg-darker">
        <div className="flex items-center justify-between mx-auto max-w-[1920px] h-[84px] md:h-25 px-4 lg:px-12">
          <div className="navigation__open-btn button-lg bg-gray-100 dark:bg-white/5 only-icon lg:hidden">
            <svg className="w-5.5 h-5.5 text-slate-500 dark:text-white">
              <use href="#bars"></use>
            </svg>
          </div>
          <nav className="flex items-center h-13">
            <div className="lg:ml-8">
              <NavLink to="/" className="block" title="سبز لرن">
                <img
                  src="./assets/image/logo/logo.webp"
                  className="h-12"
                  alt="سبز لرن"
                  loading="lazy"
                />
              </NavLink>
            </div>
            <div className="navigation lg:hidden bg-white dark:bg-darker w-64 overflow-y-auto fixed top-0 bottom-0 -right-64 z-50 p-4.5 transition-all">
              <div className="flex items-center justify-between pb-6 relative border-b border-b-neutral-200 dark:border-b-white/10">
                <img
                  src="./assets/image/logo/logo.webp"
                  className="h-12"
                  alt="سبز لرن"
                />
                <div className="flex gap-x-3">
                  <div className="switch-theme button-lg only-icon bg-gray-100 text-slate-500 dark:bg-white/5 dark:text-white">
                    <svg className="hidden dark:inline-block w-6 h-6">
                      <use href="#sun" id="switch-theme-icon"></use>
                    </svg>
                    <svg className="dark:hidden w-6 h-6">
                      <use href="#moon" id="switch-theme-icon"></use>
                    </svg>
                  </div>
                  <div className="navigation__close-btn button-lg only-icon bg-gray-100 text-slate-500 dark:bg-white/5 dark:text-white">
                    <svg className="w-5.5 h-5.5">
                      <use href="#close"></use>
                    </svg>
                  </div>
                </div>
              </div>
              <form action="/" method="get">
                <label className="relative h-12 mt-6 block">
                  <input
                    className="bg-gray-100 text-slate-500 dark:bg-white/5 dark:text-white text-sm font-danaMedium rounded-full pr-4 pl-12 w-56 h-full"
                    type="text"
                    placeholder="چیو میخوای یاد بگیری؟"
                    name="s"
                  />
                  <button
                    className="absolute left-4 top-0 bottom-0 w-6 h-6 my-auto text-slate-500 dark:text-white"
                    type="submit"
                    role="button"
                  >
                    <svg className="w-6 h-6">
                      <use href="#magnifying-glass"></use>
                    </svg>
                  </button>
                </label>
              </form>
            </div>
            <ul className="hidden lg:flex gap-x-6 text-base">
              <li className="relative group">
                <NavLink
                  to="https://sabzlearn.ir/course-cat/front-end/"
                  className="flex items-center gap-x-1 h-full group-hover:text-green-500 transition-colors"
                >
                  فرانت اند
                  <svg className="w-4 h-4">
                    <use href="#chevron-down"></use>
                  </svg>
                </NavLink>
                <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 absolute right-0 top-full pt-7 transition-all z-10">
                  <div className="flex flex-col gap-y-4 w-64 bg-white dark:bg-darker p-5 border border-neutral-100 dark:border-y dark:border-x-0 dark:border-green-500 shadow-sm dark:shadow-none rounded-xl">
                    <Menu menuItems={SubMenu.FrontEnd} />
                  </div>
                </div>
              </li>
              <li className="relative group">
                <NavLink
                  to="https://sabzlearn.ir/course-cat/security/"
                  className="flex items-center gap-x-1 h-full group-hover:text-green-500 transition-colors"
                >
                  امنیت
                  <svg className="w-4 h-4">
                    <use href="#chevron-down"></use>
                  </svg>
                </NavLink>
                <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 absolute right-0 top-full pt-7 transition-all z-10">
                  <div className="flex flex-col gap-y-4 w-64 bg-white dark:bg-darker p-5 border border-neutral-100 dark:border-y dark:border-x-0 dark:border-green-500 shadow-sm dark:shadow-none rounded-xl">
                    <Menu menuItems={SubMenu.security} />
                  </div>
                </div>
              </li>
              <li className="relative group">
                <NavLink
                  to="https://sabzlearn.ir/course-cat/python/"
                  className="flex items-center gap-x-1 h-full group-hover:text-green-500 transition-colors"
                >
                  پایتون
                  <svg className="w-4 h-4">
                    <use href="#chevron-down"></use>
                  </svg>
                </NavLink>
                <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 absolute right-0 top-full pt-7 transition-all z-10">
                  <div className="flex flex-col gap-y-4 w-64 bg-white dark:bg-darker p-5 border border-neutral-100 dark:border-y dark:border-x-0 dark:border-green-500 shadow-sm dark:shadow-none rounded-xl">
                    <Menu menuItems={SubMenu.python} />
                  </div>
                </div>
              </li>
              <li className="relative group">
                <NavLink
                  to="https://sabzlearn.ir/course-cat/php/"
                  className="flex items-center gap-x-1 h-full group-hover:text-green-500 transition-colors"
                >
                  پی اچ پی
                  <svg className="w-4 h-4">
                    <use href="#chevron-down"></use>
                  </svg>
                </NavLink>
                <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 absolute right-0 top-full pt-7 transition-all z-10">
                  <div className="flex flex-col gap-y-4 w-64 bg-white dark:bg-darker p-5 border border-neutral-100 dark:border-y dark:border-x-0 dark:border-green-500 shadow-sm dark:shadow-none rounded-xl">
                    <Menu menuItems={SubMenu.PHP} />
                  </div>
                </div>
              </li>
              <li className="relative group">
                <NavLink
                  to="https://sabzlearn.ir/course-cat/skill-up/"
                  className="flex items-center gap-x-1 h-full group-hover:text-green-500 transition-colors"
                >
                  ارتقای مهارت ها
                  <svg className="w-4 h-4">
                    <use href="#chevron-down"></use>
                  </svg>
                </NavLink>
                <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 absolute right-0 top-full pt-7 transition-all z-10">
                  <div className="flex flex-col gap-y-4 w-64 bg-white dark:bg-darker p-5 border border-neutral-100 dark:border-y dark:border-x-0 dark:border-green-500 shadow-sm dark:shadow-none rounded-xl">
                    <Menu menuItems={SubMenu.Skill} />
                  </div>
                </div>
              </li>
              <li className="relative group">
                <NavLink
                  to="https://sabzlearn.ir/blog/"
                  className="flex items-center gap-x-1 h-full group-hover:text-green-500 transition-colors"
                >
                  مقالات
                  <svg className="w-4 h-4">
                    <use href="#chevron-down"></use>
                  </svg>
                </NavLink>
                <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 absolute right-0 top-full pt-7 transition-all z-10">
                  <div className="flex flex-col gap-y-4 w-64 bg-white dark:bg-darker p-5 border border-neutral-100 dark:border-y dark:border-x-0 dark:border-green-500 shadow-sm dark:shadow-none rounded-xl">
                    <Menu menuItems={SubMenu.journal} />
                  </div>
                </div>
              </li>
            </ul>
          </nav>
          <div className="flex items-center gap-x-5 h-13">
            <div className="relative group hidden lg:block" id="searchbox">
              <form
                className="hidden xl:block"
                action="https://sabzlearn.ir/"
                method="get"
              >
                <label className="relative h-13 block">
                  <input
                    className="bg-gray-100 text-slate-500 dark:bg-white/5 dark:text-white text-sm font-danaMedium rounded-full pr-4 pl-12 3xl:w-80 h-full"
                    type="text"
                    placeholder="چیو میخوای یاد بگیری؟"
                    name="s"
                  />
                  <button
                    className="absolute left-4 top-0 bottom-0 w-6 h-6 my-auto text-slate-500 dark:text-white"
                    type="submit"
                    role="button"
                  >
                    <svg className="w-6 h-6">
                      <use href="#magnifying-glass"></use>
                    </svg>
                  </button>
                </label>
              </form>
              <div className="block xl:hidden">
                <div className="searchbox button-xl only-icon bg-gray-100 text-slate-500 dark:bg-white/5 dark:text-white">
                  <svg className="w-6 h-6">
                    <use href="#magnifying-glass"></use>
                  </svg>
                </div>
                <div
                  className="hide absolute -left-24 top-full pt-4 z-10 transition-all"
                  id="searchbox-dropdown"
                >
                  <form action="https://sabzlearn.ir/" method="get">
                    <label className="relative h-13 block">
                      <input
                        className="bg-gray-100 text-slate-500 dark:bg-white/5 dark:text-white text-sm font-danaMedium rounded-full pr-4 pl-12 w-56 h-full"
                        type="text"
                        placeholder="جستجو دوره..."
                        name="s"
                      />
                      <button
                        className="absolute left-4 top-0 bottom-0 w-6 h-6 my-auto text-slate-500 dark:text-white"
                        type="submit"
                        role="button"
                      >
                        <svg className="w-6 h-6">
                          <use href="#magnifying-glass"></use>
                        </svg>
                      </button>
                    </label>
                  </form>
                </div>
              </div>
            </div>
            <div className="switch-theme hidden lg:flex button-xl only-icon bg-gray-100 text-slate-500 dark:bg-white/5 dark:text-white">
              <svg className="hidden dark:inline-block w-6 h-6">
                <use href="#sun" id="switch-theme-icon"></use>
              </svg>
              <svg className="dark:hidden w-6 h-6">
                <use href="#moon" id="switch-theme-icon"></use>
              </svg>
            </div>
            <NavLink
              to="https://sabzlearn.ir/login?after=https%3A%2F%2Fsabzlearn.ir%2F"
              className="hidden lg:flex button-xl button-secondary"
            >
              <svg className="w-6 h-6">
                <use href="#user"></use>
              </svg>
              ورود | عضویت
            </NavLink>
            <NavLink
              to="https://sabzlearn.ir/login?after=https%3A%2F%2Fsabzlearn.ir%2F"
              className="flex lg:hidden button-xl only-icon bg-gray-100 text-slate-500 dark:bg-white/5 dark:text-white"
            >
              <svg className="w-6 h-6">
                <use href="#arrow-right-on-rectangle"></use>
              </svg>
            </NavLink>
          </div>
        </div>
      </header>
    </Fragment>
  );
}
