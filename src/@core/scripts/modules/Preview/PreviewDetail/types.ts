import { ComponentClass } from 'react';

import { Preview } from '../types';

export type NodeWrapperType = ComponentClass<{}, unknown>;

export interface PreviewDetailProps {
    preview: Preview;
}
