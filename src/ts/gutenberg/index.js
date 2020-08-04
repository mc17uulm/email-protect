import { registerFormatType } from '@wordpress/rich-text';
import ExtendedEditor from "./block/ExtendedEditor";

registerFormatType(
    'mail-encrypt/encrypt', {
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
        className: 'mail-encrypt-body',
        edit({isActive, value, onChange}) {
            return (
                <ExtendedEditor
                    isActive={isActive}
                    value={value}
                    onChange={onChange}
                />
            )
        }
    }
);
