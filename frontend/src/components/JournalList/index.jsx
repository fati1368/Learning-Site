import { NavLink } from "react-router-dom";
export default function JournalList({ headerDetail, data, color }) {
  const { titleHeader, linkHeader, descriptionHeader } = headerDetail;
  function renderFarm() {
    return data.data.map(
      ({ id, title, poster, description, link, writer, linkWriter, Time }) => {
        return (
          <div key={id}>
            <div className="blog flex flex-col bg-white dark:bg-darker border border-neutral-100 dark:border-none overflow-hidden rounded-2xl">
              <div className="blog__banner relative h-[182px] overflow-hidden">
                <img
                  src={poster}
                  className="block w-full h-full object-cover"
                  alt={title}
                  loading="lazy"
                />
              </div>
              <div className="flex-grow px-5 py-3">
                <h4 className="font-danaDemiBold line-clamp-2 mb-3">
                  <NavLink to={link}>{title}</NavLink>
                </h4>
                <p className="text-sm line-clamp-4 text-gray-900/70 dark:text-white/70">
                  {description}&hellip;
                </p>
              </div>
              <div className="px-5 pb-5">
                <div className="flex justify-between items-center text-slate-500 dark:text-white/70 text-sm pb-4 border-b border-b-neutral-200/70 dark:border-b-white/10">
                  <div className="flex items-center gap-x-0.5">
                    <svg className="w-5 h-5">
                      <use href="#user"></use>
                    </svg>
                    <NavLink to={linkWriter}>{writer}</NavLink>
                  </div>
                  <div className="flex items-center gap-x-0.5">
                    <svg className="w-5 h-5">
                      <use href="#calendar"></use>
                    </svg>
                    <span>{Time}</span>
                  </div>
                </div>
                <div className="flex justify-center mt-4">
                  <NavLink
                    to={link}
                    className="hover:text-green-500 font-danaMedium transition-colors"
                  >
                    مطالعه مقاله
                    <svg className="w-5 h-5">
                      <use href="#arrow-left-circle-mini"></use>
                    </svg>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        );
      }
    );
  }
  return (
    <div className="journal">
      <div className="flex items-center justify-center sm:justify-between flex-wrap flex-col mb-7 sm:mb-10 sm:flex-row gap-x-4 gap-y-7">
        <div className="space-y-2 sm:space-y-3 sm:self-start">
          <div className="flex items-center justify-center sm:justify-start gap-x-2.5">
            <span
              className={`hidden sm:inline-block w-4 h-4 ${color} rounded-sm`}
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
          <span className="font-danaMedium">مشاهده همه مقالات</span>
          <svg className="w-6 h-6">
            <use href="#arrow-left"></use>
          </svg>
        </NavLink>
      </div>
      <div className="grid grid-rows-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-7">
        {renderFarm()}
      </div>
    </div>
  );
}
