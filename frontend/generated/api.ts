/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface CreateUserDto {
  /**
   * User email address
   * @example "user@example.com"
   */
  email: string;
  /**
   * User password
   * @example "password123"
   */
  password?: string;
  /**
   * User first name
   * @example "John"
   */
  firstName?: string;
  /**
   * User last name
   * @example "Doe"
   */
  lastName?: string;
  /** @default "user" */
  role?: "admin" | "user";
  /** @default "local" */
  provider?: "local" | "google";
  /** @example "https://example.com/avatar.jpg" */
  pictureUrl?: string;
  /**
   * Google account ID
   * @example "1234567890"
   */
  googleId?: string;
}

export interface User {
  email: string;
  password?: string;
  firstName?: string;
  lastName?: string;
  /** @default "user" */
  role: "admin" | "user";
  /** Google account ID (sub) */
  googleId?: string;
  pictureUrl?: string;
  provider?: "local" | "google";
  refreshToken: string;
}

export interface ErrorResponse {
  /** error status code */
  statusCode: number;
  /** error message */
  message: string;
}

export interface UpdateUserDto {
  /**
   * User email address
   * @example "user@example.com"
   */
  email?: string;
  /**
   * User password
   * @example "password123"
   */
  password?: string;
  /**
   * User first name
   * @example "John"
   */
  firstName?: string;
  /**
   * User last name
   * @example "Doe"
   */
  lastName?: string;
  /** @default "user" */
  role?: "admin" | "user";
  /** @default "local" */
  provider?: "local" | "google";
  /** @example "https://example.com/avatar.jpg" */
  pictureUrl?: string;
  /**
   * Google account ID
   * @example "1234567890"
   */
  googleId?: string;
}

export interface CredentialResponseDto {
  /**
   * Google ID token (JWT) returned by Google One Tap / OAuth
   * @example "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9..."
   */
  credential: string;
}

export interface GoogleLoginDto {
  credentialResponse: CredentialResponseDto;
}

export interface JwtTokensResponse {
  /** access token */
  accessToken: string;
  /** refresh token */
  refreshToken: string;
}

export interface System {
  id: number;
  /** System name */
  name: string;
  /** System description */
  description?: string;
  /**
   * Is system public
   * @default false
   */
  isPublic: boolean;
  /** Image URL */
  imageUrl?: string;
  /** Owner user id */
  userId: number;
}

export interface CreateSystemDto {
  /**
   * System name
   * @example "Home made DnD System"
   */
  name: string;
  /** System description */
  description?: string;
  /**
   * Public visibility
   * @default false
   */
  isPublic?: boolean;
  /** Image URL */
  image_url?: string;
}

export interface UpdateSystemDto {
  /**
   * System name
   * @example "Home made DnD System"
   */
  name?: string;
  /** System description */
  description?: string;
  /**
   * Public visibility
   * @default false
   */
  isPublic?: boolean;
  /** Image URL */
  image_url?: string;
}

export interface Stat {
  id: number;
  /** Stat name */
  name: string;
  /** Stat name short name */
  shortName: string;
  /** Stat description */
  description?: string;
  /**
   * Hidden from non-owners
   * @default false
   */
  isHidden: boolean;
  /** Order of appearance in the stats list */
  displayOrder: number;
  /** Related system id */
  systemId: number;
}

export interface CreateStatDto {
  /** Stat name */
  name: string;
  /** Stat description */
  description?: string;
  /**
   * Hidden from non-owners
   * @default false
   */
  isHidden?: boolean;
  /** Related system id */
  systemId: number;
}

export interface UpdateStatDto {
  /** Stat name */
  name?: string;
  /** Stat description */
  description?: string;
  /**
   * Hidden from non-owners
   * @default false
   */
  isHidden?: boolean;
  /** Related system id */
  systemId?: number;
}

export interface Skill {
  id: number;
  /** Skill name */
  name: string;
  /** Skill description */
  description?: string;
  /** What check is required */
  check?: string;
  /** Action details */
  action?: string;
  /** Try again details */
  tryAgain?: string;
  /** Related system id */
  systemId: number;
}

