import { select, subscribe } from '@wordpress/data';
import { registerFormatType, unregisterFormatType } from '@wordpress/rich-text';
import ExtendedEditor from "./block/ExtendedEditor";

const unsubscribe = subscribe(() => {
        const format = select('core/rich-text').getFormatType('core/link');
        if (!format) return;
        unsubscribe();

        const settings = unregisterFormatType('core/link');

        registerFormatType(
            'mail-encrypt/encrypt', {
                ...settings,
                name: 'mail-encrypt/encrypt',
                title: 'Mail Encrypt',
                tagName: 'a',
                attributes: {
                    link: {
                        type: 'string'
                    },
                    text: {
                        type: 'string'
                    }
                },
                edit({isActive, value, onChange}) {
                    return (
                        <ExtendedEditor
                            isActive={isActive}
                            value={value}
                            onChange={onChange}
                        />
                    )
                }
            });
});
/**
 * <MailPopover visible={isVisible} />
 */
