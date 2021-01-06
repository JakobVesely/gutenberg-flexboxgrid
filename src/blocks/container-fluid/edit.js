import { Button, PanelBody, ResponsiveWrapper } from '@wordpress/components';
import { InspectorControls, MediaUpload, MediaUploadCheck, InnerBlocks } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

export default function Edit(props) {
    const { attributes, setAttributes, className } = props;

    const removeMedia = () => setAttributes({
        mediaId: 0,
        mediaUrl: ''
    });

    const onSelectMedia = (media) => {

        const url = media.sizes.large ? media.sizes.large.url : media.url;

        setAttributes({
            mediaId: media.id,
            mediaUrl: url
        });
    };

    const blockStyle = {
        backgroundImage: attributes.mediaUrl != '' ? 'url("' + attributes.mediaUrl + '")' : 'none'
    };
    
    return (
        <div>
            <InspectorControls>
                <PanelBody title={__('Select block background image', 'awp')} initialOpen={true} >
                    <div className="editor-post-featured-image">
                        <MediaUploadCheck>
                            <MediaUpload
                                onSelect={onSelectMedia}
                                value={attributes.mediaId}
                                allowedTypes={['image']}
                                render={

                                    ({ open }) => (

                                        <Button
                                            className={attributes.mediaId == 0 ? 'editor-post-featured-image__toggle' : 'editor-post-featured-image__preview'}
                                            onClick={open}>

                                            { attributes.mediaId == 0 && __('Choose an image', 'awp')}

                                            {
                                                props.media != undefined &&

                                                <ResponsiveWrapper naturalWidth={props.media.media_details.width} naturalHeight={props.media.media_details.height} >
                                                    <img class="image" src={props.media.source_url} />
                                                </ResponsiveWrapper>
                                            }

                                        </Button>
                                    )
                                }
                            />
                        </MediaUploadCheck>
                        {attributes.mediaId != 0 &&
                            <MediaUploadCheck>
                                <MediaUpload
                                    title={__('Replace image', 'awp')}
                                    value={attributes.mediaId}
                                    onSelect={onSelectMedia}
                                    allowedTypes={['image']}
                                    render={({ open }) => (
                                        <Button onClick={open} isDefault isLarge>{__('Replace image', 'awp')}</Button>
                                    )}
                                />
                            </MediaUploadCheck>
                        }
                        {
                            attributes.mediaId != 0 &&
                            <MediaUploadCheck>
                                <Button onClick={removeMedia} isLink isDestructive>{__('Remove image', 'awp')}</Button>
                            </MediaUploadCheck>
                        }
                    </div>
                </PanelBody>
            </InspectorControls>

            <div className={ 'gutenberg-flexbox-editor-element container-fluid ' + className } style={ blockStyle }>
                <div class="gutenberg-flexbox-editor-element__title">Container Fluid</div>
                <div class="class-tags">{ className.split(' ').filter(c => !c.startsWith('wp-block-')).map(name => <span class="class-tag">{name}</span>) }</div>
                <InnerBlocks />
            </div>
        </div>
    );
};
