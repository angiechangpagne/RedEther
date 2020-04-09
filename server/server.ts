import { makeExecutableSchema, ApoloServer, ApolloServer } from 'apollo-server-micro';
import { default as typeDefs } from './schema';
import resolvers from './resolvers';
import fetch from 'node-fetch';


const schema = makeExecutableSchema({
  typeDefs, 
  resolvers
})


let results;

const server = new ApolloServer({
  schema, 
  playground: true, 
  context(){
    const getResults = async () => {
      if(results){
        return results;
      }
      const res = await fetch('timeseries.json');
      results = await res.json(); //switch to promise chain
      return results;
    }
    return { 
      getResults;
    }; //closures
  },
})

const cors = microCors();


const handler = server.createHandler({ path: '/' });

export defalt cors((req, res) => req.method === 'OPTIONS' ? res.end() : handler(req, res));