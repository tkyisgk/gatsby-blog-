import { ContentfulBlog, ContentfulBlogBodyTextNode, Maybe } from './graphql-types.d'

export type ContentfulBlogTypeQuery = {
  node: (
    Pick<ContentfulBlog, 'title' | 'slug' | 'createdAt' | 'updatedAt' | 'tags'>
    & { body?: Maybe<Pick<ContentfulBlogBodyTextNode, 'body'>>, thumbnail?: Maybe<{ localFile?: Maybe<Pick<File, 'name'>> }> }
  )
}