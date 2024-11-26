type Props = {
    onSignIn: () => void;
  };
  
  const SignInCard = ({ onSignIn }: Props) => {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Sign In</h1>
        <p className="text-gray-600 mb-6">Access your account using GitHub:</p>
        <button
          onClick={onSignIn}
          className="px-6 py-2 bg-gray-800 text-white font-medium rounded-md hover:bg-gray-700 transition duration-200"
        >
          Sign in with GitHub
        </button>
      </div>
    );
  };
  
  export default SignInCard;
  