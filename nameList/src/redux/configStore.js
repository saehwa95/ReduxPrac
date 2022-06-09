import { createStore } from "redux";
import reducer from "./modules/reducer";


let configStore = createStore(reducer);

export default configStore;