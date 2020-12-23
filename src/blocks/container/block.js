import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

import edit from './edit';
import save from './save';

registerBlockType('gutenberg-flexboxgrid/container', {
    title: __('Flex Container', 'gutenberg-flexboxgrid'),
    description: __('Container-Element from the Felxbox Grid.', 'gutenberg-flexboxgrid'),
    category: 'widgets',
    icon: 'smiley',
    supports: {
        html: false,
    },
    edit,
    save,
});