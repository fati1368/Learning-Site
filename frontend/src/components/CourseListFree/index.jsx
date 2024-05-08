import { Fragment } from "react";
import { NavLink } from "react-router-dom";
export default function CourseListFree({ headerDetail, data, color }) {
  const { titleHeader, linkHeader, descriptionHeader } = headerDetail;
  function renderFarm() {
    return data.data.map(
      ({
        id,
        title,
        poster,
        link,
        writer,
        linkWriter,
        rate,
        registerNumber,
        price,
      }) => {
        return (
          <div
            key={id}
            className="course flex flex-col bg-white dark:bg-darker border border-neutral-100 dark:border-none rounded-2xl"
          >
            <div className="relative h-42 group">
              <NavLink className="block w-full h-full" to={link} title={title}>
                <img
                  className="block w-full h-full object-cover rounded-2xl"
                  src={poster}
                  alt={title}
                />
              </NavLink>
              <span className="absolute right-5 top-5 flex-center w-13 h-7 bg-green-500 text-white font-danaMedium text-sm rounded-full">
                100%
              </span>
            </div>
            <div className="flex-grow px-4.5 pt-4 pb-4">
              <h4 className="font-danaDemiBold line-clamp-2">
                <NavLink to={link}>{title}</NavLink>
              </h4>
            </div>
            <div className="px-4.5 pb-3">
              <div className="flex justify-between gap-2.5 text-slate-500 dark:text-white/70 text-sm pb-3 border-b border-b-neutral-200/70 dark:border-b-white/10">
                <div className="flex items-center gap-x-0.5 hover:text-green-500 transition-colors">
                  <svg className="w-5 h-5">
                    <use href="#user"></use>
                  </svg>
                  <NavLink to={linkWriter}>{writer}</NavLink>
                </div>
                <div className="flex items-center gap-x-0.5 text-amber-500">
                  <span className="font-danaMedium">{rate}</span>
                  <svg className="w-5 h-5">
                    <use href="#star-mini"></use>
                  </svg>
                </div>
              </div>
              <div className="flex items-end justify-between mt-1.5">
                <span className="flex items-center gap-x-0.5 text-slate-500 dark:text-white/70 text-sm">
                  <svg className="w-5 h-5">
                    <use href="#users"></use>
                  </svg>
                  {registerNumber}
                </span>
                <div className="flex flex-col">
                  <span className="text-sm text-slate-500 dark:text-white/70 -mb-1 line-through">
                    {price}
                  </span>
                  <span className="text-green-500 font-danaDemiBold text-lg">
                    رایگان!
                  </span>
                </div>
              </div>
            </div>
          </div>
        );
      }
    );
  }
  return (
    <Fragment>
      <div className="flex items-center justify-center sm:justify-between flex-wrap flex-col mb-7 sm:mb-10 sm:flex-row gap-x-4 gap-y-7">
        <div className="space-y-2 sm:space-y-3 sm:self-start">
          <div className="flex items-center justify-center sm:justify-start gap-x-2.5">
            <span
              className={`hidden sm:inline-block w-4 h-4  ${color} rounded-sm`}
            ></span>
            <h3 className="font-danaBold text-2xl sm:text-2.5xl">
              {titleHeader}
            </h3>
          </div>
          <p className="text-slate-500 font-danaMedium sm:text-lg text-center sm:text-right">
            {descriptionHeader}
          </p>
        </div>
        <NavLink
          to={linkHeader}
          className="flex items-center gap-x-2 sm:px-4 sm:py-3.5 text-green-500 sm:hover:bg-green-500 sm:hover:text-white rounded-full transition-colors"
        >
          <span className="font-danaMedium">مشاهده همه دوره ها</span>
          <svg className="w-6 h-6">
            <use href="#arrow-left"></use>
          </svg>
        </NavLink>
      </div>
      <div className="grid grid-rows-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-7">
        {renderFarm()}
      </div>
    </Fragment>
  );
}
