import { RenderAdminArgs, renderAdmin } from '@strapi/admin/strapi-admin';
// @ts-expect-error – No types, yet.
import contentTypeBuilder from '@strapi/plugin-content-type-builder/strapi-admin';
import email from '@strapi/plugin-email/strapi-admin';
// @ts-expect-error – No types, yet.
import upload from '@strapi/plugin-upload/strapi-admin';
// @ts-expect-error – No types, yet.
import unstable_contentReleases from '@strapi/content-releases/strapi-admin';

const render = (
  mountNode: HTMLElement | null,
  { plugins, features, ...restArgs }: RenderAdminArgs
) => {
  return renderAdmin(mountNode, {
    ...restArgs,
    plugins: {
      'content-type-builder': contentTypeBuilder,
      // @ts-expect-error – TODO: fix this
      email,
      upload,
      ...(features?.future?.unstable_contentReleases ? { 'content-releases': unstable_contentReleases } : {}),
      ...plugins,
    },
  });
};

export { render as renderAdmin };
export type { RenderAdminArgs };
