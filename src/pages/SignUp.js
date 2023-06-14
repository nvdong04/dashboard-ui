import LayoutAuthentication from "../layouts/LayoutAuthentication";

function SignUp() {
    return ( 
        <LayoutAuthentication>
            <h1 className="text-3xl text-slate-800 font-bold mb-6">
                Create your Account ✨
              </h1>
              <form>
                <div className="space-y-4">
                  <div>
                    <label
                      className="block text-sm font-medium mb-1"
                      htmlFor="email"
                    >
                      Email Address
                      <span className="text-rose-500">*</span>
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
                      htmlFor="name"
                    >
                      Full Name
                      <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="name"
                      className="input__text w-full focus-visible:outline-none"
                      type="text"
                    />
                  </div>
                  <div>
                    <label
                      className="block text-sm font-medium mb-1"
                      htmlFor="name"
                    >
                      Your Role
                      <span className="text-rose-500">*</span>
                    </label>
                    <select id="role" className="w-full pr-10">
                        <option>Designer</option>
                        <option>Developer</option>
                        <option>Accountant</option>
                    </select>
                  </div>
                  <div>
                    <label
                      className="block text-sm font-medium mb-1"
                      htmlFor="password"
                    >
                      Password
                      <span className="text-rose-500">*</span>
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
                  <label className="flex items-center">
                    <input type="checkbox" className="text-indigo-500 border border-slate-300"/>
                    <span className="text-sm ml-2">Email me about product news.</span>
                </label>
                  </div>
                  <a
                    className="btn bg-indigo-500 xs text-white ml-3"
                    href="signup.html"
                  >
                    Sign Up
                  </a>
                </div>
              </form>
              <div className="pt-5 mt-6 border-t cl border-slate-200">
                <div className="text-sm">
                  Have an account?{" "}
                  <a
                    className="font-medium text-indigo-500 xd"
                    href="signup.html"
                  >
                    Sign In
                  </a>
                </div>
                {/* Warning */}
              </div>
        </LayoutAuthentication>
     );
}

export default SignUp;