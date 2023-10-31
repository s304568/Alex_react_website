import { useState } from "react";
import styles from "./App.module.css";
import Nav from "./Components/Nav/Nav";
import { Select } from "./Components/SelectComponent/Select";
import { Option } from "./interfaces";

const options: Option[] = [
  {
    label: "Audi",
    value: "audi",
  },
  {
    label: "Volkswagen",
    value: "golf",
  },
  {
    label: "BMW",
    value: "bmw",
  },
];

const App: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<Option | null>(null);

  console.log(selectedItem);
  return (
    <>
      <Nav />
      <div className={styles["app"]}>
        <Select
          placeholder="Select a car"
          options={options}
          selected={selectedItem}
          onChange={(selection: Option) => setSelectedItem(selection)}
        />
        <p> selection {selectedItem?.label}</p>
      </div>
    </>
  );
};

export default App;
