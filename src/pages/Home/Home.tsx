import { debounce, TextField } from "@mui/material";
import { useState } from "react";

import { Page } from "../../components/Page";
import { CharactersList } from "./components/CharactersList";

function Home() {
  const [search, setSearch] = useState("");

  return (
    <Page>
      <TextField
        fullWidth
        label="Search star wars characters"
        onChange={debounce((e) => setSearch(e.target.value), 400)}
      />

      <CharactersList search={search} />
    </Page>
  );
}

export default Home;
