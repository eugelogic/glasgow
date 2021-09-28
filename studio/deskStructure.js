/* eslint-disable import/no-anonymous-default-export */
import S from '@sanity/desk-tool/structure-builder'
import { HiOutlineCog } from 'react-icons/hi'

export default () =>
	S.list()
		.title('Content Manager')
		.items(
				[
					S.listItem()
						.title('Settings')
                        .icon(HiOutlineCog)
						.child(
								S.document()
									.schemaType('siteSettings')
									.documentId('siteSettings')
							),
					S.divider(),
					...S.documentTypeListItems().filter(item => !['siteSettings'].includes(item.getId()))
				]
			)