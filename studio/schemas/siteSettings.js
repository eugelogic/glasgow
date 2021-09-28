/* eslint-disable import/no-anonymous-default-export */

export default {
    name: 'siteSettings',
    title: 'Site Settings',
    type: 'document',
    __experimental_actions: [
        // 'create',
        // 'delete',
        'update',
        'publish'
    ],
    fields: [
        {
            name: 'siteName',
            title: 'Site Name',
            type: 'string'
        },
        {
            name: 'description',
            title: 'Meta Description',
            type: 'text'
        }
    ]
}