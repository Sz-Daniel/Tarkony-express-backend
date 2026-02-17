export type QueryType = {
  name: string;
  key: string;
  query: string;
};

export const categoriesQuery = {
  name: 'categoriesQuery',
  key: 'itemCategories',
  query: `
    query {
    itemCategories {
      id
      name
      normalizedName
      children {
        normalizedName
      }
      parent {
        normalizedName
      }
    }
  }`,
};

export const itemDataQuery = {
  query: `
  query {
    items {
      id
      name
      categories {
        name
        normalizedName
      }
      gridImageLink
      changeLast48h
      changeLast48hPercent
      normalizedName
      wikiLink
      sellFor {
        currency
        price
        priceRUB
        vendor {
          name
          ... on FleaMarket {
            foundInRaidRequired
          }
        }
      }
      buyFor {
        currency
        price
        priceRUB
        vendor {
          name
          ... on TraderOffer {
            minTraderLevel
            buyLimit
            trader {
              name
              imageLink
              levels {
                level
                requiredPlayerLevel
                requiredReputation
                requiredCommerce
              }
            }
            taskUnlock {
              name
              minPlayerLevel
            }
          }
        }
      }
      historicalPrices {
        offerCount
        offerCountMin
        price
        priceMin
        timestamp
      }
      bartersUsing {
        id
        level
        buyLimit
        taskUnlock {
          name
          minPlayerLevel
        }
        trader {
          name
          imageLink
          levels {
            level
            requiredPlayerLevel
            requiredReputation
            requiredCommerce
          }
        }
        rewardItems {
          count
          item {
            id
            gridImageLink
            name
          }
        }
        requiredItems {
          count
          item {
            id
            gridImageLink
            name
          }
        }
      }
      bartersFor {
        id
        level
        buyLimit
        taskUnlock {
          name
          minPlayerLevel
        }
        trader {
          name
          imageLink
          levels {
            level
            requiredPlayerLevel
            requiredReputation
            requiredCommerce
          }
        }
        rewardItems {
          count
          item {
            id
            gridImageLink
            name
          }
        }
        requiredItems {
          count
          item {
            id
            gridImageLink
            name
          }
        }
      }
      craftsUsing {
        id
        duration
        level
        station {
          name
          imageLink
        }
        taskUnlock {
          name
          minPlayerLevel
        }
        rewardItems {
          count
          item {
            id
            gridImageLink
            name
          }
        }
        requiredItems {
          count
          item {
            id
            gridImageLink
            name
          }
        }
      }
      craftsFor {
        id
        duration
        level
        station {
          name
          imageLink
        }
        taskUnlock {
          name
          minPlayerLevel
        }
        rewardItems {
          count
          item {
            id
            gridImageLink
            name
          }
        }
        requiredItems {
          count
          item {
            id
            gridImageLink
            name
          }
        }
      }
      usedInTasks {
        name
        objectives {
          ... on TaskObjectiveItem {
            description
            count
            item {
              name
            }
          }
        }
      }
      receivedFromTasks {
        name
        finishRewards {
          items {
            count
            item {
              name
            }
          }
        }
      }
    }
  }`,
};
