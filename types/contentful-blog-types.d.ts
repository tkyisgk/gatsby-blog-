import { ContentfulBlog, ContentfulBlogBodyTextNode, Maybe, File } from './graphql-types.d'

export type ContentfulBlogTypeQuery = {
  node: (
    Pick<ContentfulBlog, 'title' | 'slug' | 'createdAt' | 'updatedAt'>
    & { body?: Maybe<Pick<ContentfulBlogBodyTextNode, 'body'>>, thumbnail?: Maybe<{ localFile?: Maybe<Pick<File, 'publicURL'>> }> }
  )
}