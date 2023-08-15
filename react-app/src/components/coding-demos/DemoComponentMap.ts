import React from 'react';
import DummyDemo from './DummyDemo';

type titles = 'test-1';

export const getComponentByTitle = (title: titles) => {
    return componentMap[title]();
}

type ComponentMapType = {
    [K in titles]: () => React.FC
}

const componentMap: ComponentMapType = {
    'test-1': () => DummyDemo,
}