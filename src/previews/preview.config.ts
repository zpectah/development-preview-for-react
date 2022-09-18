import PreviewDecorator from './preview.decorator';

import { XTestComponent } from './components/xTestComponent';

const previewConfig = {
    decorator: PreviewDecorator,
    previews: [
        {
            path: 'xTestComponent',
            node: XTestComponent,
            props: {
                children: 'Some custom content with external props',
                someString: 'fkgjhkfjdgh',
            },
            meta: {
                name: 'XTestComponent',
                description: 'Component description ...',
                version: '0.0.1',
                author: 'Tomas Sychra | zpecter.com',
                docs: 'https://some-documentation-link.dev/',
            },
        },
        {
            path: 'xTestComponent2',
            node: XTestComponent,
            props: {
                children: 'Some custom content #2 with external props',
                someNumber: 454654,
            },
            meta: {
                name: 'XTestComponent#2',
                description: 'Component description ...',
            },
        },
        {
            path: 'xTestComponent3',
            node: XTestComponent,
            props: {
                children: 'Some custom content #3 with external props',
                someNumber: 454654,
            },
            meta: {
                name: 'XTestComponent#3',
                description: 'Component description ...',
            },
        },
    ],
};

export default previewConfig;
