import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

import edit from './edit';
import save from './save';

registerBlockType('gutenberg-flexboxgrid/row', {
    title: __('Flex Row', 'gutenberg-flexboxgrid'),
    description: __('Row Element from the Felxbox Grid.', 'gutenberg-flexboxgrid'),
    category: 'widgets',
    icon: 'smiley',
    supports: {
        html: false,
    },
    edit,
    save,
});