import { Theme } from "@mui/material";
import { types } from "mobx-state-tree";
import { themes } from "../themes/themes";

const UIStore = types.model({
    editable: false,
    theme: types.optional(types.string, 'dark'),
}).views(self => ({
    getTheme: (): Theme => {
        const theme = themes.get(self.theme);
        return theme || theme.get('dark');
    }    
})).actions(self => ({
    isEditable: (editable: boolean) => {
        self.editable = editable;
    }
}));

export default UIStore;