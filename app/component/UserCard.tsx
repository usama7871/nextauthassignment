type Props = {
  session: any;
  onSignOut: () => void;
};

const UserCard = ({ session, onSignOut }: Props) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 p-6">
      <div className="w-full max-w-sm bg-white rounded-lg shadow-lg p-8 text-center">
        {/* User Welcome Section */}
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Welcome, {session.user?.name || "User"}!
        </h1>
        <p className="text-sm text-gray-600 mb-6">
          Signed in as <span className="font-medium">{session.user?.email || "unknown email"}</span>.
        </p>

        {/* User Avatar */}
        {session.user?.image && (
          <div className="mb-6">
            <img
              src={session.user.image}
              alt={`${session.user?.name || "User"} Avatar`}
              className="w-24 h-24 rounded-full shadow-md mx-auto"
            />
          </div>
        )}

        {/* Sign Out Button */}
        <button
          onClick={onSignOut}
          className="w-full px-6 py-3 bg-red-600 text-white font-medium rounded-lg hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all duration-200"
        >
          Sign Out
        </button>

        {/* Additional Footer Info */}
        <div className="mt-6 text-xs text-gray-500">
          <p>
            Need help? Visit our{" "}
            <a
              href="#"
              className="text-blue-500 hover:underline focus:outline-none focus:ring-1 focus:ring-blue-500"
            >
              Support Center
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
