import type {StructureBuilder} from 'sanity/structure'

// Singleton document types that should appear as single items
const singletonTypes = new Set(['header', 'settings'])

export const structure = (S: StructureBuilder) =>
  S.list()
    .title('Content')
    .items([
      // Singleton: Header
      S.listItem()
        .title('Header')
        .id('header')
        .child(S.document().schemaType('header').documentId('header')),
      S.listItem()
        .title('Settings')
        .id('settings')
        .child(S.document().schemaType('settings').documentId('settings')),
      S.divider(),
      // Documents
      S.divider(),
      // Filter out singleton types from the default document list
      ...S.documentTypeListItems().filter(
        (listItem) => !singletonTypes.has(listItem.getId() || ''),
      ),
    ])
