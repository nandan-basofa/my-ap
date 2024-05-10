import { Greet } from "./component/Greet";
import { Person } from "./component/Person";
import { PersonList } from "./component/PersonList";

function App() {
  const personList = [
    { name: "nandan", messageCount: 20, isLoggedIn: true },
    { name: "A", messageCount: 2, isLoggedIn: true },
    { name: "V", messageCount: 40, isLoggedIn: false },
    { name: "B", messageCount: 20, isLoggedIn: true },
    { name: "J", messageCount: 5, isLoggedIn: false },
    { name: "U", messageCount: 50, isLoggedIn: true },
  ];
  return (
    <>
      {/* <Greet name="nnadn" messageCount={25} isLoggedIn={false}></Greet>;
      <Person firstname="Ajay" lastname="kumar"></Person>; */}
      <PersonList person={personList}></PersonList>
    </>
  );
}

export default App;
