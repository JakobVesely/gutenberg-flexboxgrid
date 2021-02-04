import { __ } from '@wordpress/i18n';
import { InnerBlocks } from '@wordpress/block-editor';

export default function save( props ) {

    const { className } = props;
    
	return (
		<a className={ 'col ' + className } href={ props.attributes.link_url }>
			<InnerBlocks.Content />
		</a>
	);
}
