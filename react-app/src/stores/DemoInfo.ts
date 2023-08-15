import { Instance, types } from "mobx-state-tree";

const DemoInfo = types.model("DemoInfo", {
    title: types.identifier,
    languages: types.array(types.string),
    tags: types.array(types.string),
}).actions((self) => {
    const setTitle = (title: string) => {
        self.title = title;
    }

    const addTags = (...tags: string[]) => {
        tags.forEach(tag => {
            if(!self.tags.includes(tag)) {
                self.tags.push(tag);
            }
        });
    }

    const removeTags = (...tags: string[]) => {
        tags.forEach(tag => {
            self.tags.remove(tag);
            console.log(self.tags.length);
        });
    }

    return {
        setTitle,
        addTags,
        removeTags
    }
});

export type DemoInfoType = Instance<typeof DemoInfo>;
export default DemoInfo