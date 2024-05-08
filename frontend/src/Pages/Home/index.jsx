import { courseData } from "../../Data/curseData";
import { journalData } from "../../Data/journal";
import CourseList from "../../components/CourseList";
import CourseListFree from "../../components/CourseListFree";
import JournalList from "../../components/JournalList";
import { courseDataFree } from "../../Data/curseData free";
import PrimaryLayout from "../../components/Layout/PrimaryLayout";
import { NavLink } from "react-router-dom";
import titleMaker from "../../Helper/titleMaker";
import { useEffect } from "react";

export default function Home() {
  useEffect(function () {
    titleMaker("صفحه اصلی");
  }, []);

  return (
    <PrimaryLayout>
      <main className="max-w-[1920px] mx-auto overflow-x-hidden min-h-screen">
        <section className="lg:mt-12 relative">
          <div className="container">
            <div className="flex items-center flex-wrap lg:flex-nowrap justify-center lg:justify-between gap-y-8 text-center lg:text-right">
              <div className="relative w-full sm:w-auto order-2 lg:order-1">
                <h2 className="font-bold font-danaExtraBold sm:font-danaExtraBlack text-2.5xl sm:text-[2.625rem]/[70px] 3xl:text-5xl/normal">
                  آکادمی آموزش
                  <br />
                  برنامه نویسی سبزلرن
                </h2>
                <p className="sm:text-2xl font-danaMedium mt-5 sm:mt-9 lg:max-w-[440px] xl:max-w-[470px]">
                  با آکادمی خصوصی سبزلرن، علم برنامه نویسی رو با خیال راحت یاد
                  بگیر و پیشرفت کن
                </p>
                <div className="flex items-center justify-center flex-wrap lg:justify-start gap-4 sm:gap-6 mt-8 sm:mt-10">
                  <NavLink
                    to="#roadmaps"
                    className="button-xl button-secondary"
                  >
                    از این مسیر ها شروع کن
                  </NavLink>
                  <NavLink
                    to="https://sabzlearn.ir/courses/?s=&amp;only_free=yes"
                    className="flex items-center gap-x-2 group font-danaMedium cursor-pointer"
                  >
                    <span className="button-xl button-primary only-icon">
                      <svg className="w-6 h-6">
                        <use href="#play-outline"></use>
                      </svg>
                    </span>
                    <span className="hidden sm:inline">دوره های رایگان</span>
                  </NavLink>
                </div>
                <div className="hidden lg:block absolute -top-20 -right-17 w-[250px] h-[250px] bg-green-500 opacity-25 blur-[120px] -z-10 rounded-full"></div>
                <div className="hidden lg:block absolute -bottom-25 left-0 w-[250px] h-[250px] bg-sky-500 opacity-25 blur-[120px] -z-10 rounded-full"></div>
              </div>
              <div className="mt-8 lg:w-px order-1 lg:order-2 lg:h-[391px] xl:h-[530px] 3xl:h-[580px]">
                <img
                  src="/assets/image/hero/hero-light.svg"
                  className="dark:hidden lg:absolute left-0 right-0 lg:right-auto top-8 lg:top-0 mx-auto lg:w-[580px] xl:w-auto 3xl:w-[946px]"
                  alt="Sabzlearn"
                />
                <img
                  src="/image/hero/hero-light.svg"
                  className="hidden dark:inline-block lg:absolute left-0 right-0 lg:right-auto top-8 lg:top-0 mx-auto lg:w-[580px] xl:w-auto 3xl:w-[946px]"
                  alt="Sabzlearn"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="mt-25 sm:mt-40">
          <div className="container">
            <CourseList
              headerDetail={{
                titleHeader: "جدیدترین دوره ها",
                linkHeader: "https://sabzlearn.ir/courses/",
                descriptionHeader: "یادگیری و رشد توسعه فردی",
              }}
              data={courseData}
              color="bg-amber-400"
            />
          </div>
        </section>
        <section className="mt-25 sm:mt-40">
          <div className="container">
            <div className="flex items-center justify-center sm:justify-between flex-wrap flex-col mb-7 sm:mb-10 sm:flex-row gap-x-4 gap-y-7">
              <div className="space-y-2 sm:space-y-3 sm:self-start">
                <div className="flex items-center justify-center sm:justify-start gap-x-2.5">
                  <span className="hidden sm:inline-block w-4 h-4 bg-sky-500 rounded-sm"></span>
                  <h3 className="font-danaBold text-2xl sm:text-2.5xl">
                    ما چه کمکی میتونیم بهت بکنیم
                  </h3>
                </div>
                <p className="text-slate-500 font-danaMedium sm:text-lg text-center sm:text-right">
                  از شروع مسیر کنارتیم نمیذاریم آب تو دلت تکون بخوره
                </p>
              </div>
            </div>
            <div className="grid grid-rows-2 md:grid-cols-2 gap-6 sm:gap-7 cursor-default">
              <div className="flex flex-col lg:flex-row items-center p-5 lg:p-6 bg-white dark:bg-darker border border-neutral-100 dark:border-none rounded-2xl">
                <div className="flex justify-center lg:justify-end items-center w-[94px] h-13 lg:w-13 lg:h-[94px] mb-11 lg:mb-0 lg:ml-11 bg-sky-50 dark:bg-sky-600/20 rounded-full">
                  <svg className="size-13 text-sky-500 translate-y-1/2 lg:translate-y-0 lg:-translate-x-1/2">
                    <use href="#book-open-services"></use>
                  </svg>
                </div>
                <div className="text-center lg:text-right">
                  <h6 className="lg:text-lg font-danaBold">
                    تضمین کاملترین محتوا
                  </h6>
                  <p className="text-sm lg:text-base mt-3.5 lg:mt-2 opacity-70">
                    بزار خیالت راحت کنم توی دوره هامون به ریز ترین موارد
                    پرداختیم بعداز دیدن این دوره نیاز به هیچ آموزش دیگه ای
                    نداری.
                  </p>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row items-center p-5 lg:p-6 bg-white dark:bg-darker border border-neutral-100 dark:border-none rounded-2xl">
                <div className="flex justify-center lg:justify-end items-center w-[94px] h-13 lg:w-13 lg:h-[94px] mb-11 lg:mb-0 lg:ml-11 bg-amber-50 dark:bg-amber-400/20 rounded-full">
                  <svg className="size-13 text-amber-400 translate-y-1/2 lg:translate-y-0 lg:-translate-x-1/2">
                    <use href="#chat-bubble-left-right-services"></use>
                  </svg>
                </div>
                <div className="text-center lg:text-right">
                  <h6 className="lg:text-lg font-danaBold">پشتیبانی دائمی</h6>
                  <p className="text-sm lg:text-base mt-3.5 lg:mt-2 opacity-70">
                    هرجا سوالی داشتی به مشکل خوردی بچه های تیم آمادن که مشکلت رو
                    حل کنن تلاشمون اینه بدون نگرانی دوره رو کامل کنی.
                  </p>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row items-center p-5 lg:p-6 bg-white dark:bg-darker border border-neutral-100 dark:border-none rounded-2xl">
                <div className="flex justify-center lg:justify-end items-center w-[94px] h-13 lg:w-13 lg:h-[94px] mb-11 lg:mb-0 lg:ml-11 bg-green-50 dark:bg-green-500/20 rounded-full">
                  <svg className="size-13 text-green-500 translate-y-1/2 lg:translate-y-0 lg:-translate-x-1/2">
                    <use href="#chart-bar-services"></use>
                  </svg>
                </div>
                <div className="text-center lg:text-right">
                  <h6 className="lg:text-lg font-danaBold">
                    پروژه محور در راستای بازار کار
                  </h6>
                  <p className="text-sm lg:text-base mt-3.5 lg:mt-2 opacity-70">
                    کل تمرکز ما رو این هستش بعداز تموم شدن دوره شخص بتونه با
                    اعتماد به نفس کامل پروژه بزنه واقدام کنه برای کسب درآمد.
                  </p>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row items-center p-5 lg:p-6 bg-white dark:bg-darker border border-neutral-100 dark:border-none rounded-2xl">
                <div className="flex justify-center lg:justify-end items-center w-[94px] h-13 lg:w-13 lg:h-[94px] mb-11 lg:mb-0 lg:ml-11 bg-red-50 dark:bg-red-500/20 rounded-full">
                  <svg className="size-13 text-red-500 translate-y-1/2 lg:translate-y-0 lg:-translate-x-1/2">
                    <use href="#clipboard-document-check-services"></use>
                  </svg>
                </div>
                <div className="text-center lg:text-right">
                  <h6 className="lg:text-lg font-danaBold">
                    سراغ حرفه ای ها رفتیم
                  </h6>
                  <p className="text-sm lg:text-base mt-3.5 lg:mt-2 opacity-70">
                    به جرعت میتونم بگم سخت گیرترین شرایط جذب مدرس داریم چون
                    برامون مهمه محتوا خیلی ساده و روان بیان بشه که توی یادگیری
                    به مشکل نخورید.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="mt-25 sm:mt-40">
          <div className="container relative">
            <CourseList
              headerDetail={{
                titleHeader: "آخرین دوره ها",
                linkHeader: "https://sabzlearn.ir/courses/",
                descriptionHeader: "سکوی پرتاپ شما به سمت موفقیت",
              }}
              data={courseData}
              color="bg-green-500"
            />
          </div>
        </section>
        <section className="mt-25 sm:mt-40">
          <div className="container relative">
            <JournalList
              headerDetail={{
                titleHeader: "آخرین مقالات",
                linkHeader: "https://sabzlearn.ir/blog/",
                descriptionHeader: "مقالات بروز برنامه نویسی",
              }}
              data={journalData}
              color="bg-amber-400"
            />
          </div>
        </section>
        <section className="mt-25 sm:mt-40">
          <div className="container relative">
            <CourseListFree
              headerDetail={{
                titleHeader: "محبوب ترین دوره ها",
                linkHeader: "https://sabzlearn.ir/courses/",
                descriptionHeader: "پرمخاطب ترین و بهترین دوره های سبزلرن",
              }}
              data={courseDataFree}
              color="bg-sky-500"
            />
          </div>
        </section>
      </main>
    </PrimaryLayout>
  );
}
