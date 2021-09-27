/* eslint-disable import/no-anonymous-default-export */
import { HiOutlineDocumentAdd } from "react-icons/hi";

export default {
  name: 'category',
  title: 'Category',
  icon: HiOutlineDocumentAdd,
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: Rule => Rule.required(),
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
  ],
}
