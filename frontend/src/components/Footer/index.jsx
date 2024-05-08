import { NavLink } from "react-router-dom";
export default function Footer() {
  return (
    <footer class="mt-25 sm:mt-40 bg-white dark:bg-darker border-t border-t-neutral-100 dark:border-none pt-8">
      <div class="container">
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-7">
          <div class="flex flex-col gap-y-3 flex-grow">
            <h4 class="font-danaBold text-lg">درباره ما</h4>
            <p class="sm:max-w-xs text-gray-900/70 dark:text-white/70">
              سبزلرن یک اکادمی خصوصی آموزش برنامه نویسی هست که با هدف تحویل
              نیروی متخصص بر پایه تولید محتوای غیرسطحی فعالیت میکند
            </p>
          </div>
          <div class="flex flex-col gap-y-5 flex-grow">
            <h4 class="font-danaBold text-lg">دسترسی سریع</h4>
            <div class="flex flex-col items-start gap-y-4 text-gray-900/70 dark:text-white/70">
              <NavLink to="https://sabzlearn.ir/terms-conditions/">
                قوانین و مقررات
              </NavLink>
              <NavLink to="https://sabzlearn.ir/my-account/tickets/">ارسال تیکت</NavLink>
              <NavLink to="https://sabzlearn.ir/courses/">همه دوره ها</NavLink>
            </div>
          </div>
          <div class="flex flex-col gap-y-5 flex-grow">
            <h4 class="font-danaBold text-lg">لینک های مفید</h4>
            <div class="flex flex-col items-start gap-y-4 text-gray-900/70 dark:text-white/70">
              <NavLink to="https://sabzlearn.ir/course/java-script-zero-to-hero/">
                آموزش جاوااسکریپت
              </NavLink>
              <NavLink to="https://sabzlearn.ir/course/python/">آموزش پایتون</NavLink>
              <NavLink to="https://sabzlearn.ir/course/html-tutorial/">
                آموزش HTML
              </NavLink>
              <NavLink to="https://sabzlearn.ir/product/css-tutorial/">آموزش CSS</NavLink>
            </div>
          </div>
          <div class="flex flex-col gap-y-5 flex-grow">
            <h4 class="font-danaBold text-lg">شبکه های اجتماعی</h4>
            <div class="flex flex-col items-start gap-y-4 text-gray-900/70 dark:text-white/70">
              <div class="flex items-center gap-x-2.5">
                <div class="flex items-center justify-center rounded-full w-8 h-8 bg-orange-600 text-white bg-gradient-to-tr from-[#FEDC15] via-[#F71F87] to-[#9000DC]">
                  <svg class="w-5 h-5">
                    <use xlink:href="#instagram"></use>
                  </svg>
                </div>
                <NavLink
                  to="https://www.instagram.com/sabzlearn_"
                  class="text-ltr text-hover font-danaDemiBold"
                >
                  @sabzlearn_
                </NavLink>
              </div>
              <div class="flex items-center gap-x-2.5">
                <div class="flex items-center justify-center rounded-full w-8 h-8 bg-blue-500 text-white bg-gradient-to-b from-blue-400 to-blue-600">
                  <svg class="w-5 h-5">
                    <use xlink:href="#telegram"></use>
                  </svg>
                </div>
                <NavLink
                  to="https://t.me/sabzlearn"
                  class="text-ltr text-hover font-danaDemiBold"
                >
                  @sabzlearn
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        <div class="flex justify-center xs:justify-between flex-wrap gap-x-3 gap-y-2 py-7 text-base text-gray-900 dark:text-white border-t border-t-neutral-200 dark:border-t-white/10 mt-7">
          <span>ساخته شده با ❤️ در سبزلرن</span>
          <p>کلیه حقوق مادی و معنوی سایت برای سبز لرن محفوظ است.</p>
        </div>
      </div>
    </footer>
  );
}
