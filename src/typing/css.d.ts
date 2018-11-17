// My css.d.ts file
import * as CSS from 'csstype';

declare module 'csstype' {
    interface Properties {
        // Add a missing property
        WebkitRocketLauncher?: string;
        float?: string;

        // Add a CSS Custom Property
        '--theme-color'?: 'black' | 'white';

        // ...or allow any other property
        [index: string]: any;
    }
}