import LayoutAuthentication from "../layouts/LayoutAuthentication";

function SignIn() {
    return ( 
        <LayoutAuthentication>
            <h1 className="text-3xl text-slate-800 font-bold mb-6">
                Welcome back! ✨
              </h1>
              <form>
                <div className="space-y-4">
                  <div>
                    <label
                      className="block text-sm font-medium mb-1"
                      htmlFor="email"
                    >
                      Email Address
                    </label>
                    <input
                      id="email"
                      className="input__text w-full focus-visible:outline-none"
                      type="email"
                    />
                  </div>
                  <div>
                    <label
                      className="block text-sm font-medium mb-1"
                      htmlFor="password"
                    >
                      Password
                    </label>
                    <input
                      id="password"
                      className="input__text w-full focus-visible:outline-none"
                      type="password"
                      autoComplete="on"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between mt-6">
                  <div className="mr-1">
                    <a
                      className="text-sm underline x_"
                      href="reset-password.html"
                    >
                      Forgot Password?
                    </a>
                  </div>
                  <a
                    className="btn bg-indigo-500 xs text-white ml-3"
                    href="index.html"
                  >
                    Sign In
                  </a>
                </div>
              </form>
              <div className="pt-5 mt-6 border-t cl border-slate-200">
                <div className="text-sm">
                  Don’t you have an account?{" "}
                  <a
                    className="font-medium text-indigo-500 xd"
                    href="signup.html"
                  >
                    Sign Up
                  </a>
                </div>
                {/* Warning */}
                <div className="mt-5">
                  <div className="bg-amber-100 text-amber-600 px-3 py-2 vw rounded">
                    <svg
                      className="inline w-3 h-3 flex-shrink-0 fill-current"
                      viewBox="0 0 12 12"
                    >
                      <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z"></path>
                    </svg>
                    <span className="text-sm">
                      {" "}
                      To support you during the pandemic super pro features are
                      free until March 31st.
                    </span>
                  </div>
                </div>
              </div>
        </LayoutAuthentication>
     );
}

export default SignIn;