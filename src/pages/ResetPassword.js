import LayoutAuthentication from "../layouts/LayoutAuthentication";

function ResetPassword() {
    return (
        <LayoutAuthentication>
            <h1 className="text-3xl text-slate-800 font-bold mb-6">
            Reset your Password ✨
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
                      className="input w-full"
                      type="email"
                    />
                  </div>
                  
                </div>
                <div className="flex justify-end mt-6">
                <button className="btn btn-primary whitespace-nowrap">Send Reset Link</button>
                </div>
              </form>
        </LayoutAuthentication>
    );
}

export default ResetPassword;