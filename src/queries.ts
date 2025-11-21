export type QueryType = {
  name: string;
  key: string;
  query: string;
};

export const APIStatus = `
  {
  status {
    currentStatuses {
      message
      name
      status
      statusCode
    }
  }
}`;

export const categoriesQuery = {
  name: "categoriesQuery",
  key: "itemCategories",
  query: `
  query{
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

export const itemPriceQuery = {
  query: `
    {
  items(limit: 2) {
    id
    sellFor {
      priceRUB
      vendor {
        name
      }
    }
    buyFor {
      priceRUB
      vendor {
        name
      }
    }
  }
}
`,
};

export const itemDataQuery = {
  query: `
  {
  items(limit: 2) {
    id
    name
    shortName
    categories {
      name
    }

    lastLowPrice
    low24hPrice
    avg24hPrice
    high24hPrice
    changeLast48hPercent
    changeLast48h
    lastOfferCount

    width
    weight
    hasGrid

    inspectImageLink
    backgroundColor
    gridImageLink

    description
    wikiLink

    height
    velocity
    recoilModifier
    loudness
    accuracyModifier
    ergonomicsModifier

    updated

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
}

`,
};
