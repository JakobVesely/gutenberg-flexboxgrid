import { InnerBlocks, InspectorControls, RichText } from '@wordpress/block-editor';

export default function edit( props ) {

	const { className } = props;
	var link_url = props.attributes.link_url

	
	function onChangeContentURL (content) {
		props.setAttributes({link_url: content})
	} 

	return (
		<div>
			<InspectorControls>
				<div class="components-panel__body is-opened">
					<label class="components-base-control__label css-pezhm9-StyledLabel">URL</label>
					<RichText
						format="string"
						className="components-text-control__input"
						onChange={onChangeContentURL} 
						value={link_url}
					/>
				</div>
			</InspectorControls>
			<div className={ 'gutenberg-flexbox-editor-element col ' + className }>
			<div class="gutenberg-flexbox-editor-element__title">Column</div>
				<div class="class-tags">{ className.split(' ').filter(c => !c.startsWith('wp-block-')).map(name => <span class="class-tag">{name}</span>) }</div>
				<InnerBlocks />
			</div>
		</div>
	);
}
