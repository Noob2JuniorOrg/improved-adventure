import Avatar from './Avatar';
import profilePic from './assets/octocat-avatar.jpg';
import Name from './Name';

function ProfileHeader() {
  return (
    <div className="flex mb-8 items-center">
      <Avatar image={profilePic} />
      <Name username="The Octocat" tag="@octocat" date="25 Jan 2011" />
    </div>
  );
}

export default ProfileHeader;
