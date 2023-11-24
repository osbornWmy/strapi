import type { CMAdminConfiguration } from '../../../pages/EditViewLayoutManager';
import type { ComponentCategoryProps } from '../ComponentCategory';

export const layoutData: Record<string, CMAdminConfiguration> = {
  component1: {
    category: 'myComponents',
    info: {
      singularName: 'component1',
      pluralName: 'component1',
      displayName: 'component1',
      icon: undefined,
    },
    apiID: '',
    isDisplayed: false,
    layouts: {
      list: null,
      edit: [],
    },
    modelType: 'contentType',
    kind: 'singleType',
    attributes: {},
  },
  component2: {
    category: 'myComponents',
    info: {
      singularName: 'component2',
      pluralName: 'component2',
      displayName: 'component2',
      icon: undefined,
    },
    apiID: '',
    isDisplayed: false,
    layouts: {
      list: null,
      edit: [],
    },
    modelType: 'contentType',
    kind: 'singleType',
    attributes: {},
  },
  component3: {
    category: 'otherComponents',
    info: {
      singularName: 'component3',
      pluralName: 'component3',
      displayName: 'component3',
      icon: undefined,
    },
    apiID: '',
    isDisplayed: false,
    layouts: {
      list: null,
      edit: [],
    },
    modelType: 'contentType',
    kind: 'singleType',
    attributes: {},
  },
};

export const dynamicComponentsByCategory: Record<
  string,
  NonNullable<ComponentCategoryProps['components']>
> = {
  myComponents: [
    {
      componentUid: 'component1',
      info: {
        singularName: 'component1',
        pluralName: 'component1',
        displayName: 'component1',
        icon: undefined,
      },
    },
    {
      componentUid: 'component2',
      info: {
        singularName: 'component2',
        pluralName: 'component2',
        displayName: 'component2',
        icon: undefined,
      },
    },
  ],
  otherComponents: [
    {
      componentUid: 'component3',
      info: {
        singularName: 'component3',
        pluralName: 'component3',
        displayName: 'component3',
        icon: undefined,
      },
    },
  ],
};
