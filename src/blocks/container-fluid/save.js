import { __ } from '@wordpress/i18n';
import { InnerBlocks } from '@wordpress/block-editor';

export default function save( props ) {

	const { attributes, className } = props;

	const blockStyle = {
		backgroundImage:
			attributes.mediaUrl != ''
				? 'url("' + attributes.mediaUrl + '")'
				: 'none',
	};

	return (
		<div className={ 'container-fluid ' + className } style={ blockStyle }>
			<InnerBlocks.Content />
		</div>
	);
}
