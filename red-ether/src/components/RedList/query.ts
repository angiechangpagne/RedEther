import gql from 'graphql-tag';

export const QUERY_RED_LIST = gql`
#   query {
#   # time series data
#   results(countries: ["US", "Canada"], date: { lt: "3/10/2020" }){
#     country {
#       name
#     }
#     date
#     confirmed
#     deaths
#     recovered
#     growthRate
#   }

#   # by country
#   country(name: "US"){
#     name
#     mostRecent {
#       date(format: "yyyy-MM-dd")
#       confirmed
#     }
#   }
# }
`;