export interface CreateSkillDto {
  /** Skill name */
  name: string;
  /** Skill description */
  description?: string;
  /** What check is required */
  check?: string;
  /** Action details */
  action?: string;
  /** Try again details */
  tryAgain?: string;
  /** Related system id */
  systemId: number;
}

export interface FieldError {
  /** Form field name */
  field: string;
  /** Form field error message */
  message: string;
}

export interface CRUDErrorBadRequestResponse {
  /** error status code */
  statusCode: number;
  /** error message */
  message: string;
  /** Error messages by fields */
  errors: FieldError[];
  /**
   * timestamp
   * @format date-time
   */
  timestamp: string;
}

export interface UpdateSkillDto {
  /** Skill name */
  name?: string;
  /** Skill description */
  description?: string;
  /** What check is required */
  check?: string;
  /** Action details */
  action?: string;
  /** Try again details */
  tryAgain?: string;
  /** Related system id */
  systemId?: number;
}

export interface Spell {
  id: number;
  /** Spell name */
  name: string;
  /** Spell description */
  description?: string;
  /** Magic school */
  school?: string;
  /** Magic subschool */
  subschool?: string;
  /** Spell level */
  level?: string;
  /** Spell range */
  range?: string;
  /** Spell duration */
  duration?: string;
  /** Related system id */
  systemId: number;
}

export interface CreateSpellDto {
  /** Spell name */
  name: string;
  /** Spell description */
  description?: string;
  /** Magic school */
  school?: string;
  /** Magic subschool */
  subschool?: string;
  /** Spell level */
  level?: string;
  /** Spell range */
  range?: string;
  /** Spell duration */
  duration?: string;
  /** Related system id */
  systemId: number;
}

export interface UpdateSpellDto {
  /** Spell name */
  name?: string;
  /** Spell description */
  description?: string;
  /** Magic school */
  school?: string;
  /** Magic subschool */
  subschool?: string;
  /** Spell level */
  level?: string;
  /** Spell range */
  range?: string;
  /** Spell duration */
  duration?: string;
  /** Related system id */
  systemId?: number;
}

import type {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  HeadersDefaults,
  ResponseType,
} from "axios";
import axios from "axios";

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams
  extends Omit<AxiosRequestConfig, "data" | "params" | "url" | "responseType"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType;
  /** request body */
  body?: unknown;
}

export type RequestParams = Omit<
  FullRequestParams,
  "body" | "method" | "query" | "path"
>;

export interface ApiConfig<SecurityDataType = unknown>
  extends Omit<AxiosRequestConfig, "data" | "cancelToken"> {
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export enum ContentType {
  Json = "application/json",
  JsonApi = "application/vnd.api+json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({
    securityWorker,
    secure,
    format,
    ...axiosConfig
  }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({
      ...axiosConfig,
      baseURL: axiosConfig.baseURL || "",
    });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected mergeRequestParams(
    params1: AxiosRequestConfig,
    params2?: AxiosRequestConfig,
  ): AxiosRequestConfig {
    const method = params1.method || (params2 && params2.method);

    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...((method &&
          this.instance.defaults.headers[
            method.toLowerCase() as keyof HeadersDefaults
          ]) ||
          {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected stringifyFormItem(formItem: unknown) {
    if (typeof formItem === "object" && formItem !== null) {
      return JSON.stringify(formItem);
    } else {
      return `${formItem}`;
    }
  }

  protected createFormData(input: Record<string, unknown>): FormData {
    if (input instanceof FormData) {
      return input;
    }
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      const propertyContent: any[] =
        property instanceof Array ? property : [property];

      for (const formItem of propertyContent) {
        const isFileType = formItem instanceof Blob || formItem instanceof File;
        formData.append(
          key,
          isFileType ? formItem : this.stringifyFormItem(formItem),
        );
      }

      return formData;
    }, new FormData());
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<AxiosResponse<T>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = format || this.format || undefined;

    if (
      type === ContentType.FormData &&
      body &&
      body !== null &&
      typeof body === "object"
    ) {
      body = this.createFormData(body as Record<string, unknown>);
    }

    if (
      type === ContentType.Text &&
      body &&
      body !== null &&
      typeof body !== "string"
    ) {
      body = JSON.stringify(body);
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type ? { "Content-Type": type } : {}),
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path,
    });
  };
}

