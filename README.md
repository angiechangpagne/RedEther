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
graph init: 
1.) Option A: create a new Subgraph from an existing contract

Creates Subgraph from existing contract, indexes over events
-Fetches Contact ABI
graph init \
  --from-contract <CONTRACT_ADDRESS> \
  [--network <ETHEREUM_NETWORK>] \
  [--abi <FILE>] \
  <GITHUB_USER>/<SUBGRAPH_NAME> [<DIRECTORY>]

--network(Network), and --abi (Path for ABI) are optional

Networks Supported by GraphProtocol Host:
-mainnet
-kovan
-rinkeby
-ropsten
-goerli
-poa-core
-xdai

2.) Option B: use graph init to create a project based on an example subgraph
graph init --from-example <GITHUB_USER>/<SUBGRAPH_NAME> [<DIRECTORY>]


Subgraph Manifest: subgraph.yml
Defines what keys to index from decentralized app data and how to map the event date to graphql endpoint.

Parts of the Manifesto: 
description:
repository:
dataSources.source: address(optional), abi

dataSources.source.startBlock: (optional) start block to idnex from-a hashed address(usually index from origin-entrypoint)

dataSources.mapping.entities: the mapped entities to key the store, defined by schema.graphql

dataSources.mapping.abis:(>=1) Name of ABI files for source contract and other smart contracts that collaborate

dataSources.mapping.eventHandlers: smart contract reactions among the subgraphs in the Ether
  -mapping defined in ./src/mapping.ts
  -maps/catalyzes events into store entities

dataSources.mapping.callHandlers:  array of current smart contract functions(reactions) for current subgraph and handlers in the mapping that catalyze the inputs and outputs to function calls into store entities

dataSources.mapping.blockHandlers: arrays of block reactions for the subgraph and handlers to run the reaction when a block is tailed to the chain. A filter is necessary so the reaction does not catalyze everyblock(immutability).
-can provide filter (call)-will run the reaction on the block if it has at least one call to the source


Note: 1 manifest can be used for multiple smart contracts on Ether, and indexed by one subgraph.
-add the sources to dataSources array

The order of the trigger reactions from the source are ordered by:
1. Transaction index in the block
2. Event triggers take precendence over Call triggers within the same transaction, based on the order of the original manifest
3. Block trigers run last in the order defined by the manifest. 

Obtaining ABIs:
Must match contracts. 
-download a public project ether contract and get the ABI from running truffle compile or solce


Subgraph Schema: schema.graphql

Note: There are no mutations for the Entity graphql root queries, because it's Blockchain. 

Add Typescript Dependencies 
npm install graph-ts
npm install --dev @graphprotocol/graph-ts

Assembly Script proxies Typescript to WASM

For more information, check out https://thegraph.com/


Redux in some instances, but usually can simply go with Hooks and Context API, especially with the new features of useReducer and useContext Hooks. 

This is not another App about the data. 
The data is not something we can directly change. 
Some of the data is unclear, much could be latent or misconstrued. 
Let's not focus on things that are out of our control. 
Let's look at a bigger picture. 
Let's study it. Study the wave, the frequencies, the particles,  the vapor. Study The Red Ether. (blogpost coming soon).

concurrently run oil-rig and red-ether

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
MERNG Stack / TGR Stack
React 
Typescript
graphql
decentralized-applications / dApps
api
React-Hooks
Redux /React-Redux
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
