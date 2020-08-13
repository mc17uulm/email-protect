/**
 * Copyright (c) 2020. mc17
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

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
