import Card from './Card';
import ProfileHeader from './ProfileHeader';
import Stats from './Stats';
import Links from './Links';

function Profile() {
  return (
    <Card className="mt-4 p-6 pt-8 tablet:mt-6 tablet:p-10 desktop:p-12">
      <ProfileHeader />
      <p className="text-[13px] leading-[25px] mb-6 tablet:text-[15px] desktop:ml-[155px]">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
        Quisque volutpat mattis eros.
      </p>
      <Stats />
      <Links />
    </Card>
  );
}

export default Profile;
