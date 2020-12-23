import { __ } from '@wordpress/i18n';
import { InnerBlocks } from '@wordpress/block-editor';

export default function save( props ) {

    const { className } = props;
    
	return (
		<div className={ 'row ' + className }>
			<InnerBlocks.Content />
		</div>
	);
}