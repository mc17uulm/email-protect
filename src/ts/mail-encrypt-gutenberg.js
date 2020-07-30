import { select, subscribe } from '@wordpress/data';
import { toggleFormat, registerFormatType, unregisterFormatType } from '@wordpress/rich-text';
import { RichTextToolbarButton } from '@wordpress/block-editor';

const unsubscribe = subscribe(() => {
    const format = select('core/rich-text').getFormatType('core/underline');
    if(!format) return;
    unsubscribe();

    const settings = unregisterFormatType('core/underline');

    registerFormatType(
        'mail-encrypt/encrypt', {
            ...settings,
            name: 'mail-encrypt/encrypt',
            title: 'Mail Encrypt',
            tagName: 'span',
            className: null,
            edit( {isActive, value, onChange } ) {
                const onToggle = () => {
                    onChange(
                        toggleFormat(value, {
                            type: 'mail-encrypt/encrypt',
                            attributes: {
                                classname: 'mail-encrypt-str'
                            }
                        })
                    );
                }
                return (
                    <RichTextToolbarButton
                        icon="editor-underline"
                        title="Mail Encrypt"
                        isActive={isActive}
                        onClick={onToggle}
                    />
                );
            }
        }
    );
})