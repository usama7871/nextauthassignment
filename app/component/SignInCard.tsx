type Props = {
  onSignIn: () => void;
};

const SignInCard = ({ onSignIn }: Props) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 p-6">
      <div className="w-full max-w-sm bg-white rounded-lg shadow-lg p-8">
        {/* Header Section */}
        <h1 className="text-2xl font-bold text-gray-900 text-center mb-4">
          Welcome Back!
        </h1>
        <p className="text-sm text-gray-600 text-center mb-6 leading-relaxed">
          Sign in with GitHub to access your dashboard and exclusive features.
        </p>

        {/* GitHub Logo */}
        <div className="flex items-center justify-center mb-6">
          <img
            src="/github-logo.png" // Update with the correct path or import
            alt="GitHub Logo"
            className="w-12 h-12"
          />
        </div>

        {/* Sign-In Button */}
        <button
          onClick={onSignIn}
          className="w-full py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 transition-all duration-200"
        >
          Sign in with GitHub
        </button>

        {/* Footer Section */}
        <div className="mt-6 text-xs text-gray-500 text-center">
          <p>
            By signing in, you agree to our{" "}
            <a
              href="#"
              className="text-blue-500 hover:underline focus:outline-none focus:ring-1 focus:ring-blue-500"
            >
              Terms of Service
            </a>{" "}
            and{" "}
            <a
              href="#"
              className="text-blue-500 hover:underline focus:outline-none focus:ring-1 focus:ring-blue-500"
            >
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignInCard;
