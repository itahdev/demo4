import type { PaginationResource } from '@/models/resources/pagination.resource'

export interface MetaPaginationResource {
  code: number
  message: string
  pagination: PaginationResource
}
