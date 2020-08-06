import { registerBlockType } from "@wordpress/blocks";
import { RichText } from "@wordpress/block-editor";
import EditorHandler from "./EditorHandler";

registerBlockType('mail-encrypt/block', {
    title: 'MailEncrypt Block',
    icon: 'post-status',
    category: 'layout',
    attributes: {
        content: {
            type: 'array',
            source: 'children'
        }
    },
    edit: (props) => {

        const content = EditorHandler.load_content(props.attributes.content);

        const onChangeContent = (newContent) => {
            props.setAttributes({ content: EditorHandler.onchange(newContent) });
        }

        return (
            <RichText
                key='editable'
                tagName='p'
                className={props.className}
                onChange={onChangeContent}
                value={content}
                keepPlaceholderOnFocus={true}
            />
        )

    },
    save: (props) => {
        return (
            <RichText.Content
                value={EditorHandler.save(props.attributes.content)}
            />
        )
    }
});
