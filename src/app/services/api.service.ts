/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type __SubscriptionContainer = {
  onCreateStock: OnCreateStockSubscription;
  onUpdateStock: OnUpdateStockSubscription;
  onDeleteStock: OnDeleteStockSubscription;
  onCreatePortifolio: OnCreatePortifolioSubscription;
  onUpdatePortifolio: OnUpdatePortifolioSubscription;
  onDeletePortifolio: OnDeletePortifolioSubscription;
};

export type CreateStockInput = {
  id?: string | null;
  symbol: string;
  name: string;
};

export type ModelStockConditionInput = {
  symbol?: ModelStringInput | null;
  name?: ModelStringInput | null;
  and?: Array<ModelStockConditionInput | null> | null;
  or?: Array<ModelStockConditionInput | null> | null;
  not?: ModelStockConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type Stock = {
  __typename: "Stock";
  id: string;
  symbol: string;
  name: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateStockInput = {
  id: string;
  symbol?: string | null;
  name?: string | null;
};

export type DeleteStockInput = {
  id: string;
};

export type CreatePortifolioInput = {
  id?: string | null;
  qtd: number;
  buyPrice: number;
};

export type ModelPortifolioConditionInput = {
  qtd?: ModelIntInput | null;
  buyPrice?: ModelFloatInput | null;
  and?: Array<ModelPortifolioConditionInput | null> | null;
  or?: Array<ModelPortifolioConditionInput | null> | null;
  not?: ModelPortifolioConditionInput | null;
};

export type ModelIntInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type ModelFloatInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type Portifolio = {
  __typename: "Portifolio";
  id: string;
  stock: Stock;
  qtd: number;
  buyPrice: number;
  createdAt: string;
  updatedAt: string;
};

export type UpdatePortifolioInput = {
  id: string;
  qtd?: number | null;
  buyPrice?: number | null;
};

export type DeletePortifolioInput = {
  id: string;
};

export type MarketTrending = {
  __typename: "MarketTrending";
  count?: number | null;
  quotes?: Array<Quote | null> | null;
};

export type Quote = {
  __typename: "Quote";
  symbol?: string | null;
  shortName?: string | null;
  longName?: string | null;
  regularMarketPrice?: number | null;
  regularMarketChange?: number | null;
  regularMarketChangePercent?: number | null;
  market?: string | null;
};

export type ModelStockFilterInput = {
  id?: ModelIDInput | null;
  symbol?: ModelStringInput | null;
  name?: ModelStringInput | null;
  and?: Array<ModelStockFilterInput | null> | null;
  or?: Array<ModelStockFilterInput | null> | null;
  not?: ModelStockFilterInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type ModelStockConnection = {
  __typename: "ModelStockConnection";
  items: Array<Stock | null>;
  nextToken?: string | null;
};

export type ModelPortifolioFilterInput = {
  id?: ModelIDInput | null;
  qtd?: ModelIntInput | null;
  buyPrice?: ModelFloatInput | null;
  and?: Array<ModelPortifolioFilterInput | null> | null;
  or?: Array<ModelPortifolioFilterInput | null> | null;
  not?: ModelPortifolioFilterInput | null;
};

export type ModelPortifolioConnection = {
  __typename: "ModelPortifolioConnection";
  items: Array<Portifolio | null>;
  nextToken?: string | null;
};

export type CreateStockMutation = {
  __typename: "Stock";
  id: string;
  symbol: string;
  name: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateStockMutation = {
  __typename: "Stock";
  id: string;
  symbol: string;
  name: string;
  createdAt: string;
  updatedAt: string;
};

export type DeleteStockMutation = {
  __typename: "Stock";
  id: string;
  symbol: string;
  name: string;
  createdAt: string;
  updatedAt: string;
};

export type CreatePortifolioMutation = {
  __typename: "Portifolio";
  id: string;
  stock: {
    __typename: "Stock";
    id: string;
    symbol: string;
    name: string;
    createdAt: string;
    updatedAt: string;
  };
  qtd: number;
  buyPrice: number;
  createdAt: string;
  updatedAt: string;
};

export type UpdatePortifolioMutation = {
  __typename: "Portifolio";
  id: string;
  stock: {
    __typename: "Stock";
    id: string;
    symbol: string;
    name: string;
    createdAt: string;
    updatedAt: string;
  };
  qtd: number;
  buyPrice: number;
  createdAt: string;
  updatedAt: string;
};

export type DeletePortifolioMutation = {
  __typename: "Portifolio";
  id: string;
  stock: {
    __typename: "Stock";
    id: string;
    symbol: string;
    name: string;
    createdAt: string;
    updatedAt: string;
  };
  qtd: number;
  buyPrice: number;
  createdAt: string;
  updatedAt: string;
};

export type GetMarketTrendingQuery = {
  __typename: "MarketTrending";
  count?: number | null;
  quotes?: Array<{
    __typename: "Quote";
    symbol?: string | null;
    shortName?: string | null;
    longName?: string | null;
    regularMarketPrice?: number | null;
    regularMarketChange?: number | null;
    regularMarketChangePercent?: number | null;
    market?: string | null;
  } | null> | null;
};

export type GetStockQuery = {
  __typename: "Stock";
  id: string;
  symbol: string;
  name: string;
  createdAt: string;
  updatedAt: string;
};

export type ListStocksQuery = {
  __typename: "ModelStockConnection";
  items: Array<{
    __typename: "Stock";
    id: string;
    symbol: string;
    name: string;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type GetPortifolioQuery = {
  __typename: "Portifolio";
  id: string;
  stock: {
    __typename: "Stock";
    id: string;
    symbol: string;
    name: string;
    createdAt: string;
    updatedAt: string;
  };
  qtd: number;
  buyPrice: number;
  createdAt: string;
  updatedAt: string;
};

export type ListPortifoliosQuery = {
  __typename: "ModelPortifolioConnection";
  items: Array<{
    __typename: "Portifolio";
    id: string;
    stock: {
      __typename: "Stock";
      id: string;
      symbol: string;
      name: string;
      createdAt: string;
      updatedAt: string;
    };
    qtd: number;
    buyPrice: number;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type OnCreateStockSubscription = {
  __typename: "Stock";
  id: string;
  symbol: string;
  name: string;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateStockSubscription = {
  __typename: "Stock";
  id: string;
  symbol: string;
  name: string;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteStockSubscription = {
  __typename: "Stock";
  id: string;
  symbol: string;
  name: string;
  createdAt: string;
  updatedAt: string;
};

export type OnCreatePortifolioSubscription = {
  __typename: "Portifolio";
  id: string;
  stock: {
    __typename: "Stock";
    id: string;
    symbol: string;
    name: string;
    createdAt: string;
    updatedAt: string;
  };
  qtd: number;
  buyPrice: number;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdatePortifolioSubscription = {
  __typename: "Portifolio";
  id: string;
  stock: {
    __typename: "Stock";
    id: string;
    symbol: string;
    name: string;
    createdAt: string;
    updatedAt: string;
  };
  qtd: number;
  buyPrice: number;
  createdAt: string;
  updatedAt: string;
};

export type OnDeletePortifolioSubscription = {
  __typename: "Portifolio";
  id: string;
  stock: {
    __typename: "Stock";
    id: string;
    symbol: string;
    name: string;
    createdAt: string;
    updatedAt: string;
  };
  qtd: number;
  buyPrice: number;
  createdAt: string;
  updatedAt: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateStock(
    input: CreateStockInput,
    condition?: ModelStockConditionInput
  ): Promise<CreateStockMutation> {
    const statement = `mutation CreateStock($input: CreateStockInput!, $condition: ModelStockConditionInput) {
        createStock(input: $input, condition: $condition) {
          __typename
          id
          symbol
          name
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateStockMutation>response.data.createStock;
  }
  async UpdateStock(
    input: UpdateStockInput,
    condition?: ModelStockConditionInput
  ): Promise<UpdateStockMutation> {
    const statement = `mutation UpdateStock($input: UpdateStockInput!, $condition: ModelStockConditionInput) {
        updateStock(input: $input, condition: $condition) {
          __typename
          id
          symbol
          name
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateStockMutation>response.data.updateStock;
  }
  async DeleteStock(
    input: DeleteStockInput,
    condition?: ModelStockConditionInput
  ): Promise<DeleteStockMutation> {
    const statement = `mutation DeleteStock($input: DeleteStockInput!, $condition: ModelStockConditionInput) {
        deleteStock(input: $input, condition: $condition) {
          __typename
          id
          symbol
          name
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteStockMutation>response.data.deleteStock;
  }
  async CreatePortifolio(
    input: CreatePortifolioInput,
    condition?: ModelPortifolioConditionInput
  ): Promise<CreatePortifolioMutation> {
    const statement = `mutation CreatePortifolio($input: CreatePortifolioInput!, $condition: ModelPortifolioConditionInput) {
        createPortifolio(input: $input, condition: $condition) {
          __typename
          id
          stock {
            __typename
            id
            symbol
            name
            createdAt
            updatedAt
          }
          qtd
          buyPrice
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreatePortifolioMutation>response.data.createPortifolio;
  }
  async UpdatePortifolio(
    input: UpdatePortifolioInput,
    condition?: ModelPortifolioConditionInput
  ): Promise<UpdatePortifolioMutation> {
    const statement = `mutation UpdatePortifolio($input: UpdatePortifolioInput!, $condition: ModelPortifolioConditionInput) {
        updatePortifolio(input: $input, condition: $condition) {
          __typename
          id
          stock {
            __typename
            id
            symbol
            name
            createdAt
            updatedAt
          }
          qtd
          buyPrice
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdatePortifolioMutation>response.data.updatePortifolio;
  }
  async DeletePortifolio(
    input: DeletePortifolioInput,
    condition?: ModelPortifolioConditionInput
  ): Promise<DeletePortifolioMutation> {
    const statement = `mutation DeletePortifolio($input: DeletePortifolioInput!, $condition: ModelPortifolioConditionInput) {
        deletePortifolio(input: $input, condition: $condition) {
          __typename
          id
          stock {
            __typename
            id
            symbol
            name
            createdAt
            updatedAt
          }
          qtd
          buyPrice
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeletePortifolioMutation>response.data.deletePortifolio;
  }
  async GetMarketTrending(region?: string): Promise<GetMarketTrendingQuery> {
    const statement = `query GetMarketTrending($region: String) {
        getMarketTrending(region: $region) {
          __typename
          count
          quotes {
            __typename
            symbol
            shortName
            longName
            regularMarketPrice
            regularMarketChange
            regularMarketChangePercent
            market
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (region) {
      gqlAPIServiceArguments.region = region;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetMarketTrendingQuery>response.data.getMarketTrending;
  }
  async GetStock(id: string): Promise<GetStockQuery> {
    const statement = `query GetStock($id: ID!) {
        getStock(id: $id) {
          __typename
          id
          symbol
          name
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetStockQuery>response.data.getStock;
  }
  async ListStocks(
    filter?: ModelStockFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListStocksQuery> {
    const statement = `query ListStocks($filter: ModelStockFilterInput, $limit: Int, $nextToken: String) {
        listStocks(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            symbol
            name
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListStocksQuery>response.data.listStocks;
  }
  async GetPortifolio(id: string): Promise<GetPortifolioQuery> {
    const statement = `query GetPortifolio($id: ID!) {
        getPortifolio(id: $id) {
          __typename
          id
          stock {
            __typename
            id
            symbol
            name
            createdAt
            updatedAt
          }
          qtd
          buyPrice
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetPortifolioQuery>response.data.getPortifolio;
  }
  async ListPortifolios(
    filter?: ModelPortifolioFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListPortifoliosQuery> {
    const statement = `query ListPortifolios($filter: ModelPortifolioFilterInput, $limit: Int, $nextToken: String) {
        listPortifolios(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            stock {
              __typename
              id
              symbol
              name
              createdAt
              updatedAt
            }
            qtd
            buyPrice
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListPortifoliosQuery>response.data.listPortifolios;
  }
  OnCreateStockListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateStock">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateStock {
        onCreateStock {
          __typename
          id
          symbol
          name
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateStock">>
  >;

  OnUpdateStockListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateStock">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateStock {
        onUpdateStock {
          __typename
          id
          symbol
          name
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateStock">>
  >;

  OnDeleteStockListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteStock">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteStock {
        onDeleteStock {
          __typename
          id
          symbol
          name
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteStock">>
  >;

  OnCreatePortifolioListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreatePortifolio">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreatePortifolio {
        onCreatePortifolio {
          __typename
          id
          stock {
            __typename
            id
            symbol
            name
            createdAt
            updatedAt
          }
          qtd
          buyPrice
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreatePortifolio">>
  >;

  OnUpdatePortifolioListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdatePortifolio">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdatePortifolio {
        onUpdatePortifolio {
          __typename
          id
          stock {
            __typename
            id
            symbol
            name
            createdAt
            updatedAt
          }
          qtd
          buyPrice
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdatePortifolio">>
  >;

  OnDeletePortifolioListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeletePortifolio">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeletePortifolio {
        onDeletePortifolio {
          __typename
          id
          stock {
            __typename
            id
            symbol
            name
            createdAt
            updatedAt
          }
          qtd
          buyPrice
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeletePortifolio">>
  >;
}
