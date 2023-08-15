import { types } from "mobx-state-tree";
import DemoInfoStore from "./DemoInfoStore";
import UIStore from "./UIStore";

const RootStore = types.model({
    uiStore: types.optional(UIStore, {}),
    demoInfoStore: types.optional(DemoInfoStore, {})
});

export const stores = RootStore.create({});
export const demoInfoStore = stores.demoInfoStore;
export const uiStore = stores.uiStore;

[1, 2, 3, 4, 5, 6, 7].forEach(no => (demoInfoStore.addDemo({
    title: `test-${no}`,
    languages: ["Java", "C++", "Python", "Golang"],
    tags: ["tag1", "tag2"],
  })));

export default RootStore;