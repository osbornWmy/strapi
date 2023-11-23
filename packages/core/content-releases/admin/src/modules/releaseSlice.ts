import { createApi } from '@reduxjs/toolkit/query/react';

import { pluginId } from '../pluginId';
import { axiosBaseQuery } from '../utils/data';

import type {
  CreateRelease,
  GetReleases,
  ReleaseDataResponse,
  Pagination,
} from '../../../shared/contracts/releases';

export interface GetAllReleasesQueryParams extends Pick<Pagination, 'page' | 'pageSize'> {
  filters?: {
    $and?: Array<{
      releasedAt?: {
        $notNull?: boolean;
      };
    }>;
  };
}

const releaseApi = createApi({
  reducerPath: pluginId,
  baseQuery: axiosBaseQuery,
  tagTypes: ['Releases'],
  endpoints: (build) => {
    return {
      getReleases: build.query<GetReleases.Response, GetAllReleasesQueryParams | void>({
        query({ page, pageSize, filters } = { page: 1, pageSize: 16, filters: undefined }) {
          return {
            url: '/content-releases',
            method: 'GET',
            config: {
              params: {
                page,
                pageSize,
                filters,
              },
            },
          };
        },
        providesTags: ['Releases'],
      }),
      createRelease: build.mutation<{ data: ReleaseDataResponse }, CreateRelease.Request['body']>({
        query(data) {
          return {
            url: '/content-releases',
            method: 'POST',
            data,
          };
        },
        invalidatesTags: ['Releases'],
      }),
    };
  },
});

const { useGetReleasesQuery, useCreateReleaseMutation } = releaseApi;

export { useGetReleasesQuery, useCreateReleaseMutation, releaseApi };
