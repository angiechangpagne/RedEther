# RedEther
This is NOT a COV-ID 19 Application 

React
Typescript
GraphQL
Socket.io
D3.js Particles

Important Dependencies:
apollo-boost : query API and cache data
react-apollo: React bindings
react-apollo-hooks: wraps Apollo queries in React Hook
graphql-tag: to build query docs
graphql: peer dependency

@graphql-codegen/cli: automates TS workflow
Commands: 
npm install @graphql-codegen/cli

$(npm bin)/graphql-codegen init
//queries to bin folder and cofigures the code generator

API Endpoints Used:
http://api.catalysis-hub.org/graphql


yarn create eth-app westworld

In westworld project folder:
Development:
yarn react-app:start

Production:
yarn react-app:build
yarn subgraph:codegen

Deploy Subgraph to official Graph Node
yarn subgraph:deploy

What is The Graph?
The Graph is on the Ethereum Blockchain, essentially a data structure that contains subgraphs to index and track data from decentralized applications. 

Because of the flexibility in graphql, it can quickly store necessary indexed data to one of its object stores without giving too much information on it's exact underlyings, as it mutates the query. 

The graph is constantly checking its subgraphs for nested updates and indexing of data for any type of decentralized application. The decentralized applciation can return queries from the original client. 

Install the graph-cli in the global folder
npm install -g @graphprotocol/graph-cli

Create Subgraph
graph init

graph init --from-example-contract <GITHUB_USER>/<SUBGRAPH_NAME> [<DIRECTORY>]

Subgraph Manifest: subgraph.yml
Defines what keys to index from decentralized app data and how to map the event date to graphql endpoint.

Note: 1 manifest can be use for multiple smart contracts on Ether.

Subgraph Schema: schema.graphql


Add Typescript Dependencies 
npm install graph-ts
npm install --dev @graphprotocol/graph-ts

Assembly Script proxies Typescript to WASM

For more information, check out https://thegraph.com/


We do apply Redux in some instances, but usually can simply go with Hooks and Context API, especially with the new features of useReducer and useContext Hooks. 

This is not another App about the data. 
The data is not something we can directly change. 
Some of the data is unclear, much could be latent or misconstrued. 
Let's not focus on things that are out of our control. 
Let's look at a bigger picture. 
Let's study it. Study the wave, the frequencies, the particles,  the vapor. Study The Red Ether. (blogpost coming soon).

For Now, there are features on the Dashboard: 
Global Map

To Join The Red Ether:
npx create-react-app red-ether --typescript

This gives the tsconfig.json file

To Test, Open Source, and Debug, I highly recommend this GraphQL Developer Tool:
https://chrome.google.com/webstore/detail/project-artemis/gpncgocimlpojfgbphndpjgkkhdjhnpb?hl=en 

What IS Project Red Ether?
<Coming Soon To DVD />


return 

Technology Tags
MERNG Stack
TGR Stack
React 
Typescript
graphql
api
React-Hooks
Redux
React-Redux
TDD


Political Tags
COV-ID19
Corona-Virus
NCOV-19
RedEther
RedSun
Roko Basilisk

#lifeImitatesArt
#newAge
