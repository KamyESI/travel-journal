import Entry from "./components/Entry";
import Header from "./components/Header";
import data from "./data";

function App() {
  const myJournal = data.map((entry) => {
    return <Entry key={entry.id} entry={entry} />;
  });
  return (
    <>
      <Header />
      {myJournal}
    </>
  );
}

export default App;

/* 4h 10 min */