/**
 * @title API Documentation
 * @version 1.0
 * @contact
 */
export class Api<
  SecurityDataType extends unknown,
> extends HttpClient<SecurityDataType> {
  app = {
    /**
     * No description
     *
     * @tags App
     * @name GetTest
     * @request GET:/api
     */
    getTest: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api`,
        method: "GET",
        ...params,
      }),
  };
  users = {
    /**
     * No description
     *
     * @tags users
     * @name Create
     * @request POST:/api/users
     */
    create: (data: CreateUserDto, params: RequestParams = {}) =>
      this.request<User, ErrorResponse>({
        path: `/api/users`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name FindAll
     * @request GET:/api/users
     */
    findAll: (params: RequestParams = {}) =>
      this.request<User[], ErrorResponse>({
        path: `/api/users`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name GetCurrentUser
     * @request GET:/api/users/me
     * @secure
     */
    getCurrentUser: (params: RequestParams = {}) =>
      this.request<User, ErrorResponse>({
        path: `/api/users/me`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name FindOne
     * @request GET:/api/users/{id}
     */
    findOne: (id: number, params: RequestParams = {}) =>
      this.request<User, ErrorResponse>({
        path: `/api/users/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name Update
     * @request PATCH:/api/users/{id}
     */
    update: (id: number, data: UpdateUserDto, params: RequestParams = {}) =>
      this.request<User, ErrorResponse>({
        path: `/api/users/${id}`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name Delete
     * @request DELETE:/api/users/{id}
     */
    delete: (id: number, params: RequestParams = {}) =>
      this.request<void, ErrorResponse>({
        path: `/api/users/${id}`,
        method: "DELETE",
        ...params,
      }),
  };
  auth = {
    /**
     * No description
     *
     * @tags auth
     * @name GoogleLogin
     * @summary Login with Google
     * @request POST:/api/auth/google/login
     */
    googleLogin: (data: GoogleLoginDto, params: RequestParams = {}) =>
      this.request<JwtTokensResponse, ErrorResponse>({
        path: `/api/auth/google/login`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags auth
     * @name Refresh
     * @summary Refresh access token
     * @request POST:/api/auth/refresh
     */
    refresh: (params: RequestParams = {}) =>
      this.request<JwtTokensResponse, ErrorResponse>({
        path: `/api/auth/refresh`,
        method: "POST",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags auth
     * @name Logout
     * @summary Logout (clear refresh token)
     * @request POST:/api/auth/logout
     */
    logout: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/auth/logout`,
        method: "POST",
        ...params,
      }),
  };
  systems = {
    /**
     * No description
     *
     * @tags systems
     * @name List
     * @request GET:/api/systems
     */
    list: (params: RequestParams = {}) =>
      this.request<System[], any>({
        path: `/api/systems`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags systems
     * @name Create
     * @request POST:/api/systems
     * @secure
     */
    create: (data: CreateSystemDto, params: RequestParams = {}) =>
      this.request<System, any>({
        path: `/api/systems`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags systems
     * @name GetOne
     * @request GET:/api/systems/{id}
     */
    getOne: (id: number, params: RequestParams = {}) =>
      this.request<System, any>({
        path: `/api/systems/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags systems
     * @name Update
     * @request PATCH:/api/systems/{id}
     * @secure
     */
    update: (id: number, data: UpdateSystemDto, params: RequestParams = {}) =>
      this.request<System, any>({
        path: `/api/systems/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags systems
     * @name Remove
     * @request DELETE:/api/systems/{id}
     * @secure
     */
    remove: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/systems/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  stats = {
    /**
     * No description
     *
     * @tags stats
     * @name List
     * @request GET:/api/systems/{systemId}/stats
     */
    list: (systemId: number, params: RequestParams = {}) =>
      this.request<Stat[], any>({
        path: `/api/systems/${systemId}/stats`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags stats
     * @name Create
     * @request POST:/api/systems/{systemId}/stats
     * @secure
     */
    create: (
      systemId: number,
      data: CreateStatDto,
      params: RequestParams = {},
    ) =>
      this.request<Stat, any>({
        path: `/api/systems/${systemId}/stats`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags stats
     * @name GetOne
     * @request GET:/api/systems/{systemId}/stats/{id}
     */
    getOne: (id: number, systemId: number, params: RequestParams = {}) =>
      this.request<Stat, any>({
        path: `/api/systems/${systemId}/stats/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags stats
     * @name Update
     * @request PATCH:/api/systems/{systemId}/stats/{id}
     * @secure
     */
    update: (
      id: number,
      systemId: number,
      data: UpdateStatDto,
      params: RequestParams = {},
    ) =>
      this.request<Stat, any>({
        path: `/api/systems/${systemId}/stats/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags stats
     * @name Remove
     * @request DELETE:/api/systems/{systemId}/stats/{id}
     * @secure
     */
    remove: (id: number, systemId: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/systems/${systemId}/stats/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  skills = {
    /**
     * No description
     *
     * @tags skills
     * @name List
     * @request GET:/api/systems/{systemId}/skills
     */
    list: (systemId: number, params: RequestParams = {}) =>
      this.request<Skill[], any>({
        path: `/api/systems/${systemId}/skills`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags skills
     * @name Create
     * @request POST:/api/systems/{systemId}/skills
     * @secure
     */
    create: (
      systemId: number,
      data: CreateSkillDto,
      params: RequestParams = {},
    ) =>
      this.request<Skill, CRUDErrorBadRequestResponse>({
        path: `/api/systems/${systemId}/skills`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags skills
     * @name GetOne
     * @request GET:/api/systems/{systemId}/skills/{id}
     */
    getOne: (id: number, systemId: number, params: RequestParams = {}) =>
      this.request<Skill, any>({
        path: `/api/systems/${systemId}/skills/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags skills
     * @name Update
     * @request PATCH:/api/systems/{systemId}/skills/{id}
     * @secure
     */
    update: (
      id: number,
      systemId: number,
      data: UpdateSkillDto,
      params: RequestParams = {},
    ) =>
      this.request<Skill, CRUDErrorBadRequestResponse>({
        path: `/api/systems/${systemId}/skills/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags skills
     * @name Remove
     * @request DELETE:/api/systems/{systemId}/skills/{id}
     * @secure
     */
    remove: (id: number, systemId: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/systems/${systemId}/skills/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  spells = {
    /**
     * No description
     *
     * @tags spells
     * @name List
     * @request GET:/api/systems/{systemId}/spells
     */
    list: (systemId: number, params: RequestParams = {}) =>
      this.request<Spell[], any>({
        path: `/api/systems/${systemId}/spells`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags spells
     * @name Create
     * @request POST:/api/systems/{systemId}/spells
     * @secure
     */
    create: (
      systemId: number,
      data: CreateSpellDto,
      params: RequestParams = {},
    ) =>
      this.request<Spell, CRUDErrorBadRequestResponse>({
        path: `/api/systems/${systemId}/spells`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags spells
     * @name GetOne
     * @request GET:/api/systems/{systemId}/spells/{id}
     */
    getOne: (id: number, systemId: number, params: RequestParams = {}) =>
      this.request<Spell, any>({
        path: `/api/systems/${systemId}/spells/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags spells
     * @name Update
     * @request PATCH:/api/systems/{systemId}/spells/{id}
     * @secure
     */
    update: (
      id: number,
      systemId: number,
      data: UpdateSpellDto,
      params: RequestParams = {},
    ) =>
      this.request<Spell, CRUDErrorBadRequestResponse>({
        path: `/api/systems/${systemId}/spells/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags spells
     * @name Remove
     * @request DELETE:/api/systems/{systemId}/spells/{id}
     * @secure
     */
    remove: (id: number, systemId: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/systems/${systemId}/spells/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
}
