import { useParams } from 'react-router-dom';

const data = {
  luffy: {
    name: 'luffy',
    description: 'yeon'
  },
  tom: {
    name: 'tom',
    description: 'holland'
  }
};

const Profile = () => {
  const params = useParams();
  const profile = data[params.name];

  return (
    <div>
      <h1>Profile</h1>
      {profile ? (
        <div>
          <h2>{profile.name}</h2>
          <p>{profile.description}</p>
        </div>
      ) : (
        <p>not found</p>
      )}
    </div>
  );
};

export default Profile;
