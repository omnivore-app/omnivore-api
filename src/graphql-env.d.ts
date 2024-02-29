/* eslint-disable */
/* prettier-ignore */

/** An IntrospectionQuery representation of your schema.
 *
 * @remarks
 * This is an introspection of your schema saved as a file by GraphQLSP.
 * It will automatically be used by `gql.tada` to infer the types of your GraphQL documents.
 * If you need to reuse this data or update your `scalars`, update `tadaOutputLocation` to
 * instead save to a .ts instead of a .d.ts file.
 */
export type introspection = {
  "__schema": {
    "queryType": {
      "name": "Query"
    },
    "mutationType": {
      "name": "Mutation"
    },
    "subscriptionType": {
      "name": "Subscription"
    },
    "types": [
      {
        "kind": "OBJECT",
        "name": "AddPopularReadError",
        "fields": [
          {
            "name": "errorCodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "AddPopularReadErrorCode",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "AddPopularReadErrorCode",
        "enumValues": [
          {
            "name": "BAD_REQUEST"
          },
          {
            "name": "NOT_FOUND"
          },
          {
            "name": "UNAUTHORIZED"
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "AddPopularReadResult",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "AddPopularReadError"
          },
          {
            "kind": "OBJECT",
            "name": "AddPopularReadSuccess"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "AddPopularReadSuccess",
        "fields": [
          {
            "name": "pageId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "SCALAR",
        "name": "String"
      },
      {
        "kind": "OBJECT",
        "name": "ApiKey",
        "fields": [
          {
            "name": "createdAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Date",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "expiresAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Date",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "key",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "scopes",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "usedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Date",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "SCALAR",
        "name": "ID"
      },
      {
        "kind": "OBJECT",
        "name": "ApiKeysError",
        "fields": [
          {
            "name": "errorCodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "ApiKeysErrorCode",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "ApiKeysErrorCode",
        "enumValues": [
          {
            "name": "BAD_REQUEST"
          },
          {
            "name": "UNAUTHORIZED"
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "ApiKeysResult",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "ApiKeysError"
          },
          {
            "kind": "OBJECT",
            "name": "ApiKeysSuccess"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "ApiKeysSuccess",
        "fields": [
          {
            "name": "apiKeys",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ApiKey",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "ArchiveLinkError",
        "fields": [
          {
            "name": "errorCodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "ArchiveLinkErrorCode",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "message",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "ArchiveLinkErrorCode",
        "enumValues": [
          {
            "name": "BAD_REQUEST"
          },
          {
            "name": "UNAUTHORIZED"
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "ArchiveLinkInput",
        "inputFields": [
          {
            "name": "archived",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            }
          },
          {
            "name": "linkId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            }
          }
        ]
      },
      {
        "kind": "SCALAR",
        "name": "Boolean"
      },
      {
        "kind": "UNION",
        "name": "ArchiveLinkResult",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "ArchiveLinkError"
          },
          {
            "kind": "OBJECT",
            "name": "ArchiveLinkSuccess"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "ArchiveLinkSuccess",
        "fields": [
          {
            "name": "linkId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "message",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Article",
        "fields": [
          {
            "name": "author",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "content",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "contentReader",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "ContentReader",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Date",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "description",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "feedContent",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "folder",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "hasContent",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "hash",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "highlights",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Highlight",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "ArticleHighlightsInput",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "image",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "isArchived",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "labels",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Label",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "language",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "linkId",
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "originalArticleUrl",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "originalHtml",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "pageType",
            "type": {
              "kind": "ENUM",
              "name": "PageType",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "postedByViewer",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "publishedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Date",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "readAt",
            "type": {
              "kind": "SCALAR",
              "name": "Date",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "readingProgressAnchorIndex",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "readingProgressPercent",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "readingProgressTopPercent",
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "recommendations",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Recommendation",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "savedAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Date",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "savedByViewer",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "shareInfo",
            "type": {
              "kind": "OBJECT",
              "name": "LinkShareInfo",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "sharedComment",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "siteIcon",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "siteName",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "slug",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "state",
            "type": {
              "kind": "ENUM",
              "name": "ArticleSavingRequestStatus",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "subscription",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "title",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "unsubHttpUrl",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "unsubMailTo",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Date",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "uploadFileId",
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "url",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "wordsCount",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "SCALAR",
        "name": "Int"
      },
      {
        "kind": "SCALAR",
        "name": "Float"
      },
      {
        "kind": "OBJECT",
        "name": "ArticleEdge",
        "fields": [
          {
            "name": "cursor",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "node",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Article",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "ArticleError",
        "fields": [
          {
            "name": "errorCodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "ArticleErrorCode",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "ArticleErrorCode",
        "enumValues": [
          {
            "name": "BAD_DATA"
          },
          {
            "name": "NOT_FOUND"
          },
          {
            "name": "UNAUTHORIZED"
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "ArticleHighlightsInput",
        "inputFields": [
          {
            "name": "includeFriends",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "ArticleResult",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "ArticleError"
          },
          {
            "kind": "OBJECT",
            "name": "ArticleSuccess"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "ArticleSavingRequest",
        "fields": [
          {
            "name": "article",
            "type": {
              "kind": "OBJECT",
              "name": "Article",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Date",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "errorCode",
            "type": {
              "kind": "ENUM",
              "name": "CreateArticleErrorCode",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "slug",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "status",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "ArticleSavingRequestStatus",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Date",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "url",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "user",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "User",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "userId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "ArticleSavingRequestError",
        "fields": [
          {
            "name": "errorCodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "ArticleSavingRequestErrorCode",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "ArticleSavingRequestErrorCode",
        "enumValues": [
          {
            "name": "BAD_DATA"
          },
          {
            "name": "NOT_FOUND"
          },
          {
            "name": "UNAUTHORIZED"
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "ArticleSavingRequestResult",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "ArticleSavingRequestError"
          },
          {
            "kind": "OBJECT",
            "name": "ArticleSavingRequestSuccess"
          }
        ]
      },
      {
        "kind": "ENUM",
        "name": "ArticleSavingRequestStatus",
        "enumValues": [
          {
            "name": "ARCHIVED"
          },
          {
            "name": "CONTENT_NOT_FETCHED"
          },
          {
            "name": "DELETED"
          },
          {
            "name": "FAILED"
          },
          {
            "name": "PROCESSING"
          },
          {
            "name": "SUCCEEDED"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "ArticleSavingRequestSuccess",
        "fields": [
          {
            "name": "articleSavingRequest",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ArticleSavingRequest",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "ArticleSuccess",
        "fields": [
          {
            "name": "article",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Article",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "ArticlesError",
        "fields": [
          {
            "name": "errorCodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "ArticlesErrorCode",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "ArticlesErrorCode",
        "enumValues": [
          {
            "name": "UNAUTHORIZED"
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "ArticlesResult",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "ArticlesError"
          },
          {
            "kind": "OBJECT",
            "name": "ArticlesSuccess"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "ArticlesSuccess",
        "fields": [
          {
            "name": "edges",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ArticleEdge",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "pageInfo",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "PageInfo",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "BulkActionError",
        "fields": [
          {
            "name": "errorCodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "BulkActionErrorCode",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "BulkActionErrorCode",
        "enumValues": [
          {
            "name": "BAD_REQUEST"
          },
          {
            "name": "UNAUTHORIZED"
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "BulkActionResult",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "BulkActionError"
          },
          {
            "kind": "OBJECT",
            "name": "BulkActionSuccess"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "BulkActionSuccess",
        "fields": [
          {
            "name": "success",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "BulkActionType",
        "enumValues": [
          {
            "name": "ADD_LABELS"
          },
          {
            "name": "ARCHIVE"
          },
          {
            "name": "DELETE"
          },
          {
            "name": "MARK_AS_READ"
          },
          {
            "name": "MOVE_TO_FOLDER"
          }
        ]
      },
      {
        "kind": "ENUM",
        "name": "ContentReader",
        "enumValues": [
          {
            "name": "EPUB"
          },
          {
            "name": "PDF"
          },
          {
            "name": "WEB"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "CreateArticleError",
        "fields": [
          {
            "name": "errorCodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "CreateArticleErrorCode",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "CreateArticleErrorCode",
        "enumValues": [
          {
            "name": "ELASTIC_ERROR"
          },
          {
            "name": "NOT_ALLOWED_TO_PARSE"
          },
          {
            "name": "PAYLOAD_TOO_LARGE"
          },
          {
            "name": "UNABLE_TO_FETCH"
          },
          {
            "name": "UNABLE_TO_PARSE"
          },
          {
            "name": "UNAUTHORIZED"
          },
          {
            "name": "UPLOAD_FILE_MISSING"
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "CreateArticleInput",
        "inputFields": [
          {
            "name": "articleSavingRequestId",
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            }
          },
          {
            "name": "folder",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "labels",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "CreateLabelInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "preparedDocument",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "PreparedDocumentInput",
              "ofType": null
            }
          },
          {
            "name": "publishedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Date",
              "ofType": null
            }
          },
          {
            "name": "rssFeedUrl",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "savedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Date",
              "ofType": null
            }
          },
          {
            "name": "skipParsing",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "source",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "state",
            "type": {
              "kind": "ENUM",
              "name": "ArticleSavingRequestStatus",
              "ofType": null
            }
          },
          {
            "name": "uploadFileId",
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            }
          },
          {
            "name": "url",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "CreateArticleResult",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "CreateArticleError"
          },
          {
            "kind": "OBJECT",
            "name": "CreateArticleSuccess"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "CreateArticleSavingRequestError",
        "fields": [
          {
            "name": "errorCodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "CreateArticleSavingRequestErrorCode",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "CreateArticleSavingRequestErrorCode",
        "enumValues": [
          {
            "name": "BAD_DATA"
          },
          {
            "name": "UNAUTHORIZED"
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "CreateArticleSavingRequestInput",
        "inputFields": [
          {
            "name": "url",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "CreateArticleSavingRequestResult",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "CreateArticleSavingRequestError"
          },
          {
            "kind": "OBJECT",
            "name": "CreateArticleSavingRequestSuccess"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "CreateArticleSavingRequestSuccess",
        "fields": [
          {
            "name": "articleSavingRequest",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ArticleSavingRequest",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "CreateArticleSuccess",
        "fields": [
          {
            "name": "created",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "createdArticle",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Article",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "user",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "User",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "CreateGroupError",
        "fields": [
          {
            "name": "errorCodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "CreateGroupErrorCode",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "CreateGroupErrorCode",
        "enumValues": [
          {
            "name": "BAD_REQUEST"
          },
          {
            "name": "UNAUTHORIZED"
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "CreateGroupInput",
        "inputFields": [
          {
            "name": "description",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "expiresInDays",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            }
          },
          {
            "name": "maxMembers",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "onlyAdminCanPost",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "onlyAdminCanSeeMembers",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "topics",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            }
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "CreateGroupResult",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "CreateGroupError"
          },
          {
            "kind": "OBJECT",
            "name": "CreateGroupSuccess"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "CreateGroupSuccess",
        "fields": [
          {
            "name": "group",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "RecommendationGroup",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "CreateHighlightError",
        "fields": [
          {
            "name": "errorCodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "CreateHighlightErrorCode",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "CreateHighlightErrorCode",
        "enumValues": [
          {
            "name": "ALREADY_EXISTS"
          },
          {
            "name": "BAD_DATA"
          },
          {
            "name": "FORBIDDEN"
          },
          {
            "name": "NOT_FOUND"
          },
          {
            "name": "UNAUTHORIZED"
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "CreateHighlightInput",
        "inputFields": [
          {
            "name": "annotation",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "articleId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            }
          },
          {
            "name": "color",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "highlightPositionAnchorIndex",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            }
          },
          {
            "name": "highlightPositionPercent",
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            }
          },
          {
            "name": "html",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            }
          },
          {
            "name": "patch",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "prefix",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "quote",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "representation",
            "type": {
              "kind": "ENUM",
              "name": "RepresentationType",
              "ofType": null
            }
          },
          {
            "name": "sharedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Date",
              "ofType": null
            }
          },
          {
            "name": "shortId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "suffix",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "type",
            "type": {
              "kind": "ENUM",
              "name": "HighlightType",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "CreateHighlightReplyError",
        "fields": [
          {
            "name": "errorCodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "CreateHighlightReplyErrorCode",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "CreateHighlightReplyErrorCode",
        "enumValues": [
          {
            "name": "EMPTY_ANNOTATION"
          },
          {
            "name": "FORBIDDEN"
          },
          {
            "name": "NOT_FOUND"
          },
          {
            "name": "UNAUTHORIZED"
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "CreateHighlightReplyInput",
        "inputFields": [
          {
            "name": "highlightId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            }
          },
          {
            "name": "text",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "CreateHighlightReplyResult",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "CreateHighlightReplyError"
          },
          {
            "kind": "OBJECT",
            "name": "CreateHighlightReplySuccess"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "CreateHighlightReplySuccess",
        "fields": [
          {
            "name": "highlightReply",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "HighlightReply",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "UNION",
        "name": "CreateHighlightResult",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "CreateHighlightError"
          },
          {
            "kind": "OBJECT",
            "name": "CreateHighlightSuccess"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "CreateHighlightSuccess",
        "fields": [
          {
            "name": "highlight",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Highlight",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "CreateLabelError",
        "fields": [
          {
            "name": "errorCodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "CreateLabelErrorCode",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "CreateLabelErrorCode",
        "enumValues": [
          {
            "name": "BAD_REQUEST"
          },
          {
            "name": "LABEL_ALREADY_EXISTS"
          },
          {
            "name": "NOT_FOUND"
          },
          {
            "name": "UNAUTHORIZED"
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "CreateLabelInput",
        "inputFields": [
          {
            "name": "color",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "description",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "CreateLabelResult",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "CreateLabelError"
          },
          {
            "kind": "OBJECT",
            "name": "CreateLabelSuccess"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "CreateLabelSuccess",
        "fields": [
          {
            "name": "label",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Label",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "CreateNewsletterEmailError",
        "fields": [
          {
            "name": "errorCodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "CreateNewsletterEmailErrorCode",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "CreateNewsletterEmailErrorCode",
        "enumValues": [
          {
            "name": "BAD_REQUEST"
          },
          {
            "name": "UNAUTHORIZED"
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "CreateNewsletterEmailInput",
        "inputFields": [
          {
            "name": "description",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "folder",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "CreateNewsletterEmailResult",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "CreateNewsletterEmailError"
          },
          {
            "kind": "OBJECT",
            "name": "CreateNewsletterEmailSuccess"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "CreateNewsletterEmailSuccess",
        "fields": [
          {
            "name": "newsletterEmail",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "NewsletterEmail",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "CreateReactionError",
        "fields": [
          {
            "name": "errorCodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "CreateReactionErrorCode",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "CreateReactionErrorCode",
        "enumValues": [
          {
            "name": "BAD_CODE"
          },
          {
            "name": "BAD_TARGET"
          },
          {
            "name": "FORBIDDEN"
          },
          {
            "name": "NOT_FOUND"
          },
          {
            "name": "UNAUTHORIZED"
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "CreateReactionInput",
        "inputFields": [
          {
            "name": "code",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "ReactionType",
                "ofType": null
              }
            }
          },
          {
            "name": "highlightId",
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            }
          },
          {
            "name": "userArticleId",
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "CreateReactionResult",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "CreateReactionError"
          },
          {
            "kind": "OBJECT",
            "name": "CreateReactionSuccess"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "CreateReactionSuccess",
        "fields": [
          {
            "name": "reaction",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Reaction",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "CreateReminderError",
        "fields": [
          {
            "name": "errorCodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "CreateReminderErrorCode",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "CreateReminderErrorCode",
        "enumValues": [
          {
            "name": "BAD_REQUEST"
          },
          {
            "name": "NOT_FOUND"
          },
          {
            "name": "UNAUTHORIZED"
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "CreateReminderInput",
        "inputFields": [
          {
            "name": "archiveUntil",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            }
          },
          {
            "name": "clientRequestId",
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            }
          },
          {
            "name": "linkId",
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            }
          },
          {
            "name": "remindAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Date",
                "ofType": null
              }
            }
          },
          {
            "name": "sendNotification",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            }
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "CreateReminderResult",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "CreateReminderError"
          },
          {
            "kind": "OBJECT",
            "name": "CreateReminderSuccess"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "CreateReminderSuccess",
        "fields": [
          {
            "name": "reminder",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Reminder",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "SCALAR",
        "name": "Date"
      },
      {
        "kind": "OBJECT",
        "name": "DeleteAccountError",
        "fields": [
          {
            "name": "errorCodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "DeleteAccountErrorCode",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "DeleteAccountErrorCode",
        "enumValues": [
          {
            "name": "FORBIDDEN"
          },
          {
            "name": "UNAUTHORIZED"
          },
          {
            "name": "USER_NOT_FOUND"
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "DeleteAccountResult",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "DeleteAccountError"
          },
          {
            "kind": "OBJECT",
            "name": "DeleteAccountSuccess"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "DeleteAccountSuccess",
        "fields": [
          {
            "name": "userID",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "DeleteFilterError",
        "fields": [
          {
            "name": "errorCodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "DeleteFilterErrorCode",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "DeleteFilterErrorCode",
        "enumValues": [
          {
            "name": "BAD_REQUEST"
          },
          {
            "name": "NOT_FOUND"
          },
          {
            "name": "UNAUTHORIZED"
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "DeleteFilterResult",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "DeleteFilterError"
          },
          {
            "kind": "OBJECT",
            "name": "DeleteFilterSuccess"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "DeleteFilterSuccess",
        "fields": [
          {
            "name": "filter",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Filter",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "DeleteHighlightError",
        "fields": [
          {
            "name": "errorCodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "DeleteHighlightErrorCode",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "DeleteHighlightErrorCode",
        "enumValues": [
          {
            "name": "FORBIDDEN"
          },
          {
            "name": "NOT_FOUND"
          },
          {
            "name": "UNAUTHORIZED"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "DeleteHighlightReplyError",
        "fields": [
          {
            "name": "errorCodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "DeleteHighlightReplyErrorCode",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "DeleteHighlightReplyErrorCode",
        "enumValues": [
          {
            "name": "FORBIDDEN"
          },
          {
            "name": "NOT_FOUND"
          },
          {
            "name": "UNAUTHORIZED"
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "DeleteHighlightReplyResult",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "DeleteHighlightReplyError"
          },
          {
            "kind": "OBJECT",
            "name": "DeleteHighlightReplySuccess"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "DeleteHighlightReplySuccess",
        "fields": [
          {
            "name": "highlightReply",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "HighlightReply",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "UNION",
        "name": "DeleteHighlightResult",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "DeleteHighlightError"
          },
          {
            "kind": "OBJECT",
            "name": "DeleteHighlightSuccess"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "DeleteHighlightSuccess",
        "fields": [
          {
            "name": "highlight",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Highlight",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "DeleteIntegrationError",
        "fields": [
          {
            "name": "errorCodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "DeleteIntegrationErrorCode",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "DeleteIntegrationErrorCode",
        "enumValues": [
          {
            "name": "BAD_REQUEST"
          },
          {
            "name": "NOT_FOUND"
          },
          {
            "name": "UNAUTHORIZED"
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "DeleteIntegrationResult",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "DeleteIntegrationError"
          },
          {
            "kind": "OBJECT",
            "name": "DeleteIntegrationSuccess"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "DeleteIntegrationSuccess",
        "fields": [
          {
            "name": "integration",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Integration",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "DeleteLabelError",
        "fields": [
          {
            "name": "errorCodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "DeleteLabelErrorCode",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "DeleteLabelErrorCode",
        "enumValues": [
          {
            "name": "BAD_REQUEST"
          },
          {
            "name": "FORBIDDEN"
          },
          {
            "name": "NOT_FOUND"
          },
          {
            "name": "UNAUTHORIZED"
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "DeleteLabelResult",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "DeleteLabelError"
          },
          {
            "kind": "OBJECT",
            "name": "DeleteLabelSuccess"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "DeleteLabelSuccess",
        "fields": [
          {
            "name": "label",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Label",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "DeleteNewsletterEmailError",
        "fields": [
          {
            "name": "errorCodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "DeleteNewsletterEmailErrorCode",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "DeleteNewsletterEmailErrorCode",
        "enumValues": [
          {
            "name": "BAD_REQUEST"
          },
          {
            "name": "NOT_FOUND"
          },
          {
            "name": "UNAUTHORIZED"
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "DeleteNewsletterEmailResult",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "DeleteNewsletterEmailError"
          },
          {
            "kind": "OBJECT",
            "name": "DeleteNewsletterEmailSuccess"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "DeleteNewsletterEmailSuccess",
        "fields": [
          {
            "name": "newsletterEmail",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "NewsletterEmail",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "DeleteReactionError",
        "fields": [
          {
            "name": "errorCodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "DeleteReactionErrorCode",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "DeleteReactionErrorCode",
        "enumValues": [
          {
            "name": "FORBIDDEN"
          },
          {
            "name": "NOT_FOUND"
          },
          {
            "name": "UNAUTHORIZED"
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "DeleteReactionResult",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "DeleteReactionError"
          },
          {
            "kind": "OBJECT",
            "name": "DeleteReactionSuccess"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "DeleteReactionSuccess",
        "fields": [
          {
            "name": "reaction",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Reaction",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "DeleteReminderError",
        "fields": [
          {
            "name": "errorCodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "DeleteReminderErrorCode",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "DeleteReminderErrorCode",
        "enumValues": [
          {
            "name": "BAD_REQUEST"
          },
          {
            "name": "NOT_FOUND"
          },
          {
            "name": "UNAUTHORIZED"
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "DeleteReminderResult",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "DeleteReminderError"
          },
          {
            "kind": "OBJECT",
            "name": "DeleteReminderSuccess"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "DeleteReminderSuccess",
        "fields": [
          {
            "name": "reminder",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Reminder",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "DeleteRuleError",
        "fields": [
          {
            "name": "errorCodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "DeleteRuleErrorCode",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "DeleteRuleErrorCode",
        "enumValues": [
          {
            "name": "BAD_REQUEST"
          },
          {
            "name": "NOT_FOUND"
          },
          {
            "name": "UNAUTHORIZED"
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "DeleteRuleResult",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "DeleteRuleError"
          },
          {
            "kind": "OBJECT",
            "name": "DeleteRuleSuccess"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "DeleteRuleSuccess",
        "fields": [
          {
            "name": "rule",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Rule",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "DeleteWebhookError",
        "fields": [
          {
            "name": "errorCodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "DeleteWebhookErrorCode",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "DeleteWebhookErrorCode",
        "enumValues": [
          {
            "name": "BAD_REQUEST"
          },
          {
            "name": "NOT_FOUND"
          },
          {
            "name": "UNAUTHORIZED"
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "DeleteWebhookResult",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "DeleteWebhookError"
          },
          {
            "kind": "OBJECT",
            "name": "DeleteWebhookSuccess"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "DeleteWebhookSuccess",
        "fields": [
          {
            "name": "webhook",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Webhook",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "DeviceToken",
        "fields": [
          {
            "name": "createdAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Date",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "token",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "DeviceTokensError",
        "fields": [
          {
            "name": "errorCodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "DeviceTokensErrorCode",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "DeviceTokensErrorCode",
        "enumValues": [
          {
            "name": "BAD_REQUEST"
          },
          {
            "name": "UNAUTHORIZED"
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "DeviceTokensResult",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "DeviceTokensError"
          },
          {
            "kind": "OBJECT",
            "name": "DeviceTokensSuccess"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "DeviceTokensSuccess",
        "fields": [
          {
            "name": "deviceTokens",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "DeviceToken",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "EmptyTrashError",
        "fields": [
          {
            "name": "errorCodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "EmptyTrashErrorCode",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "EmptyTrashErrorCode",
        "enumValues": [
          {
            "name": "UNAUTHORIZED"
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "EmptyTrashResult",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "EmptyTrashError"
          },
          {
            "kind": "OBJECT",
            "name": "EmptyTrashSuccess"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "EmptyTrashSuccess",
        "fields": [
          {
            "name": "success",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Feature",
        "fields": [
          {
            "name": "createdAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Date",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "expiresAt",
            "type": {
              "kind": "SCALAR",
              "name": "Date",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "grantedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Date",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "token",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Date",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Feed",
        "fields": [
          {
            "name": "author",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "Date",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "description",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "image",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "publishedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Date",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "title",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "type",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Date",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "url",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "FeedArticle",
        "fields": [
          {
            "name": "annotationsCount",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "article",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Article",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "highlight",
            "type": {
              "kind": "OBJECT",
              "name": "Highlight",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "highlightsCount",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "reactions",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Reaction",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "sharedAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Date",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "sharedBy",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "User",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "sharedComment",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "sharedWithHighlights",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "FeedArticleEdge",
        "fields": [
          {
            "name": "cursor",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "node",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "FeedArticle",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "FeedArticlesError",
        "fields": [
          {
            "name": "errorCodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "FeedArticlesErrorCode",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "FeedArticlesErrorCode",
        "enumValues": [
          {
            "name": "UNAUTHORIZED"
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "FeedArticlesResult",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "FeedArticlesError"
          },
          {
            "kind": "OBJECT",
            "name": "FeedArticlesSuccess"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "FeedArticlesSuccess",
        "fields": [
          {
            "name": "edges",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "FeedArticleEdge",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "pageInfo",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "PageInfo",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "FeedEdge",
        "fields": [
          {
            "name": "cursor",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "node",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Feed",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "FeedsError",
        "fields": [
          {
            "name": "errorCodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "FeedsErrorCode",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "FeedsErrorCode",
        "enumValues": [
          {
            "name": "BAD_REQUEST"
          },
          {
            "name": "UNAUTHORIZED"
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "FeedsInput",
        "inputFields": [
          {
            "name": "after",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "first",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            }
          },
          {
            "name": "query",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "sort",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "SortParams",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "FeedsResult",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "FeedsError"
          },
          {
            "kind": "OBJECT",
            "name": "FeedsSuccess"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "FeedsSuccess",
        "fields": [
          {
            "name": "edges",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "FeedEdge",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "pageInfo",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "PageInfo",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "FetchContentError",
        "fields": [
          {
            "name": "errorCodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "FetchContentErrorCode",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "FetchContentErrorCode",
        "enumValues": [
          {
            "name": "BAD_REQUEST"
          },
          {
            "name": "UNAUTHORIZED"
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "FetchContentResult",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "FetchContentError"
          },
          {
            "kind": "OBJECT",
            "name": "FetchContentSuccess"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "FetchContentSuccess",
        "fields": [
          {
            "name": "success",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "FetchContentType",
        "enumValues": [
          {
            "name": "ALWAYS"
          },
          {
            "name": "NEVER"
          },
          {
            "name": "WHEN_EMPTY"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "Filter",
        "fields": [
          {
            "name": "category",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Date",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "defaultFilter",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "description",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "filter",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "folder",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "position",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Date",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "visible",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "FiltersError",
        "fields": [
          {
            "name": "errorCodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "FiltersErrorCode",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "FiltersErrorCode",
        "enumValues": [
          {
            "name": "BAD_REQUEST"
          },
          {
            "name": "UNAUTHORIZED"
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "FiltersResult",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "FiltersError"
          },
          {
            "kind": "OBJECT",
            "name": "FiltersSuccess"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "FiltersSuccess",
        "fields": [
          {
            "name": "filters",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Filter",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "GenerateApiKeyError",
        "fields": [
          {
            "name": "errorCodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "GenerateApiKeyErrorCode",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "GenerateApiKeyErrorCode",
        "enumValues": [
          {
            "name": "ALREADY_EXISTS"
          },
          {
            "name": "BAD_REQUEST"
          },
          {
            "name": "UNAUTHORIZED"
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "GenerateApiKeyInput",
        "inputFields": [
          {
            "name": "expiresAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Date",
                "ofType": null
              }
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "scopes",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            }
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "GenerateApiKeyResult",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "GenerateApiKeyError"
          },
          {
            "kind": "OBJECT",
            "name": "GenerateApiKeySuccess"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "GenerateApiKeySuccess",
        "fields": [
          {
            "name": "apiKey",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ApiKey",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "GetFollowersError",
        "fields": [
          {
            "name": "errorCodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "GetFollowersErrorCode",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "GetFollowersErrorCode",
        "enumValues": [
          {
            "name": "UNAUTHORIZED"
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "GetFollowersResult",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "GetFollowersError"
          },
          {
            "kind": "OBJECT",
            "name": "GetFollowersSuccess"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "GetFollowersSuccess",
        "fields": [
          {
            "name": "followers",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "User",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "GetFollowingError",
        "fields": [
          {
            "name": "errorCodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "GetFollowingErrorCode",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "GetFollowingErrorCode",
        "enumValues": [
          {
            "name": "UNAUTHORIZED"
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "GetFollowingResult",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "GetFollowingError"
          },
          {
            "kind": "OBJECT",
            "name": "GetFollowingSuccess"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "GetFollowingSuccess",
        "fields": [
          {
            "name": "following",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "User",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "GetUserPersonalizationError",
        "fields": [
          {
            "name": "errorCodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "GetUserPersonalizationErrorCode",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "GetUserPersonalizationErrorCode",
        "enumValues": [
          {
            "name": "UNAUTHORIZED"
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "GetUserPersonalizationResult",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "GetUserPersonalizationError"
          },
          {
            "kind": "OBJECT",
            "name": "GetUserPersonalizationSuccess"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "GetUserPersonalizationSuccess",
        "fields": [
          {
            "name": "userPersonalization",
            "type": {
              "kind": "OBJECT",
              "name": "UserPersonalization",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "GoogleLoginInput",
        "inputFields": [
          {
            "name": "email",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "secret",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "GoogleSignupError",
        "fields": [
          {
            "name": "errorCodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "ENUM",
                  "name": "SignupErrorCode",
                  "ofType": null
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "GoogleSignupInput",
        "inputFields": [
          {
            "name": "bio",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "email",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "pictureUrl",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "secret",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "sourceUserId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "username",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "GoogleSignupResult",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "GoogleSignupError"
          },
          {
            "kind": "OBJECT",
            "name": "GoogleSignupSuccess"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "GoogleSignupSuccess",
        "fields": [
          {
            "name": "me",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "User",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "GroupsError",
        "fields": [
          {
            "name": "errorCodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "GroupsErrorCode",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "GroupsErrorCode",
        "enumValues": [
          {
            "name": "BAD_REQUEST"
          },
          {
            "name": "UNAUTHORIZED"
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "GroupsResult",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "GroupsError"
          },
          {
            "kind": "OBJECT",
            "name": "GroupsSuccess"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "GroupsSuccess",
        "fields": [
          {
            "name": "groups",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "RecommendationGroup",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Highlight",
        "fields": [
          {
            "name": "annotation",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "color",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Date",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "createdByMe",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "highlightPositionAnchorIndex",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "highlightPositionPercent",
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "html",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "labels",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Label",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "patch",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "prefix",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "quote",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "reactions",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Reaction",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "replies",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "HighlightReply",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "representation",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "RepresentationType",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "sharedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Date",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "shortId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "suffix",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "type",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "HighlightType",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Date",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "user",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "User",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "HighlightReply",
        "fields": [
          {
            "name": "createdAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Date",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "highlight",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Highlight",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "text",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Date",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "user",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "User",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "HighlightStats",
        "fields": [
          {
            "name": "highlightCount",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "HighlightType",
        "enumValues": [
          {
            "name": "HIGHLIGHT"
          },
          {
            "name": "NOTE"
          },
          {
            "name": "REDACTION"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "ImportFromIntegrationError",
        "fields": [
          {
            "name": "errorCodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "ImportFromIntegrationErrorCode",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "ImportFromIntegrationErrorCode",
        "enumValues": [
          {
            "name": "BAD_REQUEST"
          },
          {
            "name": "UNAUTHORIZED"
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "ImportFromIntegrationResult",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "ImportFromIntegrationError"
          },
          {
            "kind": "OBJECT",
            "name": "ImportFromIntegrationSuccess"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "ImportFromIntegrationSuccess",
        "fields": [
          {
            "name": "success",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "ImportItemState",
        "enumValues": [
          {
            "name": "ALL"
          },
          {
            "name": "ARCHIVED"
          },
          {
            "name": "UNARCHIVED"
          },
          {
            "name": "UNREAD"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "Integration",
        "fields": [
          {
            "name": "createdAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Date",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "enabled",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "taskName",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "token",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "type",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "IntegrationType",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Date",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "IntegrationType",
        "enumValues": [
          {
            "name": "EXPORT"
          },
          {
            "name": "IMPORT"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "IntegrationsError",
        "fields": [
          {
            "name": "errorCodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "IntegrationsErrorCode",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "IntegrationsErrorCode",
        "enumValues": [
          {
            "name": "BAD_REQUEST"
          },
          {
            "name": "UNAUTHORIZED"
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "IntegrationsResult",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "IntegrationsError"
          },
          {
            "kind": "OBJECT",
            "name": "IntegrationsSuccess"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "IntegrationsSuccess",
        "fields": [
          {
            "name": "integrations",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Integration",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "SCALAR",
        "name": "JSON"
      },
      {
        "kind": "OBJECT",
        "name": "JoinGroupError",
        "fields": [
          {
            "name": "errorCodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "JoinGroupErrorCode",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "JoinGroupErrorCode",
        "enumValues": [
          {
            "name": "BAD_REQUEST"
          },
          {
            "name": "NOT_FOUND"
          },
          {
            "name": "UNAUTHORIZED"
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "JoinGroupResult",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "JoinGroupError"
          },
          {
            "kind": "OBJECT",
            "name": "JoinGroupSuccess"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "JoinGroupSuccess",
        "fields": [
          {
            "name": "group",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "RecommendationGroup",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Label",
        "fields": [
          {
            "name": "color",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "Date",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "description",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "internal",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "position",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "source",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "LabelsError",
        "fields": [
          {
            "name": "errorCodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "LabelsErrorCode",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "LabelsErrorCode",
        "enumValues": [
          {
            "name": "BAD_REQUEST"
          },
          {
            "name": "NOT_FOUND"
          },
          {
            "name": "UNAUTHORIZED"
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "LabelsResult",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "LabelsError"
          },
          {
            "kind": "OBJECT",
            "name": "LabelsSuccess"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "LabelsSuccess",
        "fields": [
          {
            "name": "labels",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Label",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "LeaveGroupError",
        "fields": [
          {
            "name": "errorCodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "LeaveGroupErrorCode",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "LeaveGroupErrorCode",
        "enumValues": [
          {
            "name": "BAD_REQUEST"
          },
          {
            "name": "NOT_FOUND"
          },
          {
            "name": "UNAUTHORIZED"
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "LeaveGroupResult",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "LeaveGroupError"
          },
          {
            "kind": "OBJECT",
            "name": "LeaveGroupSuccess"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "LeaveGroupSuccess",
        "fields": [
          {
            "name": "success",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Link",
        "fields": [
          {
            "name": "highlightStats",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "HighlightStats",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "page",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Page",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "postedByViewer",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "readState",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ReadState",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "savedAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Date",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "savedBy",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "User",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "savedByViewer",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "shareInfo",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "LinkShareInfo",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "shareStats",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ShareStats",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "slug",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Date",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "url",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "LinkShareInfo",
        "fields": [
          {
            "name": "description",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "imageUrl",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "title",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "LogOutError",
        "fields": [
          {
            "name": "errorCodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "LogOutErrorCode",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "LogOutErrorCode",
        "enumValues": [
          {
            "name": "LOG_OUT_FAILED"
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "LogOutResult",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "LogOutError"
          },
          {
            "kind": "OBJECT",
            "name": "LogOutSuccess"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "LogOutSuccess",
        "fields": [
          {
            "name": "message",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "LoginError",
        "fields": [
          {
            "name": "errorCodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "LoginErrorCode",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "LoginErrorCode",
        "enumValues": [
          {
            "name": "ACCESS_DENIED"
          },
          {
            "name": "AUTH_FAILED"
          },
          {
            "name": "INVALID_CREDENTIALS"
          },
          {
            "name": "USER_ALREADY_EXISTS"
          },
          {
            "name": "USER_NOT_FOUND"
          },
          {
            "name": "WRONG_SOURCE"
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "LoginResult",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "LoginError"
          },
          {
            "kind": "OBJECT",
            "name": "LoginSuccess"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "LoginSuccess",
        "fields": [
          {
            "name": "me",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "User",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "MarkEmailAsItemError",
        "fields": [
          {
            "name": "errorCodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "MarkEmailAsItemErrorCode",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "MarkEmailAsItemErrorCode",
        "enumValues": [
          {
            "name": "BAD_REQUEST"
          },
          {
            "name": "NOT_FOUND"
          },
          {
            "name": "UNAUTHORIZED"
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "MarkEmailAsItemResult",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "MarkEmailAsItemError"
          },
          {
            "kind": "OBJECT",
            "name": "MarkEmailAsItemSuccess"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "MarkEmailAsItemSuccess",
        "fields": [
          {
            "name": "success",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "MergeHighlightError",
        "fields": [
          {
            "name": "errorCodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "MergeHighlightErrorCode",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "MergeHighlightErrorCode",
        "enumValues": [
          {
            "name": "ALREADY_EXISTS"
          },
          {
            "name": "BAD_DATA"
          },
          {
            "name": "FORBIDDEN"
          },
          {
            "name": "NOT_FOUND"
          },
          {
            "name": "UNAUTHORIZED"
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "MergeHighlightInput",
        "inputFields": [
          {
            "name": "annotation",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "articleId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            }
          },
          {
            "name": "color",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "highlightPositionAnchorIndex",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            }
          },
          {
            "name": "highlightPositionPercent",
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            }
          },
          {
            "name": "html",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            }
          },
          {
            "name": "overlapHighlightIdList",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              }
            }
          },
          {
            "name": "patch",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "prefix",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "quote",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "representation",
            "type": {
              "kind": "ENUM",
              "name": "RepresentationType",
              "ofType": null
            }
          },
          {
            "name": "shortId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            }
          },
          {
            "name": "suffix",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "MergeHighlightResult",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "MergeHighlightError"
          },
          {
            "kind": "OBJECT",
            "name": "MergeHighlightSuccess"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "MergeHighlightSuccess",
        "fields": [
          {
            "name": "highlight",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Highlight",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "overlapHighlightIdList",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "MoveFilterError",
        "fields": [
          {
            "name": "errorCodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "MoveFilterErrorCode",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "MoveFilterErrorCode",
        "enumValues": [
          {
            "name": "BAD_REQUEST"
          },
          {
            "name": "NOT_FOUND"
          },
          {
            "name": "UNAUTHORIZED"
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "MoveFilterInput",
        "inputFields": [
          {
            "name": "afterFilterId",
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            }
          },
          {
            "name": "filterId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            }
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "MoveFilterResult",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "MoveFilterError"
          },
          {
            "kind": "OBJECT",
            "name": "MoveFilterSuccess"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "MoveFilterSuccess",
        "fields": [
          {
            "name": "filter",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Filter",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "MoveLabelError",
        "fields": [
          {
            "name": "errorCodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "MoveLabelErrorCode",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "MoveLabelErrorCode",
        "enumValues": [
          {
            "name": "BAD_REQUEST"
          },
          {
            "name": "NOT_FOUND"
          },
          {
            "name": "UNAUTHORIZED"
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "MoveLabelInput",
        "inputFields": [
          {
            "name": "afterLabelId",
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            }
          },
          {
            "name": "labelId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            }
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "MoveLabelResult",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "MoveLabelError"
          },
          {
            "kind": "OBJECT",
            "name": "MoveLabelSuccess"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "MoveLabelSuccess",
        "fields": [
          {
            "name": "label",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Label",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "MoveToFolderError",
        "fields": [
          {
            "name": "errorCodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "MoveToFolderErrorCode",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "MoveToFolderErrorCode",
        "enumValues": [
          {
            "name": "ALREADY_EXISTS"
          },
          {
            "name": "BAD_REQUEST"
          },
          {
            "name": "UNAUTHORIZED"
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "MoveToFolderResult",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "MoveToFolderError"
          },
          {
            "kind": "OBJECT",
            "name": "MoveToFolderSuccess"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "MoveToFolderSuccess",
        "fields": [
          {
            "name": "success",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Mutation",
        "fields": [
          {
            "name": "addPopularRead",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "AddPopularReadResult",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "name",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "bulkAction",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "BulkActionResult",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "action",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "BulkActionType",
                    "ofType": null
                  }
                }
              },
              {
                "name": "arguments",
                "type": {
                  "kind": "SCALAR",
                  "name": "JSON",
                  "ofType": null
                }
              },
              {
                "name": "async",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              {
                "name": "expectedCount",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "labelIds",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "ID",
                      "ofType": null
                    }
                  }
                }
              },
              {
                "name": "query",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "createArticle",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "CreateArticleResult",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "CreateArticleInput",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "createArticleSavingRequest",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "CreateArticleSavingRequestResult",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "CreateArticleSavingRequestInput",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "createGroup",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "CreateGroupResult",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "CreateGroupInput",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "createHighlight",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "CreateHighlightResult",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "CreateHighlightInput",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "createLabel",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "CreateLabelResult",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "CreateLabelInput",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "createNewsletterEmail",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "CreateNewsletterEmailResult",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "CreateNewsletterEmailInput",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "deleteAccount",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "DeleteAccountResult",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "userID",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "ID",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "deleteFilter",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "DeleteFilterResult",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "ID",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "deleteHighlight",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "DeleteHighlightResult",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "highlightId",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "ID",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "deleteIntegration",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "DeleteIntegrationResult",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "ID",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "deleteLabel",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "DeleteLabelResult",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "ID",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "deleteNewsletterEmail",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "DeleteNewsletterEmailResult",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "newsletterEmailId",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "ID",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "deleteRule",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "DeleteRuleResult",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "ID",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "deleteWebhook",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "DeleteWebhookResult",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "ID",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "emptyTrash",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "EmptyTrashResult",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "fetchContent",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "FetchContentResult",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "ID",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "generateApiKey",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "GenerateApiKeyResult",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "GenerateApiKeyInput",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "googleLogin",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "LoginResult",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "GoogleLoginInput",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "googleSignup",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "GoogleSignupResult",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "GoogleSignupInput",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "importFromIntegration",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "ImportFromIntegrationResult",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "integrationId",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "ID",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "joinGroup",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "JoinGroupResult",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "inviteCode",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "leaveGroup",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "LeaveGroupResult",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "groupId",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "ID",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "logOut",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "LogOutResult",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "markEmailAsItem",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "MarkEmailAsItemResult",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "recentEmailId",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "ID",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "mergeHighlight",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "MergeHighlightResult",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "MergeHighlightInput",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "moveFilter",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "MoveFilterResult",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "MoveFilterInput",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "moveLabel",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "MoveLabelResult",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "MoveLabelInput",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "moveToFolder",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "MoveToFolderResult",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "folder",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              },
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "ID",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "optInFeature",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "OptInFeatureResult",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "OptInFeatureInput",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "recommend",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "RecommendResult",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "RecommendInput",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "recommendHighlights",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "RecommendHighlightsResult",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "RecommendHighlightsInput",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "reportItem",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ReportItemResult",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "ReportItemInput",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "revokeApiKey",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "RevokeApiKeyResult",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "ID",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "saveArticleReadingProgress",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "SaveArticleReadingProgressResult",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "SaveArticleReadingProgressInput",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "saveFile",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "SaveResult",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "SaveFileInput",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "saveFilter",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "SaveFilterResult",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "SaveFilterInput",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "savePage",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "SaveResult",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "SavePageInput",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "saveUrl",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "SaveResult",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "SaveUrlInput",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "setBookmarkArticle",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "SetBookmarkArticleResult",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "SetBookmarkArticleInput",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "setDeviceToken",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "SetDeviceTokenResult",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "SetDeviceTokenInput",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "setFavoriteArticle",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "SetFavoriteArticleResult",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "ID",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "setIntegration",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "SetIntegrationResult",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "SetIntegrationInput",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "setLabels",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "SetLabelsResult",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "SetLabelsInput",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "setLabelsForHighlight",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "SetLabelsResult",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "SetLabelsForHighlightInput",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "setLinkArchived",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "ArchiveLinkResult",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "ArchiveLinkInput",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "setRule",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "SetRuleResult",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "SetRuleInput",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "setUserPersonalization",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "SetUserPersonalizationResult",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "SetUserPersonalizationInput",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "setWebhook",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "SetWebhookResult",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "SetWebhookInput",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "subscribe",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "SubscribeResult",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "SubscribeInput",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "unsubscribe",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "UnsubscribeResult",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "name",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              },
              {
                "name": "subscriptionId",
                "type": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "updateEmail",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "UpdateEmailResult",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "UpdateEmailInput",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "updateFilter",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "UpdateFilterResult",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "UpdateFilterInput",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "updateHighlight",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "UpdateHighlightResult",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "UpdateHighlightInput",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "updateLabel",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "UpdateLabelResult",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "UpdateLabelInput",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "updateNewsletterEmail",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "UpdateNewsletterEmailResult",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "UpdateNewsletterEmailInput",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "updatePage",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "UpdatePageResult",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "UpdatePageInput",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "updateSubscription",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "UpdateSubscriptionResult",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "UpdateSubscriptionInput",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "updateUser",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "UpdateUserResult",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "UpdateUserInput",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "updateUserProfile",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "UpdateUserProfileResult",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "UpdateUserProfileInput",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "uploadFileRequest",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "UploadFileRequestResult",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "UploadFileRequestInput",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "uploadImportFile",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "UploadImportFileResult",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "contentType",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              },
              {
                "name": "type",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "UploadImportFileType",
                    "ofType": null
                  }
                }
              }
            ]
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "NewsletterEmail",
        "fields": [
          {
            "name": "address",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "confirmationCode",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Date",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "description",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "folder",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "name",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "subscriptionCount",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "NewsletterEmailsError",
        "fields": [
          {
            "name": "errorCodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "NewsletterEmailsErrorCode",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "NewsletterEmailsErrorCode",
        "enumValues": [
          {
            "name": "BAD_REQUEST"
          },
          {
            "name": "UNAUTHORIZED"
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "NewsletterEmailsResult",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "NewsletterEmailsError"
          },
          {
            "kind": "OBJECT",
            "name": "NewsletterEmailsSuccess"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "NewsletterEmailsSuccess",
        "fields": [
          {
            "name": "newsletterEmails",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "NewsletterEmail",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "OptInFeatureError",
        "fields": [
          {
            "name": "errorCodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "OptInFeatureErrorCode",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "OptInFeatureErrorCode",
        "enumValues": [
          {
            "name": "BAD_REQUEST"
          },
          {
            "name": "NOT_FOUND"
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "OptInFeatureInput",
        "inputFields": [
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "OptInFeatureResult",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "OptInFeatureError"
          },
          {
            "kind": "OBJECT",
            "name": "OptInFeatureSuccess"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "OptInFeatureSuccess",
        "fields": [
          {
            "name": "feature",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Feature",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Page",
        "fields": [
          {
            "name": "author",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Date",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "description",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "hash",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "image",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "originalHtml",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "originalUrl",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "publishedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Date",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "readableHtml",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "title",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "type",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "PageType",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Date",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "url",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "PageInfo",
        "fields": [
          {
            "name": "endCursor",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "hasNextPage",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "hasPreviousPage",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "startCursor",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "totalCount",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "PageInfoInput",
        "inputFields": [
          {
            "name": "author",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "canonicalUrl",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "contentType",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "description",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "previewImage",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "publishedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Date",
              "ofType": null
            }
          },
          {
            "name": "title",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "ENUM",
        "name": "PageType",
        "enumValues": [
          {
            "name": "ARTICLE"
          },
          {
            "name": "BOOK"
          },
          {
            "name": "FILE"
          },
          {
            "name": "HIGHLIGHTS"
          },
          {
            "name": "IMAGE"
          },
          {
            "name": "PROFILE"
          },
          {
            "name": "TWEET"
          },
          {
            "name": "UNKNOWN"
          },
          {
            "name": "VIDEO"
          },
          {
            "name": "WEBSITE"
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "ParseResult",
        "inputFields": [
          {
            "name": "byline",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "content",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "dir",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "excerpt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "language",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "length",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            }
          },
          {
            "name": "previewImage",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "publishedDate",
            "type": {
              "kind": "SCALAR",
              "name": "Date",
              "ofType": null
            }
          },
          {
            "name": "siteIcon",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "siteName",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "textContent",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "title",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "PreparedDocumentInput",
        "inputFields": [
          {
            "name": "document",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "pageInfo",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "PageInfoInput",
                "ofType": null
              }
            }
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "Profile",
        "fields": [
          {
            "name": "bio",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "pictureUrl",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "private",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "username",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Query",
        "fields": [
          {
            "name": "apiKeys",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "ApiKeysResult",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "article",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "ArticleResult",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "format",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "slug",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              },
              {
                "name": "username",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "articleSavingRequest",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "ArticleSavingRequestResult",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              {
                "name": "url",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "deviceTokens",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "DeviceTokensResult",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "feeds",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "FeedsResult",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "FeedsInput",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "filters",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "FiltersResult",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "getUserPersonalization",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "GetUserPersonalizationResult",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "groups",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "GroupsResult",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "hello",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "integrations",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "IntegrationsResult",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "labels",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "LabelsResult",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "me",
            "type": {
              "kind": "OBJECT",
              "name": "User",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "newsletterEmails",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "NewsletterEmailsResult",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "recentEmails",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "RecentEmailsResult",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "recentSearches",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "RecentSearchesResult",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "rules",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "RulesResult",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "enabled",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "scanFeeds",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "ScanFeedsResult",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "ScanFeedsInput",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "search",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "SearchResult",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "after",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "first",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "format",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "includeContent",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              {
                "name": "query",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "sendInstallInstructions",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "SendInstallInstructionsResult",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "subscriptions",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "SubscriptionsResult",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "sort",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "SortParams",
                  "ofType": null
                }
              },
              {
                "name": "type",
                "type": {
                  "kind": "ENUM",
                  "name": "SubscriptionType",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "typeaheadSearch",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "TypeaheadSearchResult",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "first",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "query",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "updatesSince",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "UpdatesSinceResult",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "after",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "first",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "folder",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              {
                "name": "since",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Date",
                    "ofType": null
                  }
                }
              },
              {
                "name": "sort",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "SortParams",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "user",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "UserResult",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "userId",
                "type": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              },
              {
                "name": "username",
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "users",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "UsersResult",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "validateUsername",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "username",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "webhook",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "WebhookResult",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "ID",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "webhooks",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "UNION",
                "name": "WebhooksResult",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Reaction",
        "fields": [
          {
            "name": "code",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "ReactionType",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Date",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Date",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "user",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "User",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "ReactionType",
        "enumValues": [
          {
            "name": "CRYING"
          },
          {
            "name": "HEART"
          },
          {
            "name": "HUSHED"
          },
          {
            "name": "LIKE"
          },
          {
            "name": "POUT"
          },
          {
            "name": "SMILE"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "ReadState",
        "fields": [
          {
            "name": "progressAnchorIndex",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "progressPercent",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "reading",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "readingTime",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "RecentEmail",
        "fields": [
          {
            "name": "createdAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Date",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "from",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "html",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "subject",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "text",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "to",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "type",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "RecentEmailsError",
        "fields": [
          {
            "name": "errorCodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "RecentEmailsErrorCode",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "RecentEmailsErrorCode",
        "enumValues": [
          {
            "name": "BAD_REQUEST"
          },
          {
            "name": "UNAUTHORIZED"
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "RecentEmailsResult",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "RecentEmailsError"
          },
          {
            "kind": "OBJECT",
            "name": "RecentEmailsSuccess"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "RecentEmailsSuccess",
        "fields": [
          {
            "name": "recentEmails",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "RecentEmail",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "RecentSearch",
        "fields": [
          {
            "name": "createdAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Date",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "term",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "RecentSearchesError",
        "fields": [
          {
            "name": "errorCodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "RecentSearchesErrorCode",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "RecentSearchesErrorCode",
        "enumValues": [
          {
            "name": "BAD_REQUEST"
          },
          {
            "name": "UNAUTHORIZED"
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "RecentSearchesResult",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "RecentSearchesError"
          },
          {
            "kind": "OBJECT",
            "name": "RecentSearchesSuccess"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "RecentSearchesSuccess",
        "fields": [
          {
            "name": "searches",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "RecentSearch",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "RecommendError",
        "fields": [
          {
            "name": "errorCodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "RecommendErrorCode",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "RecommendErrorCode",
        "enumValues": [
          {
            "name": "BAD_REQUEST"
          },
          {
            "name": "NOT_FOUND"
          },
          {
            "name": "UNAUTHORIZED"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "RecommendHighlightsError",
        "fields": [
          {
            "name": "errorCodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "RecommendHighlightsErrorCode",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "RecommendHighlightsErrorCode",
        "enumValues": [
          {
            "name": "BAD_REQUEST"
          },
          {
            "name": "NOT_FOUND"
          },
          {
            "name": "UNAUTHORIZED"
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "RecommendHighlightsInput",
        "inputFields": [
          {
            "name": "groupIds",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "ID",
                    "ofType": null
                  }
                }
              }
            }
          },
          {
            "name": "highlightIds",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "ID",
                    "ofType": null
                  }
                }
              }
            }
          },
          {
            "name": "note",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "pageId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            }
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "RecommendHighlightsResult",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "RecommendHighlightsError"
          },
          {
            "kind": "OBJECT",
            "name": "RecommendHighlightsSuccess"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "RecommendHighlightsSuccess",
        "fields": [
          {
            "name": "success",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "RecommendInput",
        "inputFields": [
          {
            "name": "groupIds",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "ID",
                    "ofType": null
                  }
                }
              }
            }
          },
          {
            "name": "note",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "pageId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            }
          },
          {
            "name": "recommendedWithHighlights",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "RecommendResult",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "RecommendError"
          },
          {
            "kind": "OBJECT",
            "name": "RecommendSuccess"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "RecommendSuccess",
        "fields": [
          {
            "name": "success",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Recommendation",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "note",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "recommendedAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Date",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "user",
            "type": {
              "kind": "OBJECT",
              "name": "RecommendingUser",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "RecommendationGroup",
        "fields": [
          {
            "name": "admins",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "User",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "canPost",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "canSeeMembers",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Date",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "description",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "inviteUrl",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "members",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "User",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "topics",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Date",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "RecommendingUser",
        "fields": [
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "profileImageURL",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "userId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "username",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Reminder",
        "fields": [
          {
            "name": "archiveUntil",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "remindAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Date",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "sendNotification",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "ReminderError",
        "fields": [
          {
            "name": "errorCodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "ReminderErrorCode",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "ReminderErrorCode",
        "enumValues": [
          {
            "name": "BAD_REQUEST"
          },
          {
            "name": "NOT_FOUND"
          },
          {
            "name": "UNAUTHORIZED"
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "ReminderResult",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "ReminderError"
          },
          {
            "kind": "OBJECT",
            "name": "ReminderSuccess"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "ReminderSuccess",
        "fields": [
          {
            "name": "reminder",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Reminder",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "ReportItemInput",
        "inputFields": [
          {
            "name": "itemUrl",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "pageId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            }
          },
          {
            "name": "reportComment",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "reportTypes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "ReportType",
                    "ofType": null
                  }
                }
              }
            }
          },
          {
            "name": "sharedBy",
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "ReportItemResult",
        "fields": [
          {
            "name": "message",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "ReportType",
        "enumValues": [
          {
            "name": "ABUSIVE"
          },
          {
            "name": "CONTENT_DISPLAY"
          },
          {
            "name": "CONTENT_VIOLATION"
          },
          {
            "name": "SPAM"
          }
        ]
      },
      {
        "kind": "ENUM",
        "name": "RepresentationType",
        "enumValues": [
          {
            "name": "CONTENT"
          },
          {
            "name": "FEED_CONTENT"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "RevokeApiKeyError",
        "fields": [
          {
            "name": "errorCodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "RevokeApiKeyErrorCode",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "RevokeApiKeyErrorCode",
        "enumValues": [
          {
            "name": "BAD_REQUEST"
          },
          {
            "name": "NOT_FOUND"
          },
          {
            "name": "UNAUTHORIZED"
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "RevokeApiKeyResult",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "RevokeApiKeyError"
          },
          {
            "kind": "OBJECT",
            "name": "RevokeApiKeySuccess"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "RevokeApiKeySuccess",
        "fields": [
          {
            "name": "apiKey",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ApiKey",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Rule",
        "fields": [
          {
            "name": "actions",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "RuleAction",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Date",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "enabled",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "eventTypes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "RuleEventType",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "filter",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Date",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "RuleAction",
        "fields": [
          {
            "name": "params",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "type",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "RuleActionType",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "RuleActionInput",
        "inputFields": [
          {
            "name": "params",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              }
            }
          },
          {
            "name": "type",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "RuleActionType",
                "ofType": null
              }
            }
          }
        ]
      },
      {
        "kind": "ENUM",
        "name": "RuleActionType",
        "enumValues": [
          {
            "name": "ADD_LABEL"
          },
          {
            "name": "ARCHIVE"
          },
          {
            "name": "DELETE"
          },
          {
            "name": "MARK_AS_READ"
          },
          {
            "name": "SEND_NOTIFICATION"
          }
        ]
      },
      {
        "kind": "ENUM",
        "name": "RuleEventType",
        "enumValues": [
          {
            "name": "PAGE_CREATED"
          },
          {
            "name": "PAGE_UPDATED"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "RulesError",
        "fields": [
          {
            "name": "errorCodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "RulesErrorCode",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "RulesErrorCode",
        "enumValues": [
          {
            "name": "BAD_REQUEST"
          },
          {
            "name": "UNAUTHORIZED"
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "RulesResult",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "RulesError"
          },
          {
            "kind": "OBJECT",
            "name": "RulesSuccess"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "RulesSuccess",
        "fields": [
          {
            "name": "rules",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Rule",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "SaveArticleReadingProgressError",
        "fields": [
          {
            "name": "errorCodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "SaveArticleReadingProgressErrorCode",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "SaveArticleReadingProgressErrorCode",
        "enumValues": [
          {
            "name": "BAD_DATA"
          },
          {
            "name": "NOT_FOUND"
          },
          {
            "name": "UNAUTHORIZED"
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "SaveArticleReadingProgressInput",
        "inputFields": [
          {
            "name": "force",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            }
          },
          {
            "name": "readingProgressAnchorIndex",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            }
          },
          {
            "name": "readingProgressPercent",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              }
            }
          },
          {
            "name": "readingProgressTopPercent",
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "SaveArticleReadingProgressResult",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "SaveArticleReadingProgressError"
          },
          {
            "kind": "OBJECT",
            "name": "SaveArticleReadingProgressSuccess"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "SaveArticleReadingProgressSuccess",
        "fields": [
          {
            "name": "updatedArticle",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Article",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "SaveError",
        "fields": [
          {
            "name": "errorCodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "SaveErrorCode",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "message",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "SaveErrorCode",
        "enumValues": [
          {
            "name": "EMBEDDED_HIGHLIGHT_FAILED"
          },
          {
            "name": "UNAUTHORIZED"
          },
          {
            "name": "UNKNOWN"
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "SaveFileInput",
        "inputFields": [
          {
            "name": "clientRequestId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            }
          },
          {
            "name": "folder",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "labels",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "CreateLabelInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "publishedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Date",
              "ofType": null
            }
          },
          {
            "name": "savedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Date",
              "ofType": null
            }
          },
          {
            "name": "source",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "state",
            "type": {
              "kind": "ENUM",
              "name": "ArticleSavingRequestStatus",
              "ofType": null
            }
          },
          {
            "name": "subscription",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "uploadFileId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            }
          },
          {
            "name": "url",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "SaveFilterError",
        "fields": [
          {
            "name": "errorCodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "SaveFilterErrorCode",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "SaveFilterErrorCode",
        "enumValues": [
          {
            "name": "BAD_REQUEST"
          },
          {
            "name": "NOT_FOUND"
          },
          {
            "name": "UNAUTHORIZED"
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "SaveFilterInput",
        "inputFields": [
          {
            "name": "category",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "description",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "filter",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "folder",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "position",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "SaveFilterResult",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "SaveFilterError"
          },
          {
            "kind": "OBJECT",
            "name": "SaveFilterSuccess"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "SaveFilterSuccess",
        "fields": [
          {
            "name": "filter",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Filter",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "SavePageInput",
        "inputFields": [
          {
            "name": "clientRequestId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            }
          },
          {
            "name": "folder",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "labels",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "CreateLabelInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "originalContent",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "parseResult",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "ParseResult",
              "ofType": null
            }
          },
          {
            "name": "publishedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Date",
              "ofType": null
            }
          },
          {
            "name": "rssFeedUrl",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "savedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Date",
              "ofType": null
            }
          },
          {
            "name": "source",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "state",
            "type": {
              "kind": "ENUM",
              "name": "ArticleSavingRequestStatus",
              "ofType": null
            }
          },
          {
            "name": "title",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "url",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "SaveResult",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "SaveError"
          },
          {
            "kind": "OBJECT",
            "name": "SaveSuccess"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "SaveSuccess",
        "fields": [
          {
            "name": "clientRequestId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "url",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "SaveUrlInput",
        "inputFields": [
          {
            "name": "clientRequestId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            }
          },
          {
            "name": "folder",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "labels",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "CreateLabelInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "locale",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "publishedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Date",
              "ofType": null
            }
          },
          {
            "name": "savedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Date",
              "ofType": null
            }
          },
          {
            "name": "source",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "state",
            "type": {
              "kind": "ENUM",
              "name": "ArticleSavingRequestStatus",
              "ofType": null
            }
          },
          {
            "name": "timezone",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "url",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "ScanFeedsError",
        "fields": [
          {
            "name": "errorCodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "ScanFeedsErrorCode",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "ScanFeedsErrorCode",
        "enumValues": [
          {
            "name": "BAD_REQUEST"
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "ScanFeedsInput",
        "inputFields": [
          {
            "name": "opml",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "url",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "ScanFeedsResult",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "ScanFeedsError"
          },
          {
            "kind": "OBJECT",
            "name": "ScanFeedsSuccess"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "ScanFeedsSuccess",
        "fields": [
          {
            "name": "feeds",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Feed",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "SearchError",
        "fields": [
          {
            "name": "errorCodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "SearchErrorCode",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "SearchErrorCode",
        "enumValues": [
          {
            "name": "QUERY_TOO_LONG"
          },
          {
            "name": "UNAUTHORIZED"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "SearchItem",
        "fields": [
          {
            "name": "annotation",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "archivedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Date",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "author",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "color",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "content",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "contentReader",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "ContentReader",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Date",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "description",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "feedContent",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "folder",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "highlights",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Highlight",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "image",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "isArchived",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "labels",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Label",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "language",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "links",
            "type": {
              "kind": "SCALAR",
              "name": "JSON",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "originalArticleUrl",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "ownedByViewer",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "pageId",
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "pageType",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "PageType",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "previewContentType",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "publishedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Date",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "quote",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "readAt",
            "type": {
              "kind": "SCALAR",
              "name": "Date",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "readingProgressAnchorIndex",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "readingProgressPercent",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "readingProgressTopPercent",
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "recommendations",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Recommendation",
                  "ofType": null
                }
              }
            },
            "args": []
          },
          {
            "name": "savedAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Date",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "shortId",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "siteIcon",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "siteName",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "slug",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "state",
            "type": {
              "kind": "ENUM",
              "name": "ArticleSavingRequestStatus",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "subscription",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "title",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "unsubHttpUrl",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "unsubMailTo",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Date",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "uploadFileId",
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "url",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "wordsCount",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "SearchItemEdge",
        "fields": [
          {
            "name": "cursor",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "node",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "SearchItem",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "UNION",
        "name": "SearchResult",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "SearchError"
          },
          {
            "kind": "OBJECT",
            "name": "SearchSuccess"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "SearchSuccess",
        "fields": [
          {
            "name": "edges",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "SearchItemEdge",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "pageInfo",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "PageInfo",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "SendInstallInstructionsError",
        "fields": [
          {
            "name": "errorCodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "SendInstallInstructionsErrorCode",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "SendInstallInstructionsErrorCode",
        "enumValues": [
          {
            "name": "BAD_REQUEST"
          },
          {
            "name": "FORBIDDEN"
          },
          {
            "name": "NOT_FOUND"
          },
          {
            "name": "UNAUTHORIZED"
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "SendInstallInstructionsResult",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "SendInstallInstructionsError"
          },
          {
            "kind": "OBJECT",
            "name": "SendInstallInstructionsSuccess"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "SendInstallInstructionsSuccess",
        "fields": [
          {
            "name": "sent",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "SetBookmarkArticleError",
        "fields": [
          {
            "name": "errorCodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "SetBookmarkArticleErrorCode",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "SetBookmarkArticleErrorCode",
        "enumValues": [
          {
            "name": "BOOKMARK_EXISTS"
          },
          {
            "name": "NOT_FOUND"
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "SetBookmarkArticleInput",
        "inputFields": [
          {
            "name": "articleID",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            }
          },
          {
            "name": "bookmark",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            }
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "SetBookmarkArticleResult",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "SetBookmarkArticleError"
          },
          {
            "kind": "OBJECT",
            "name": "SetBookmarkArticleSuccess"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "SetBookmarkArticleSuccess",
        "fields": [
          {
            "name": "bookmarkedArticle",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Article",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "SetDeviceTokenError",
        "fields": [
          {
            "name": "errorCodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "SetDeviceTokenErrorCode",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "SetDeviceTokenErrorCode",
        "enumValues": [
          {
            "name": "BAD_REQUEST"
          },
          {
            "name": "NOT_FOUND"
          },
          {
            "name": "UNAUTHORIZED"
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "SetDeviceTokenInput",
        "inputFields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            }
          },
          {
            "name": "token",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "SetDeviceTokenResult",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "SetDeviceTokenError"
          },
          {
            "kind": "OBJECT",
            "name": "SetDeviceTokenSuccess"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "SetDeviceTokenSuccess",
        "fields": [
          {
            "name": "deviceToken",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "DeviceToken",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "SetFavoriteArticleError",
        "fields": [
          {
            "name": "errorCodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "SetFavoriteArticleErrorCode",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "SetFavoriteArticleErrorCode",
        "enumValues": [
          {
            "name": "ALREADY_EXISTS"
          },
          {
            "name": "BAD_REQUEST"
          },
          {
            "name": "NOT_FOUND"
          },
          {
            "name": "UNAUTHORIZED"
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "SetFavoriteArticleResult",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "SetFavoriteArticleError"
          },
          {
            "kind": "OBJECT",
            "name": "SetFavoriteArticleSuccess"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "SetFavoriteArticleSuccess",
        "fields": [
          {
            "name": "success",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "SetFollowError",
        "fields": [
          {
            "name": "errorCodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "SetFollowErrorCode",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "SetFollowErrorCode",
        "enumValues": [
          {
            "name": "NOT_FOUND"
          },
          {
            "name": "UNAUTHORIZED"
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "SetFollowInput",
        "inputFields": [
          {
            "name": "follow",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            }
          },
          {
            "name": "userId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            }
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "SetFollowResult",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "SetFollowError"
          },
          {
            "kind": "OBJECT",
            "name": "SetFollowSuccess"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "SetFollowSuccess",
        "fields": [
          {
            "name": "updatedUser",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "User",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "SetIntegrationError",
        "fields": [
          {
            "name": "errorCodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "SetIntegrationErrorCode",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "SetIntegrationErrorCode",
        "enumValues": [
          {
            "name": "ALREADY_EXISTS"
          },
          {
            "name": "BAD_REQUEST"
          },
          {
            "name": "INVALID_TOKEN"
          },
          {
            "name": "NOT_FOUND"
          },
          {
            "name": "UNAUTHORIZED"
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "SetIntegrationInput",
        "inputFields": [
          {
            "name": "enabled",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            }
          },
          {
            "name": "importItemState",
            "type": {
              "kind": "ENUM",
              "name": "ImportItemState",
              "ofType": null
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "syncedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Date",
              "ofType": null
            }
          },
          {
            "name": "taskName",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "token",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "type",
            "type": {
              "kind": "ENUM",
              "name": "IntegrationType",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "SetIntegrationResult",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "SetIntegrationError"
          },
          {
            "kind": "OBJECT",
            "name": "SetIntegrationSuccess"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "SetIntegrationSuccess",
        "fields": [
          {
            "name": "integration",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Integration",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "SetLabelsError",
        "fields": [
          {
            "name": "errorCodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "SetLabelsErrorCode",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "SetLabelsErrorCode",
        "enumValues": [
          {
            "name": "BAD_REQUEST"
          },
          {
            "name": "NOT_FOUND"
          },
          {
            "name": "UNAUTHORIZED"
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "SetLabelsForHighlightInput",
        "inputFields": [
          {
            "name": "highlightId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            }
          },
          {
            "name": "labelIds",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "labels",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "CreateLabelInput",
                  "ofType": null
                }
              }
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "SetLabelsInput",
        "inputFields": [
          {
            "name": "labelIds",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "labels",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "CreateLabelInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "pageId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            }
          },
          {
            "name": "source",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "SetLabelsResult",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "SetLabelsError"
          },
          {
            "kind": "OBJECT",
            "name": "SetLabelsSuccess"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "SetLabelsSuccess",
        "fields": [
          {
            "name": "labels",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Label",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "SetRuleError",
        "fields": [
          {
            "name": "errorCodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "SetRuleErrorCode",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "SetRuleErrorCode",
        "enumValues": [
          {
            "name": "BAD_REQUEST"
          },
          {
            "name": "NOT_FOUND"
          },
          {
            "name": "UNAUTHORIZED"
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "SetRuleInput",
        "inputFields": [
          {
            "name": "actions",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "RuleActionInput",
                    "ofType": null
                  }
                }
              }
            }
          },
          {
            "name": "description",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "enabled",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            }
          },
          {
            "name": "eventTypes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "RuleEventType",
                    "ofType": null
                  }
                }
              }
            }
          },
          {
            "name": "filter",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "SetRuleResult",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "SetRuleError"
          },
          {
            "kind": "OBJECT",
            "name": "SetRuleSuccess"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "SetRuleSuccess",
        "fields": [
          {
            "name": "rule",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Rule",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "SetShareArticleError",
        "fields": [
          {
            "name": "errorCodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "SetShareArticleErrorCode",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "SetShareArticleErrorCode",
        "enumValues": [
          {
            "name": "NOT_FOUND"
          },
          {
            "name": "UNAUTHORIZED"
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "SetShareArticleInput",
        "inputFields": [
          {
            "name": "articleID",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            }
          },
          {
            "name": "share",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            }
          },
          {
            "name": "sharedComment",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "sharedWithHighlights",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "SetShareArticleResult",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "SetShareArticleError"
          },
          {
            "kind": "OBJECT",
            "name": "SetShareArticleSuccess"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "SetShareArticleSuccess",
        "fields": [
          {
            "name": "updatedArticle",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Article",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "updatedFeedArticle",
            "type": {
              "kind": "OBJECT",
              "name": "FeedArticle",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "updatedFeedArticleId",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "SetShareHighlightError",
        "fields": [
          {
            "name": "errorCodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "SetShareHighlightErrorCode",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "SetShareHighlightErrorCode",
        "enumValues": [
          {
            "name": "FORBIDDEN"
          },
          {
            "name": "NOT_FOUND"
          },
          {
            "name": "UNAUTHORIZED"
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "SetShareHighlightInput",
        "inputFields": [
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            }
          },
          {
            "name": "share",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            }
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "SetShareHighlightResult",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "SetShareHighlightError"
          },
          {
            "kind": "OBJECT",
            "name": "SetShareHighlightSuccess"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "SetShareHighlightSuccess",
        "fields": [
          {
            "name": "highlight",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Highlight",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "SetUserPersonalizationError",
        "fields": [
          {
            "name": "errorCodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "SetUserPersonalizationErrorCode",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "SetUserPersonalizationErrorCode",
        "enumValues": [
          {
            "name": "NOT_FOUND"
          },
          {
            "name": "UNAUTHORIZED"
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "SetUserPersonalizationInput",
        "inputFields": [
          {
            "name": "fields",
            "type": {
              "kind": "SCALAR",
              "name": "JSON",
              "ofType": null
            }
          },
          {
            "name": "fontFamily",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "fontSize",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            }
          },
          {
            "name": "libraryLayoutType",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "librarySortOrder",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "margin",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            }
          },
          {
            "name": "speechRate",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "speechSecondaryVoice",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "speechVoice",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "speechVolume",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "theme",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "SetUserPersonalizationResult",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "SetUserPersonalizationError"
          },
          {
            "kind": "OBJECT",
            "name": "SetUserPersonalizationSuccess"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "SetUserPersonalizationSuccess",
        "fields": [
          {
            "name": "updatedUserPersonalization",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "UserPersonalization",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "SetWebhookError",
        "fields": [
          {
            "name": "errorCodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "SetWebhookErrorCode",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "SetWebhookErrorCode",
        "enumValues": [
          {
            "name": "ALREADY_EXISTS"
          },
          {
            "name": "BAD_REQUEST"
          },
          {
            "name": "NOT_FOUND"
          },
          {
            "name": "UNAUTHORIZED"
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "SetWebhookInput",
        "inputFields": [
          {
            "name": "contentType",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "enabled",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "eventTypes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "WebhookEvent",
                    "ofType": null
                  }
                }
              }
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            }
          },
          {
            "name": "method",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "url",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "SetWebhookResult",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "SetWebhookError"
          },
          {
            "kind": "OBJECT",
            "name": "SetWebhookSuccess"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "SetWebhookSuccess",
        "fields": [
          {
            "name": "webhook",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Webhook",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "ShareStats",
        "fields": [
          {
            "name": "readDuration",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "saveCount",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "viewCount",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "SharedArticleError",
        "fields": [
          {
            "name": "errorCodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "SharedArticleErrorCode",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "SharedArticleErrorCode",
        "enumValues": [
          {
            "name": "NOT_FOUND"
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "SharedArticleResult",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "SharedArticleError"
          },
          {
            "kind": "OBJECT",
            "name": "SharedArticleSuccess"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "SharedArticleSuccess",
        "fields": [
          {
            "name": "article",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Article",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "SignupErrorCode",
        "enumValues": [
          {
            "name": "ACCESS_DENIED"
          },
          {
            "name": "EXPIRED_TOKEN"
          },
          {
            "name": "GOOGLE_AUTH_ERROR"
          },
          {
            "name": "INVALID_EMAIL"
          },
          {
            "name": "INVALID_PASSWORD"
          },
          {
            "name": "INVALID_USERNAME"
          },
          {
            "name": "UNKNOWN"
          },
          {
            "name": "USER_EXISTS"
          }
        ]
      },
      {
        "kind": "ENUM",
        "name": "SortBy",
        "enumValues": [
          {
            "name": "PUBLISHED_AT"
          },
          {
            "name": "SAVED_AT"
          },
          {
            "name": "SCORE"
          },
          {
            "name": "UPDATED_TIME"
          }
        ]
      },
      {
        "kind": "ENUM",
        "name": "SortOrder",
        "enumValues": [
          {
            "name": "ASCENDING"
          },
          {
            "name": "DESCENDING"
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "SortParams",
        "inputFields": [
          {
            "name": "by",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "SortBy",
                "ofType": null
              }
            }
          },
          {
            "name": "order",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "SubscribeError",
        "fields": [
          {
            "name": "errorCodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "SubscribeErrorCode",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "SubscribeErrorCode",
        "enumValues": [
          {
            "name": "ALREADY_SUBSCRIBED"
          },
          {
            "name": "BAD_REQUEST"
          },
          {
            "name": "EXCEEDED_MAX_SUBSCRIPTIONS"
          },
          {
            "name": "NOT_FOUND"
          },
          {
            "name": "UNAUTHORIZED"
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "SubscribeInput",
        "inputFields": [
          {
            "name": "autoAddToLibrary",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "fetchContent",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "fetchContentType",
            "type": {
              "kind": "ENUM",
              "name": "FetchContentType",
              "ofType": null
            }
          },
          {
            "name": "folder",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "isPrivate",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "subscriptionType",
            "type": {
              "kind": "ENUM",
              "name": "SubscriptionType",
              "ofType": null
            }
          },
          {
            "name": "url",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "SubscribeResult",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "SubscribeError"
          },
          {
            "kind": "OBJECT",
            "name": "SubscribeSuccess"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "SubscribeSuccess",
        "fields": [
          {
            "name": "subscriptions",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Subscription",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Subscription",
        "fields": [
          {
            "name": "autoAddToLibrary",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "count",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Date",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "description",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "failedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Date",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "fetchContent",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "fetchContentType",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "FetchContentType",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "folder",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "icon",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "isPrivate",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "lastFetchedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Date",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "mostRecentItemDate",
            "type": {
              "kind": "SCALAR",
              "name": "Date",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "newsletterEmail",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "refreshedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Date",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "status",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "SubscriptionStatus",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "type",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "SubscriptionType",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "unsubscribeHttpUrl",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "unsubscribeMailTo",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Date",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "url",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "SubscriptionStatus",
        "enumValues": [
          {
            "name": "ACTIVE"
          },
          {
            "name": "DELETED"
          },
          {
            "name": "UNSUBSCRIBED"
          }
        ]
      },
      {
        "kind": "ENUM",
        "name": "SubscriptionType",
        "enumValues": [
          {
            "name": "NEWSLETTER"
          },
          {
            "name": "RSS"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "SubscriptionsError",
        "fields": [
          {
            "name": "errorCodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "SubscriptionsErrorCode",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "SubscriptionsErrorCode",
        "enumValues": [
          {
            "name": "BAD_REQUEST"
          },
          {
            "name": "UNAUTHORIZED"
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "SubscriptionsResult",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "SubscriptionsError"
          },
          {
            "kind": "OBJECT",
            "name": "SubscriptionsSuccess"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "SubscriptionsSuccess",
        "fields": [
          {
            "name": "subscriptions",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Subscription",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "SyncUpdatedItemEdge",
        "fields": [
          {
            "name": "cursor",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "itemID",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "node",
            "type": {
              "kind": "OBJECT",
              "name": "SearchItem",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "updateReason",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "UpdateReason",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "TypeaheadSearchError",
        "fields": [
          {
            "name": "errorCodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "TypeaheadSearchErrorCode",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "TypeaheadSearchErrorCode",
        "enumValues": [
          {
            "name": "UNAUTHORIZED"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "TypeaheadSearchItem",
        "fields": [
          {
            "name": "contentReader",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "ContentReader",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "siteName",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "slug",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "title",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "UNION",
        "name": "TypeaheadSearchResult",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "TypeaheadSearchError"
          },
          {
            "kind": "OBJECT",
            "name": "TypeaheadSearchSuccess"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "TypeaheadSearchSuccess",
        "fields": [
          {
            "name": "items",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "TypeaheadSearchItem",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "UnsubscribeError",
        "fields": [
          {
            "name": "errorCodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "UnsubscribeErrorCode",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "UnsubscribeErrorCode",
        "enumValues": [
          {
            "name": "ALREADY_UNSUBSCRIBED"
          },
          {
            "name": "BAD_REQUEST"
          },
          {
            "name": "NOT_FOUND"
          },
          {
            "name": "UNAUTHORIZED"
          },
          {
            "name": "UNSUBSCRIBE_METHOD_NOT_FOUND"
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "UnsubscribeResult",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "UnsubscribeError"
          },
          {
            "kind": "OBJECT",
            "name": "UnsubscribeSuccess"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "UnsubscribeSuccess",
        "fields": [
          {
            "name": "subscription",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Subscription",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "UpdateEmailError",
        "fields": [
          {
            "name": "errorCodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "UpdateEmailErrorCode",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "UpdateEmailErrorCode",
        "enumValues": [
          {
            "name": "BAD_REQUEST"
          },
          {
            "name": "EMAIL_ALREADY_EXISTS"
          },
          {
            "name": "UNAUTHORIZED"
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "UpdateEmailInput",
        "inputFields": [
          {
            "name": "email",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "UpdateEmailResult",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "UpdateEmailError"
          },
          {
            "kind": "OBJECT",
            "name": "UpdateEmailSuccess"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "UpdateEmailSuccess",
        "fields": [
          {
            "name": "email",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "verificationEmailSent",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "UpdateFilterError",
        "fields": [
          {
            "name": "errorCodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "UpdateFilterErrorCode",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "UpdateFilterErrorCode",
        "enumValues": [
          {
            "name": "BAD_REQUEST"
          },
          {
            "name": "NOT_FOUND"
          },
          {
            "name": "UNAUTHORIZED"
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "UpdateFilterInput",
        "inputFields": [
          {
            "name": "category",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "description",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "filter",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "folder",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "position",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            }
          },
          {
            "name": "visible",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "UpdateFilterResult",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "UpdateFilterError"
          },
          {
            "kind": "OBJECT",
            "name": "UpdateFilterSuccess"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "UpdateFilterSuccess",
        "fields": [
          {
            "name": "filter",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Filter",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "UpdateHighlightError",
        "fields": [
          {
            "name": "errorCodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "UpdateHighlightErrorCode",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "UpdateHighlightErrorCode",
        "enumValues": [
          {
            "name": "BAD_DATA"
          },
          {
            "name": "FORBIDDEN"
          },
          {
            "name": "NOT_FOUND"
          },
          {
            "name": "UNAUTHORIZED"
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "UpdateHighlightInput",
        "inputFields": [
          {
            "name": "annotation",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "color",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "highlightId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            }
          },
          {
            "name": "html",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "quote",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "sharedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Date",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "UpdateHighlightReplyError",
        "fields": [
          {
            "name": "errorCodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "UpdateHighlightReplyErrorCode",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "UpdateHighlightReplyErrorCode",
        "enumValues": [
          {
            "name": "FORBIDDEN"
          },
          {
            "name": "NOT_FOUND"
          },
          {
            "name": "UNAUTHORIZED"
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "UpdateHighlightReplyInput",
        "inputFields": [
          {
            "name": "highlightReplyId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            }
          },
          {
            "name": "text",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "UpdateHighlightReplyResult",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "UpdateHighlightReplyError"
          },
          {
            "kind": "OBJECT",
            "name": "UpdateHighlightReplySuccess"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "UpdateHighlightReplySuccess",
        "fields": [
          {
            "name": "highlightReply",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "HighlightReply",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "UNION",
        "name": "UpdateHighlightResult",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "UpdateHighlightError"
          },
          {
            "kind": "OBJECT",
            "name": "UpdateHighlightSuccess"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "UpdateHighlightSuccess",
        "fields": [
          {
            "name": "highlight",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Highlight",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "UpdateLabelError",
        "fields": [
          {
            "name": "errorCodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "UpdateLabelErrorCode",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "UpdateLabelErrorCode",
        "enumValues": [
          {
            "name": "BAD_REQUEST"
          },
          {
            "name": "FORBIDDEN"
          },
          {
            "name": "NOT_FOUND"
          },
          {
            "name": "UNAUTHORIZED"
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "UpdateLabelInput",
        "inputFields": [
          {
            "name": "color",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "description",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "labelId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "UpdateLabelResult",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "UpdateLabelError"
          },
          {
            "kind": "OBJECT",
            "name": "UpdateLabelSuccess"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "UpdateLabelSuccess",
        "fields": [
          {
            "name": "label",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Label",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "UpdateLinkShareInfoError",
        "fields": [
          {
            "name": "errorCodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "UpdateLinkShareInfoErrorCode",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "UpdateLinkShareInfoErrorCode",
        "enumValues": [
          {
            "name": "BAD_REQUEST"
          },
          {
            "name": "UNAUTHORIZED"
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "UpdateLinkShareInfoInput",
        "inputFields": [
          {
            "name": "description",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "linkId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            }
          },
          {
            "name": "title",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "UpdateLinkShareInfoResult",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "UpdateLinkShareInfoError"
          },
          {
            "kind": "OBJECT",
            "name": "UpdateLinkShareInfoSuccess"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "UpdateLinkShareInfoSuccess",
        "fields": [
          {
            "name": "message",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "UpdateNewsletterEmailError",
        "fields": [
          {
            "name": "errorCodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "UpdateNewsletterEmailErrorCode",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "UpdateNewsletterEmailErrorCode",
        "enumValues": [
          {
            "name": "BAD_REQUEST"
          },
          {
            "name": "UNAUTHORIZED"
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "UpdateNewsletterEmailInput",
        "inputFields": [
          {
            "name": "description",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "folder",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "UpdateNewsletterEmailResult",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "UpdateNewsletterEmailError"
          },
          {
            "kind": "OBJECT",
            "name": "UpdateNewsletterEmailSuccess"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "UpdateNewsletterEmailSuccess",
        "fields": [
          {
            "name": "newsletterEmail",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "NewsletterEmail",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "UpdatePageError",
        "fields": [
          {
            "name": "errorCodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "UpdatePageErrorCode",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "UpdatePageErrorCode",
        "enumValues": [
          {
            "name": "BAD_REQUEST"
          },
          {
            "name": "FORBIDDEN"
          },
          {
            "name": "NOT_FOUND"
          },
          {
            "name": "UNAUTHORIZED"
          },
          {
            "name": "UPDATE_FAILED"
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "UpdatePageInput",
        "inputFields": [
          {
            "name": "byline",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "description",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "pageId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            }
          },
          {
            "name": "previewImage",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "publishedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Date",
              "ofType": null
            }
          },
          {
            "name": "savedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Date",
              "ofType": null
            }
          },
          {
            "name": "state",
            "type": {
              "kind": "ENUM",
              "name": "ArticleSavingRequestStatus",
              "ofType": null
            }
          },
          {
            "name": "title",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "UpdatePageResult",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "UpdatePageError"
          },
          {
            "kind": "OBJECT",
            "name": "UpdatePageSuccess"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "UpdatePageSuccess",
        "fields": [
          {
            "name": "updatedPage",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Article",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "UpdateReason",
        "enumValues": [
          {
            "name": "CREATED"
          },
          {
            "name": "DELETED"
          },
          {
            "name": "UPDATED"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "UpdateReminderError",
        "fields": [
          {
            "name": "errorCodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "UpdateReminderErrorCode",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "UpdateReminderErrorCode",
        "enumValues": [
          {
            "name": "BAD_REQUEST"
          },
          {
            "name": "NOT_FOUND"
          },
          {
            "name": "UNAUTHORIZED"
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "UpdateReminderInput",
        "inputFields": [
          {
            "name": "archiveUntil",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            }
          },
          {
            "name": "remindAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Date",
                "ofType": null
              }
            }
          },
          {
            "name": "sendNotification",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            }
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "UpdateReminderResult",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "UpdateReminderError"
          },
          {
            "kind": "OBJECT",
            "name": "UpdateReminderSuccess"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "UpdateReminderSuccess",
        "fields": [
          {
            "name": "reminder",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Reminder",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "UpdateSharedCommentError",
        "fields": [
          {
            "name": "errorCodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "UpdateSharedCommentErrorCode",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "UpdateSharedCommentErrorCode",
        "enumValues": [
          {
            "name": "NOT_FOUND"
          },
          {
            "name": "UNAUTHORIZED"
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "UpdateSharedCommentInput",
        "inputFields": [
          {
            "name": "articleID",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            }
          },
          {
            "name": "sharedComment",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "UpdateSharedCommentResult",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "UpdateSharedCommentError"
          },
          {
            "kind": "OBJECT",
            "name": "UpdateSharedCommentSuccess"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "UpdateSharedCommentSuccess",
        "fields": [
          {
            "name": "articleID",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "sharedComment",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "UpdateSubscriptionError",
        "fields": [
          {
            "name": "errorCodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "UpdateSubscriptionErrorCode",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "UpdateSubscriptionErrorCode",
        "enumValues": [
          {
            "name": "BAD_REQUEST"
          },
          {
            "name": "NOT_FOUND"
          },
          {
            "name": "UNAUTHORIZED"
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "UpdateSubscriptionInput",
        "inputFields": [
          {
            "name": "autoAddToLibrary",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "description",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "failedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Date",
              "ofType": null
            }
          },
          {
            "name": "fetchContent",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "fetchContentType",
            "type": {
              "kind": "ENUM",
              "name": "FetchContentType",
              "ofType": null
            }
          },
          {
            "name": "folder",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            }
          },
          {
            "name": "isPrivate",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "lastFetchedChecksum",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "mostRecentItemDate",
            "type": {
              "kind": "SCALAR",
              "name": "Date",
              "ofType": null
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "refreshedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Date",
              "ofType": null
            }
          },
          {
            "name": "scheduledAt",
            "type": {
              "kind": "SCALAR",
              "name": "Date",
              "ofType": null
            }
          },
          {
            "name": "status",
            "type": {
              "kind": "ENUM",
              "name": "SubscriptionStatus",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "UpdateSubscriptionResult",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "UpdateSubscriptionError"
          },
          {
            "kind": "OBJECT",
            "name": "UpdateSubscriptionSuccess"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "UpdateSubscriptionSuccess",
        "fields": [
          {
            "name": "subscription",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Subscription",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "UpdateUserError",
        "fields": [
          {
            "name": "errorCodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "UpdateUserErrorCode",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "UpdateUserErrorCode",
        "enumValues": [
          {
            "name": "BIO_TOO_LONG"
          },
          {
            "name": "EMPTY_NAME"
          },
          {
            "name": "UNAUTHORIZED"
          },
          {
            "name": "USER_NOT_FOUND"
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "UpdateUserInput",
        "inputFields": [
          {
            "name": "bio",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "UpdateUserProfileError",
        "fields": [
          {
            "name": "errorCodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "UpdateUserProfileErrorCode",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "UpdateUserProfileErrorCode",
        "enumValues": [
          {
            "name": "BAD_DATA"
          },
          {
            "name": "BAD_USERNAME"
          },
          {
            "name": "FORBIDDEN"
          },
          {
            "name": "UNAUTHORIZED"
          },
          {
            "name": "USERNAME_EXISTS"
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "UpdateUserProfileInput",
        "inputFields": [
          {
            "name": "bio",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "pictureUrl",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "userId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            }
          },
          {
            "name": "username",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "UpdateUserProfileResult",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "UpdateUserProfileError"
          },
          {
            "kind": "OBJECT",
            "name": "UpdateUserProfileSuccess"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "UpdateUserProfileSuccess",
        "fields": [
          {
            "name": "user",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "User",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "UNION",
        "name": "UpdateUserResult",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "UpdateUserError"
          },
          {
            "kind": "OBJECT",
            "name": "UpdateUserSuccess"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "UpdateUserSuccess",
        "fields": [
          {
            "name": "user",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "User",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "UpdatesSinceError",
        "fields": [
          {
            "name": "errorCodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "UpdatesSinceErrorCode",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "UpdatesSinceErrorCode",
        "enumValues": [
          {
            "name": "UNAUTHORIZED"
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "UpdatesSinceResult",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "UpdatesSinceError"
          },
          {
            "kind": "OBJECT",
            "name": "UpdatesSinceSuccess"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "UpdatesSinceSuccess",
        "fields": [
          {
            "name": "edges",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "SyncUpdatedItemEdge",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "pageInfo",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "PageInfo",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "UploadFileRequestError",
        "fields": [
          {
            "name": "errorCodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "UploadFileRequestErrorCode",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "UploadFileRequestErrorCode",
        "enumValues": [
          {
            "name": "BAD_INPUT"
          },
          {
            "name": "FAILED_CREATE"
          },
          {
            "name": "UNAUTHORIZED"
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "UploadFileRequestInput",
        "inputFields": [
          {
            "name": "clientRequestId",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "contentType",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "createPageEntry",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          },
          {
            "name": "url",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "UploadFileRequestResult",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "UploadFileRequestError"
          },
          {
            "kind": "OBJECT",
            "name": "UploadFileRequestSuccess"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "UploadFileRequestSuccess",
        "fields": [
          {
            "name": "createdPageId",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "uploadFileId",
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "uploadSignedUrl",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "UploadFileStatus",
        "enumValues": [
          {
            "name": "COMPLETED"
          },
          {
            "name": "INITIALIZED"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "UploadImportFileError",
        "fields": [
          {
            "name": "errorCodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "UploadImportFileErrorCode",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "UploadImportFileErrorCode",
        "enumValues": [
          {
            "name": "BAD_REQUEST"
          },
          {
            "name": "UNAUTHORIZED"
          },
          {
            "name": "UPLOAD_DAILY_LIMIT_EXCEEDED"
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "UploadImportFileResult",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "UploadImportFileError"
          },
          {
            "kind": "OBJECT",
            "name": "UploadImportFileSuccess"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "UploadImportFileSuccess",
        "fields": [
          {
            "name": "uploadSignedUrl",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "UploadImportFileType",
        "enumValues": [
          {
            "name": "MATTER"
          },
          {
            "name": "POCKET"
          },
          {
            "name": "URL_LIST"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "User",
        "fields": [
          {
            "name": "email",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "followersCount",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "friendsCount",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "intercomHash",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "isFriend",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "isFullUser",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "picture",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "profile",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Profile",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "sharedArticles",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "FeedArticle",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "sharedArticlesCount",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "sharedHighlightsCount",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "sharedNotesCount",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "source",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "viewerIsFollowing",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "UserError",
        "fields": [
          {
            "name": "errorCodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "UserErrorCode",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "UserErrorCode",
        "enumValues": [
          {
            "name": "BAD_REQUEST"
          },
          {
            "name": "UNAUTHORIZED"
          },
          {
            "name": "USER_NOT_FOUND"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "UserPersonalization",
        "fields": [
          {
            "name": "fields",
            "type": {
              "kind": "SCALAR",
              "name": "JSON",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "fontFamily",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "fontSize",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "libraryLayoutType",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "librarySortOrder",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "margin",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "speechRate",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "speechSecondaryVoice",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "speechVoice",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "speechVolume",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "theme",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "UNION",
        "name": "UserResult",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "UserError"
          },
          {
            "kind": "OBJECT",
            "name": "UserSuccess"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "UserSuccess",
        "fields": [
          {
            "name": "user",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "User",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "UsersError",
        "fields": [
          {
            "name": "errorCodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "UsersErrorCode",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "UsersErrorCode",
        "enumValues": [
          {
            "name": "UNAUTHORIZED"
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "UsersResult",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "UsersError"
          },
          {
            "kind": "OBJECT",
            "name": "UsersSuccess"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "UsersSuccess",
        "fields": [
          {
            "name": "users",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "User",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Webhook",
        "fields": [
          {
            "name": "contentType",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Date",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "enabled",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "eventTypes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "WebhookEvent",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "method",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Date",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "url",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "WebhookError",
        "fields": [
          {
            "name": "errorCodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "WebhookErrorCode",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "WebhookErrorCode",
        "enumValues": [
          {
            "name": "BAD_REQUEST"
          },
          {
            "name": "NOT_FOUND"
          },
          {
            "name": "UNAUTHORIZED"
          }
        ]
      },
      {
        "kind": "ENUM",
        "name": "WebhookEvent",
        "enumValues": [
          {
            "name": "HIGHLIGHT_CREATED"
          },
          {
            "name": "HIGHLIGHT_DELETED"
          },
          {
            "name": "HIGHLIGHT_UPDATED"
          },
          {
            "name": "LABEL_CREATED"
          },
          {
            "name": "LABEL_DELETED"
          },
          {
            "name": "LABEL_UPDATED"
          },
          {
            "name": "PAGE_CREATED"
          },
          {
            "name": "PAGE_DELETED"
          },
          {
            "name": "PAGE_UPDATED"
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "WebhookResult",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "WebhookError"
          },
          {
            "kind": "OBJECT",
            "name": "WebhookSuccess"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "WebhookSuccess",
        "fields": [
          {
            "name": "webhook",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Webhook",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "WebhooksError",
        "fields": [
          {
            "name": "errorCodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "WebhooksErrorCode",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "WebhooksErrorCode",
        "enumValues": [
          {
            "name": "BAD_REQUEST"
          },
          {
            "name": "UNAUTHORIZED"
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "WebhooksResult",
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "WebhooksError"
          },
          {
            "kind": "OBJECT",
            "name": "WebhooksSuccess"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "WebhooksSuccess",
        "fields": [
          {
            "name": "webhooks",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Webhook",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      }
    ],
    "directives": []
  }
};

import * as gqlTada from 'gql.tada';

declare module 'gql.tada' {
  interface setupSchema {
    introspection: introspection
  }
}