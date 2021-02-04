import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

import edit from './edit';
import save from './save';

registerBlockType('gutenberg-flexboxgrid/column-linked', {
    title: __('Flex Column Linked', 'gutenberg-flexboxgrid'),
    description: __('Column Element from the Felxbox Grid.', 'gutenberg-flexboxgrid'),
    category: 'widgets',
    icon: 'smiley',
    supports: {
        html: false,
    },
    attributes: {
        link_url: { 
            selector: 'a',
            source: 'attribute',
            attribute: 'href'
        },
    },
    edit,
    save,
});