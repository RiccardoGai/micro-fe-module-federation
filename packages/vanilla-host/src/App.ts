import "./index.scss";

import { subscribe } from "remote/store";
import VanillaBookList from "remote/VanillaBookList";
import VanillaBookSearch from "remote/VanillaBookSearch";

VanillaBookList("#foods");
VanillaBookSearch("#search");

subscribe(({ filteredTaps }) => {
  document.getElementById("like").innerText = filteredTaps
    .slice(0, 3)
    .map(({ beverageName }) => beverageName)
    .join(", ");
});