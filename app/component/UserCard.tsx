type Props = {
    session: any;
    onSignOut: () => void;
  };
  
  const UserCard = ({ session, onSignOut }: Props) => {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-6">
        <h1 className="text-2xl font-bold text-gray-800">Welcome, {session.user?.name || "User"}!</h1>
        <p className="text-gray-600 mt-2">Signed in as {session.user?.email}</p>
        {session.user?.image && (
          <img
            src={session.user.image}
            alt="User Avatar"
            className="w-24 h-24 rounded-full mt-4 shadow-md"
          />
        )}
        <button
          onClick={onSignOut}
          className="mt-6 px-4 py-2 bg-red-500 text-white font-medium rounded-md hover:bg-red-600 transition duration-200"
        >
          Sign out
        </button>
      </div>
    );
  };
  
  export default UserCard;
  