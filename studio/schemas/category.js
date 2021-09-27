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
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
  ],
}
