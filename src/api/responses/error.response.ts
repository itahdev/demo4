import type { MetaResource } from '@/models/resources/meta.resource'

export interface ErrorData {
  error_code?: string
}

export interface ErrorResponse {
  data: ErrorData
  meta: MetaResource
}
