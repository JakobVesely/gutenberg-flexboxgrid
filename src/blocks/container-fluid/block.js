import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

import Edit from './edit';
import save from './save';

registerBlockType( 'gutenberg-flexboxgrid/container-fluid', {
	title: __('Flex Container Fluid', 'gutenberg-flexboxgrid'),
    description: __('Container Fluid Element from the Felxbox Grid.', 'gutenberg-flexboxgrid'),
	category: 'widgets',
	icon: 'smiley',
	supports: {
		html: false,
	},
	attributes: {
		mediaId: {
			type: 'number',
			default: 0,
		},
		mediaUrl: {
			type: 'string',
			default: '',
		},
	},
	edit: Edit,
	save,
} );
