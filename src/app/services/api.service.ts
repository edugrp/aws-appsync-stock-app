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
  stockID?: string | null;
};

export type ModelPortifolioConditionInput = {
  qtd?: ModelIntInput | null;
  buyPrice?: ModelFloatInput | null;
  stockID?: ModelIDInput | null;
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

export type Portifolio = {
  __typename: "Portifolio";
  id: string;
  qtd: number;
  buyPrice: number;
  stockID?: string | null;
  stock: Stock;
  createdAt: string;
  updatedAt: string;
};

export type UpdatePortifolioInput = {
  id: string;
  qtd?: number | null;
  buyPrice?: number | null;
  stockID?: string | null;
};

export type DeletePortifolioInput = {
  id: string;
};

export type MarketTrendingResult = {
  __typename: "MarketTrendingResult";
  quotes?: Array<StockMarketTrending | null> | null;
};

export type StockMarketTrending = {
  __typename: "StockMarketTrending";
  symbol?: string | null;
  shortName?: string | null;
  longName?: string | null;
  regularMarketPrice?: number | null;
  regularMarketChange?: number | null;
  regularMarketChangePercent?: number | null;
  market?: string | null;
  quoteType?: string | null;
};

export type QueryGetStockSummaryQueryInput = {
  region: string;
  symbol: string;
};

export type StockSummaryResult = {
  __typename: "StockSummaryResult";
  price?: StockPrice | null;
};

export type StockPrice = {
  __typename: "StockPrice";
  symbol?: string | null;
  shortName?: string | null;
  longName?: string | null;
  currency?: string | null;
  regularMarketOpen?: ValueDetail | null;
  regularMarketDayHigh?: ValueDetail | null;
  regularMarketDayLow?: ValueDetail | null;
  regularMarketPrice?: ValueDetail | null;
  regularMarketChange?: ValueDetail | null;
  regularMarketChangePercent?: ValueDetail | null;
  regularMarketVolume?: ValueDetail | null;
  regularMarketPreviousClose?: ValueDetail | null;
  averageDailyVolume10Day?: ValueDetail | null;
};

export type ValueDetail = {
  __typename: "ValueDetail";
  raw?: number | null;
  fmt?: string | null;
};

export type QuerySearchStocksQueryInput = {
  region: string;
  q: string;
};

export type SearchStockResult = {
  __typename: "SearchStockResult";
  quotes?: Array<SearchStock | null> | null;
};

export type SearchStock = {
  __typename: "SearchStock";
  symbol?: string | null;
  shortname?: string | null;
  longname?: string | null;
  exchDisp?: string | null;
  typeDisp?: string | null;
};

export type ModelStockFilterInput = {
  id?: ModelIDInput | null;
  symbol?: ModelStringInput | null;
  name?: ModelStringInput | null;
  and?: Array<ModelStockFilterInput | null> | null;
  or?: Array<ModelStockFilterInput | null> | null;
  not?: ModelStockFilterInput | null;
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
  stockID?: ModelIDInput | null;
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
  qtd: number;
  buyPrice: number;
  stockID?: string | null;
  stock: {
    __typename: "Stock";
    id: string;
    symbol: string;
    name: string;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
};

export type UpdatePortifolioMutation = {
  __typename: "Portifolio";
  id: string;
  qtd: number;
  buyPrice: number;
  stockID?: string | null;
  stock: {
    __typename: "Stock";
    id: string;
    symbol: string;
    name: string;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
};

export type DeletePortifolioMutation = {
  __typename: "Portifolio";
  id: string;
  qtd: number;
  buyPrice: number;
  stockID?: string | null;
  stock: {
    __typename: "Stock";
    id: string;
    symbol: string;
    name: string;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
};

export type ListMarketTrendingQuery = {
  __typename: "MarketTrendingResult";
  quotes?: Array<{
    __typename: "StockMarketTrending";
    symbol?: string | null;
    shortName?: string | null;
    longName?: string | null;
    regularMarketPrice?: number | null;
    regularMarketChange?: number | null;
    regularMarketChangePercent?: number | null;
    market?: string | null;
    quoteType?: string | null;
  } | null> | null;
};

export type GetStockSummaryQuery = {
  __typename: "StockSummaryResult";
  price?: {
    __typename: "StockPrice";
    symbol?: string | null;
    shortName?: string | null;
    longName?: string | null;
    currency?: string | null;
    regularMarketOpen?: {
      __typename: "ValueDetail";
      raw?: number | null;
      fmt?: string | null;
    } | null;
    regularMarketDayHigh?: {
      __typename: "ValueDetail";
      raw?: number | null;
      fmt?: string | null;
    } | null;
    regularMarketDayLow?: {
      __typename: "ValueDetail";
      raw?: number | null;
      fmt?: string | null;
    } | null;
    regularMarketPrice?: {
      __typename: "ValueDetail";
      raw?: number | null;
      fmt?: string | null;
    } | null;
    regularMarketChange?: {
      __typename: "ValueDetail";
      raw?: number | null;
      fmt?: string | null;
    } | null;
    regularMarketChangePercent?: {
      __typename: "ValueDetail";
      raw?: number | null;
      fmt?: string | null;
    } | null;
    regularMarketVolume?: {
      __typename: "ValueDetail";
      raw?: number | null;
      fmt?: string | null;
    } | null;
    regularMarketPreviousClose?: {
      __typename: "ValueDetail";
      raw?: number | null;
      fmt?: string | null;
    } | null;
    averageDailyVolume10Day?: {
      __typename: "ValueDetail";
      raw?: number | null;
      fmt?: string | null;
    } | null;
  } | null;
};

export type SearchStocksQuery = {
  __typename: "SearchStockResult";
  quotes?: Array<{
    __typename: "SearchStock";
    symbol?: string | null;
    shortname?: string | null;
    longname?: string | null;
    exchDisp?: string | null;
    typeDisp?: string | null;
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
  qtd: number;
  buyPrice: number;
  stockID?: string | null;
  stock: {
    __typename: "Stock";
    id: string;
    symbol: string;
    name: string;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
};

export type ListPortifoliosQuery = {
  __typename: "ModelPortifolioConnection";
  items: Array<{
    __typename: "Portifolio";
    id: string;
    qtd: number;
    buyPrice: number;
    stockID?: string | null;
    stock: {
      __typename: "Stock";
      id: string;
      symbol: string;
      name: string;
      createdAt: string;
      updatedAt: string;
    };
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
  qtd: number;
  buyPrice: number;
  stockID?: string | null;
  stock: {
    __typename: "Stock";
    id: string;
    symbol: string;
    name: string;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
};

export type OnUpdatePortifolioSubscription = {
  __typename: "Portifolio";
  id: string;
  qtd: number;
  buyPrice: number;
  stockID?: string | null;
  stock: {
    __typename: "Stock";
    id: string;
    symbol: string;
    name: string;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
};

export type OnDeletePortifolioSubscription = {
  __typename: "Portifolio";
  id: string;
  qtd: number;
  buyPrice: number;
  stockID?: string | null;
  stock: {
    __typename: "Stock";
    id: string;
    symbol: string;
    name: string;
    createdAt: string;
    updatedAt: string;
  };
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
          qtd
          buyPrice
          stockID
          stock {
            __typename
            id
            symbol
            name
            createdAt
            updatedAt
          }
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
          qtd
          buyPrice
          stockID
          stock {
            __typename
            id
            symbol
            name
            createdAt
            updatedAt
          }
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
          qtd
          buyPrice
          stockID
          stock {
            __typename
            id
            symbol
            name
            createdAt
            updatedAt
          }
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
  async ListMarketTrending(region?: string): Promise<ListMarketTrendingQuery> {
    const statement = `query ListMarketTrending($region: String) {
        listMarketTrending(region: $region) {
          __typename
          quotes {
            __typename
            symbol
            shortName
            longName
            regularMarketPrice
            regularMarketChange
            regularMarketChangePercent
            market
            quoteType
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
    return <ListMarketTrendingQuery>response.data.listMarketTrending;
  }
  async GetStockSummary(
    query: QueryGetStockSummaryQueryInput
  ): Promise<GetStockSummaryQuery> {
    const statement = `query GetStockSummary($query: QueryGetStockSummaryQueryInput!) {
        getStockSummary(query: $query) {
          __typename
          price {
            __typename
            symbol
            shortName
            longName
            currency
            regularMarketOpen {
              __typename
              raw
              fmt
            }
            regularMarketDayHigh {
              __typename
              raw
              fmt
            }
            regularMarketDayLow {
              __typename
              raw
              fmt
            }
            regularMarketPrice {
              __typename
              raw
              fmt
            }
            regularMarketChange {
              __typename
              raw
              fmt
            }
            regularMarketChangePercent {
              __typename
              raw
              fmt
            }
            regularMarketVolume {
              __typename
              raw
              fmt
            }
            regularMarketPreviousClose {
              __typename
              raw
              fmt
            }
            averageDailyVolume10Day {
              __typename
              raw
              fmt
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      query
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetStockSummaryQuery>response.data.getStockSummary;
  }
  async SearchStocks(
    query: QuerySearchStocksQueryInput
  ): Promise<SearchStocksQuery> {
    const statement = `query SearchStocks($query: QuerySearchStocksQueryInput!) {
        searchStocks(query: $query) {
          __typename
          quotes {
            __typename
            symbol
            shortname
            longname
            exchDisp
            typeDisp
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      query
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SearchStocksQuery>response.data.searchStocks;
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
          qtd
          buyPrice
          stockID
          stock {
            __typename
            id
            symbol
            name
            createdAt
            updatedAt
          }
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
            qtd
            buyPrice
            stockID
            stock {
              __typename
              id
              symbol
              name
              createdAt
              updatedAt
            }
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
          qtd
          buyPrice
          stockID
          stock {
            __typename
            id
            symbol
            name
            createdAt
            updatedAt
          }
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
          qtd
          buyPrice
          stockID
          stock {
            __typename
            id
            symbol
            name
            createdAt
            updatedAt
          }
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
          qtd
          buyPrice
          stockID
          stock {
            __typename
            id
            symbol
            name
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeletePortifolio">>
  >;
}
