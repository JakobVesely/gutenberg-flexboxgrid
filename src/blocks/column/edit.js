import { InnerBlocks } from '@wordpress/block-editor';

export default function edit( props ) {

    const { className } = props;

	return (
		<div className={ 'gutenberg-flexbox-editor-element col ' + className }>
		<div class="gutenberg-flexbox-editor-element__title">Column</div>
            <div class="class-tags">{ className.split(' ').filter(c => !c.startsWith('wp-block-')).map(name => <span class="class-tag">{name}</span>) }</div>
			<InnerBlocks />
		</div>
	);
}
