import * as React from "react";

export const Links: React.FC = () => {
  return (
    <>
      <div
        id="links"
        className="p-4 md:pt-24 pb-26 xl:p-20 bg-gray-50 text-gray-900"
      >
        <div className="sm:w-12/12 md:w-12/12 col-centered">
          <div className="p-4 pt-8 text-4xl md:text-6xl font-extrabold">
            My Links
          </div>
          <div className="p-4 text-2xl md:text-4xl w-10/12 font-extrabold">
            Explore the links below to learn more about my coding skills and
            professional work.
          </div>

          <div className="grid grid-cols-12">
            <div className="col-span-12 md:col-span-6 lg:col-span-4 p-4">
              <a
                href="https://codeforces.com/profile/AbdulAhadKhan"
                target="_blank"
                className="kill-link-style"
              >
                <div className="cursor-pointer text-center bg-gradient-to-r from-white to-gray-100 duration-200 ease move-up-slightly hover:shadow-xl shadow-md p-4 w-full h-auto border-4 text-gray-900 border-gray-900 rounded-lg">
                  <div className="w-full text-center">
                    <img
                      src="img/codeforces.png"
                      alt="Codeforces Logo"
                      className="col-centered rounded-md mt-2 mb-1 h-14 w-14"
                    />
                  </div>
                  <div className="mt-2">
                    <span className="text-2xl lg:text-3xl font-extrabold text-gray-900">
                      Codeforces
                    </span>
                    <div className="mt-1 text-gray-900 font-extrabold text-xl lg:text-2xl">
                      <span style={{ color: "#0000ff" }}>Expert </span>rated on
                      Codeforces
                    </div>
                  </div>
                </div>
              </a>
            </div>

            <div className="col-span-12 md:col-span-6 lg:col-span-4 p-4">
              <a
                href="https://leetcode.com/u/AbdulAhadKhan030801/"
                target="_blank"
                className="kill-link-style"
              >
                <div className="cursor-pointer text-center bg-gradient-to-r from-white to-gray-100 duration-200 ease move-up-slightly hover:shadow-xl shadow-md p-4 w-full h-auto border-4 text-gray-900 border-gray-900 rounded-lg">
                  <div className="w-full text-center">
                    <img
                      src="img/leetcode.ico"
                      alt="Leetcode Logo"
                      className="col-centered rounded-md mt-2 mb-1 h-14 w-14"
                    />
                  </div>
                  <div className="mt-2">
                    <span className="text-2xl lg:text-3xl font-extrabold text-gray-900">
                      Leetcode
                    </span>
                    <div className="mt-1 text-gray-900 font-extrabold text-xl lg:text-2xl">
                      2000+ Leetcode rating
                    </div>
                  </div>
                </div>
              </a>
            </div>

            <div className="col-span-12 md:col-span-6 lg:col-span-4 p-4">
              <a
                href="https://www.codechef.com/users/abdul030801"
                target="_blank"
                className="kill-link-style"
              >
                <div className="cursor-pointer text-center bg-gradient-to-r from-white to-gray-100 duration-200 ease move-up-slightly hover:shadow-xl shadow-md p-4 w-full h-auto border-4 text-gray-900 border-gray-900 rounded-lg">
                  <div className="w-full text-center">
                    <img
                      src="img/codechef.ico"
                      alt="Codechef Logo"
                      className="col-centered rounded-md mt-2 mb-1 h-14 w-14"
                    />
                  </div>
                  <div className="mt-2">
                    <span className="text-2xl lg:text-3xl font-extrabold text-gray-900">
                      Codechef
                    </span>
                    <div className="mt-1 text-gray-900 font-extrabold text-xl lg:text-2xl">
                      5 ⭐ rated on Codechef
                    </div>
                  </div>
                </div>
              </a>
            </div>

            <div className="col-span-12 md:col-span-6 lg:col-span-4 p-4">
              <a
                href="https://www.hackerearth.com/@AbdulAhadKhan"
                target="_blank"
                className="kill-link-style"
              >
                <div className="cursor-pointer text-center bg-gradient-to-r from-white to-gray-100 duration-200 ease move-up-slightly hover:shadow-xl shadow-md p-4 w-full h-auto border-4 text-gray-900 border-gray-900 rounded-lg">
                  <div className="w-full text-center">
                    <img
                      src="img/hackerearth.png"
                      alt="Hackerearth Logo"
                      className="col-centered rounded-md mt-2 mb-1 h-14 w-14"
                    />
                  </div>
                  <div className="mt-2">
                    <span className="text-2xl lg:text-3xl font-extrabold text-gray-900">
                      Hackerearth
                    </span>
                    <div className="mt-1 text-gray-900 font-extrabold text-xl lg:text-2xl">
                      1900+ Contest Rating
                    </div>
                  </div>
                </div>
              </a>
            </div>

            <div className="col-span-12 md:col-span-6 lg:col-span-4 p-4">
              <a
                href="https://atcoder.jp/users/AbdulAhadKhan"
                target="_blank"
                className="kill-link-style"
              >
                <div className="cursor-pointer text-center bg-gradient-to-r from-white to-gray-100 duration-200 ease move-up-slightly hover:shadow-xl shadow-md p-4 w-full h-auto border-4 text-gray-900 border-gray-900 rounded-lg">
                  <div className="w-full text-center">
                    <img
                      src="img/atcoder.png"
                      alt="Atcoder Logo"
                      className="col-centered rounded-md mt-2 mb-1 h-14 w-14"
                    />
                  </div>
                  <div className="mt-2">
                    <span className="text-2xl lg:text-3xl font-extrabold text-gray-900">
                      Atcoder
                    </span>
                    <div className="mt-1 text-gray-900 font-extrabold text-xl lg:text-2xl">
                      1000+ rating
                    </div>
                  </div>
                </div>
              </a>
            </div>

            <div className="col-span-12 md:col-span-6 lg:col-span-4 p-4">
              <a
                href="https://www.hackerrank.com/profile/aahad6674"
                target="_blank"
                className="kill-link-style"
              >
                <div className="cursor-pointer text-center bg-gradient-to-r from-white to-gray-100 duration-200 ease move-up-slightly hover:shadow-xl shadow-md p-4 w-full h-auto border-4 text-gray-900 border-gray-900 rounded-lg">
                  <div className="w-full text-center">
                    <img
                      src="img/hackerrank.png"
                      alt="Hackerrank Logo"
                      className="col-centered rounded-md mt-2 mb-1 h-14 w-14"
                    />
                  </div>
                  <div className="mt-2">
                    <span className="text-2xl lg:text-3xl font-extrabold text-gray-900">
                      Hackerrank
                    </span>
                    <div className="mt-1 text-gray-900 font-extrabold text-xl lg:text-2xl">
                      5 ⭐ Java and SQL Badges
                    </div>
                  </div>
                </div>
              </a>
            </div>

            <div className="col-span-12 md:col-span-6 lg:col-span-4 p-4">
              <a
                href="https://github.com/AbdulAhadKhan0308/"
                target="_blank"
                className="kill-link-style"
              >
                <div className="cursor-pointer text-center bg-gradient-to-r from-white to-gray-100 duration-200 ease move-up-slightly hover:shadow-xl shadow-md p-4 w-full h-auto border-4 text-gray-900 border-gray-900 rounded-lg">
                  <div className="w-full text-center">
                    <img
                      src="img/github.svg"
                      alt="Github Logo"
                      className="col-centered rounded-md mt-2 mb-1 h-14 w-14"
                    />
                  </div>
                  <div className="mt-2">
                    <span className="text-2xl lg:text-3xl font-extrabold text-gray-900">
                      Github Profile
                    </span>
                    <div className="mt-1 text-gray-900 font-extrabold text-xl lg:text-2xl">
                      Checkout my projects
                    </div>
                  </div>
                </div>
              </a>
            </div>

            <div className="col-span-12 md:col-span-6 lg:col-span-4 p-4">
              <a
                href="https://my.newtonschool.co/user/aahad6674"
                target="_blank"
                className="kill-link-style"
              >
                <div className="cursor-pointer text-center bg-gradient-to-r from-white to-gray-100 duration-200 ease move-up-slightly hover:shadow-xl shadow-md p-4 w-full h-auto border-4 text-gray-900 border-gray-900 rounded-lg">
                  <div className="w-full text-center">
                    <img
                      src="img/newtoncoding.ico"
                      alt="Newton Coding Logo"
                      className="col-centered rounded-md mt-2 mb-1 h-14 w-14"
                    />
                  </div>
                  <div className="mt-2">
                    <span className="text-2xl lg:text-3xl font-extrabold text-gray-900">
                      Newton Coding
                    </span>
                    <div className="mt-1 text-gray-900 font-extrabold text-xl lg:text-2xl">
                      2100+ Contest Rating
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
