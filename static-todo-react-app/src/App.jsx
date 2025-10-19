import './App.css'
import Header from './components/Header';
import ProfileCard from './components/ProfileCard';
import ProfileContainer from './components/ProfileContainer';

function App() {
  const users = [
    {
      name: "Taylor Swift",
      age: 35,
      bio: "She's a singer"
    },
    {
      name: "Sabrina Carpenter",
      age: 24,
      bio: "She's working late because she's also a singer"
    }
  ]
  return (
    <>
      <div>
        <header>
          <Header />
        </header>
        <main>
          <ProfileContainer profiles={users} />
        </main>
      </div>
    </>
  )
};

export default App;
