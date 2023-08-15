import { SnapshotIn, types } from "mobx-state-tree";
import DemoInfo, { DemoInfoType } from "./DemoInfo";

const DemoInfoStore = types.model('DemoInfoStore', {
    demos: types.map(DemoInfo)
}).actions(self => ({
    addDemo: (demo: SnapshotIn<DemoInfoType>) => {
        self.demos.put(demo);
    }
}));

export default DemoInfoStore;